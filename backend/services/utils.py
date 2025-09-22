# backend/services/utils.py
from datetime import date, datetime, timedelta
import calendar

from flask import session

from backend.models import Project, ProjectActivity, ProjectCategory, ProjectTask
from ..extension import db
from sqlalchemy import text
import pytz

def get_period_label(period, today=None):
    """Return a human-friendly label for period (Q2 2025, Jan 2025, 2024, etc.)."""
    today = today or datetime.today()
    year = today.year
    month = today.month
    quarter = (month - 1) // 3 + 1

    if period == "month":
        return today.strftime("%b %Y")  # e.g. Feb 2025
    elif period == "last_month":
        last_month = (today.replace(day=1) - timedelta(days=1))
        return last_month.strftime("%b %Y")
    elif period == "quarter":
        return f"Q{quarter} {year}"
    elif period == "last_quarter":
        if quarter == 1:
            return f"Q4 {year-1}"
        else:
            return f"Q{quarter-1} {year}"
    elif period == "year":
        return str(year)
    elif period == "last_year":
        return str(year-1)
    elif period == "day":
        return today.strftime("%d %b %Y")
    return "Selected Period"

def get_period_range_profit_loss(period, today=None):
    if today is None:
        today = datetime.today()
    
    today_date = today.date()
    
    if period == "day":
        start = today_date
        end = today_date
    elif period == "month":
        start = today_date.replace(day=1)
        if today_date.month == 12:
            end = today_date.replace(day=31)
        else:
            end = today_date.replace(month=today_date.month + 1, day=1) - timedelta(days=1)
    elif period == "last_month":
        first_day_current = today_date.replace(day=1)
        last_day_previous = first_day_current - timedelta(days=1)
        start = last_day_previous.replace(day=1)
        end = last_day_previous
    elif period == "quarter":
        current_quarter = (today_date.month - 1) // 3 + 1
        if current_quarter == 1:
            start = today_date.replace(month=1, day=1)
            end = today_date.replace(month=3, day=31)
        elif current_quarter == 2:
            start = today_date.replace(month=4, day=1)
            end = today_date.replace(month=6, day=30)
        elif current_quarter == 3:
            start = today_date.replace(month=7, day=1)
            end = today_date.replace(month=9, day=30)
        else:
            start = today_date.replace(month=10, day=1)
            end = today_date.replace(month=12, day=31)
    elif period == "last_quarter":
        current_quarter = (today_date.month - 1) // 3 + 1
        if current_quarter == 1:
            start = today_date.replace(year=today_date.year-1, month=10, day=1)
            end = today_date.replace(year=today_date.year-1, month=12, day=31)
        else:
            previous_quarter = current_quarter - 1
            if previous_quarter == 1:
                start = today_date.replace(month=1, day=1)
                end = today_date.replace(month=3, day=31)
            elif previous_quarter == 2:
                start = today_date.replace(month=4, day=1)
                end = today_date.replace(month=6, day=30)
            else:
                start = today_date.replace(month=7, day=1)
                end = today_date.replace(month=9, day=30)
    elif period == "year":
        start = today_date.replace(month=1, day=1)
        end = today_date.replace(month=12, day=31)
    elif period == "last_year":
        start = today_date.replace(year=today_date.year-1, month=1, day=1)
        end = today_date.replace(year=today_date.year-1, month=12, day=31)
    else:
        # Default to current month
        start = today_date.replace(day=1)
        if today_date.month == 12:
            end = today_date.replace(day=31)
        else:
            end = today_date.replace(month=today_date.month + 1, day=1) - timedelta(days=1)

    return start, end

def get_investment_time_series(start_date=None, end_date=None):
    """Get investment data for the chart - modified for bar chart display"""
    try:
        # Default to all time if no dates provided
        if not start_date or not end_date:
            # Use your database's earliest date
            start_date = '2020-12-31'
            end_date = datetime.now().strftime('%Y-%m-%d')
        
        # Convert string dates to datetime objects for comparison
        start_dt = datetime.strptime(start_date, '%Y-%m-%d') if isinstance(start_date, str) else start_date
        end_dt = datetime.strptime(end_date, '%Y-%m-%d') if isinstance(end_date, str) else end_date
        
        query = text("""
            SELECT 
                COALESCE(coa.level4, coa.level3) AS investment_category,
                SUM(gl.balance) AS total_balance
            FROM gl_transactions gl
            JOIN chart_of_accounts coa ON gl.account_code = coa.code
            WHERE coa.level3 = 'Investments'
            AND DATE(gl.transaction_date) BETWEEN :start_date AND :end_date
            GROUP BY COALESCE(coa.level4, coa.level3)
            HAVING total_balance IS NOT NULL AND SUM(gl.balance) != 0
            ORDER BY total_balance DESC;
        """)
        
        result = db.session.execute(query, {
            'start_date': start_dt.strftime('%Y-%m-%d'),
            'end_date': end_dt.strftime('%Y-%m-%d')
        }).all()
        
        print(f"Time series query executed. Found {len(result)} records")
        
        # Process the data for the bar chart
        categories = []
        values = []
        
        for row in result:
            category = row._mapping['investment_category']
            balance = float(row._mapping['total_balance']) / 1000000  # Convert to millions
            
            # Skip if balance is zero
            if balance == 0:
                continue
                
            categories.append(category)
            values.append(balance)
        
        # If no data found, return empty but valid structure
        if not categories:
            print("No time series data found")
            return {
                'labels': [],
                'datasets': [{
                    'label': 'Investment Value',
                    'data': [],
                    'backgroundColor': '#4e73df',
                    'borderWidth': 2
                }]
            }
        
        # Create a single dataset for the bar chart
        dataset = {
            'label': 'Investment Value (Million SAR)',
            'data': values,
            'backgroundColor': [
                '#4e73df', '#1cc88a', '#f6c23e', '#e74a3b', '#9933ff', 
                '#36b9cc', '#5a5c69', '#6f42c1', '#e83e8c', '#fd7e14'
            ],
            'borderColor': 'rgba(78, 115, 223, 0.2)',
            'borderWidth': 1
        }
        
        print(f"Processed bar chart data: {len(categories)} categories")
        return {
            'labels': categories,
            'datasets': [dataset]
        }
        
    except Exception as e:
        print("Error in get_investment_time_series:", str(e))
        import traceback
        traceback.print_exc()
        # Return empty data
        return {
            'labels': [],
            'datasets': [{
                'label': 'Investment Value',
                'data': [],
                'backgroundColor': '#4e73df'
            }]
        }
    
# backend/services/utils.py
def get_balance_sheet_period_range(period, today=None):
    """
    Get date range for balance sheet with fixed start date of 2020-12-30
    """
    if today is None:
        today = datetime.today()
    
    today_date = today.date()
    fixed_start_date = date(2020, 12, 30)  # Fixed start date
    
    if period == "last_month":
        # Get last month's end date
        first_day_current = today_date.replace(day=1)
        end_date = first_day_current - timedelta(days=1)
        return fixed_start_date, end_date
    
    elif period == "last_quarter":
        # Get last quarter's end date
        current_quarter = (today_date.month - 1) // 3 + 1
        if current_quarter == 1:
            end_date = today_date.replace(year=today_date.year-1, month=12, day=31)
        else:
            previous_quarter = current_quarter - 1
            if previous_quarter == 1:
                end_date = today_date.replace(month=3, day=31)
            elif previous_quarter == 2:
                end_date = today_date.replace(month=6, day=30)
            else:
                end_date = today_date.replace(month=9, day=30)
        return fixed_start_date, end_date
    
    elif period == "last_year":
        # Get last year's end date
        end_date = today_date.replace(year=today_date.year-1, month=12, day=31)
        return fixed_start_date, end_date
    
    elif period == "custom":
        # For custom, we'll just return the fixed start and let the end date be handled separately
        return fixed_start_date, today_date
    
    else:
        # Default to current period (up to today)
        return fixed_start_date, today_date    
    


def format_balance_sheet_value(value):
    """
    Format values for balance sheet display
    Returns values in thousands with negative values in parentheses
    """
    if value is None:
        return "-"
    
    # Convert to thousands
    value_in_thousands = value / 1000
    
    if value_in_thousands < 0:
        return f"({abs(round(value_in_thousands)):,})"
    else:
        return f"{round(value_in_thousands):,}"

def get_project_stats():
    """Get statistics for projects dashboard"""
    try:
        investment_count = Project.query.join(ProjectCategory).filter(
            ProjectCategory.name == 'Investment'
        ).count()
    except:
        investment_count = 0
    
    try:
        associate_count = Project.query.join(ProjectCategory).filter(
            ProjectCategory.name == 'Associate'
        ).count()
    except:
        associate_count = 0
    
    try:
        subsidiary_count = Project.query.join(ProjectCategory).filter(
            ProjectCategory.name == 'Subsidiary'
        ).count()
    except:
        subsidiary_count = 0

    try:
        equity_count = Project.query.join(ProjectCategory).filter(
            ProjectCategory.name == 'Equity'
        ).count()
    except:
        equity_count = 0

    try:
        maual_fund_count = Project.query.join(ProjectCategory).filter(
            ProjectCategory.name == 'Maual Fund'
        ).count()
    except:
        maual_fund_count = 0

    try:
        join_ventaure_count = Project.query.join(ProjectCategory).filter(
            ProjectCategory.name == 'Join Ventaure'
        ).count()
    except:
        join_ventaure_count = 0
    
    try:
        total_budget = db.session.query(db.func.sum(Project.budget)).scalar() or 0
    except:
        total_budget = 0
    
    return {
        'investment_projects_count': investment_count,
        'associate_projects_count': associate_count,
        'subsidiary_projects_count': subsidiary_count,
        'equity_projects_count': equity_count,
        'maual_fund_projects_count': maual_fund_count,
        'join_ventaure_projects_count': join_ventaure_count,
        'total_budget': total_budget
    }

def create_initial_project_categories():
    """Create initial project categories if they don't exist"""
    categories = [
        {'name': 'Investment', 'description': 'Direct investment projects', 'color': '#28a745'},
        {'name': 'Associate', 'description': 'Projects with associate companies', 'color': '#007bff'},
        {'name': 'Subsidiary', 'description': 'Projects with subsidiary companies', 'color': '#ffc107'},
        {'name': 'Equity', 'description': 'Private Equity', 'color': "#872cac"},
        {'name': 'Maual Fund', 'description': 'Matual Fund company', 'color': '#6c757d'},
        {'name': 'Joint Ventaure', 'description': 'Join Ventaure', 'color': '#17a2b8'}
    ]
    
    for cat_data in categories:
        category = ProjectCategory.query.filter_by(name=cat_data['name']).first()
        if not category:
            category = ProjectCategory(**cat_data)
            db.session.add(category)
    
    db.session.commit()
    # print(f"Initial project categories created")

def calculate_project_progress(project_id):
    """Calculate project progress based on completed tasks"""
    total_tasks = ProjectTask.query.filter_by(project_id=project_id).count()
    if total_tasks == 0:
        return 0
    
    completed_tasks = ProjectTask.query.filter_by(
        project_id=project_id, 
        status='Completed'
    ).count()
    
    return int((completed_tasks / total_tasks) * 100)

# Add this function to map analytic accounts to specific categories
def map_analytic_account(analytic_name, analytic_id):
    analytic_name_lower = analytic_name.lower() if analytic_name else ""
    
    # Define your mapping rules here based on your analytic account structure
    mapping_rules = {
        'rts': 'analytic_inter_companies',
        'arch rashid': 'analytic_inter_companies', 
        'arch.rashid': 'analytic_inter_companies',
        'rashid': 'analytic_inter_companies',
        'head office': 'analytic_ho',
        'ho': 'analytic_ho',
        'department': 'analytic_department',
        'employee': 'analytic_employees',
        'staff': 'analytic_employees',
        'investment at cost': 'analytic_investment_at_cost',
        'cost investment': 'analytic_investment_at_cost',
        'investment at fv': 'analytic_investment_at_fv',
        'investment at fair value': 'analytic_investment_at_fv',
        'fair value': 'analytic_investment_at_fv',
        'investment at oci': 'analytic_investment_at_oci',
        'oci investment': 'analytic_investment_at_oci',
        'investment in fund': 'analytic_investment_in_fund',
        'fund investment': 'analytic_investment_in_fund'
    }
    
    for keyword, field_name in mapping_rules.items():
        if keyword in analytic_name_lower:
            return field_name, analytic_name
    
    # Default mapping if no specific rule matches
    return 'analytic_inter_companies', analytic_name

def log_project_activity(project_id, activity_type, description, user_id=None):
    """Log an activity for a project"""
    if user_id is None:
        user_id = session.get('user_id')
    
    activity = ProjectActivity(
        project_id=project_id,
        user_id=user_id,
        activity_type=activity_type,
        description=description
    )
    
    db.session.add(activity)
    db.session.commit()

def prepare_chart_data(income_data, expense_data):
    """Prepare data for the bar chart from both income and expense data"""
    labels = []
    income_values = []
    expense_values = []
    income_colors = []
    expense_colors = []
    
    # Create a dictionary to store all account names and their values
    all_data = {}
    
    # Process income data
    for item in income_data:
        account_name = item['analytic_account_names']
        # print(f"print accounts name : {account_name}")
        
        if account_name:  # Only process if account name exists
            if account_name not in all_data:
                all_data[account_name] = {'income': 0, 'expense': 0}
            # Income data - use absolute value for chart
            all_data[account_name]['income'] = abs(float(item['balance']))
    
    # Process expense data
    for item in expense_data:
        account_name = item['analytic_account_names']
        if account_name:  # Only process if account name exists
            if account_name not in all_data:
                all_data[account_name] = {'income': 0, 'expense': 0}
            # Expense data - multiply by -1 to convert to positive for chart
            all_data[account_name]['expense'] = float(item['balance']) * -1
    
    # Convert to lists for charting
    for account_name, values in all_data.items():
        labels.append(account_name)
        # Convert to millions for better display
        income_values.append(values['income'] / 1000000)
        expense_values.append(values['expense'] / 1000000)
        
        # Set colors based on account name - special color for Vision Bank
        if account_name == "Vision Bank":
            expense_colors.append("rgba(255, 99, 132, 0.8)")  # Red for Vision Bank expense
        else:
            income_colors.append("rgba(54, 162, 235, 0.6)")   # Blue for other income
            expense_colors.append("rgba(255, 159, 64, 0.6)")  # Orange for other expense
    
    if not labels:
        return {
            "labels": [],
            "datasets": [{"data": []}]
        }

    return {
        "labels": labels,
        "datasets": [
            {
                "label": "Fund Income",
                "data": income_values,
                "backgroundColor": income_colors,
                "borderColor": income_colors,
                "borderWidth": 1
            },
            {
                "label": "Equity Income",
                "data": expense_values,
                "backgroundColor": expense_colors,
                "borderColor": expense_colors,
                "borderWidth": 1
            }
        ]
    }

def prepare_investment_chart_data(equity_data, fund_data):
    """Prepare data for the investment bar chart from both equity and fund data"""
    labels = []
    equity_values = []
    fund_values = []
    equity_colors = []
    fund_colors = []
    
    # Create a dictionary to store all account names and their values
    all_data = {}
    
    # Process equity investment data
    for item in equity_data:
        account_name = item['analytic_account_names']
        if account_name:  # Only process if account name exists
            if account_name not in all_data:
                all_data[account_name] = {'equity': 0, 'fund': 0}
            # Equity investment data
            all_data[account_name]['equity'] = float(item['balance'])
    
    # Process fund investment data
    for item in fund_data:
        account_name = item['analytic_account_names']
        if account_name:  # Only process if account name exists
            if account_name not in all_data:
                all_data[account_name] = {'equity': 0, 'fund': 0}
            # Fund investment data
            all_data[account_name]['fund'] = float(item['balance'])
    
    # Convert to lists for charting
    for account_name, values in all_data.items():
        labels.append(account_name)
        # Convert to millions for better display
        equity_values.append(values['equity'] / 1000000)
        fund_values.append(values['fund'] / 1000000)
        
        # Set colors
        equity_colors.append("rgba(54, 162, 235, 0.6)")   # Blue for equity
        fund_colors.append("rgba(75, 192, 192, 0.6)")     # Teal for funds
    
    if not labels:
        return {
            "labels": [],
            "datasets": [{"data": []}]
        }

    return {
        "labels": labels,
        "datasets": [
            {
                "label": "Equity Investments",
                "data": equity_values,
                "backgroundColor": equity_colors,
                "borderColor": equity_colors,
                "borderWidth": 1
            },
            {
                "label": "Fund Investments",
                "data": fund_values,
                "backgroundColor": fund_colors,
                "borderColor": fund_colors,
                "borderWidth": 1
            }
        ]
    }

# Add these helper functions to your services
def calculate_profit_loss(data_dict):
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
    return sum(data_dict.get(k, 0) for k in revenue_items)

def calculate_expenses(data_dict):
    expense_items = [
        "Cost of Revenue", "Salaries & Related", "GOSI", 
        "Medical Insurance", "Office Rent", "Other Office Exp", 
        "Professional Fees", "Business Travel", "Consultation", 
        "Depreciation", "Finance Cost", "Zakat/Tax ",
        "Impairment losses on investment in subsidiary"
    ]
    return abs(sum(data_dict.get(k, 0) for k in expense_items))

def calculate_liabilities(data_dict):
    current_liabilities = sum(data_dict.get(k, 0) for k in [
        "Account Payable , Accrued Other Liabilities",
        "Short Term Loan",
        "Provision for Zakat/Tax",
        "Due to Related Party",
        "Deffered Income"
    ])
    
    non_current_liabilities = sum(data_dict.get(k, 0) for k in [
        "Employees defined benefits Liabilities",
        "Long Term Loan"
    ])
    
    return current_liabilities + non_current_liabilities

def calculate_assets(data_dict):
    current_assets = sum(data_dict.get(k, 0) for k in [
        "Cash & Cash Equivalent",
        "Account Receivable Other Prepaid",
        "Inventory",
        "Due from Related Party",
        "Short Term Deposit"
    ])
    
    non_current_assets = sum(data_dict.get(k, 0) for k in [
        "Investment in Subsidiaries",
        "Investment in Associate",
        "Investment at Cost",
        "Investment at fair value",
        "Investment Property",
        "Property Plant & Equipment",
        "Intangible Assets"
    ])
    
    return current_assets + non_current_assets