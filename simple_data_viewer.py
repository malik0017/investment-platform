import os
import xmlrpc.client
import csv
from datetime import datetime
from dotenv import load_dotenv

load_dotenv()

def ensure_csv_folder():
    """Create Journal Items folder if it doesn't exist"""
    if not os.path.exists('Journal Items'):
        os.makedirs('Journal Items')
        print("📁 Created 'Journal Items' folder")

def list_all_tables_and_fields():
    """List all available tables and their fields"""
    url = os.environ.get('ODOO_URL')
    db = os.environ.get('ODOO_DB_NAME')
    username = os.environ.get('ODOO_USERNAME')
    password = os.environ.get('ODOO_PASSWORD')
    
    print("Connecting to Odoo to fetch all tables and fields...")
    
    try:
        # Establish connection
        common = xmlrpc.client.ServerProxy(f'{url}/xmlrpc/2/common')
        uid = common.authenticate(db, username, password, {})
        
        if not uid:
            print("❌ Authentication failed")
            return
            
        models = xmlrpc.client.ServerProxy(f'{url}/xmlrpc/2/object')
        print("✅ Connected to Odoo successfully")
        
        # Get all models (tables)
        all_models = models.execute_kw(
            db, uid, password,
            'ir.model', 'search_read',
            [[]],
            {'fields': ['model', 'name']}
        )
        
        print(f"📊 Found {len(all_models)} tables")
        print("\n" + "="*80)
        
        # List tables and their fields
        for model in all_models[:20]:  # Show first 20 tables to avoid too much output
            model_name = model['model']
            model_display_name = model['name']
            
            print(f"\n📋 Table: {model_name}")
            print(f"📝 Display Name: {model_display_name}")
            
            try:
                # Get fields for this model
                fields = models.execute_kw(
                    db, uid, password,
                    model_name, 'fields_get',
                    [],
                    {'attributes': ['string', 'type']}
                )
                
                print(f"   Fields count: {len(fields)}")
                print("   Field names:", list(fields.keys())[:10])  # Show first 10 fields
                if len(fields) > 10:
                    print("   ... and", len(fields) - 10, "more fields")
                    
            except Exception as e:
                print(f"   ❌ Could not fetch fields: {e}")
            
            print("-" * 40)
        
        # Show specific model details for account.move.line
        print("\n" + "="*80)
        print("🔍 DETAILED VIEW FOR account.move.line:")
        print("="*80)
        
        try:
            move_line_fields = models.execute_kw(
                db, uid, password,
                'account.move.line', 'fields_get',
                [],
                {'attributes': ['string', 'type']}
            )
            
            print(f"Total fields in account.move.line: {len(move_line_fields)}")
            print("\nAll fields in account.move.line:")
            for i, (field_name, field_info) in enumerate(move_line_fields.items(), 1):
                field_type = field_info.get('type', 'unknown')
                field_string = field_info.get('string', 'No label')
                print(f"  {i:2d}. {field_name} ({field_type}) - {field_string}")
                
        except Exception as e:
            print(f"❌ Error fetching account.move.line fields: {e}")
            
    except Exception as e:
        print(f"❌ Error: {e}")
        import traceback
        traceback.print_exc()

def fetch_journal_entries():
    url = os.environ.get('ODOO_URL')
    db = os.environ.get('ODOO_DB_NAME')
    username = os.environ.get('ODOO_USERNAME')
    password = os.environ.get('ODOO_PASSWORD')
    
    print("Connecting to Odoo to fetch Journal Entries (account.move.line)...")
    
    try:
        # Establish connection
        common = xmlrpc.client.ServerProxy(f'{url}/xmlrpc/2/common')
        uid = common.authenticate(db, username, password, {})
        
        if not uid:
            print("❌ Authentication failed")
            return
            
        models = xmlrpc.client.ServerProxy(f'{url}/xmlrpc/2/object')
        print("✅ Connected to Odoo successfully")

        # First, get all available fields for account.move.line
        model_fields = models.execute_kw(
            db, uid, password,
            'account.move.line', 'fields_get',
            [],
            {'attributes': ['string', 'type']}
        )

        available_fields = list(model_fields.keys())
        print(f"📊 Available fields in account.move.line: {len(available_fields)}")
        
        # Define fields to fetch (excluding the ones you don't want)
        desired_fields = [
            'id', 'account_id', 'balance', 'credit', 'currency_id', 
            'date', 'debit', 'invoice_date', 'journal_id', 'name', 
            'move_name', 'tax_line_id', 'partner_id', 'ref', 
            'amount_residual', 'amount_residual_currency', 'tax_ids',
            'analytic_distribution', 'analytic_line_ids'  # Added analytic fields
        ]
        
        # Filter desired fields to only include available ones
        fields_to_fetch = [field for field in desired_fields if field in available_fields]
        
        # Check if any fields were filtered out
        missing_fields = set(desired_fields) - set(fields_to_fetch)
        if missing_fields:
            print(f"⚠️  These fields are not available and will be skipped: {missing_fields}")
        
        print(f"✅ Will fetch {len(fields_to_fetch)} fields: {fields_to_fetch}")
        
        # First, get the total count of records
        total_count = models.execute_kw(
            db, uid, password,
            'account.move.line', 'search_count', [[]]
        )
        
        print(f"Total Journal Entries found: {total_count}")
        
        if total_count == 0:
            print("No journal entries found!")
            return
        
        # Configure batch settings
        batch_size = 500
        all_entries = []
        
        print(f"Fetching in batches of {batch_size}...")
        
        # Fetch data in batches
        for offset in range(0, total_count, batch_size):
            print(f"Fetching batch: {offset} to {offset + batch_size}")
            
            # Get record IDs for this batch
            record_ids = models.execute_kw(
                db, uid, password,
                'account.move.line', 'search', 
                [[]],
                {'limit': batch_size, 'offset': offset}
            )
            
            if not record_ids:
                break
                
            # Fetch the actual data with specified fields
            batch_data = models.execute_kw(
                db, uid, password,
                'account.move.line', 'read',
                [record_ids],
                {'fields': fields_to_fetch}
            )
            
            all_entries.extend(batch_data)
            print(f"Retrieved {len(batch_data)} entries in this batch")
            
            # Show progress
            progress = min(offset + batch_size, total_count)
            print(f"Progress: {progress}/{total_count} entries ({progress/total_count*100:.1f}%)")
        
        print(f"Total entries retrieved: {len(all_entries)}")
        
        # Ensure csv folder exists
        ensure_csv_folder()
        
        # Save to CSV file
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        filename = f'Journal Items/journal_entries_complete_{timestamp}.csv'
        
        if all_entries:
            # Define field mapping
            field_mapping = {
                'account_id': 'Account',
                'balance': 'Balance',
                'credit': 'Credit',
                'currency_id': 'Currency',
                'date': 'Date',
                'debit': 'Debit',
                'invoice_date': 'Invoice/Bill Date',
                'journal_id': 'Journal',
                'name': 'Label',
                'move_name': 'Number',
                'tax_line_id': 'Originator Tax',
                'partner_id': 'Partner',
                'ref': 'Reference',
                'amount_residual': 'Residual Amount',
                'amount_residual_currency': 'Residual Amount in Currency',
                'tax_ids': 'Taxes',
                'analytic_distribution': 'Analytic Distribution'
            }
            
            # Only include fields that we actually fetched
            field_mapping = {k: v for k, v in field_mapping.items() if k in fields_to_fetch}
            
            # Process entries
            processed_entries = []
            for entry in all_entries:
                processed_entry = {}
                
                # Map basic fields
                for odoo_field, csv_field in field_mapping.items():
                    value = entry.get(odoo_field, '')
                    
                    # Handle many2one fields (display name instead of ID)
                    if isinstance(value, list) and len(value) > 1:
                        processed_entry[csv_field] = value[1]  # Get the display name
                    elif isinstance(value, dict):
                        # Handle analytic distribution (convert dict to string)
                        processed_entry[csv_field] = str(value)
                    else:
                        processed_entry[csv_field] = value
                
                # Add analytic fields (these will be empty as they require special handling)
                analytic_fields = [
                    'Analytic lines/Amount', 'Analytic lines/Department', 
                    'Analytic lines/Employees', 'Analytic lines/HO',
                    'Analytic lines/Inter-companies', 'Analytic lines/Investment At Cost',
                    'Analytic lines/Investment At FV', 'Analytic lines/Investment At OCI',
                    'Analytic lines/Investment In Fund', 'Analytic lines/Project Location',
                    'Analytic lines/Projects', 'Analytic lines/Qaysirayah',
                    'Analytic lines/RTS', 'Analytic lines/Shareholders', 'Analytic lines/Trading'
                ]
                
                for field in analytic_fields:
                    processed_entry[field] = ''  # Empty for now
                
                processed_entries.append(processed_entry)
            
            # Define the exact column order
            base_fieldnames = list(field_mapping.values())
            
            analytic_fieldnames = [
                'Analytic lines/Amount', 'Analytic lines/Department', 'Analytic lines/Employees', 
                'Analytic lines/HO', 'Analytic lines/Inter-companies', 'Analytic lines/Investment At Cost', 
                'Analytic lines/Investment At FV', 'Analytic lines/Investment At OCI', 
                'Analytic lines/Investment In Fund', 'Analytic lines/Project Location', 
                'Analytic lines/Projects', 'Analytic lines/Qaysirayah', 'Analytic lines/RTS', 
                'Analytic lines/Shareholders', 'Analytic lines/Trading'
            ]
            
            fieldnames = base_fieldnames + analytic_fieldnames
            
            with open(filename, 'w', newline='', encoding='utf-8') as csvfile:
                writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
                writer.writeheader()
                writer.writerows(processed_entries)
            
            print(f"✅ Data saved to: {filename}")
            print(f"📊 Total records: {len(all_entries)}")
            
            # Show sample of the data
            print("\n📋 Sample of first 3 entries:")
            print("=" * 100)
            for i, entry in enumerate(processed_entries[:2]):
                print(f"Entry {i+1}:")
                for key, value in list(entry.items())[10]:  # Show first 5 fields
                    print(f"  {key}: {value}")
                print("-" * 40)
                
        else:
            print("No data was retrieved")
            
    except Exception as e:
        print(f"❌ Error: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    # Ensure csv folder exists
    ensure_csv_folder()
    
    # First, list all tables and fields
    list_all_tables_and_fields()
    
    print("\n" + "="*80)
    print("STARTING JOURNAL ENTRIES FETCH...")
    print("="*80)
    
    # Then fetch all journal entries
    fetch_journal_entries()