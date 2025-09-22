import xmlrpc.client
import os
from dotenv import load_dotenv

load_dotenv()

class OdooService:
    def __init__(self):
        self.url = os.getenv('ODOO_URL')
        self.db = os.getenv('ODOO_DB_NAME')
        self.username = os.getenv('ODOO_USERNAME')
        self.password = os.getenv('ODOO_PASSWORD')
        self.common = None
        self.models = None
        self.uid = None
        self.version = None
        
    def connect(self):
        try:
            self.common = xmlrpc.client.ServerProxy('{}/xmlrpc/2/common'.format(self.url))
            self.uid = self.common.authenticate(self.db, self.username, self.password, {})
            
            if not self.uid:
                return False
                
            self.models = xmlrpc.client.ServerProxy('{}/xmlrpc/2/object'.format(self.url))
            
            # Get Odoo version
            try:
                version_info = self.common.version()
                self.version = version_info.get('server_version', 'unknown')
                print(f"Connected to Odoo version: {self.version}")
            except:
                self.version = 'unknown'
                
            return True
            
        except Exception as e:
            print(f"Connection error: {e}")
            return False
    
    def get_available_fields(self, model_name):
        """Get all available fields for a model"""
        try:
            fields_info = self.models.execute_kw(
                self.db, self.uid, self.password,
                model_name, 'fields_get',
                [], {'attributes': ['string', 'type', 'relation']}
            )
            return list(fields_info.keys())
        except Exception as e:
            print(f"Error getting fields for {model_name}: {e}")
            return ['id', 'name']  # Fallback to basic fields
    
    def get_compatible_fields(self, model_name, desired_fields):
        """Return only the fields that exist in the current Odoo version"""
        available_fields = self.get_available_fields(model_name)
        compatible_fields = []
        
        for field in desired_fields:
            if field in available_fields:
                compatible_fields.append(field)
            else:
                print(f"Field '{field}' not available in {model_name} for Odoo {self.version}")
        
        return compatible_fields
    
    def get_model_data(self, model_name, fields=None, limit=10):
        if not self.connect():
            return {"error": "Could not connect to Odoo"}
        
        try:
            # Get all fields for the model
            all_fields = self.models.execute_kw(
                self.db, self.uid, self.password,
                model_name, 'fields_get',
                [], {'attributes': ['string', 'type', 'relation']}
            )
            
            if not fields:
                field_names = list(all_fields.keys())
            else:
                # Filter out fields that don't exist
                field_names = self.get_compatible_fields(model_name, fields)
            
            # Get total count
            count = self.models.execute_kw(
                self.db, self.uid, self.password,
                model_name, 'search_count', [[]]
            )
            
            # Get sample records
            sample_records = []
            if count > 0:
                sample_records = self.models.execute_kw(
                    self.db, self.uid, self.password,
                    model_name, 'search_read',
                    [[]], {'fields': field_names[:10], 'limit': limit}
                )
            
            return {
                "total_count": count,
                "fields": all_fields,
                "sample_records": sample_records
            }
            
        except Exception as e:
            return {"error": str(e)}
    
    # Generic method to get paginated data
    def get_paginated_data(self, model_name, page=1, per_page=50, fields=None, order='id desc'):
        if not self.connect():
            return {"error": "Could not connect to Odoo"}
        
        try:
            # Calculate offset for pagination
            offset = (page - 1) * per_page
            
            # Get field names if not specified
            if not fields:
                all_fields = self.models.execute_kw(
                    self.db, self.uid, self.password,
                    model_name, 'fields_get',
                    [], {'attributes': ['string', 'type', 'relation']}
                )
                field_names = list(all_fields.keys())
            else:
                # Filter out fields that don't exist
                field_names = self.get_compatible_fields(model_name, fields)
            
            # Get total count
            count = self.models.execute_kw(
                self.db, self.uid, self.password,
                model_name, 'search_count', [[]]
            )
            
            # Get paginated records
            records = []
            if count > 0:
                records = self.models.execute_kw(
                    self.db, self.uid, self.password,
                    model_name, 'search_read',
                    [[]], {
                        'fields': field_names,
                        'limit': per_page,
                        'offset': offset,
                        'order': order
                    }
                )
            
            # Calculate total pages
            total_pages = (count + per_page - 1) // per_page
            
            return {
                "records": records,
                "total_count": count,
                "current_page": page,
                "per_page": per_page,
                "total_pages": total_pages,
                "fields": field_names,
                "model_name": model_name
            }
            
        except Exception as e:
            return {"error": str(e)}
    
    def get_journal_entries(self):
        return self.get_model_data('account.move')
    
    def get_chart_of_accounts(self):
        return self.get_model_data('account.account')
    
    def get_gl_transactions(self):
        return self.get_model_data('account.move.line')
    
    def get_partners(self):
        return self.get_model_data('res.partner')
    
    # Paginated methods for all models
    def get_paginated_journal_entries(self, page=1, per_page=50):
        # Define fields that work across Odoo versions
        desired_fields = [
            'id', 'name', 'date', 'journal_id', 'state', 'amount_total',
            'ref', 'partner_id', 'invoice_date', 'invoice_date_due',
            'invoice_origin', 'move_type'
        ]
        
        # Add version-specific payment state field
        if self.version and self.version.startswith(('16', '17')):
            desired_fields.append('payment_state')  # Odoo 16+ uses payment_state
        else:
            desired_fields.append('invoice_payment_state')  # Older versions
            
        return self.get_paginated_data('account.move', page, per_page, desired_fields, 'date desc, id desc')
    
    def get_paginated_chart_of_accounts(self, page=1, per_page=50):
        desired_fields = [
            'id', 'name', 'code', 'reconcile', 'company_id',
            'group_id', 'currency_id', 'deprecated'
        ]
        
        # Add version-specific account type field
        if self.version and self.version.startswith(('13', '14', '15', '16', '17')):
            desired_fields.append('account_type')  # Odoo 13+ uses account_type
        else:
            desired_fields.append('user_type_id')  # Older versions
            
        desired_fields.append('internal_group')  # Common field
            
        return self.get_paginated_data('account.account', page, per_page, desired_fields, 'code')
    
    def get_paginated_gl_transactions(self, page=1, per_page=50):
        desired_fields = [
            'id', 'name', 'date', 'move_id', 'account_id', 'partner_id',
            'debit', 'credit', 'balance', 'amount_currency', 'currency_id',
            'journal_id', 'ref', 'full_reconcile_id'
        ]
        
        # Add version-specific analytic field
        if self.version and self.version.startswith(('16', '17')):
            desired_fields.append('analytic_distribution')  # Odoo 16+ uses analytic_distribution
        else:
            desired_fields.append('analytic_account_id')  # Older versions
            
        return self.get_paginated_data('account.move.line', page, per_page, desired_fields, 'date desc, id desc')
    
    def get_paginated_partners(self, page=1, per_page=50):
        desired_fields = [
            'id', 'name', 'email', 'phone', 'mobile', 'street', 'city',
            'country_id', 'category_id', 'company_type', 'vat', 'ref',
            'commercial_company_name', 'commercial_partner_id', 'credit_limit'
        ]
        
        return self.get_paginated_data('res.partner', page, per_page, desired_fields, 'name')