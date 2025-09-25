# backend/app.py
from decimal import Decimal, InvalidOperation
import os
import sys

project_root = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
if project_root not in sys.path:
    sys.path.insert(0, project_root)

# To this (add the backend directory specifically):
backend_root = os.path.abspath(os.path.dirname(__file__))
if backend_root not in sys.path:
    sys.path.insert(0, backend_root)

project_root = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
if project_root not in sys.path:
    sys.path.insert(0, project_root)

from flask import Blueprint, Flask, jsonify, render_template, redirect, url_for, request, session, send_from_directory, flash,  abort
from jinja2 import FileSystemLoader
from datetime import datetime, timedelta, date
from matplotlib.dates import relativedelta
import requests
from sqlalchemy import text
from functools import wraps
from werkzeug.utils import secure_filename
import xmlrpc
from backend.models import MutualFundHolding, MutualFundTransaction
from backend.extension import db, migrate
from backend.models import CalendarEvent, Company, MutualFund, MutualFundHolding, MutualFundNAV, User, StockPortfolio, StockTransaction, SystemLog, ProjectCategory, Project, ProjectTask, ProjectTeam, ProjectMilestone, ProjectDocument, ProjectActivity 
from backend.services.utils import get_period_label, get_investment_time_series, get_period_range_profit_loss, get_balance_sheet_period_range, format_balance_sheet_value, get_project_stats, create_initial_project_categories, calculate_project_progress, map_analytic_account, log_project_activity, prepare_chart_data, prepare_investment_chart_data, calculate_profit_loss, calculate_expenses, calculate_liabilities, calculate_assets
from backend.services.mutual_fund_service import get_mutual_fund_holdings, get_mutual_fund_performance, update_mutual_fund_nav, add_mutual_fund_transaction, get_mutual_fund_summary_by_category
from backend.services.investment_service import get_investment_report, get_detailed_investments, get_realised_gain_details, get_profit_loss_totals, get_balance_sheet_totals, get_unrealised_gain_detail, get_cash_flow_account, get_cash_flow_transaction_detail, get_total_loans, get_dividends_details, get_fund_income, get_equity_income, get_equity_investment, get_fund_investment, get_monthly_profit_data, get_monthly_expense_data, get_monthly_liability_data, get_monthly_asset_data
from backend.services.investment_service import calculate_portfolio_growth, calculate_weekly_growth_rate, calculate_profit_revenue, calculate_total_investment
from backend.services.stock_service import StockService
from backend.services.whattsapp_notification import send_whatsapp_notification, format_phone_number
from dotenv import load_dotenv 
from backend.routes.odoo_routes import odoo_bp
import json
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from sqlalchemy import inspect

# Add the project root to Python path
# project_root = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
# if project_root not in sys.path:
#     sys.path.insert(0, project_root)

load_dotenv()

def create_app():
    app = Flask(__name__)

    # Set timezone to Riyadh
    app.config['TIMEZONE'] = 'Asia/Riyadh'
    os.environ['TZ'] = 'Asia/Riyadh'

    # Base directories
    BASE_DIR = os.path.abspath(os.path.dirname(__file__))
    FRONTEND_DIR = os.path.join(BASE_DIR, '../frontend')

    # Backend template and static paths
    BACKEND_TEMPLATES = os.path.join(BASE_DIR, 'templates')
    BACKEND_STATIC = os.path.join(BASE_DIR, 'static')

    # Frontend template directories
    FRONTEND_TEMPLATES = os.path.join(FRONTEND_DIR, 'templates')
    FRONTEND_PAGES = os.path.join(FRONTEND_DIR, 'pages')
    FRONTEND_STATIC = os.path.join(FRONTEND_DIR, 'assets')

    # Configure Jinja2 loader to find templates in multiple directories
    app.jinja_loader = FileSystemLoader([
        BACKEND_TEMPLATES,
        os.path.join(BACKEND_TEMPLATES, 'stock'),
        os.path.join(BACKEND_TEMPLATES, 'projects'),
        os.path.join(BACKEND_TEMPLATES, 'mutual_funds'),
        FRONTEND_TEMPLATES,
        FRONTEND_PAGES
    ])

    # Configurations
    app.config.from_mapping(
        SEND_FILE_MAX_AGE_DEFAULT=0,
        TEMPLATES_AUTO_RELOAD=True,
        SQLALCHEMY_DATABASE_URI=os.getenv('DATABASE_URL', 'mysql+pymysql://root:@127.0.0.1:3306/investment_db'),
        SQLALCHEMY_TRACK_MODIFICATIONS=False,
        SECRET_KEY=os.getenv('SECRET_KEY', 'change_me_in_prod'),

        ODOO_URL=os.getenv('ODOO_URL'),
        ODOO_DB_NAME=os.getenv('ODOO_DB_NAME'),
        ODOO_USERNAME=os.getenv('ODOO_USERNAME'),
        ODOO_PASSWORD=os.getenv('ODOO_PASSWORD'),

        # Email configuration from environment variables
        SMTP_SERVER=os.getenv('SMTP_SERVER', 'smtp.gmail.com'),
        SMTP_PORT=os.getenv('SMTP_PORT', 587),
        EMAIL_ADDRESS=os.getenv('EMAIL_ADDRESS', ''),
        EMAIL_PASSWORD=os.getenv('EMAIL_PASSWORD', ''),
    )

    # Configure file upload settings
    app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB max file size
    app.config['UPLOAD_EXTENSIONS'] = ['.jpg', '.png', '.gif', '.pdf', '.doc', '.docx', '.xls', '.xlsx']
    app.config['UPLOAD_PATH'] = 'uploads'

    # Then in your app configuration:
    app.config['WHATSAPP_ACCOUNT_SID'] = os.environ.get('WHATSAPP_ACCOUNT_SID')
    app.config['WHATSAPP_AUTH_TOKEN'] = os.environ.get('WHATSAPP_AUTH_TOKEN')
    app.config['WHATSAPP_FROM_NUMBER'] = os.environ.get('WHATSAPP_FROM_NUMBER')

    # In your app.py, add this custom filter
    @app.template_filter('format_currency')
    def format_currency_filter(value):
        try:
            value = float(value)
            abs_value = abs(value)
            # if abs_value >= 1000000000:
            #     return f"{value / 1000000000:,.2f}B"
            if abs_value >= 1000000:
                return f"{value / 1000000:,.2f}M"
            elif abs_value >= 1000:
                return f"{value / 1000:,.2f}K"
            else:
                return f"{value:,.2f}"
        except (ValueError, TypeError):
            return "0.00"

    # Serve frontend static files
    @app.route('/frontend_static/<path:filename>')
    def frontend_static(filename):
        return send_from_directory(FRONTEND_STATIC, filename)

    @app.route('/admin_static/<path:filename>')
    def admin_static(filename):
        for static_dir in [BACKEND_STATIC, os.path.join(BACKEND_STATIC, 'admin_assets')]:
            file_path = os.path.join(static_dir, filename)
            if os.path.exists(file_path):
                return send_from_directory(static_dir, filename)
        abort(404) 
        

    # Initialize extensions
    db.init_app(app)

    @app.context_processor
    def inject_now():
        return {'now': datetime.now}

    # Import models and register routes
    with app.app_context():        
        import backend.models as models
        create_initial_project_categories()
    # ensure models are registered
    register_routes(app)

    # Register the sync blueprint
    app.register_blueprint(odoo_bp)
    # Add JSON filter for templates
    @app.template_filter('tojson')
    def tojson_filter(obj):
        return json.dumps(obj, default=str, indent=2)

    return app

def register_routes(app):
    # from backend.models import User
    @app.route('/')
    def home():
        is_logged_in_as_admin = 'user_id' in session and session.get('is_admin')
        # This will now correctly look for 'index.html' within FRONTEND_PAGES
        return render_template('index.html', is_logged_in_as_admin=is_logged_in_as_admin)

    @app.route('/about')
    def about():
        is_logged_in_as_admin = 'user_id' in session and session.get('is_admin')
        # This will now correctly look for 'about.html' within FRONTEND_PAGES
        return render_template('about.html', is_logged_in_as_admin=is_logged_in_as_admin)

    @app.route('/business')
    def businesses():
        is_logged_in_as_admin = 'user_id' in session and session.get('is_admin')
        return render_template('businesses.html', is_logged_in_as_admin=is_logged_in_as_admin)
    
    # @app.route('/investor_relations')
    # def investor_relations():
    #     is_logged_in_as_admin = 'user_id' in session and session.get('is_admin')
    #     return render_template('investor-relations.html', is_logged_in_as_admin=is_logged_in_as_admin)
    
    @app.route('/overviews')
    def overviews():
        is_logged_in_as_admin = 'user_id' in session and session.get('is_admin')
        return render_template('overviews.html', is_logged_in_as_admin=is_logged_in_as_admin)

    @app.route('/news_insights')
    def news_insights():
        is_logged_in_as_admin = 'user_id' in session and session.get('is_admin')
        return render_template('news-insights.html', is_logged_in_as_admin=is_logged_in_as_admin)
    
    @app.route('/news_insights/news/<int:id>')
    def news_insights_news(id):
        is_logged_in_as_admin = 'user_id' in session and session.get('is_admin')
        return render_template('news.html', is_logged_in_as_admin=is_logged_in_as_admin)

    # @app.route('/financial_planning')
    # def financial_planning():
    #     is_logged_in_as_admin = 'user_id' in session and session.get('is_admin')
    #     return render_template('financial_planning.html', is_logged_in_as_admin=is_logged_in_as_admin)

    # Add this new route for the contact page
    @app.route('/contact')
    def contact():
        is_logged_in_as_admin = 'user_id' in session and session.get('is_admin')
        # Assuming you will create a contact.html in your frontend/pages directory
        return render_template('contact.html', is_logged_in_as_admin=is_logged_in_as_admin)
    
    @app.route('/careers')
    def careers():
        is_logged_in_as_admin = 'user_id' in session and session.get('is_admin')
        # Assuming you will create a contact.html in your frontend/pages directory
        return render_template('careers.html', is_logged_in_as_admin=is_logged_in_as_admin)
    
    @app.route('/careers/vacancy_listing/')
    def vacancy_listing():
        is_logged_in_as_admin = 'user_id' in session and session.get('is_admin')
        # Assuming you will create a contact.html in your frontend/pages directory
        return render_template('vacancy-listing.html', is_logged_in_as_admin=is_logged_in_as_admin)
    
    @app.route('/whistle_blower/')
    def whistle_blower():
        is_logged_in_as_admin = 'user_id' in session and session.get('is_admin')
        # Assuming you will create a contact.html in your frontend/pages directory
        return render_template('whistle-blower.html', is_logged_in_as_admin=is_logged_in_as_admin)

    # Add this with your other routes in app.py
    @app.route('/callback-form', methods=['GET', 'POST'])
    def callback_form():
        if request.method == 'POST':
            name = request.form.get('name')
            email = request.form.get('email')
            phone = request.form.get('phone')
            
            # For now, just print the data and redirect
            print(f"Callback request from: {name}, {email}, {phone}")
            flash("Thank you for your inquiry! We will get back to you soon.", 'success')
            return redirect(url_for('financial_planning'))
        
        # If it's a GET request, just render the financial planning page
        return redirect(url_for('financial_planning'))

    # --- Admin Routes (Protected Dashboard) ---
    @app.route('/admin/login', methods=['GET', 'POST'])
    def admin_login():
        if 'user_id' in session and session.get('is_logged_in_admin_dashboard'):
            user = User.query.get(session['user_id'])
            if user:
                return redirect(url_for('admin_dashboard'))
            else:
                session.clear()

        if request.method == 'POST':
            username = request.form['username']
            password = request.form['password']
            user = User.query.filter_by(username=username).first()
            if user and user.password == password:
                session['user_id'] = user.id
                session['username'] = user.username
                session['is_admin'] = user.is_admin
                session['user_role'] = user.role
                session['is_logged_in_admin_dashboard'] = True
                app.logger.info(f"User {user.username} logged in with role {user.role}")
                flash(f'Welcome, {user.username}!', 'success')
                return redirect(url_for('admin_dashboard'))
            else:
                flash("Invalid credentials. Please try again.", 'danger')

        return render_template('admin_login.html', current_year=datetime.now().year)

    def role_required(roles):
        def decorator(f):
            @wraps(f)
            def decorated_function(*args, **kwargs):
                if 'user_id' not in session or not session.get('is_logged_in_admin_dashboard'):
                    flash("Please log in to access this page.", 'info')
                    return redirect(url_for('admin_login'))
                if session.get('user_role') not in roles:
                    app.logger.warning(f"Access Denied for {session.get('username')}. Role: {session.get('user_role')}, Required: {roles}")
                    flash(f"Access Denied: Your role '{session.get('user_role')}' doesn't have permission", 'warning')
                    return redirect(url_for('admin_dashboard'))
                return f(*args, **kwargs)
            return decorated_function
        return decorator

    @app.route('/admin/update_user_role/<username>/<new_role>')
    @role_required(['super_admin'])
    def update_user_role(username, new_role):
        user = User.query.filter_by(username=username).first()
        if user:
            user.role = new_role
            db.session.commit()
            flash(f"Updated {username} to {new_role}", 'success')
        else:
            flash("User not found", 'danger')
        return redirect(url_for('admin_users'))

    @app.route('/investor_relations')
    @role_required(['super_admin'])
    def investor_relations():
        is_logged_in_as_admin = 'user_id' in session and session.get('is_admin')
        return render_template('investor-relations.html', is_logged_in_as_admin=is_logged_in_as_admin)

    @app.route('/admin/dashboard')
    @role_required(['super_admin', 'Group_Chief_accountant', 'viewer', 'report_manager'])
    def admin_dashboard():
        return render_template('admin_dashboard.html',
                               username=session.get('username'),
                               user_role=session.get('user_role'),
                               current_year=datetime.now().year)
    
    @app.route('/admin/financial_performance', methods=['GET', 'POST'])
    @role_required(['super_admin', 'Group_Chief_accountant', 'viewer', 'report_manager'])
    def admin_financial_performance():
        try:
            # Get filter parameters
            end_date = request.form.get("end_date")
            start_date = request.form.get("start_date")  # Add start date parameter
            period = request.form.get("period")
            ytd_only = request.form.get("ytd_only") == "true"
            
            today = datetime.today()
            fixed_start_date = datetime(2020, 12, 30).date()
            
            # Main filter - handle both YTD and custom date ranges
            filter_start, filter_end = fixed_start_date, None
            
            if end_date:
                filter_end = datetime.strptime(end_date, '%Y-%m-%d').date()
            elif period and period != "custom":
                filter_start, filter_end = get_balance_sheet_period_range(period, today)
            else:
                filter_end = today.date()
            
            # If YTD only is selected, set start date to beginning of the year
            if ytd_only:
                filter_start = datetime(filter_end.year, 1, 1).date()
            elif start_date:  # Use custom start date if provided
                filter_start = datetime.strptime(start_date, '%Y-%m-%d').date()
            
            # Get balance sheet totals for the selected period
            current_totals = get_balance_sheet_totals(filter_start, filter_end)
            current_dict = {row['head']: row['amount'] for row in current_totals}
            
            # Get profit and loss statement data
            pl_data = get_profit_loss_totals(filter_start, filter_end)
            pl_dict = {row['head']: row['amount'] for row in pl_data}
            
            # Calculate current values
            current_profit_loss = calculate_profit_loss(current_dict)
            current_profit_loss_absolute = abs(current_profit_loss)
            total_expenses = calculate_expenses(current_dict)
            total_liabilities = calculate_liabilities(current_dict)
            total_assets = calculate_assets(current_dict)

            # Calculate YTD values for all metrics
            ytd_start_date = datetime(filter_end.year, 1, 1).date()
            ytd_totals = get_balance_sheet_totals(ytd_start_date, filter_end)
            ytd_dict = {row['head']: row['amount'] for row in ytd_totals}
            
            # Get YTD P&L data
            ytd_pl_data = get_profit_loss_totals(ytd_start_date, filter_end)
            ytd_pl_dict = {row['head']: row['amount'] for row in ytd_pl_data}
            
            ytd_profit_loss = calculate_profit_loss(ytd_dict)
            ytd_expenses = calculate_expenses(ytd_dict)
            ytd_liabilities = calculate_liabilities(ytd_dict)
            ytd_assets = calculate_assets(ytd_dict)

            # Get monthly data for charts
            monthly_data = get_monthly_profit_data(6, filter_end)
            monthly_expense_data = get_monthly_expense_data(6, filter_end)
            monthly_liability_data = get_monthly_liability_data(6, filter_end)
            monthly_asset_data = get_monthly_asset_data(6, filter_end)

            return render_template(
                'admin_financial_performance.html',
                username=session.get('username'),
                user_role=session.get('user_role'),
                current_year=datetime.now().year,
                current_profit_loss=current_profit_loss_absolute,
                total_expenses=total_expenses,
                total_liabilities=total_liabilities,
                total_assets=total_assets,
                ytd_profit_loss=abs(ytd_profit_loss),
                ytd_expenses=ytd_expenses,
                ytd_liabilities=ytd_liabilities,
                ytd_assets=ytd_assets,
                monthly_expense_data=monthly_expense_data,
                monthly_data=monthly_data,
                monthly_liability_data=monthly_liability_data,
                monthly_asset_data=monthly_asset_data,
                pl_data=pl_dict,  # Add P&L data to template
                ytd_pl_data=ytd_pl_dict,  # Add YTD P&L data
                period=period,
                ytd_only=ytd_only,
                end_date=filter_end.strftime('%Y-%m-%d') if filter_end else '',
                start_date=filter_start.strftime('%Y-%m-%d') if filter_start else ''
            )
        except Exception as e:
            import traceback
            traceback.print_exc()
            flash("Error loading Financial Performance data", 'danger')
            return redirect(url_for('admin_dashboard'))

    @app.route('/admin/users')
    @role_required(['super_admin'])
    def admin_users():
        return render_template('admin_users.html', current_year=datetime.now().year)
    
    @app.template_filter('format_date')
    def format_date_filter(date_str, format='%d/%m/%Y'):
        if not date_str:
            return ''
        try:
            if isinstance(date_str, str):
                date_obj = datetime.strptime(date_str, '%Y-%m-%d')
            else:
                date_obj = date_str
            return date_obj.strftime(format)
        except:
            return date_str

    @app.route('/admin/investments')
    @role_required(['super_admin', 'Group_Chief_accountant'])
    def admin_investments():
        try:
            # Get date range from request parameters
            start_date = request.args.get('start_date')
            end_date = request.args.get('end_date')
            days = request.args.get('days') 

            today = datetime.today().date()
            default_start = datetime(2020, 1, 1).date()

            # print(f"Request parameters - days: {days}, start_date: {start_date}, end_date: {end_date}")
            
            # CASE 1 → custom date range provided
            if start_date and end_date:
                try:
                    # validate format
                    datetime.strptime(start_date, "%Y-%m-%d")
                    datetime.strptime(end_date, "%Y-%m-%d")
                    print("✅ Using custom date range")
                except ValueError:
                    # fallback if invalid format
                    start_date = default_start.isoformat()
                    end_date = today.isoformat()
                    print("⚠️ Invalid custom dates, falling back to ALL")

            # CASE 2 → days quick filter
            elif days is not None:
                try:
                    days = int(days)
                    if days == 0:  # "All"
                        start_date = default_start.isoformat()
                        end_date = today.isoformat()
                    else:
                        start_date = (today - timedelta(days=days)).isoformat()
                        end_date = today.isoformat()
                    print(f"✅ Using quick filter: last {days} days")
                except ValueError:
                    # fallback if invalid days
                    start_date = default_start.isoformat()
                    end_date = today.isoformat()
                    print("⚠️ Invalid days parameter, falling back to ALL")

            # CASE 3 → no params (initial page load)
            else:
                start_date = default_start.isoformat()
                end_date = today.isoformat()
           
            investments = get_investment_report(start_date, end_date)
            
            detailed_investments = get_detailed_investments(start_date, end_date)
            # print(f"here is the detailed investments: {detailed_investments}")
            # Calculate the grand total as float
            investments_total = 0.0
            if investments:
                investments_total = sum(float(inv['total_balance']) for inv in investments 
                            if inv['investment_category'] != 'Investments')

            # Convert values to millions
            investments_total_millions = investments_total / 1000000
            portfolio_growth_percentage = calculate_portfolio_growth(start_date, end_date)
            current_portfolio_value = investments_total_millions
            weekly_growth_rate = calculate_weekly_growth_rate(start_date, end_date)
            profit_revenue = calculate_profit_revenue(start_date, end_date)
            total_investment = calculate_total_investment(start_date, end_date)
            
            # Ensure all values are float and convert to millions before passing to template
            investments = [{
                'investment_category': inv['investment_category'],
                'total_balance': float(inv['total_balance']) / 1000000,  # Convert to millions
                'investment_name': inv.get('investment_name', '')
            } for inv in investments]

            # Ensure detailed investments are floats and include investment_name
            detailed_investments = [{
                'investment_code': row['investment_code'],
                'investment_name': row['investment_name'],  # alias from query
                'investment_category': row['investment_category'],
                'investment_date': row['investment_date'],
                'investment_labels': row['investment_labels'],
                'investment_balance': float(row['investment_balance']) / 1000000 if row['investment_balance'] is not None else 0.0  # Convert to millions
            } for row in detailed_investments]

            # Get time series data for the chart
            time_series_data = get_investment_time_series(start_date, end_date)
            
            colors = ['theme-blue', 'theme-green', 'theme-orange', 'theme-red', 'theme-purple']
                
            # Pass data to template
            return render_template(
                'admin_investments.html', 
                investments=investments,
                investments_total=investments_total_millions,
                detailed_investments=detailed_investments,
                time_series_data=time_series_data,
                start_date=start_date,
                end_date=end_date,
                colors=colors,
                portfolio_growth_percentage=portfolio_growth_percentage,
                current_portfolio_value=current_portfolio_value,
                weekly_growth_rate=weekly_growth_rate,
                profit_revenue=profit_revenue,
                total_investment=total_investment,
                username=session.get('username'),
                user_role=session.get('user_role'),
                current_year=datetime.now().year
            )
        
        except Exception as e:
            import traceback
            traceback.print_exc()
            print(f"Error in admin_investments: {str(e)}")
            flash("Error loading investment data", 'danger')
            return redirect(url_for('admin_dashboard'))

    @app.route('/admin/profit-loss', methods=['GET', 'POST'])
    @role_required(['super_admin', 'Group_Chief_accountant'])
    def admin_profit_loss():
        try:
            start_date = request.form.get("start_date")
            end_date = request.form.get("end_date")
            period = request.form.get("period")
            compare_period = request.form.get("compare_period")
            compare_start_date = request.form.get("compare_start")
            compare_end_date = request.form.get("compare_end")

            today = datetime.today()
            current_time = datetime.now()

            # Main filter - handle default case (all time)
            filter_start, filter_end = None, None
            if start_date and end_date:
                filter_start = start_date
                filter_end = end_date
            elif period:
                filter_start, filter_end = get_period_range_profit_loss(period, today)
                filter_start = filter_start.strftime('%Y-%m-%d') if filter_start else None
                filter_end = filter_end.strftime('%Y-%m-%d') if filter_end else None
            else:
                # Default to all time (from beginning to today)
                filter_start = '2020-12-31'  # Your earliest data
                filter_end = today.strftime('%Y-%m-%d')
                period = "all_time"

            # Comparison filter - handle both period-based and custom date comparisons
            compare_start, compare_end = None, None
            if compare_period and compare_period != "custom":
                # Use period-based comparison
                compare_start, compare_end = get_period_range_profit_loss(compare_period, today)
                compare_start = compare_start.strftime('%Y-%m-%d') if compare_start else None
                compare_end = compare_end.strftime('%Y-%m-%d') if compare_end else None
            elif compare_start_date and compare_end_date:
                # Use custom date comparison
                compare_start = compare_start_date
                compare_end = compare_end_date
                compare_period = "custom"  # Set this to enable comparison columns

            print(f"Main Period: {filter_start} → {filter_end}")
            print(f"Comparison Period: {compare_start} → {compare_end}")

            # Get totals
            current_totals = get_profit_loss_totals(filter_start, filter_end)
            comparison_totals = get_profit_loss_totals(compare_start, compare_end) if compare_start and compare_end else []

            # Convert to dict for easier lookup
            current_dict = {row['head']: row['amount'] for row in current_totals}
            previous_dict = {row['head']: row['amount'] for row in comparison_totals} if comparison_totals else {}

            merged_data = []
            all_heads = set(list(current_dict.keys()) + list(previous_dict.keys()))
            for head in all_heads:
                current_value = current_dict.get(head, 0.0)
                previous_value = previous_dict.get(head, 0.0) if previous_dict else 0.0
                
                # Ensure both values are float for arithmetic operations
                current_value = float(current_value) if current_value is not None else 0.0
                previous_value = float(previous_value) if previous_value is not None else 0.0
                
                # Only include comparison if compare_period is set
                if not compare_period:
                    previous_value = None
                
                # Calculate percentage change safely
                if previous_value is not None and previous_value != 0:
                    change_pct = ((current_value - previous_value) / abs(previous_value)) * 100
                else:
                    change_pct = None
                
                merged_data.append({
                    "head": head,
                    "current": format_balance_sheet_value(current_value),
                    "previous": format_balance_sheet_value(previous_value) if compare_period and previous_value is not None else None,
                    "current_value": current_value,
                    "previous_value": previous_value if compare_period else None,
                    "change_pct": change_pct
                })

            return render_template(
                'admin_profit_loss_stm.html',
                classification_totals=merged_data,
                username=session.get('username'),
                user_role=session.get('user_role'),
                current_year=datetime.now().year,
                start_date=filter_start if start_date else filter_start,
                end_date=filter_end if end_date else filter_end,
                period=period,
                compare_period=compare_period,
                compare_start=compare_start_date,
                compare_end=compare_end_date,
                current_time=current_time
            )

        except Exception as e:
            import traceback
            traceback.print_exc()
            flash("Error loading classification totals", 'danger')
            return redirect(url_for('admin_dashboard'))

    @app.route('/admin/balance_sheet', methods=['GET', 'POST'])
    @role_required(['super_admin', 'Group_Chief_accountant'])
    def admin_balance_sheet():
        try:
            # Get filter parameters
            end_date = request.form.get("end_date")
            period = request.form.get("period")
            compare_period = request.form.get("compare_period")
            compare_end_date = request.form.get("compare_end")
            
            today = datetime.today()
            fixed_start_date = datetime(2020, 12, 30).date()  # Fixed start date using datetime
            
            # Main filter
            filter_start, filter_end = fixed_start_date, None
            
            if end_date:
                # Custom end date provided
                filter_end = datetime.strptime(end_date, '%Y-%m-%d').date()
            elif period and period != "custom":
                # Predefined period
                filter_start, filter_end = get_balance_sheet_period_range(period, today)
            else:
                # Default to current date
                filter_end = today.date()
            
            # Comparison filter
            compare_start, compare_end = fixed_start_date, None
            
            if compare_period:
                if compare_period == "custom" and compare_end_date:
                    # Handle custom comparison date
                    compare_end = datetime.strptime(compare_end_date, '%Y-%m-%d').date()
                elif compare_period != "custom":
                    compare_start, compare_end = get_balance_sheet_period_range(compare_period, today)
            
            # Rest of your code remains the same...
            current_totals = get_balance_sheet_totals(filter_start, filter_end)
            comparison_totals = get_balance_sheet_totals(compare_start, compare_end) if compare_end else []
            
            # Rest of your existing code for processing and formatting...
            current_dict = {row['head']: row['amount'] for row in current_totals}
            previous_dict = {row['head']: row['amount'] for row in comparison_totals} if compare_end else {}
            
            # Define required order (exact same as Excel)
            required_order = [
                "Current Assets","Cash & Cash Equivalent","Account Receivable Other Prepaid","Inventory",
                "Due from Related Party","Short Term Deposit","Total Current Assets",
                "Non-Current Assets","Investment in Subsidiaries","Investment in Associate","Investment at Cost",
                "Investment at fair value","Investment Property","Property Plant & Equipment","Intangible Assets",
                "Total Non-Current Assets","Total Assets","LIABILITIES & EQUITY","Current Liabilities",
                "Account Payable , Accrued Other Liabilities","Short Term Loan","Provision for Zakat/Tax",
                "Due to Related Party","Deffered Income","Total Current Liabilities","Non-Current Liabilities",
                "Employees defined benefits Liabilities","Long Term Loan","Total Non-Current Liabilities",
                "Total Liabilities","Equity","Share Capital","Additional Capital","Reserves","Remeasurement of EOS",
                "Current Year Profit /Loss","Retained earnings","Dividends","Total Equity","Total Liabilities and Equity"
            ]

            merged_data = []

            def sum_current(*keys):
                return sum(current_dict.get(k, 0) for k in keys)

            def sum_previous(*keys):
                return sum(previous_dict.get(k, 0) for k in keys)

            # Calculate all totals first
            total_current_assets = sum_current("Cash & Cash Equivalent","Account Receivable Other Prepaid","Inventory","Due from Related Party","Short Term Deposit")
            total_non_current_assets = sum_current("Investment in Subsidiaries","Investment in Associate","Investment at Cost","Investment at fair value","Investment Property","Property Plant & Equipment","Intangible Assets")
            total_assets = total_current_assets + total_non_current_assets
            
            total_current_liabilities = sum_current("Account Payable , Accrued Other Liabilities","Short Term Loan","Provision for Zakat/Tax","Due to Related Party","Deffered Income")
            total_non_current_liabilities = sum_current("Employees defined benefits Liabilities","Long Term Loan")
            total_liabilities = total_current_liabilities + total_non_current_liabilities

            current_year_profit_loss = sum_current(
                "Revenue","Cost of Revenue","Salaries & Related","GOSI","Medical Insurance",
                "Office Rent","Other Office Exp","Professional Fees","Business Travel","Consultation",
                "Depreciation","Unrealized Valuation from Investment at Fair Value",
                "Income from investment at FV realised Gain","Dividend from investment at fair value P/L",
                "Results in Subsidiary","Results in Associate","Dividend from Investment at cost",
                "Interest Income","Finance Cost","Zakat/Tax ","Income from investment at Octal",
                "Change in the fair value of equity investment at fair value through OCI",
                "Impairment losses on investment in subsidiary","Gain from disposal of associate",
                "Remeasurement of defined employee benefits obligations","Other Income"
            )
            print(f"current year profit & loss: {current_year_profit_loss}")
            
            total_equity = sum_current("Share Capital","Additional Capital","Reserves","Remeasurement of EOS","Retained earnings","Dividends")
            total_equity = total_equity + current_year_profit_loss
            total_liabilities_equity = total_liabilities + total_equity 

            # Same for previous period if comparison is enabled
            if compare_period:
                prev_total_current_assets = sum_previous("Cash & Cash Equivalent","Account Receivable Other Prepaid","Inventory","Due from Related Party","Short Term Deposit")
                prev_total_non_current_assets = sum_previous("Investment in Subsidiaries","Investment in Associate","Investment at Cost","Investment at fair value","Investment Property","Property Plant & Equipment","Intangible Assets")
                prev_total_assets = prev_total_current_assets + prev_total_non_current_assets
                
                prev_total_current_liabilities = sum_previous("Account Payable , Accrued Other Liabilities","Short Term Loan","Provision for Zakat/Tax","Due to Related Party","Deffered Income")
                prev_total_non_current_liabilities = sum_previous("Employees defined benefits Liabilities","Long Term Loan")
                prev_total_liabilities = prev_total_current_liabilities + prev_total_non_current_liabilities
                
                prev_total_equity = sum_previous("Share Capital","Additional Capital","Reserves","Remeasurement of EOS","Retained earnings","Dividends")
                prev_total_equity = prev_total_equity + current_year_profit_loss
                prev_total_liabilities_equity = prev_total_liabilities + prev_total_equity 

            for head in required_order:
                if head == "Current Year Profit /Loss":
                    # Calculate profit/loss by summing all revenue and expense items
                    revenue_items = [
                        "Revenue", "Cost of Revenue", "Salaries & Related", "GOSI", 
                        "Medical Insurance", "Office Rent", "Other Office Exp", 
                        "Professional Fees", "Business Travel", "Consultation", 
                        "Depreciation", "Unrealized Valuation from Investment at Fair Value",
                        "Income from investment at FV realised Gain", 
                        "Dividend from investment at fair value P/L", "Results in Subsidiary",
                        "Results in Associate", "Dividend from Investment at cost", 
                        "Interest Income", "Finance Cost", "Zakat/Tax ", 
                        "Income from investment at Octal",
                        "Change in the fair value of equity investment at fair value through OCI",
                        "Impairment losses on investment in subsidiary", 
                        "Gain from disposal of associate",
                        "Remeasurement of defined employee benefits obligations", 
                        "Other Income"
                    ]
                    
                    current_value = sum_current(*revenue_items)
                    previous_value = sum_previous(*revenue_items) if compare_period else 0.0
                    print(f"current year profit & loss: {current_value}")

                elif head == "Total Current Assets":
                    current_value = total_current_assets
                    previous_value = prev_total_current_assets if compare_period else 0.0
                    print(f"Total Current Assets: {current_value}")

                elif head == "Total Non-Current Assets":
                    current_value = total_non_current_assets
                    previous_value = prev_total_non_current_assets if compare_period else 0.0

                elif head == "Total Assets":
                    current_value = total_assets
                    previous_value = prev_total_assets if compare_period else 0.0

                elif head == "Total Current Liabilities":
                    current_value = total_current_liabilities
                    previous_value = prev_total_current_liabilities if compare_period else 0.0

                elif head == "Total Non-Current Liabilities":
                    current_value = total_non_current_liabilities
                    previous_value = prev_total_non_current_liabilities if compare_period else 0.0

                elif head == "Total Liabilities":
                    current_value = total_liabilities
                    previous_value = prev_total_liabilities if compare_period else 0.0

                elif head == "Total Equity":
                    current_value = total_equity
                    previous_value = prev_total_equity if compare_period else 0.0

                elif head == "Total Liabilities and Equity":
                    current_value = total_liabilities_equity
                    previous_value = prev_total_liabilities_equity if compare_period else 0.0                    

                else:
                    current_value = current_dict.get(head, 0.0)
                    previous_value = previous_dict.get(head, 0.0) if compare_period else 0.0

                change_pct = ((current_value - previous_value) / abs(previous_value) * 100) if previous_value else None
                
                merged_data.append({
                    "head": head,
                    "current": format_value(current_value),
                    "previous": format_value(previous_value) if compare_period else None,
                    "change_pct": change_pct
                })


            return render_template(
                'admin_balance_sheet.html',
                balance_totals=merged_data,
                username=session.get('username'),
                user_role=session.get('user_role'),
                current_year=datetime.now().year,
                period=period,
                compare_period=compare_period,
                current_label="Current Period",
                compare_label="Comparison Period" if compare_period else "",
                end_date=filter_end.strftime('%Y-%m-%d') if filter_end else '',
                compare_end=compare_end.strftime('%Y-%m-%d') if compare_end else ''
            )
        except Exception as e:
            import traceback
            traceback.print_exc()
            flash("Error loading Balance Sheet", 'danger')
            return redirect(url_for('admin_dashboard'))


    @app.route("/report/<period>")
    def report(period):
        label = get_period_label(period)
        return f"Report for {label}"
    
    def format_value(val):
        if val is None or val == 0:
            return ""
        val_thousand = round(val / 1000)
        if val_thousand < 0:
            return f"({abs(val_thousand):,})"
        return f"{val_thousand:,}"


    @app.route('/debug/investments-data')
    def debug_investments_data():
        investments = get_investment_report()
        classification_totals = get_profit_loss_totals()

        return {
            'investments': classification_totals,
            'count': len(classification_totals)
        }
    # Add this route to app.py
    @app.route('/debug/db-test')
    def debug_db_test():
        try:
            # Simple test query
            result = db.session.execute(text("SELECT 1")).fetchone()
            return f"Database connection successful! Result: {result}"
        except Exception as e:
            return f"Database connection failed: {str(e)}"

    @app.route('/admin/portfolio')
    @role_required(['super_admin'])
    def admin_portfolio():
        return render_template('admin_portfolio.html', current_year=datetime.now().year)

    @app.route('/admin/schedule_calendar')
    @role_required(['super_admin', 'Group_Chief_accountant', 'viewer'])
    def admin_schedule_calendar():
        return render_template('admin_schedule_calendar.html', current_year=datetime.now().year)
    
    @app.route('/admin/schedule_calendar/events', methods=['GET'])
    @role_required(['super_admin', 'Group_Chief_accountant', 'viewer'])
    def get_calendar_events():
        # Get events from database
        events = CalendarEvent.query.all()
        
        # Format events for FullCalendar
        events_data = []
        for event in events:
            events_data.append({
                'id': event.id,
                'title': event.title,
                'start': event.start_datetime.isoformat(),
                'end': event.end_datetime.isoformat(),
                'description': event.description,
                'eventType': event.event_type,
                'location': event.location,
                'organizer': event.organizer.username,
                'attendees': json.loads(event.attendees) if event.attendees else []
            })
        
        return jsonify(events_data)

    @app.route('/admin/schedule_calendar/create_event', methods=['POST'])
    @role_required(['super_admin', 'Group_Chief_accountant', 'viewer'])
    def create_calendar_event():
        try:
            data = request.get_json()

            # Validate required fields
            if not data.get('title') or not data.get('start') or not data.get('end'):
                return jsonify({'success': False, 'message': 'Title, start time, and end time are required'}), 400
            
            # Create new event
            new_event = CalendarEvent(
                title=data['title'],
                description=data.get('description', ''),
                start_datetime=datetime.fromisoformat(data['start'].replace('Z', '+00:00')),
                end_datetime=datetime.fromisoformat(data['end'].replace('Z', '+00:00')),
                event_type=data.get('eventType', 'meeting'),
                location=data.get('location', ''),
                organizer_id=session.get('is_admin'), 
                attendees=json.dumps(data.get('attendees', [])),
                send_email=data.get('sendEmail', False),
                email_subject=data.get('emailSubject', ''),
                email_message=data.get('emailMessage', ''),
                send_whatsapp=data.get('sendWhatsapp', False),
                whatsapp_numbers=json.dumps(data.get('whatsappNumbers', []))
            )
            
            db.session.add(new_event)
            db.session.commit()
            
            # Send email if requested
            if new_event.send_email and new_event.attendees:
                send_calendar_notification(new_event)

            # Send WhatsApp if requested
            if new_event.send_whatsapp and new_event.whatsapp_numbers:
                phone_numbers = json.loads(new_event.whatsapp_numbers)
                send_whatsapp_notification(new_event, phone_numbers)
            
            return jsonify({'success': True, 'message': 'Event created successfully', 'id': new_event.id})
        
        except Exception as e:
            db.session.rollback()
            app.logger.error(f"Error creating event: {str(e)}")
            return jsonify({'success': False, 'message': str(e)}), 500

    @app.route('/admin/schedule_calendar/update_event/<int:event_id>', methods=['PUT'])
    @role_required(['super_admin', 'Group_Chief_accountant', 'viewer'])
    def update_calendar_event(event_id):
        try:
            event = CalendarEvent.query.get_or_404(event_id)
            data = request.get_json()
            
            # Update event
            event.title = data['title']
            event.description = data.get('description', '')
            event.start_datetime = datetime.fromisoformat(data['start'].replace('Z', '+00:00'))
            event.end_datetime = datetime.fromisoformat(data['end'].replace('Z', '+00:00'))
            event.event_type = data.get('eventType', 'meeting')
            event.location = data.get('location', '')
            event.attendees = json.dumps(data.get('attendees', []))
            event.send_email = data.get('sendEmail', False)
            event.email_subject = data.get('emailSubject', '')
            event.email_message = data.get('emailMessage', '')
            event.send_whatsapp = data.get('sendWhatsapp', False)
            event.whatsapp_numbers = json.dumps(data.get('whatsappNumbers', []))
            
            db.session.commit()
            
            # Send email if requested
            if event.send_email and event.attendees:
                send_calendar_notification(event)

            # Send WhatsApp if requested
            if event.send_whatsapp and event.whatsapp_numbers:
                phone_numbers = json.loads(event.whatsapp_numbers)
                send_whatsapp_notification(event, phone_numbers)
            
            return jsonify({'success': True, 'message': 'Event updated successfully'})
        
        except Exception as e:
            db.session.rollback()
            app.logger.error(f"Error updating event: {str(e)}")
            return jsonify({'success': False, 'message': str(e)}), 500

    @app.route('/admin/schedule_calendar/delete_event/<int:event_id>', methods=['DELETE'])
    @role_required(['super_admin', 'Group_Chief_accountant', 'viewer'])
    def delete_calendar_event(event_id):
        try:
            event = CalendarEvent.query.get_or_404(event_id)
            db.session.delete(event)
            db.session.commit()
            
            return jsonify({'success': True, 'message': 'Event deleted successfully'})
        
        except Exception as e:
            db.session.rollback()
            app.logger.error(f"Error deleting event: {str(e)}")
            return jsonify({'success': False, 'message': str(e)}), 500

    def send_calendar_notification(event):
        """Send email notification for calendar event"""
        try:
            # Email configuration
            smtp_server = app.config.get('SMTP_SERVER', 'smtp.gmail.com')
            smtp_port = app.config.get('SMTP_PORT', 587)
            email_address = app.config.get('EMAIL_ADDRESS', '')
            email_password = app.config.get('EMAIL_PASSWORD', '')
            
            # Check if we have email credentials
            if not email_address or not email_password:
                app.logger.error("Email credentials not configured properly")
                app.logger.error(f"Email: {email_address}, Password: {'Set' if email_password else 'Not set'}")
                return False
                
            # Parse attendees
            attendee_emails = json.loads(event.attendees) if event.attendees else []
            if not attendee_emails:
                app.logger.warning("No attendees to send email to")
                return False
            
            app.logger.info(f"Recipients: {attendee_emails}")
            app.logger.info(f"Event: {event.title}")
            
            # Create message
            msg = MIMEMultipart()
            msg['From'] = email_address
            msg['To'] = ', '.join(attendee_emails)
            msg['Subject'] = event.email_subject or f"{event.title}"
            
            # Create email body
            body = f"""
             <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Event Invitation</title>
                </head>
                <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; text-align: center;">
                        <h1 style="color: white; margin: 0;">Event Invitation</h1>
                    </div>
                    
                    <div style="padding: 20px; border: 1px solid #ddd; border-top: none;">
                        <h2 style="color: #764ba2; margin-top: 0;">{event.title}</h2>
                        
                        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
                            <p style="margin: 0;"><strong>Date & Time:</strong> {event.start_datetime.strftime('%A, %B %d, %Y at %I:%M %p')}</p>
                            <p style="margin: 5px 0 0 0;"><strong>Duration:</strong> {(event.end_datetime - event.start_datetime).seconds // 3600} hours</p>
                        </div>
                        
                        <div style="margin-bottom: 20px;">
                            <h3 style="color: #764ba2; margin-bottom: 10px;">Event Details</h3>
                            <p><strong>Description:</strong> {event.description or 'No description provided'}</p>
                            <p><strong>Location:</strong> {event.location or 'Not specified'}</p>
                            <p><strong>Event Type:</strong> {event.event_type.title()}</p>
                            <p><strong>Organizer:</strong> {event.organizer.username}</p>
                        </div>
                        
                        <div style="background-color: #f0f8ff; padding: 15px; border-radius: 5px; border-left: 4px solid #764ba2;">
                            <h3 style="color: #764ba2; margin-top: 0;">Additional Message</h3>
                            <p style="margin: 0;">{event.email_message or 'You are invited to this event. Please mark your calendar.'}</p>
                        </div>
                        
                        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                            <p style="font-size: 0.9em; color: #777;">
                                This is an automated message. Please do not reply to this email.
                            </p>
                        </div>
                    </div>
                </body>
            </html>
            """
            
            msg.attach(MIMEText(body, 'html'))
            
            # Send email
            with smtplib.SMTP(smtp_server, smtp_port) as server:
                server.starttls()
                server.login(email_address, email_password)
                server.sendmail(email_address, attendee_emails, msg.as_string())
                
            app.logger.info(f"Email notification sent for event: {event.title}")
            return True
                
        except Exception as e:
            app.logger.error(f"Failed to send email notification: {str(e)}")
            return False
    
    @app.route('/admin/dividends')
    @role_required(['super_admin', 'Group_Chief_accountant'])
    def admin_dividends():
        try:
            # Get dividends data (no date filtering)
            dividends_data = get_dividends_details()
            print(f"Got {len(dividends_data)} dividends records")
            
            # Get realised gain data
            realised_gain_data = get_realised_gain_details()
            print(f"Got {len(realised_gain_data)} realised gain records")
            
            # Get unrealised gain data
            unrealised_gain_data = get_unrealised_gain_detail()
            print(f"Got {len(unrealised_gain_data)} unrealised gain records")
            
            today = datetime.today().date()
            default_start = datetime(2020, 1, 1).date()
            
            # Get investments data
            investments = get_investment_report(default_start.isoformat(), today.isoformat())
            
            # Calculate total for "Investment at fair value" category
            investment_fair_value_total = 0.0
            if investments:
                for inv in investments:
                    if inv['investment_category'] == 'Investment at fair value':
                        investment_fair_value_total = float(inv['total_balance'])
                        break  # Found the category, no need to continue
            
            # Convert to millions for display
            investment_fair_value_total_millions = investment_fair_value_total / 1000000

            # Prepare data for combo chart - bars for dividends/realised, line for unrealised
            chart_data = {'years': [], 'dividends_snb_data': [], 'dividends_other_data': [], 
                'total_realised_data': [], 'total_unrealised_data': []}
            
            # Get all unique years from all datasets
            dividend_years = sorted(set(item['year'] for item in dividends_data if item['year'] is not None))
            realised_years = sorted(set(item['year'] for item in realised_gain_data if item['year'] is not None))
            unrealised_years = sorted(set(item['year'] for item in unrealised_gain_data if item['year'] is not None))
            all_years = sorted(set(dividend_years + realised_years + unrealised_years))
            
            # Filter years to start from 2022 onwards
            years_from_2022 = [year for year in all_years if year >= 2022]
            chart_data['years'] = [str(year) for year in years_from_2022]
            
            # Extract data for all four categories
            for year in years_from_2022:
                # Dividends - SNB (DPM Dividends)
                dividends_snb = next((item['total_balance'] for item in dividends_data 
                                    if item['year'] == year 
                                    and item['analytic_account_names'] == 'TOTAL - SNB (DPM) FV Investment'), 0)
                
                # Dividends - Other (Total Dividends minus DPM)
                dividends_other = next((item['total_balance'] for item in dividends_data 
                                    if item['year'] == year 
                                    and item['analytic_account_names'] == 'TOTAL - All Other Analytics'), 0)
                
                # Total Realised Gains (sum of both SNB and Other realised gains)
                realised_snb = next((item['total_balance'] for item in realised_gain_data 
                                if item['year'] == year 
                                and item['analytic_account_names'] == 'TOTAL - SNB (DPM) FV Investment'), 0)
                
                realised_other = next((item['total_balance'] for item in realised_gain_data 
                                    if item['year'] == year 
                                    and item['analytic_account_names'] == 'TOTAL - All Other Analytics'), 0)
                
                total_realised = realised_snb + realised_other
                
                # Total Unrealised Gains (sum of all unrealised gains for the year)
                # For unrealised gains, we need to sum all entries for the year
                total_unrealised = sum(item['total_balance'] for item in unrealised_gain_data 
                                if item['year'] == year and item['report_level'] == 'Detailed')
                
                # Convert to positive values and then to millions
                chart_data['dividends_snb_data'].append(abs(dividends_snb) / 1000000)
                chart_data['dividends_other_data'].append(abs(dividends_other) / 1000000)
                chart_data['total_realised_data'].append(abs(total_realised) / 1000000)
                chart_data['total_unrealised_data'].append(abs(total_unrealised) / 1000000)
            
            # Create chart datasets for stacked bar + line combo chart
                chart_datasets = [
                                {
                                    'type': 'bar',
                                    'label': 'DPM Dividends',
                                    'data': chart_data['dividends_snb_data'],
                                    'backgroundColor': '#4e73df',
                                    'borderColor': '#4e73df',
                                    'borderWidth': 1,
                                    'stack': 'Stack 0',
                                    'order': 1  
                                },
                                {
                                    'type': 'bar',
                                    'label': 'FV Dividends',
                                    'data': chart_data['dividends_other_data'],
                                    'backgroundColor': '#1cc88a',
                                    'borderColor': '#1cc88a',
                                    'borderWidth': 1,
                                    'stack': 'Stack 0',
                                    'order': 2   
                                },
                                {
                                    'type': 'bar',
                                    'label': 'Realised Gains',
                                    'data': chart_data['total_realised_data'],
                                    'backgroundColor': '#f6c23e',
                                    'borderColor': '#f6c23e',
                                    'borderWidth': 1,
                                    'stack': 'Stack 1',
                                    'order': 3  
                                },
                                {
                                    'type': 'line',
                                    'label': 'Unrealised Gains',
                                    'data': chart_data['total_unrealised_data'],
                                    'backgroundColor': 'rgba(231, 74, 59, 0.2)',
                                    'borderColor': '#e74a3b',
                                    'borderWidth': 3,
                                    'pointBackgroundColor': '#e74a3b',
                                    'pointBorderColor': '#fff',
                                    'pointBorderWidth': 2,
                                    'pointRadius': 5,
                                    'pointHoverRadius': 7,
                                    'fill': False,
                                    'tension': 0.1,
                                    'yAxisID': 'y1',
                                    'order': 999   
                                }
                            ]
            
            chart_config = {
                'labels': chart_data['years'],
                'datasets': chart_datasets
            }
            
            # Calculate totals for display
            detailed_dividends = [d for d in dividends_data if d['report_level'] == 'Detailed' and d['year'] >= 2022]
            detailed_realised = [d for d in realised_gain_data if d['report_level'] == 'Detailed' and d['year'] >= 2022]
            detailed_unrealised = [d for d in unrealised_gain_data if d['report_level'] == 'Detailed' and d['year'] >= 2022]
            
            total_dividends = sum(abs(float(item['total_balance'])) for item in detailed_dividends) / 1000000
            total_realised_gains = sum(abs(float(item['total_balance'])) for item in detailed_realised) / 1000000
            total_unrealised_gains = sum(abs(float(item['total_balance'])) for item in detailed_unrealised) / 1000000
            
            # Calculate category totals
            dividends_snb_total = sum(chart_data['dividends_snb_data'])
            dividends_other_total = sum(chart_data['dividends_other_data'])
            total_realised_gains_chart = sum(chart_data['total_realised_data'])
            total_unrealised_gains_chart = sum(chart_data['total_unrealised_data'])
            
            # Combine data for table display
            combined_data = dividends_data + realised_gain_data + unrealised_gain_data
            
            current_year = datetime.now().year

            # Calculate current year totals
            current_year_dividends = sum(
                abs(float(item['total_balance'])) for item in detailed_dividends 
                if item['year'] == current_year
            ) / 1000000
            
            current_year_realised = sum(
                abs(float(item['total_balance'])) for item in detailed_realised 
                if item['year'] == current_year
            ) / 1000000
            
            current_year_unrealised = sum(
                abs(float(item['total_balance'])) for item in detailed_unrealised 
                if item['year'] == current_year
            ) / 1000000

            # Get unique years for filter dropdown
            unique_years = sorted(set(
                item['year'] for item in combined_data 
                if item['year'] is not None and item['year'] >= 2022
            ), reverse=True)
            
            # Pass data to template
            return render_template(
                'admin_dividends.html', 
                combined_data=combined_data,
                detailed_dividends=detailed_dividends,
                detailed_realised=detailed_realised,
                detailed_unrealised=detailed_unrealised,
                total_dividends=total_dividends,
                total_realised_gains=total_realised_gains,
                total_unrealised_gains=total_unrealised_gains,
                dividends_snb_total=dividends_snb_total,
                dividends_other_total=dividends_other_total,
                total_realised_gains_chart=total_realised_gains_chart,
                total_unrealised_gains_chart=total_unrealised_gains_chart,
                current_year_dividends=current_year_dividends,
                current_year_realised=current_year_realised,
                current_year_unrealised=current_year_unrealised,
                current_year=current_year,
                unique_years=unique_years,  
                chart_data=chart_config,
                investment_fair_value_total=investment_fair_value_total_millions,
                username=session.get('username'),
                user_role=session.get('user_role')
            )
        
        except Exception as e:
            import traceback
            traceback.print_exc()
            print(f"Error in admin_dividends: {str(e)}")
            flash("Error loading dividends data", 'danger')
            return redirect(url_for('admin_dashboard'))

    @app.route('/admin/matual_fund')
    @role_required(['super_admin', 'Group_Chief_accountant', 'viewer'])
    def admin_matual_fund():
        # Get date parameters from request
        start_date_param = request.args.get('start_date')
        end_date_param = request.args.get('end_date')
        days = request.args.get('days')
        
        # Calculate dates based on days parameter
        if days:
            days = int(days)
            if days == 0:
                # All time
                start_date = '2020-01-01'
                end_date = datetime.now().strftime('%Y-%m-%d')
            else:
                end_date = datetime.now().strftime('%Y-%m-%d')
                start_date = (datetime.now() - timedelta(days=days)).strftime('%Y-%m-%d')
        else:
            # Handle None values properly - only use default if parameters are not provided
            if start_date_param and start_date_param != 'None':
                start_date = start_date_param
            else:
                start_date = '2020-01-01'
                
            if end_date_param and end_date_param != 'None':
                end_date = end_date_param
            else:
                end_date = datetime.now().strftime('%Y-%m-%d')
        
        print(f"Final dates - Start: {start_date}, End: {end_date}")
        
        # Get both income and expense data
        equity_income_data = get_fund_income('6818.77.EX.GL.20', start_date, end_date)
        equity_expense_data = get_equity_income('6818.77.EX.GL.19', start_date, end_date)
        equity_investment_data = get_equity_investment(start_date, end_date)
        fund_investment_data = get_fund_investment(start_date, end_date)
        
        # Prepare data for the charts
        income_expense_chart_data = prepare_chart_data(equity_income_data, equity_expense_data)
        investment_chart_data = prepare_investment_chart_data(equity_investment_data, fund_investment_data)
        
        # Calculate totals from the data
        total_income = sum(float(item['balance']) * -1 for item in equity_income_data) / 1000000
        total_expense = sum(float(item['balance']) * -1 for item in equity_expense_data) / 1000000
        net_income = total_income + total_expense
        
        # Calculate investment totals
        total_equity_investment = sum(float(item['balance']) for item in equity_investment_data) / 1000000
        total_fund_investment = sum(float(item['balance']) for item in fund_investment_data) / 1000000
        total_investment = total_equity_investment + total_fund_investment
        
        return render_template(
            'admin_matual_fund.html', 
            current_year=datetime.now().year,
            time_series_data=income_expense_chart_data,
            investment_chart_data=investment_chart_data,
            start_date=start_date,
            end_date=end_date,
            equity_income_data=equity_income_data,
            equity_expense_data=equity_expense_data,
            equity_investment_data=equity_investment_data,
            fund_investment_data=fund_investment_data,
            total_income=total_income,
            total_expense=total_expense,
            net_income=net_income,
            total_equity_investment=total_equity_investment,
            total_fund_investment=total_fund_investment,
            total_investment=total_investment
        )
    

    @app.route('/admin/mutual_funds')
    @role_required(['super_admin', 'Group_Chief_accountant', 'viewer'])
    def admin_mutual_funds():
        """Main mutual funds management page"""
        # Get date parameters from request
        start_date_param = request.args.get('start_date')
        end_date_param = request.args.get('end_date')
        days = request.args.get('days')
        
        # Calculate dates based on days parameter
        if days:
            days = int(days)
            if days == 0:
                # All time
                start_date = '2020-01-01'
                end_date = datetime.now().strftime('%Y-%m-%d')
            else:
                end_date = datetime.now().strftime('%Y-%m-%d')
                start_date = (datetime.now() - timedelta(days=days)).strftime('%Y-%m-%d')
        else:
            # Handle None values properly
            if start_date_param and start_date_param != 'None':
                start_date = start_date_param
            else:
                start_date = '2020-01-01'
                
            if end_date_param and end_date_param != 'None':
                end_date = end_date_param
            else:
                end_date = datetime.now().strftime('%Y-%m-%d')
        
        # Get all mutual funds for dropdowns
        all_funds = MutualFund.query.filter_by(is_active=True).all()

        # Query holdings properly
        holdings = MutualFundHolding.query.all()

        # If you also need mutual funds:
        funds = MutualFund.query.all()

        # Instead, add the None check here:
        for holding_item in holdings:
            if holding_item.unrealized_gain_loss is None:
                holding_item.unrealized_gain_loss = 0.0
        
        # Initialize empty performance data if no funds exist
        if not all_funds:
            performance_data = {
                'holdings': [],
                'total_investment': 0,
                'total_current_value': 0,
                'total_gain_loss': 0,
                'total_gain_loss_percent': 0,
                'count': 0
            }
            category_summary = []
        else:
            # Get mutual fund data only if funds exist
            performance_data = get_mutual_fund_performance(start_date, end_date)
            category_summary = get_mutual_fund_summary_by_category(start_date, end_date)
        
        return render_template(
            'mutual_funds/admin_mutual_funds.html', 
            current_year=datetime.now().year,
            performance_data=performance_data,
            category_summary=category_summary,
            all_funds=all_funds,
            start_date=start_date,
            end_date=end_date,
            holdings=holdings,
            funds=funds
        )

    @app.route('/api/mutual_funds/update_nav', methods=['POST'])
    @role_required(['super_admin', 'Group_Chief_accountant'])
    def update_mutual_fund_nav_route():
        """API endpoint to update mutual fund NAV"""
        try:
            data = request.get_json()
            fund_id = data.get('fund_id')
            nav_date = data.get('nav_date')
            nav_value = data.get('nav_value')
            repurchase_price = data.get('repurchase_price')
            sale_price = data.get('sale_price')
            
            if not all([fund_id, nav_date, nav_value]):
                return jsonify({'success': False, 'error': 'Missing required fields'})
            
            # Convert date string to date object
            nav_date = datetime.strptime(nav_date, '%Y-%m-%d').date()
            
            # Update NAV
            nav_record = update_mutual_fund_nav(
                fund_id, nav_date, Decimal(nav_value),
                Decimal(repurchase_price) if repurchase_price else None,
                Decimal(sale_price) if sale_price else None
            )
            
            return jsonify({
                'success': True,
                'message': 'NAV updated successfully',
                'nav_id': nav_record.id
            })
            
        except Exception as e:
            return jsonify({'success': False, 'error': str(e)})

    @app.route('/api/mutual_funds/add_fund', methods=['POST'])
    @role_required(['super_admin', 'Group_Chief_accountant'])
    def add_mutual_fund():
        """API endpoint to add a new mutual fund"""
        try:
            data = request.get_json()
            
            # Validate required fields
            required_fields = ['fund_code', 'fund_name', 'fund_type', 'category']
            for field in required_fields:
                if not data.get(field):
                    return jsonify({'success': False, 'error': f'Missing field: {field}'})
            
            # Check if fund code already exists
            existing_fund = MutualFund.query.filter_by(fund_code=data['fund_code']).first()
            if existing_fund:
                return jsonify({'success': False, 'error': 'Fund code already exists'})
            
            # Create new fund
            fund = MutualFund(
                fund_code=data['fund_code'],
                fund_name=data['fund_name'],
                fund_type=data['fund_type'],
                category=data['category'],
                fund_manager=data.get('fund_manager'),
                fund_house=data.get('fund_house'),
                risk_level=data.get('risk_level'),
                is_active=True
            )
            
            # Optional fields
            if data.get('inception_date'):
                fund.inception_date = datetime.strptime(data['inception_date'], '%Y-%m-%d').date()
            
            if data.get('expense_ratio'):
                fund.expense_ratio = Decimal(data['expense_ratio'])
            
            if data.get('exit_load'):
                fund.exit_load = Decimal(data['exit_load'])
            
            if data.get('minimum_investment'):
                fund.minimum_investment = Decimal(data['minimum_investment'])
            
            if data.get('sip_minimum'):
                fund.sip_minimum = Decimal(data['sip_minimum'])
            
            db.session.add(fund)
            db.session.commit()
            
            return jsonify({
                'success': True,
                'message': 'Fund added successfully',
                'fund_id': fund.id
            })
            
        except Exception as e:
            db.session.rollback()
            return jsonify({'success': False, 'error': str(e)})

    @app.route('/api/mutual_funds/holdings')
    @role_required(['super_admin', 'Group_Chief_accountant', 'viewer'])
    def get_mutual_fund_holdings_api():
        """API endpoint to get mutual fund holdings"""
        try:
            start_date = request.args.get('start_date')
            end_date = request.args.get('end_date')
            
            holdings_data = get_mutual_fund_holdings(start_date, end_date)
            
            # Format data for JSON response
            formatted_data = []
            for holding in holdings_data:
                formatted_data.append({
                    'id': holding['holding'].id,
                    'fund_name': holding['fund_name'],
                    'fund_code': holding['fund_code'],
                    'purchase_date': holding['holding'].purchase_date.strftime('%Y-%m-%d'),
                    'units': float(holding['holding'].units),
                    'purchase_nav': float(holding['holding'].purchase_nav),
                    'purchase_value': float(holding['holding'].purchase_value),
                    'current_nav': float(holding['current_nav'] or 0),
                    'current_value': float(holding['holding'].current_value or 0),
                    'unrealized_gain_loss': float(holding['holding'].unrealized_gain_loss or 0),
                    'unrealized_gain_loss_percent': float(holding['holding'].unrealized_gain_loss_percent or 0),
                    'folio_number': holding['holding'].folio_number
                })
            
            return jsonify({
                'success': True,
                'holdings': formatted_data
            })
            
        except Exception as e:
            return jsonify({'success': False, 'error': str(e)})
        
    @app.route('/api/mutual_funds/add_holding', methods=['POST'])
    @role_required(['super_admin', 'Group_Chief_accountant'])
    def add_mutual_fund_holding():
        """API endpoint to add a new mutual fund holding"""
        try:
            data = request.get_json()
            
            # Validate required fields
            required_fields = ['fund_id', 'purchase_date', 'units', 'purchase_nav', 'purchase_value']
            for field in required_fields:
                if field not in data:
                    return jsonify({'success': False, 'error': f'Missing field: {field}'})
            
            # Create new holding
            holding = MutualFundHolding(
                fund_id=data['fund_id'],
                purchase_date=datetime.strptime(data['purchase_date'], '%Y-%m-%d').date(),
                units=Decimal(data['units']),
                purchase_nav=Decimal(data['purchase_nav']),
                purchase_value=Decimal(data['purchase_value']),
                folio_number=data.get('folio_number'),
                is_active=True
            )
            
            db.session.add(holding)
            db.session.commit()
            
            return jsonify({
                'success': True,
                'message': 'Holding added successfully',
                'holding_id': holding.id
            })
            
        except Exception as e:
            db.session.rollback()
            return jsonify({'success': False, 'error': str(e)})

    @app.route('/api/mutual_funds/<int:fund_id>/nav_history')
    @role_required(['super_admin', 'Group_Chief_accountant', 'viewer'])
    def get_mutual_fund_nav_history(fund_id):
        """API endpoint to get NAV history for a fund"""
        try:
            nav_history = MutualFundNAV.query.filter_by(
                fund_id=fund_id
            ).order_by(MutualFundNAV.nav_date.desc()).limit(30).all()
            
            formatted_data = [{
                'date': nav.nav_date.strftime('%Y-%m-%d'),
                'nav': float(nav.nav_value),
                'repurchase_price': float(nav.repurchase_price) if nav.repurchase_price else None,
                'sale_price': float(nav.sale_price) if nav.sale_price else None
            } for nav in nav_history]
            
            return jsonify({
                'success': True,
                'nav_history': formatted_data
            })
            
        except Exception as e:
            return jsonify({'success': False, 'error': str(e)})
    
    @app.route('/api/mutual_funds/add_transaction', methods=['POST'])
    @role_required(['super_admin', 'Group_Chief_accountant'])
    def add_mutual_fund_transaction_route():
        """API endpoint to add a mutual fund transaction"""
        try:
            data = request.get_json()
            
            # Validate required fields
            required_fields = ['holding_id', 'fund_id', 'transaction_type', 'transaction_date', 'amount']
            for field in required_fields:
                if not data.get(field):
                    return jsonify({'success': False, 'error': f'Missing field: {field}'})
            
            # Convert date string to date object
            transaction_date = datetime.strptime(data['transaction_date'], '%Y-%m-%d').date()
            
            # Add transaction
            transaction = add_mutual_fund_transaction(
                holding_id=data['holding_id'],
                fund_id=data['fund_id'],
                transaction_type=data['transaction_type'],
                transaction_date=transaction_date,
                units=Decimal(data['units']) if data.get('units') else None,
                nav=Decimal(data['nav']) if data.get('nav') else None,
                amount=Decimal(data['amount']),
                description=data.get('description'),
                reference_number=data.get('reference_number'),
                user_id=session.get('user_id')
            )
            
            return jsonify({
                'success': True,
                'message': 'Transaction added successfully',
                'transaction_id': transaction.id
            })
            
        except Exception as e:
            db.session.rollback()
            return jsonify({'success': False, 'error': str(e)})
    
    @app.route('/api/mutual_funds/delete_fund/<int:fund_id>', methods=['DELETE'])
    @role_required(['super_admin', 'Group_Chief_accountant'])
    def delete_mutual_fund(fund_id):
        """API endpoint to delete a mutual fund"""
        try:
            fund = MutualFund.query.get_or_404(fund_id)
            
            # Check if fund has holdings
            if fund.holdings:
                return jsonify({'success': False, 'error': 'Cannot delete fund with existing holdings'})
            
            db.session.delete(fund)
            db.session.commit()
            
            return jsonify({
                'success': True,
                'message': 'Fund deleted successfully'
            })
            
        except Exception as e:
            db.session.rollback()
            return jsonify({'success': False, 'error': str(e)})

    @app.route('/api/mutual_funds/update_fund/<int:fund_id>', methods=['PUT'])
    @role_required(['super_admin', 'Group_Chief_accountant'])
    def update_mutual_fund(fund_id):
        """API endpoint to update a mutual fund"""
        try:
            data = request.get_json()
            fund = MutualFund.query.get_or_404(fund_id)
            
            # Update fields
            if 'fund_name' in data:
                fund.fund_name = data['fund_name']
            if 'fund_type' in data:
                fund.fund_type = data['fund_type']
            if 'category' in data:
                fund.category = data['category']
            if 'fund_manager' in data:
                fund.fund_manager = data['fund_manager']
            if 'fund_house' in data:
                fund.fund_house = data['fund_house']
            if 'risk_level' in data:
                fund.risk_level = data['risk_level']
            if 'is_active' in data:
                fund.is_active = data['is_active']
            
            # Optional fields
            if 'inception_date' in data and data['inception_date']:
                fund.inception_date = datetime.strptime(data['inception_date'], '%Y-%m-%d').date()
            
            if 'expense_ratio' in data and data['expense_ratio']:
                fund.expense_ratio = Decimal(data['expense_ratio'])
            
            if 'exit_load' in data and data['exit_load']:
                fund.exit_load = Decimal(data['exit_load'])
            
            if 'minimum_investment' in data and data['minimum_investment']:
                fund.minimum_investment = Decimal(data['minimum_investment'])
            
            if 'sip_minimum' in data and data['sip_minimum']:
                fund.sip_minimum = Decimal(data['sip_minimum'])
            
            db.session.commit()
            
            return jsonify({
                'success': True,
                'message': 'Fund updated successfully'
            })
            
        except Exception as e:
            db.session.rollback()
            return jsonify({'success': False, 'error': str(e)})
        
    @app.route('/api/mutual_funds/holding/<int:holding_id>/transactions')
    @role_required(['super_admin', 'Group_Chief_accountant', 'viewer'])
    def get_mutual_fund_holding_transactions(holding_id):
        """API endpoint to get transactions for a specific holding"""
        try:
            transactions = MutualFundTransaction.query.filter_by(
                holding_id=holding_id
            ).order_by(MutualFundTransaction.transaction_date.desc()).all()
            
            formatted_data = [{
                'transaction_date': transaction.transaction_date.strftime('%Y-%m-%d'),
                'transaction_type': transaction.transaction_type,
                'units': float(transaction.units) if transaction.units else None,
                'nav': float(transaction.nav) if transaction.nav else None,
                'amount': float(transaction.amount),
                'description': transaction.description
            } for transaction in transactions]
            
            return jsonify({
                'success': True,
                'transactions': formatted_data
            })
            
        except Exception as e:
            return jsonify({'success': False, 'error': str(e)})

    @app.route('/api/mutual_funds/delete_holding/<int:holding_id>', methods=['DELETE'])
    @role_required(['super_admin', 'Group_Chief_accountant'])
    def delete_mutual_fund_holding(holding_id):
        """API endpoint to delete a mutual fund holding"""
        try:
            holding = MutualFundHolding.query.get_or_404(holding_id)
            
            # Check if holding has transactions
            if holding.transactions:
                return jsonify({'success': False, 'error': 'Cannot delete holding with existing transactions'})
            
            db.session.delete(holding)
            db.session.commit()
            
            return jsonify({
                'success': True,
                'message': 'Holding deleted successfully'
            })
            
        except Exception as e:
            db.session.rollback()
            return jsonify({'success': False, 'error': str(e)})
    
    @app.route('/api/mutual_funds/holding/<int:holding_id>', methods=['GET'])
    @role_required(['super_admin', 'Group_Chief_accountant', 'viewer'])
    def get_mutual_fund_holding(holding_id):
        """API endpoint to get a specific mutual fund holding"""
        try:
            holding = MutualFundHolding.query.get_or_404(holding_id)
            
            return jsonify({
                'success': True,
                'holding': {
                    'id': holding.id,
                    'fund_id': holding.fund_id,
                    'purchase_date': holding.purchase_date.strftime('%Y-%m-%d'),
                    'units': float(holding.units),
                    'purchase_nav': float(holding.purchase_nav),
                    'purchase_value': float(holding.purchase_value),
                    'folio_number': holding.folio_number
                }
            })
            
        except Exception as e:
            return jsonify({'success': False, 'error': str(e)})

    @app.route('/api/mutual_funds/update_holding/<int:holding_id>', methods=['PUT'])
    @role_required(['super_admin', 'Group_Chief_accountant'])
    def update_mutual_fund_holding(holding_id):
        """API endpoint to update a mutual fund holding"""
        try:
            data = request.get_json()
            holding = MutualFundHolding.query.get_or_404(holding_id)
            
            # Validate required fields
            required_fields = ['purchase_date', 'units', 'purchase_nav']
            for field in required_fields:
                if field not in data:
                    return jsonify({'success': False, 'error': f'Missing field: {field}'})
            
            # Update holding
            holding.purchase_date = datetime.strptime(data['purchase_date'], '%Y-%m-%d').date()
            holding.units = Decimal(data['units'])
            holding.purchase_nav = Decimal(data['purchase_nav'])
            holding.purchase_value = Decimal(data['units']) * Decimal(data['purchase_nav'])
            
            if 'folio_number' in data:
                holding.folio_number = data['folio_number']
            
            db.session.commit()
            
            return jsonify({
                'success': True,
                'message': 'Holding updated successfully'
            })
            
        except Exception as e:
            db.session.rollback()
            return jsonify({'success': False, 'error': str(e)})

    @app.route('/admin/deposit')
    @role_required(['super_admin', 'Group_Chief_accountant'])
    def admin_deposit():
        return render_template('admin_deposit.html', current_year=datetime.now().year)

    @app.route('/admin/logout')
    def admin_logout():
        session.clear()
        flash("You have been successfully logged out.", 'info')
        return redirect(url_for('admin_login'))
    
     # Add this route for Odoo GL Transactions Viewer
    @app.route('/admin/view')
    @role_required(['super_admin', 'Group_Chief_accountant'])
    def admin_view():
        return render_template('odoo_view.html', 
                            username=session.get('username'),
                            user_role=session.get('user_role'),
                            current_year=datetime.now().year,
                            current_date=datetime.now().strftime('%Y-%m-%d'))
    
    # Store connection in session instead of global variable
    @app.route('/connect', methods=['POST'])
    def connect():
        try:
            data = request.json
            url = data.get('url')
            db = data.get('db')
            username = data.get('username')
            password = data.get('password')
            
            if not all([url, db, username, password]):
                return jsonify({'success': False, 'error': 'All fields are required'})
            
            # Test connection
            common = xmlrpc.client.ServerProxy('{}/xmlrpc/2/common'.format(url))
            uid = common.authenticate(db, username, password, {})
            
            if uid:
                # Store connection details in session
                session['odoo_uid'] = uid
                session['odoo_db'] = db
                session['odoo_password'] = password
                session['odoo_url'] = url
                
                return jsonify({'success': True, 'message': 'Connected successfully!'})
            else:
                return jsonify({'success': False, 'error': 'Authentication failed'})
                
        except Exception as e:
            return jsonify({'success': False, 'error': str(e)})
        
    @app.route('/admin/Personalization')
    @role_required(['super_admin', 'Group_Chief_accountant'])
    def admin_personalization():
        return render_template('admin_personalization.html', current_year=datetime.now().year)
        
    @app.route('/admin/cash-bank', methods=['GET', 'POST'])
    @role_required(['super_admin', 'Group_Chief_accountant'])
    def admin_cash_bank():
        try:
            # Fetch form/query params
            end_date = request.args.get("end_date") or request.form.get("end_date")
            period = request.args.get("period") or request.form.get("period")
            chart_data = request.args.get("chart_data")
            
            # Always set start date to 2020-12-31
            start_date = "2020-12-31"
            
            today = datetime.today()
            current_time = datetime.now()

            # Default filter (all-time if no dates)
            filter_start, filter_end = None, None
            if end_date:
                filter_start, filter_end = start_date, end_date
            elif period:
                filter_start, filter_end = get_period_range_profit_loss(period, today)
                filter_start = filter_start.strftime('%Y-%m-%d') if filter_start else None
                filter_end = filter_end.strftime('%Y-%m-%d') if filter_end else None
            else:
                # Default: from 2020-12-31 to today
                filter_start = "2020-12-31"
                filter_end = today.strftime("%Y-%m-%d")
                period = "all_time"

            print(f"Cash Flow Period: {filter_start} → {filter_end}")

            # Query service layer
            cash_flow_data = get_cash_flow_account(filter_start, filter_end)

            # Use last 30 days for recent transactions regardless of main filter
            recent_transactions = get_cash_flow_transaction_detail(
                (datetime.today() - timedelta(days=30)).strftime('%Y-%m-%d'),
                today.strftime('%Y-%m-%d')
            )

            # Get total loans information
            loans_data = get_total_loans(filter_start, filter_end)

            # Separate grand total row (for summary display)
            grand_total = None
            cash_flow_accounts = []

            # Initialize sums
            current_account = 0
            investment_account = 0
            deposit_account = 0
            petty_cash_account = 0

            for row in cash_flow_data:
                if row.get("code") == "GRAND TOTAL":
                    grand_total = row
                else:
                    name = row.get("account_name") or row.get("cash_flow_name")

                    # Current accounts
                    if name in ["ANB-Current", "RYD-Current", "SNB-Current"]:
                        current_account += row.get("total_balance", 0)

                    # Investment accounts
                    elif name in ["ANB-Inv", "RYD-Inv", "Lomb-Inv", "SNB-Inv", "Al Mall-Inv"]:
                        investment_account += row.get("total_balance", 0)

                    # Deposit
                    elif name == "Deposit":
                        deposit_account += row.get("total_balance", 0)

                    # Petty Cash
                    elif name == "Petty Cash":
                        petty_cash_account += row.get("total_balance", 0)

                    cash_flow_accounts.append(row)

            # Only calculate percentages if we have a grand total
            debit_percentage = 0
            credit_percentage = 0
            
            if grand_total:
                prev_end_date = (datetime.strptime(filter_start, '%Y-%m-%d') - timedelta(days=1)).strftime('%Y-%m-%d')
                prev_start_date = "2020-12-31"

                # Query service layer for previous period
                prev_cash_flow_data = get_cash_flow_account(prev_start_date, prev_end_date)

                # Find previous period grand total
                prev_grand_total = None
                for row in prev_cash_flow_data:
                    if row.get("code") == "GRAND TOTAL":
                        prev_grand_total = row
                        break

                if prev_grand_total:
                    # Safely get values with proper default handling
                    prev_debit = prev_grand_total.get("debit") or 0
                    prev_credit = prev_grand_total.get("credit") or 0
                    current_debit = grand_total.get("debit", 0)
                    current_credit = grand_total.get("credit", 0)
                    
                    # Calculate debit percentage change
                    if prev_debit != 0:
                        debit_percentage = ((current_debit - prev_debit) / prev_debit) * 100
                    else:
                        debit_percentage = 100 if current_debit > 0 else 0
                    
                    # Calculate credit percentage change
                    if prev_credit != 0:
                        credit_percentage = ((current_credit - prev_credit) / prev_credit) * 100
                    else:
                        credit_percentage = 100 if current_credit > 0 else 0

            # If chart data is requested, return JSON
            if chart_data:
                chart_data_response = {
                    "labels": [],
                    "debit": [],
                    "credit": [],
                    "balance": []
                }

                for account in cash_flow_accounts:
                    account_name = account.get("account_name") or account.get("cash_flow_name")
                    if account_name:  # Skip empty names (like the grand total)
                        chart_data_response["labels"].append(account_name)
                        chart_data_response["debit"].append(float(account.get("debit", 0)) / 1000000)  # Convert to millions
                        chart_data_response["credit"].append(float(account.get("credit", 0)) / 1000000)  # Convert to millions
                        chart_data_response["balance"].append(float(account.get("total_balance", 0)) / 1000000)  # Convert to millions
                
                return jsonify(chart_data_response)

            return render_template(
                "admin_cash_bank.html",
                cash_flow_accounts=cash_flow_accounts,
                grand_total=grand_total,
                recent_transactions=recent_transactions[:10],
                username=session.get("username"),
                user_role=session.get("user_role"),
                current_year=datetime.now().year,
                start_date=filter_start,
                end_date=filter_end,
                period=period,
                current_time=current_time,
                debit_percentage=debit_percentage,
                credit_percentage=credit_percentage,
                current_account=current_account,
                investment_account=investment_account,
                deposit_account=deposit_account,
                petty_cash_account=petty_cash_account,
                total_loans=loans_data['total_loans']
            )

        except Exception as e:
            import traceback
            traceback.print_exc()
            flash("Error loading cash flow accounts", "danger")
            return redirect(url_for("admin_dashboard"))
   

    @app.route('/fetch_transactions')
    def fetch_transactions():
        try:
            # Get connection details from session
            if 'odoo_uid' not in session:
                return jsonify({'success': False, 'error': 'Not connected to Odoo'})
            
            uid = session['odoo_uid']
            db = session['odoo_db']
            password = session['odoo_password']
            url = session['odoo_url']
            
            models = xmlrpc.client.ServerProxy('{}/xmlrpc/2/object'.format(url))
            
            # First, get the company ID for "شركة الراشد بن سعد الراشد"
            company_name = "شركة الراشد بن سعد الراشد"
            company_ids = models.execute_kw(
                db, uid, password,
                'res.company', 'search',
                [[('name', '=', company_name)]]
            )
            
            if not company_ids:
                return jsonify({'success': False, 'error': f'Company "{company_name}" not found'})
            
            company_id = company_ids[0]
            
            # Get date range: from 2002-12-31 to today
            from datetime import datetime
            start_date = '2020-12-01'
            end_date = datetime.now().strftime('%Y-%m-%d')
            
            # Define the search domain: specific company and date between 2002-12-31 and today
            domain = [
                ('company_id', '=', company_id),
                ('date', '>=', start_date),
                ('date', '<=', end_date)
            ]
            
            # First, check how many records we have (for progress)
            total_count = models.execute_kw(
                db, uid, password,
                'account.move.line', 'search_count',
                [domain]
            )
            
            if total_count == 0:
                return jsonify({
                    'success': True, 
                    'records': [], 
                    'count': 0,
                    'message': f'No transactions found for company "{company_name}" from {start_date} to {end_date}'
                })
            
            # Get the fields available in account.move.line model
            try:
                available_fields = models.execute_kw(
                    db, uid, password,
                    'account.move.line', 'fields_get',
                    [], {'attributes': ['string', 'type']}
                )
                
                # Create a list of fields we want to try to fetch
                desired_fields = [
                    'date', 'company_id', 'account_id', 'amount_currency', 
                    'credit', 'debit', 'balance', 'name', 'move_name', 'partner_id',
                    'analytic_distribution'  # Added analytic_distribution
                ]
                
            except:
                # If we can't get fields info, use a safe default
                desired_fields = [
                    'date', 'company_id', 'account_id', 'amount_currency', 
                    'credit', 'debit', 'balance', 'name', 'move_name', 'partner_id',
                    'analytic_distribution'  # Added analytic_distribution
                ]
            
            # Search for account.move.line records with our domain - with reasonable limit
            line_ids = models.execute_kw(
                db, uid, password,
                'account.move.line', 'search',
                [domain],
                {'limit': 1000}  # Start with a reasonable limit
            )
            
            # Read records in smaller batches
            batch_size = 50
            all_records = []
            
            for i in range(0, len(line_ids), batch_size):
                batch_ids = line_ids[i:i+batch_size]
                
                records = models.execute_kw(
                    db, uid, password,
                    'account.move.line', 'read',
                    [batch_ids], {'fields': desired_fields}
                )
                all_records.extend(records)
            
            # Format the records for display
            formatted_records = []
            analytic_account_map = {} 
            
            # First, let's get analytic account names if we have any analytic distributions
            analytic_account_ids = set()
            for record in all_records:
                analytic_distribution = record.get('analytic_distribution', {})
                if analytic_distribution:
                    # Convert keys to integers since Odoo returns them as strings
                    for analytic_id_str in analytic_distribution.keys():
                        try:
                            analytic_account_ids.add(int(analytic_id_str))
                        except (ValueError, TypeError):
                            print(f"Invalid analytic ID: {analytic_id_str}")
            
            # Fetch analytic account names if we have any
            if analytic_account_ids:
                try:
                    analytic_accounts = models.execute_kw(
                        db, uid, password,
                        'account.analytic.account', 'read',
                        [list(analytic_account_ids)],
                        {'fields': ['name', 'code']}
                    )
                    for account in analytic_accounts:
                        analytic_account_map[account['id']] = account.get('name', account.get('code', f"Account {account['id']}"))
                    print(f"Fetched {len(analytic_accounts)} analytic accounts: {analytic_account_map}")
                except Exception as e:
                    print(f"Error fetching analytic accounts: {str(e)}")
                    # If we can't fetch analytic accounts, create a simple mapping
                    for analytic_id in analytic_account_ids:
                        analytic_account_map[analytic_id] = f"Account {analytic_id}"
            
            for record in all_records:
                company = record.get('company_id', [])
                account = record.get('account_id', [])
                partner = record.get('partner_id', [])
                
                # Initialize analytic fields
                analytic_amount = ''
                analytic_department = ''
                analytic_employees = ''
                analytic_ho = ''
                analytic_inter_companies = ''
                analytic_investment_at_cost = ''
                analytic_investment_at_fv = ''
                analytic_investment_at_oci = ''
                analytic_investment_in_fund = ''
                
                # Process analytic distribution if it exists
                analytic_distribution = record.get('analytic_distribution', {})
                if analytic_distribution:
                    print(f"Processing analytic distribution: {analytic_distribution}")
                    for analytic_id_str, percentage in analytic_distribution.items():
                        try:
                            analytic_id = int(analytic_id_str)
                            analytic_name = analytic_account_map.get(analytic_id, f"Account {analytic_id}")
                            print(f"Analytic ID: {analytic_id}, Name: {analytic_name}")
                            
                            # Map the analytic account to the appropriate field based on its name
                            field_name, display_name = map_analytic_account(analytic_name, analytic_id)
                            print(f"Mapped to field: {field_name}, Display name: {display_name}")
                            
                            # Set the value in the appropriate field (use the name, not the percentage)
                            if field_name == 'analytic_amount':
                                analytic_amount = display_name
                            elif field_name == 'analytic_department':
                                analytic_department = display_name
                            elif field_name == 'analytic_employees':
                                analytic_employees = display_name
                            elif field_name == 'analytic_ho':
                                analytic_ho = display_name
                            elif field_name == 'analytic_inter_companies':
                                analytic_inter_companies = display_name
                            elif field_name == 'analytic_investment_at_cost':
                                analytic_investment_at_cost = display_name
                            elif field_name == 'analytic_investment_at_fv':
                                analytic_investment_at_fv = display_name
                            elif field_name == 'analytic_investment_at_oci':
                                analytic_investment_at_oci = display_name
                            elif field_name == 'analytic_investment_in_fund':
                                analytic_investment_in_fund = display_name
                        except (ValueError, TypeError) as e:
                            print(f"Error processing analytic ID {analytic_id_str}: {str(e)}")
                
                formatted_records.append({
                    'date': record.get('date', ''),
                    'company': company[1] if company and len(company) > 1 else company[0] if company else '',
                    'account_code': account[1].split(' ')[0] if account and len(account) > 1 else '',
                    'account_name': ' '.join(account[1].split(' ')[1:]) if account and len(account) > 1 else account[1] if account and len(account) > 1 else account[0] if account else '',
                    'amount_currency': record.get('amount_currency', ''),
                    'credit': record.get('credit', ''),
                    'debit': record.get('debit', ''),
                    'balance': record.get('balance', ''),
                    'label': record.get('name', ''),
                    'number': record.get('move_name', ''),
                    'partner': partner[1] if partner and len(partner) > 1 else partner[0] if partner else '',
                    'analytic_amount': analytic_amount,
                    'analytic_department': analytic_department,
                    'analytic_employees': analytic_employees,
                    'analytic_ho': analytic_ho,
                    'analytic_inter_companies': analytic_inter_companies,
                    'analytic_investment_at_cost': analytic_investment_at_cost,
                    'analytic_investment_at_fv': analytic_investment_at_fv,
                    'analytic_investment_at_oci': analytic_investment_at_oci,
                    'analytic_investment_in_fund': analytic_investment_in_fund
                })
            
            # Sort records by date (newest first)
            formatted_records.sort(key=lambda x: x['date'], reverse=True)
            
            return jsonify({
                'success': True, 
                'records': formatted_records, 
                'count': len(formatted_records),
                'total_count': total_count,
                'message': f'Fetched {len(formatted_records)} of {total_count} records for company "{company_name}" from {start_date} to {end_date}'
            })
            
        except Exception as e:
            import traceback
            traceback.print_exc()
            return jsonify({'success': False, 'error': f'Error fetching transactions: {str(e)}'})

    @app.route('/admin/stock_view')
    @role_required(['super_admin', 'Group_Chief_accountant', 'portfolio_manager'])
    def admin_stock_view():
        """Main stock portfolio view"""
        stocks = StockPortfolio.query.all()
        
        # Calculate portfolio totals with proper None handling
        total_investment = sum(float(stock.total_cost_basis or 0) for stock in stocks)
        total_current_value = sum(float(stock.current_value or 0) for stock in stocks)
        total_gain_loss = sum(float(stock.unrealized_gain_loss or 0) for stock in stocks)
        total_ytd_gain_loss = sum(float(stock.unrealized_ytd_gain_loss or 0) for stock in stocks)
        
        if total_investment > 0:
            gain_loss_percent = (total_gain_loss / total_investment) * 100
        else:
            gain_loss_percent = 0
        
        portfolio_totals = {
            'total_investment': total_investment,
            'total_current_value': total_current_value,
            'total_gain_loss': total_gain_loss,
            'total_ytd_gain_loss': total_ytd_gain_loss,
            'gain_loss_percent': gain_loss_percent
        }
        
        return render_template(
            'stock/admin_stock_view.html', 
            stocks=stocks,
            portfolio_totals=portfolio_totals,
            current_year=datetime.now().year
        )

    @app.route('/stock/create', methods=['POST'])
    @role_required(['super_admin', 'Group_Chief_accountant'])
    def create_stock_post():
        try:
            company_name = request.form.get('company_name')
            ticker_symbol = request.form.get('ticker_symbol')
            market = request.form.get('market')
            purchase_date = datetime.strptime(request.form.get('purchase_date'), '%Y-%m-%d').date()
            shares = Decimal(request.form.get('shares'))
            price = Decimal(request.form.get('price'))
            
            stock = StockService.create_stock(
                company_name, ticker_symbol, market, purchase_date, shares, price
            )
            
            db.session.commit()
            flash('Stock added successfully!', 'success')
            
        except Exception as e:
            db.session.rollback()
            flash(f'Error: {str(e)}', 'error')
        
        return redirect(url_for('admin_stock_view'))
        
    @app.route('/stock/create', methods=['GET'])
    @role_required(['super_admin', 'Group_Chief_accountant'])
    def create_stock():
        """Display the stock creation form"""
        return render_template('stock/admin_create_stock.html')
    
    @app.route('/stock/transactions/<int:stock_id>')
    @role_required(['super_admin', 'Group_Chief_accountant', 'portfolio_manager'])
    def view_transactions(stock_id):
        """View transaction history for a specific stock"""
        try:
            stock = StockPortfolio.query.get_or_404(stock_id)
            transactions = StockTransaction.query.filter_by(stock_id=stock_id).order_by(StockTransaction.transaction_date.desc()).all()
            
            return render_template(
                'stock/admin_transaction_history.html', 
                stock=stock, 
                transactions=transactions
            )
        except Exception as e:
            app.logger.error(f"Error loading transactions: {str(e)}")
            flash("Error loading transaction history", 'danger')
            return redirect(url_for('admin_stock_view'))
    
    # Buy more stock routes
    @app.route('/stock/buy_more/<int:stock_id>', methods=['GET'])
    @role_required(['super_admin', 'Group_Chief_accountant', 'portfolio_manager'])
    def buy_more_stock(stock_id):
        stock = StockPortfolio.query.get_or_404(stock_id)
        return render_template('stock/admin_buy_more_stock.html', stock=stock)

    @app.route('/stock/buy_more/<int:stock_id>', methods=['POST'])
    @role_required(['super_admin', 'Group_Chief_accountant', 'portfolio_manager'])
    def buy_more_stock_post(stock_id):
        try:
            stock = StockPortfolio.query.get_or_404(stock_id)
            
            # Get form data
            additional_shares = Decimal(request.form.get('additional_shares'))
            purchase_price = Decimal(request.form.get('purchase_price'))
            purchase_date = datetime.strptime(request.form.get('purchase_date'), '%Y-%m-%d').date()
            
            # Use service method
            StockService.buy_more_stock(stock_id, additional_shares, purchase_price, purchase_date)
            
            db.session.commit()
            flash(f'Successfully purchased {additional_shares} additional shares of {stock.ticker_symbol}', 'success')
            
        except Exception as e:
            db.session.rollback()
            flash(f'Error purchasing additional shares: {str(e)}', 'error')
        
        return redirect(url_for('admin_stock_view'))

    # Sell stock routes
    @app.route('/stock/sell/<int:stock_id>', methods=['GET'])
    @role_required(['super_admin', 'Group_Chief_accountant', 'portfolio_manager'])
    def sell_stock(stock_id):
        stock = StockPortfolio.query.get_or_404(stock_id)
        return render_template('stock/admin_sell_stock.html', stock=stock)

    @app.route('/stock/sell/<int:stock_id>', methods=['POST'])
    @role_required(['super_admin', 'Group_Chief_accountant', 'portfolio_manager'])
    def sell_stock_post(stock_id):
        try:
            stock = StockPortfolio.query.get_or_404(stock_id)
            
            # Get form data
            shares_to_sell = Decimal(request.form.get('shares_to_sell'))
            sell_price = Decimal(request.form.get('sell_price'))
            sell_date = datetime.strptime(request.form.get('sell_date'), '%Y-%m-%d').date()
            
            # Use service method
            stock, realized_gain_loss = StockService.sell_stock(stock_id, shares_to_sell, sell_price, sell_date)
            
            db.session.commit()
            flash(f'Sold {shares_to_sell} shares of {stock.ticker_symbol}. Realized P&L: ${realized_gain_loss:.2f}', 'success')
            
        except Exception as e:
            db.session.rollback()
            flash(f'Error selling shares: {str(e)}', 'error')
        
        return redirect(url_for('admin_stock_view'))

    # Edit stock routes
    @app.route('/stock/edit/<int:stock_id>', methods=['GET'])
    @role_required(['super_admin', 'Group_Chief_accountant', 'portfolio_manager'])
    def edit_stock(stock_id):
        stock = StockPortfolio.query.get_or_404(stock_id)
        return render_template('stock/admin_edit_stock.html', stock=stock)

    @app.route('/stock/edit/<int:stock_id>', methods=['POST'])
    @role_required(['super_admin', 'Group_Chief_accountant', 'portfolio_manager'])
    def edit_stock_post(stock_id):
        try:
            stock = StockPortfolio.query.get_or_404(stock_id)
            
            # Update basic info
            stock.company_name = request.form.get('company_name')
            stock.ticker_symbol = request.form.get('ticker_symbol')
            stock.market = request.form.get('market')
            
            # Update market price if provided
            market_price = request.form.get('market_price')
            if market_price:
                stock.market_price = Decimal(market_price)
                stock.update_values()
            
            db.session.commit()
            flash(f'Stock {stock.ticker_symbol} updated successfully!', 'success')
            
        except Exception as e:
            db.session.rollback()
            flash(f'Error updating stock: {str(e)}', 'error')
        
        return redirect(url_for('admin_stock_view'))

    # Delete stock route
    @app.route('/stock/delete/<int:stock_id>', methods=['POST'])
    @role_required(['super_admin', 'Group_Chief_accountant'])
    def delete_stock(stock_id):
        """Delete a stock and all its transactions"""
        try:
            # First delete all transactions for this stock
            StockTransaction.query.filter_by(stock_id=stock_id).delete()
            
            # Then delete the stock
            stock = StockPortfolio.query.get_or_404(stock_id)
            db.session.delete(stock)
            db.session.commit()
            
            flash('Stock deleted successfully!', 'success')
            
        except Exception as e:
            db.session.rollback()
            app.logger.error(f"Error deleting stock: {str(e)}")
            flash('Error deleting stock', 'error')
        
        # Return a redirect response
        return redirect(url_for('admin_stock_view'))

    # Set year-end prices route
    @app.route('/stock/set_year_end_prices', methods=['POST'])
    @role_required(['super_admin', 'Group_Chief_accountant'])
    def set_year_end_prices():
        try:
            year_end_date = datetime.strptime(request.form.get('year_end_date'), '%Y-%m-%d').date()
            
            # Use service method
            updated_count = StockService.set_year_end_prices(year_end_date)
            
            flash(f'Year-end prices set for {updated_count} stocks. YTD gains reset.', 'success')
            
        except Exception as e:
            db.session.rollback()
            flash(f'Error setting year-end prices: {str(e)}', 'error')
        
        return redirect(url_for('admin_stock_view'))
    
    # @app.route('/admin/projects')
    # @role_required(['super_admin'])
    # def admin_projects():
    #     return render_template('admin_projects.html', current_year=datetime.now().year)

    # Project Management Routes
    @app.route('/admin/projects')
    @role_required(['super_admin', 'Group_Chief_accountant', 'portfolio_manager'])
    def admin_projects():
        category_filter = request.args.get('category', 'all')
        status_filter = request.args.get('status', 'all')
        search_query = request.args.get('search', '')
        
        # Base query
        query = Project.query

        # Apply filters
        if category_filter != 'all':
            query = query.join(ProjectCategory).filter(ProjectCategory.name == category_filter)
        
        if status_filter != 'all':
            query = query.filter(Project.status == status_filter)
        
        if search_query:
            query = query.filter(Project.title.ilike(f'%{search_query}%'))
        
        projects = query.order_by(Project.created_at.desc()).all()
        
        # Get project statistics
        stats = get_project_stats() 

        # Get all categories for filter dropdown
        categories = ProjectCategory.query.all()

        # Get featured projects for the dashboard (first 4 projects)
        featured_projects_data = []
        themes = ['yellow', 'blue', 'green', 'pink']
        
        for i, project in enumerate(projects[:4]):
            # Create a dictionary with the project data plus additional fields for the template
            project_data = {
                'id': project.id,
                'title': project.title,
                'progress': project.progress,
                'end_date': project.end_date,
                'theme': themes[i] if i < len(themes) else 'blue',
                'team_members': [{'name': f'Member {j+1}', 
                                'avatar': f'https://ui-avatars.com/api/?name=Member+{j+1}&background=random&size=40'} 
                                for j in range(3)],
                'status_track': "Ahead of schedule" if project.progress >= 70 else 
                            "On the Track" if project.progress >= 40 else 
                            "Behind schedule"
            }
            featured_projects_data.append(project_data)

        return render_template('projects/admin_projects.html',
                                projects=projects,
                                featured_projects=featured_projects_data,
                                categories=categories,
                                stats=stats,
                                username=session.get('username'),
                                user_role=session.get('user_role'),
                                current_year=datetime.now().year)

    # Add a new API endpoint for real-time data
    @app.route('/api/dashboard-data')
    @role_required(['super_admin', 'Group_Chief_accountant', 'portfolio_manager'])
    def dashboard_data():
        stats = get_project_stat()
        
        # Get progress for all projects
        projects_progress = {}
        for project in Project.query.all():
            projects_progress[project.id] = {
                'progress': project.progress
            }
        
        return jsonify({
            'total_projects': len(Project.query.all()),
            'total_hours_used': stats['total_hours_used'],
            'total_hours_remaining': stats['total_hours_remaining'],
            'team_availability': stats['team_availability'],
            'team_availability_status': stats['team_availability_status'],
            'projects': projects_progress
        })

    # Enhance the get_project_stats function to include more data
    def get_project_stat():
        # Your existing implementation plus:
        total_projects = Project.query.count()
        active_projects = Project.query.filter_by(status='Active').count()
        high_priority_projects = Project.query.filter_by(priority='High').count()
        
        # Calculate hours data (you'll need to implement this based on your data model)
        total_hours_used = 1196  # Replace with actual calculation
        total_hours_remaining = 1024  # Replace with actual calculation
        usage_percentage = round((total_hours_used / (total_hours_used + total_hours_remaining)) * 100, 2)
        remaining_percentage = 100 - usage_percentage
        
        # Team availability (replace with actual calculation)
        team_availability = 2500
        team_availability_status = "Fully available" if team_availability > 2000 else "Limited availability"
        
        # Task statistics (replace with actual data from your model)
        tasks_completed = 1285
        tasks_in_progress = 18
        tasks_in_progress_hours = 1204
        efforts_allocated = 12858
        team_members = 24
        
        return {
            'investment_projects_count': Project.query.join(ProjectCategory).filter(ProjectCategory.name == 'Investment').count(),
            'associate_projects_count': Project.query.join(ProjectCategory).filter(ProjectCategory.name == 'Associate').count(),
            'subsidiary_projects_count': Project.query.join(ProjectCategory).filter(ProjectCategory.name == 'Subsidiary').count(),
            'equity_projects_count': Project.query.join(ProjectCategory).filter(ProjectCategory.name == 'Equity').count(),
            'maual_fund_projects_count': Project.query.join(ProjectCategory).filter(ProjectCategory.name == 'Mutual Fund').count(),
            'join_ventaure_projects_count': Project.query.join(ProjectCategory).filter(ProjectCategory.name == 'Joint Venture').count(),
            'total_budget': db.session.query(db.func.sum(Project.budget)).scalar() or 0,
            'total_projects': total_projects,
            'active_projects_count': active_projects,
            'high_priority_count': high_priority_projects,
            'total_hours_used': total_hours_used,
            'total_hours_remaining': total_hours_remaining,
            'usage_percentage': usage_percentage,
            'remaining_percentage': remaining_percentage,
            'team_availability': team_availability,
            'team_availability_status': team_availability_status,
            'tasks_completed': tasks_completed,
            'tasks_in_progress': tasks_in_progress,
            'tasks_in_progress_hours': tasks_in_progress_hours,
            'efforts_allocated': efforts_allocated,
            'team_members': team_members
        }
    @app.route('/admin/projects/<int:project_id>')
    @role_required(['super_admin', 'Group_Chief_accountant', 'portfolio_manager'])
    def admin_project_detail(project_id):
        project = Project.query.get_or_404(project_id)
        return render_template('projects/admin_project_detail.html',
                            project=project,
                            username=session.get('username'),
                            user_role=session.get('user_role'),
                            current_year=datetime.now().year)

    @app.route('/admin/projects/create', methods=['GET', 'POST'])
    @role_required(['super_admin', 'Group_Chief_accountant', 'portfolio_manager'])
    def admin_project_create():
        if request.method == 'POST':
            # Process form data and create new project
            title = request.form.get('title')
            description = request.form.get('description')
            category_id = request.form.get('category_id')
            company_id = request.form.get('company_id')
            company_name_manual = request.form.get('company_name_manual')
            priority = request.form.get('priority')
            status = request.form.get('status')
            start_date = request.form.get('start_date')
            end_date = request.form.get('end_date')
            budget = request.form.get('budget')

            # If manual company name is provided, create a new company
            if company_name_manual and (not company_id or company_id == ''):
                # Check if company already exists
                existing_company = Company.query.filter_by(company_name=company_name_manual).first()
                if existing_company:
                    company_id = existing_company.company_id
                else:
                    # Create new company
                    new_company = Company(
                        company_name=company_name_manual,
                        legal_name=company_name_manual
                    )
                    db.session.add(new_company)
                    db.session.flush()  # Get the ID without committing
                    company_id = new_company.company_id
            
            new_project = Project(
                title=title,
                description=description,
                category_id=category_id,
                company_id=company_id if company_id else None,
                priority=priority,
                status=status,
                start_date=datetime.strptime(start_date, '%Y-%m-%d') if start_date else None,
                end_date=datetime.strptime(end_date, '%Y-%m-%d') if end_date else None,
                budget=float(budget) if budget and budget != '' else None,
                manager_id=session.get('user_id')
            )
            
            db.session.add(new_project)
            db.session.commit()

            # Log activity
            log_project_activity(
                new_project.id, 
                'created', 
                f'Project "{new_project.title}" was created',
                session.get('user_id')
            )
            
            flash('Project created successfully!', 'success')
            return redirect(url_for('admin_projects'))
        
        categories = ProjectCategory.query.all()
        companies = Company.query.all()
        return render_template('projects/admin_project_form.html',
                            categories=categories,
                            companies=companies,
                            username=session.get('username'),
                            user_role=session.get('user_role'),
                            current_year=datetime.now().year)
    
    @app.route('/admin/projects/<int:project_id>/edit', methods=['GET', 'POST'])
    @role_required(['super_admin', 'Group_Chief_accountant', 'portfolio_manager'])
    def admin_project_edit(project_id):
        project = Project.query.get_or_404(project_id)
        
        if request.method == 'POST':
            # Process form data and update project
            old_title = project.title
            project.title = request.form.get('title')
            project.description = request.form.get('description')
            project.category_id = request.form.get('category_id')
            
            # Get form values
            company_id = request.form.get('company_id')
            company_name_manual = request.form.get('company_name_manual')
            priority = request.form.get('priority')
            status = request.form.get('status')
            start_date = request.form.get('start_date')
            end_date = request.form.get('end_date')
            budget = request.form.get('budget')

            # Handle company assignment - FIXED: Check if company_id is empty string
            if company_name_manual and (not company_id or company_id == ''):
                # Check if company already exists
                existing_company = Company.query.filter_by(company_name=company_name_manual).first()
                if existing_company:
                    company_id = existing_company.company_id
                else:
                    # Create new company
                    new_company = Company(
                        company_name=company_name_manual,
                        legal_name=company_name_manual
                    )
                    db.session.add(new_company)
                    db.session.flush()  # Get the ID without committing
                    company_id = new_company.company_id
            
            # Set the company_id (could be from dropdown or newly created)
            project.company_id = company_id if company_id and company_id != '' else None
            project.priority = priority
            project.status = status
            
            # Handle dates
            project.start_date = datetime.strptime(start_date, '%Y-%m-%d') if start_date else None
            project.end_date = datetime.strptime(end_date, '%Y-%m-%d') if end_date else None
            
            # Handle budget
            project.budget = float(budget) if budget and budget != '' else None
            
            db.session.commit()

            # Log activity - ADD THIS
            activity_description = f'Project "{old_title}" was updated'
            if old_title != project.title:
                activity_description = f'Project renamed from "{old_title}" to "{project.title}"'
                
            log_project_activity(
                project_id, 
                'updated', 
                activity_description,
                session.get('user_id')
            )
            
            flash('Project updated successfully!', 'success')
            return redirect(url_for('admin_project_detail', project_id=project.id))
        
        categories = ProjectCategory.query.all()
        companies = Company.query.all()
        return render_template('projects/admin_project_form.html',
                            project=project,
                            categories=categories,
                            companies=companies,
                            username=session.get('username'),
                            user_role=session.get('user_role'),
                            current_year=datetime.now().year)
    
    @app.route('/admin/projects/<int:project_id>/tasks/create', methods=['GET', 'POST'])
    @role_required(['super_admin', 'Group_Chief_accountant', 'portfolio_manager'])
    def admin_project_task_create(project_id):
        project = Project.query.get_or_404(project_id)
        
        if request.method == 'POST':
            # Process form data and create new task
            title = request.form.get('title')
            description = request.form.get('description')
            status = request.form.get('status')
            priority = request.form.get('priority')
            assigned_to = request.form.get('assigned_to')
            due_date = request.form.get('due_date')
            estimated_hours = request.form.get('estimated_hours')
            
            new_task = ProjectTask(
                project_id=project_id,
                title=title,
                description=description,
                status=status,
                priority=priority,
                assigned_to=assigned_to if assigned_to else None,
                due_date=datetime.strptime(due_date, '%Y-%m-%d') if due_date else None,
                estimated_hours=float(estimated_hours) if estimated_hours else None
            )
            
            db.session.add(new_task)
            db.session.commit()

            # Log activity - ADD THIS
            log_project_activity(
                project_id, 
                'task_created', 
                f'Task "{new_task.title}" was created',
                session.get('user_id')
            )

            # Update project progress
            project.progress = calculate_project_progress(project_id)
            db.session.commit()
            
            flash('Task created successfully!', 'success')
            return redirect(url_for('admin_project_detail', project_id=project_id))
        
        # For GET request, you might want to render a task creation form
        users = User.query.all()
        return render_template('projects/admin_task_form.html',
                            project=project,
                            users=users,
                            username=session.get('username'),
                            user_role=session.get('user_role'),
                            current_year=datetime.now().year)
    
    @app.route('/admin/projects/<int:project_id>/tasks/<int:task_id>/edit', methods=['GET', 'POST'])
    @role_required(['super_admin', 'Group_Chief_accountant', 'portfolio_manager'])
    def admin_project_task_edit(project_id, task_id):
        project = Project.query.get_or_404(project_id)
        task = ProjectTask.query.get_or_404(task_id)
        
        if request.method == 'POST':
            # Process form data and update task
            task.title = request.form.get('title')
            task.description = request.form.get('description')
            task.status = request.form.get('status')
            task.priority = request.form.get('priority')
            task.assigned_to = request.form.get('assigned_to') if request.form.get('assigned_to') else None
            
            due_date = request.form.get('due_date')
            if due_date:
                task.due_date = datetime.strptime(due_date, '%Y-%m-%d')
            else:
                task.due_date = None
                
            estimated_hours = request.form.get('estimated_hours')
            if estimated_hours:
                task.estimated_hours = float(estimated_hours)
            else:
                task.estimated_hours = None
            
            db.session.commit()

            # Update project progress
            project.progress = calculate_project_progress(project_id)
            db.session.commit()
            
            flash('Task updated successfully!', 'success')
            return redirect(url_for('admin_project_detail', project_id=project_id))
        
        # For GET request, render the task edit form
        users = User.query.all()
        return render_template('projects/admin_task_form.html',
                            project=project,
                            task=task,
                            users=users,
                            username=session.get('username'),
                            user_role=session.get('user_role'),
                            current_year=datetime.now().year)

    @app.route('/admin/projects/<int:project_id>/tasks/<int:task_id>/delete', methods=['POST'])
    @role_required(['super_admin', 'Group_Chief_accountant', 'portfolio_manager'])
    def admin_project_task_delete(project_id, task_id):
        task = ProjectTask.query.get_or_404(task_id)
        db.session.delete(task)
        db.session.commit()

        # Update project progress
        project = Project.query.get(project_id)
        project.progress = calculate_project_progress(project_id)
        db.session.commit()

        flash('Task deleted successfully!', 'success')
        return redirect(url_for('admin_project_detail', project_id=project_id))
    
    # Project Documents Routes
    @app.route('/admin/projects/<int:project_id>/documents')
    @role_required(['super_admin', 'Group_Chief_accountant', 'portfolio_manager'])
    def admin_project_documents(project_id):
        project = Project.query.get_or_404(project_id)
        documents = ProjectDocument.query.filter_by(project_id=project_id).all()
        return render_template('projects/admin_project_documents.html',
                            project=project,
                            documents=documents,
                            username=session.get('username'),
                            user_role=session.get('user_role'),
                            current_year=datetime.now().year)

    @app.route('/admin/projects/<int:project_id>/documents/upload', methods=['POST'])
    @role_required(['super_admin', 'Group_Chief_accountant', 'portfolio_manager'])
    def admin_project_document_upload(project_id):
        project = Project.query.get_or_404(project_id)
        
        if 'document' not in request.files:
            flash('No file selected', 'error')
            return redirect(url_for('admin_project_documents', project_id=project_id))
        
        file = request.files['document']
        if file.filename == '':
            flash('No file selected', 'error')
            return redirect(url_for('admin_project_documents', project_id=project_id))
        
        if file:
            # Create uploads directory if it doesn't exist
            upload_dir = os.path.join(app.root_path, 'static', 'uploads', 'projects', str(project_id))
            os.makedirs(upload_dir, exist_ok=True)
            
            # Generate unique filename
            filename = secure_filename(file.filename)
            unique_filename = f"{datetime.now().strftime('%Y%m%d_%H%M%S')}_{filename}"
            file_path = os.path.join(upload_dir, unique_filename)
            
            # Save file
            file.save(file_path)
            
            # Create document record
            document = ProjectDocument(
                project_id=project_id,
                title=request.form.get('title', filename),
                description=request.form.get('description', ''),
                file_path=f"uploads/projects/{project_id}/{unique_filename}",
                file_type=filename.split('.')[-1] if '.' in filename else '',
                uploaded_by=session.get('user_id')
            )
            
            db.session.add(document)
            db.session.commit()
            
            flash('Document uploaded successfully!', 'success')
        
        return redirect(url_for('admin_project_documents', project_id=project_id))

    @app.route('/admin/projects/<int:project_id>/documents/<int:document_id>/delete', methods=['POST'])
    @role_required(['super_admin', 'Group_Chief_accountant', 'portfolio_manager'])
    def admin_project_document_delete(project_id, document_id):
        document = ProjectDocument.query.get_or_404(document_id)
        
        # Delete file from filesystem
        file_path = os.path.join(app.root_path, 'static', document.file_path)
        if os.path.exists(file_path):
            os.remove(file_path)
        
        db.session.delete(document)
        db.session.commit()
        
        flash('Document deleted successfully!', 'success')
        return redirect(url_for('admin_project_documents', project_id=project_id))

    # Project Milestones Routes
    @app.route('/admin/projects/<int:project_id>/milestones')
    @role_required(['super_admin', 'Group_Chief_accountant', 'portfolio_manager'])
    def admin_project_milestones(project_id):
        project = Project.query.get_or_404(project_id)
        milestones = ProjectMilestone.query.filter_by(project_id=project_id).order_by(ProjectMilestone.due_date).all()
        return render_template('projects/admin_project_milestones.html',
                            project=project,
                            milestones=milestones,
                            username=session.get('username'),
                            user_role=session.get('user_role'),
                            current_year=datetime.now().year)

    @app.route('/admin/projects/<int:project_id>/milestones/create', methods=['POST'])
    @role_required(['super_admin', 'Group_Chief_accountant', 'portfolio_manager'])
    def admin_project_milestone_create(project_id):
        project = Project.query.get_or_404(project_id)
        
        title = request.form.get('title')
        description = request.form.get('description')
        due_date_str = request.form.get('due_date')
        
        if not title:
            flash('Milestone title is required', 'error')
            return redirect(url_for('admin_project_milestones', project_id=project_id))
        
        due_date = datetime.strptime(due_date_str, '%Y-%m-%d').date() if due_date_str else None
        
        milestone = ProjectMilestone(
            project_id=project_id,
            title=title,
            description=description,
            due_date=due_date,
            status='Pending'
        )
        
        db.session.add(milestone)
        db.session.commit()
        
        flash('Milestone created successfully!', 'success')
        return redirect(url_for('admin_project_milestones', project_id=project_id))

    @app.route('/admin/projects/<int:project_id>/milestones/<int:milestone_id>/edit', methods=['POST'])
    @role_required(['super_admin', 'Group_Chief_accountant', 'portfolio_manager'])
    def admin_project_milestone_edit(project_id, milestone_id):
        milestone = ProjectMilestone.query.get_or_404(milestone_id)
        
        title = request.form.get('title')
        description = request.form.get('description')
        due_date_str = request.form.get('due_date')
        status = request.form.get('status')
        
        if not title:
            flash('Milestone title is required', 'error')
            return redirect(url_for('admin_project_milestones', project_id=project_id))
        
        milestone.title = title
        milestone.description = description
        milestone.status = status
        
        if due_date_str:
            milestone.due_date = datetime.strptime(due_date_str, '%Y-%m-%d').date()
        
        if status == 'Achieved' and not milestone.completed_date:
            milestone.completed_date = datetime.now().date()
        elif status != 'Achieved':
            milestone.completed_date = None
        
        db.session.commit()
        
        flash('Milestone updated successfully!', 'success')
        return redirect(url_for('admin_project_milestones', project_id=project_id))

    @app.route('/admin/projects/<int:project_id>/milestones/<int:milestone_id>/delete', methods=['POST'])
    @role_required(['super_admin', 'Group_Chief_accountant', 'portfolio_manager'])
    def admin_project_milestone_delete(project_id, milestone_id):
        milestone = ProjectMilestone.query.get_or_404(milestone_id)
        
        db.session.delete(milestone)
        db.session.commit()
        
        flash('Milestone deleted successfully!', 'success')
        return redirect(url_for('admin_project_milestones', project_id=project_id))
    
    @app.route('/admin/projects/<int:project_id>/team')
    @role_required(['super_admin', 'Group_Chief_accountant', 'portfolio_manager'])
    def admin_project_team(project_id):
        project = Project.query.get_or_404(project_id)
        team_members = ProjectTeam.query.filter_by(project_id=project_id).all()
        all_users = User.query.all()
        return render_template('projects/admin_project_team.html',
                            project=project,
                            team_members=team_members,
                            all_users=all_users,
                            username=session.get('username'),
                            user_role=session.get('user_role'),
                            current_year=datetime.now().year)

    @app.route('/admin/projects/<int:project_id>/team/add', methods=['POST'])
    @role_required(['super_admin', 'Group_Chief_accountant', 'portfolio_manager'])
    def admin_project_team_add(project_id):
        project = Project.query.get_or_404(project_id)
        
        user_id = request.form.get('user_id')
        role = request.form.get('role')
        
        if not user_id or not role:
            flash('User and role are required', 'error')
            return redirect(url_for('admin_project_team', project_id=project_id))
        
        # Check if user is already in the team
        existing_member = ProjectTeam.query.filter_by(project_id=project_id, user_id=user_id).first()
        if existing_member:
            flash('User is already in the project team', 'error')
            return redirect(url_for('admin_project_team', project_id=project_id))
        
        team_member = ProjectTeam(
            project_id=project_id,
            user_id=user_id,
            role=role
        )
        
        db.session.add(team_member)
        db.session.commit()
        
        flash('Team member added successfully!', 'success')
        return redirect(url_for('admin_project_team', project_id=project_id))

    @app.route('/admin/projects/<int:project_id>/team/<int:member_id>/remove', methods=['POST'])
    @role_required(['super_admin', 'Group_Chief_accountant', 'portfolio_manager'])
    def admin_project_team_remove(project_id, member_id):
        team_member = ProjectTeam.query.get_or_404(member_id)
        
        db.session.delete(team_member)
        db.session.commit()
        
        flash('Team member removed successfully!', 'success')
        return redirect(url_for('admin_project_team', project_id=project_id))

    @app.route('/admin/projects/<int:project_id>/team/<int:member_id>/edit', methods=['POST'])
    @role_required(['super_admin', 'Group_Chief_accountant', 'portfolio_manager'])
    def admin_project_team_edit(project_id, member_id):
        team_member = ProjectTeam.query.get_or_404(member_id)
        
        role = request.form.get('role')
        
        if not role:
            flash('Role is required', 'error')
            return redirect(url_for('admin_project_team', project_id=project_id))
        
        team_member.role = role
        db.session.commit()
        
        flash('Team member updated successfully!', 'success')
        return redirect(url_for('admin_project_team', project_id=project_id))
    
if __name__ == '__main__':
    app = create_app()
    app.run(debug=True, port=5000)