from flask import Blueprint, render_template, jsonify, request
from backend.services.odoo_service import OdooService

odoo_bp = Blueprint('odoo', __name__)

@odoo_bp.route('/odoo-data')
def odoo_data():
    odoo_service = OdooService()
    
    journal_entries = odoo_service.get_journal_entries()
    chart_of_accounts = odoo_service.get_chart_of_accounts()
    gl_transactions = odoo_service.get_gl_transactions()
    partners = odoo_service.get_partners()
    
    return render_template('odoo_data.html', 
                         journal_entries=journal_entries,
                         chart_of_accounts=chart_of_accounts,
                         gl_transactions=gl_transactions,
                         partners=partners)

# Routes for detailed views
@odoo_bp.route('/journal-entries')
def journal_entries_detailed():
    page = request.args.get('page', 1, type=int)
    per_page = request.args.get('per_page', 50, type=int)
    
    odoo_service = OdooService()
    journal_data = odoo_service.get_paginated_journal_entries(page, per_page)
    
    return render_template('detailed_view.html', 
                         data=journal_data, 
                         title="Journal Entries - Detailed View")

@odoo_bp.route('/chart-of-accounts')
def chart_of_accounts_detailed():
    page = request.args.get('page', 1, type=int)
    per_page = request.args.get('per_page', 50, type=int)
    
    odoo_service = OdooService()
    accounts_data = odoo_service.get_paginated_chart_of_accounts(page, per_page)
    
    return render_template('detailed_view.html', 
                         data=accounts_data, 
                         title="Chart of Accounts - Detailed View")

@odoo_bp.route('/gl-transactions')
def gl_transactions_detailed():
    page = request.args.get('page', 1, type=int)
    per_page = request.args.get('per_page', 50, type=int)
    
    odoo_service = OdooService()
    gl_data = odoo_service.get_paginated_gl_transactions(page, per_page)
    
    return render_template('detailed_view.html', 
                         data=gl_data, 
                         title="GL Transactions - Detailed View")

@odoo_bp.route('/partners')
def partners_detailed():
    page = request.args.get('page', 1, type=int)
    per_page = request.args.get('per_page', 50, type=int)
    
    odoo_service = OdooService()
    partners_data = odoo_service.get_paginated_partners(page, per_page)
    
    return render_template('detailed_view.html', 
                         data=partners_data, 
                         title="Partners - Detailed View")

@odoo_bp.route('/api/odoo-data')
def api_odoo_data():
    odoo_service = OdooService()
    
    journal_entries = odoo_service.get_journal_entries()
    chart_of_accounts = odoo_service.get_chart_of_accounts()
    gl_transactions = odoo_service.get_gl_transactions()
    partners = odoo_service.get_partners()
    
    return jsonify({
        'journal_entries': journal_entries,
        'chart_of_accounts': chart_of_accounts,
        'gl_transactions': gl_transactions,
        'partners': partners
    })

# API endpoints for paginated data
@odoo_bp.route('/api/journal-entries')
def api_journal_entries():
    page = request.args.get('page', 1, type=int)
    per_page = request.args.get('per_page', 50, type=int)
    
    odoo_service = OdooService()
    journal_data = odoo_service.get_paginated_journal_entries(page, per_page)
    
    return jsonify(journal_data)

@odoo_bp.route('/api/chart-of-accounts')
def api_chart_of_accounts():
    page = request.args.get('page', 1, type=int)
    per_page = request.args.get('per_page', 50, type=int)
    
    odoo_service = OdooService()
    accounts_data = odoo_service.get_paginated_chart_of_accounts(page, per_page)
    
    return jsonify(accounts_data)

@odoo_bp.route('/api/gl-transactions')
def api_gl_transactions():
    page = request.args.get('page', 1, type=int)
    per_page = request.args.get('per_page', 50, type=int)
    
    odoo_service = OdooService()
    gl_data = odoo_service.get_paginated_gl_transactions(page, per_page)
    
    return jsonify(gl_data)

@odoo_bp.route('/api/partners')
def api_partners():
    page = request.args.get('page', 1, type=int)
    per_page = request.args.get('per_page', 50, type=int)
    
    odoo_service = OdooService()
    partners_data = odoo_service.get_paginated_partners(page, per_page)
    
    return jsonify(partners_data)