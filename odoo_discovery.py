# odoo_discovery_fixed.py
import os
import sys
import xmlrpc.client
from datetime import datetime
import logging
from dotenv import load_dotenv

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class OdooDiscoveryService:
    def __init__(self, url, db, username, password):
        self.url = url
        self.db = db
        self.username = username
        self.password = password
        self.uid = None
        self.models = None
        self._connect()
    
    def _connect(self):
        """Establish connection to Odoo"""
        try:
            common = xmlrpc.client.ServerProxy('{}/xmlrpc/2/common'.format(self.url))
            self.uid = common.authenticate(self.db, self.username, self.password, {})
            
            if not self.uid:
                raise Exception("Authentication failed")
                
            self.models = xmlrpc.client.ServerProxy('{}/xmlrpc/2/object'.format(self.url))
            logger.info("Successfully connected to Odoo for discovery")
            
        except Exception as e:
            logger.error(f"Failed to connect to Odoo: {str(e)}")
            raise
    
    def discover_models_via_data_access(self):
        """Discover models by trying to access common financial models"""
        financial_models = [
            'account.move', 'account.move.line', 'account.account',
            'account.journal', 'res.partner', 'product.product',
            'stock.move', 'purchase.order', 'sale.order',
            'account.payment', 'account.bank.statement'
        ]
        
        accessible_models = []
        
        for model_name in financial_models:
            try:
                # Try to search for records in this model
                record_ids = self.models.execute_kw(
                    self.db, self.uid, self.password,
                    model_name, 'search', [[]],
                    {'limit': 1}
                )
                
                accessible_models.append({
                    'model': model_name,
                    'name': model_name.replace('.', ' ').title(),
                    'accessible': True,
                    'record_count': len(record_ids) if isinstance(record_ids, list) else 0
                })
                logger.info(f"✓ Found accessible model: {model_name}")
                
            except xmlrpc.client.Fault as e:
                if "doesn't exist" in str(e):
                    # Model doesn't exist in this installation
                    accessible_models.append({
                        'model': model_name,
                        'name': model_name.replace('.', ' ').title(),
                        'accessible': False,
                        'reason': 'Model not installed'
                    })
                else:
                    # Permission error or other issue
                    accessible_models.append({
                        'model': model_name,
                        'name': model_name.replace('.', ' ').title(),
                        'accessible': False,
                        'reason': str(e)
                    })
                logger.info(f"✗ Cannot access model: {model_name} - {str(e)}")
            except Exception as e:
                accessible_models.append({
                    'model': model_name,
                    'name': model_name.replace('.', ' ').title(),
                    'accessible': False,
                    'reason': str(e)
                })
                logger.info(f"✗ Cannot access model: {model_name} - {str(e)}")
        
        return accessible_models
    
    def get_sample_data(self, model_name, limit=2):
        """Get sample data from a model"""
        try:
            # First search for records
            record_ids = self.models.execute_kw(
                self.db, self.uid, self.password,
                model_name, 'search', [[]],
                {'limit': limit}
            )
            
            if not record_ids:
                return []
            
            # Try to read records without specifying fields (let Odoo return default fields)
            records = self.models.execute_kw(
                self.db, self.uid, self.password,
                model_name, 'read', [record_ids]
            )
            
            return records
            
        except Exception as e:
            logger.warning(f"Cannot get sample data for {model_name}: {str(e)}")
            return []

def main():
    """Main function to discover Odoo structure"""
    # Load environment variables
    load_dotenv()
    
    ODOO_URL = os.environ.get('ODOO_URL')
    ODOO_DB_NAME = os.environ.get('ODOO_DB_NAME')
    ODOO_USERNAME = os.environ.get('ODOO_USERNAME')
    ODOO_PASSWORD = os.environ.get('ODOO_PASSWORD')
    
    if not all([ODOO_URL, ODOO_DB_NAME, ODOO_USERNAME, ODOO_PASSWORD]):
        print("❌ Missing Odoo environment variables. Please check your .env file")
        return
    
    try:
        discovery = OdooDiscoveryService(ODOO_URL, ODOO_DB_NAME, ODOO_USERNAME, ODOO_PASSWORD)
        
        print("🔍 Discovering Odoo Database Structure")
        print("=" * 60)
        
        # Use alternative method
        print("\nDiscovering accessible models...")
        accessible_models = discovery.discover_models_via_data_access()
        
        # Filter only accessible models
        working_models = [m for m in accessible_models if m.get('accessible')]
        
        print(f"\n✅ Found {len(working_models)} accessible models:")
        print("=" * 50)
        
        for model in working_models:
            print(f"• {model['model']}")
            print(f"  Records: {model['record_count']}")
            
            # Get sample data
            sample_data = discovery.get_sample_data(model['model'], 2)
            print(f"  Sample records: {len(sample_data)}")
            
            # Show sample data structure safely
            if sample_data and len(sample_data) > 0:
                if isinstance(sample_data, list) and len(sample_data) > 0:
                    if isinstance(sample_data[0], dict):
                        sample_record = sample_data[0]
                        sample_keys = list(sample_record.keys())[:5]  # Show first 5 keys
                        print(f"  Sample fields: {', '.join(sample_keys)}...")
                    else:
                        print(f"  Data format: {type(sample_data[0])}")
                else:
                    print(f"  Data format: {type(sample_data)}")
            
            print()
        
        # Save report
        with open('odoo_models_report_fixed.txt', 'w') as f:
            f.write("Odoo Database Structure Report\n")
            f.write("=" * 50 + "\n\n")
            f.write(f"Generated: {datetime.now()}\n")
            f.write(f"Total accessible models: {len(working_models)}\n\n")
            
            for model in working_models:
                f.write(f"Model: {model['model']}\n")
                f.write(f"Record count: {model['record_count']}\n")
                
                # Get sample data
                sample_data = discovery.get_sample_data(model['model'], 1)
                if sample_data and len(sample_data) > 0:
                    if isinstance(sample_data, list) and len(sample_data) > 0:
                        if isinstance(sample_data[0], dict):
                            sample_record = sample_data[0]
                            f.write("Sample data structure:\n")
                            for key, value in list(sample_record.items())[:10]:  # Show first 10 fields
                                value_type = type(value).__name__
                                if isinstance(value, (list, dict)):
                                    f.write(f"  - {key}: {value_type} (size: {len(value)})\n")
                                else:
                                    f.write(f"  - {key}: {value_type} = {value}\n")
                
                f.write("\n" + "-" * 50 + "\n\n")
        
        print(f"✅ Discovery complete. Report saved to 'odoo_models_report_fixed.txt'")
        
        # Show most important models for financial dashboard
        print("\n🎯 Key Models for Financial Dashboard:")
        print("=" * 40)
        key_models = ['account.move', 'account.move.line', 'account.account', 'res.partner']
        for model in key_models:
            accessible = any(m['model'] == model for m in working_models)
            status = "✅" if accessible else "❌"
            print(f"{status} {model}")
        
    except Exception as e:
        print(f"❌ Error during discovery: {str(e)}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    main()