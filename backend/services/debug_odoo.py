import xmlrpc.client
import os
import time
from dotenv import load_dotenv
from typing import Dict, List, Tuple, Any, Optional
from collections import defaultdict
from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker

# Load environment variables
load_dotenv()

class OdooGLTransactionImporter:
    def __init__(self):
        self.url = os.getenv('ODOO_URL')
        self.db = os.getenv('ODOO_DB_NAME')
        self.username = os.getenv('ODOO_USERNAME')
        self.password = os.getenv('ODOO_PASSWORD')
        self.models = None
        self.uid = None
        self.analytic_account_map = {}
        self.cache = {
            'companies': {},
            'accounts': {},
            'partners': {},
            'moves': {},
            'users': {}
        }
        
        # MySQL database connection
        self.mysql_engine = create_engine(os.getenv('DATABASE_URL', 'mysql+pymysql://root:@127.0.0.1:3306/investment_db'))
        self.Session = sessionmaker(bind=self.mysql_engine)
        
    def connect(self) -> bool:
        """Establish connection to Odoo"""
        try:
            print("🔗 Connecting to Odoo...")
            common = xmlrpc.client.ServerProxy(f'{self.url}/xmlrpc/2/common')
            self.uid = common.authenticate(self.db, self.username, self.password, {})
            self.models = xmlrpc.client.ServerProxy(f'{self.url}/xmlrpc/2/object')
            print("✅ Connected to Odoo successfully")
            return True
        except Exception as e:
            print(f"❌ Connection failed: {e}")
            return False
    
    def preload_reference_data(self):
        """Preload all reference data to avoid individual API calls"""
        print("📦 Preloading reference data...")
        
        # Preload companies
        company_ids = self.models.execute_kw(
            self.db, self.uid, self.password,
            'res.company', 'search', [[]]
        )
        companies = self.models.execute_kw(
            self.db, self.uid, self.password,
            'res.company', 'read', [company_ids], {'fields': ['name']}
        )
        for company in companies:
            self.cache['companies'][company['id']] = company['name']
        print(f"   ✅ Preloaded {len(companies)} companies")
        
        # Preload accounts
        account_ids = self.models.execute_kw(
            self.db, self.uid, self.password,
            'account.account', 'search', [[]]
        )
        accounts = self.models.execute_kw(
            self.db, self.uid, self.password,
            'account.account', 'read', [account_ids], {'fields': ['name', 'code']}
        )
        for account in accounts:
            self.cache['accounts'][account['id']] = f"{account.get('code', '')} {account.get('name', '')}".strip()
        print(f"   ✅ Preloaded {len(accounts)} accounts")
        
        # Preload partners
        partner_ids = self.models.execute_kw(
            self.db, self.uid, self.password,
            'res.partner', 'search', [[]], {'limit': 10000}
        )
        partners = self.models.execute_kw(
            self.db, self.uid, self.password,
            'res.partner', 'read', [partner_ids], {'fields': ['name']}
        )
        for partner in partners:
            self.cache['partners'][partner['id']] = partner['name']
        print(f"   ✅ Preloaded {len(partners)} partners")
        
        # Preload moves (for status)
        print("   ⏳ Preloading moves for status information...")
        move_ids = self.models.execute_kw(
            self.db, self.uid, self.password,
            'account.move', 'search', [[]], {'limit': 50000}
        )
        moves = self.models.execute_kw(
            self.db, self.uid, self.password,
            'account.move', 'read', [move_ids], {'fields': ['name', 'state']}
        )
        for move in moves:
            self.cache['moves'][move['id']] = {
                'name': move.get('name', ''),
                'state': move.get('state', 'draft')
            }
        print(f"   ✅ Preloaded {len(moves)} moves with status")
        
        # Preload users
        user_ids = self.models.execute_kw(
            self.db, self.uid, self.password,
            'res.users', 'search', [[]]
        )
        users = self.models.execute_kw(
            self.db, self.uid, self.password,
            'res.users', 'read', [user_ids], {'fields': ['name']}
        )
        for user in users:
            self.cache['users'][user['id']] = user['name']
        print(f"   ✅ Preloaded {len(users)} users")
    
    def fetch_all_analytic_accounts(self) -> Dict[int, str]:
        """Fetch all analytic accounts from Odoo"""
        try:
            print("📋 Fetching analytic accounts...")
            analytic_ids = self.models.execute_kw(
                self.db, self.uid, self.password,
                'account.analytic.account', 'search', [[]]
            )
            
            # Fetch in one batch
            analytic_accounts = self.models.execute_kw(
                self.db, self.uid, self.password,
                'account.analytic.account', 'read', [analytic_ids], 
                {'fields': ['name', 'code', 'id']}
            )
            
            analytic_map = {}
            for account in analytic_accounts:
                account_name = account.get('name', account.get('code', f"Account {account['id']}"))
                analytic_map[account['id']] = account_name
            
            print(f"✅ Mapped {len(analytic_map)} analytic accounts")
            return analytic_map
            
        except Exception as e:
            print(f"⚠️ Error fetching analytic accounts: {e}")
            return {}
    
    def map_analytic_account_to_category(self, analytic_name: str) -> str:
        """Map analytic accounts to specific categories"""
        analytic_name_lower = analytic_name.lower()
        
        mapping_rules = {
            'saudi national bank': 'investment_at_fv',
            'united electronics': 'investment_at_fv',
            'sahara international petrochemical': 'investment_at_fv',
            'jarir marketing': 'investment_at_fv',
            'nahdi medical': 'investment_at_fv',
            'arch rashid': 'inter_companies',
            'ppc': 'inter_companies',
            'rts': 'inter_companies',
            'darajat': 'inter_companies',
            'food aroma': 'inter_companies',
            'sarpco': 'inter_companies',
            'akkadia it fund': 'investment_at_oci',
            'project': 'projects',
            'construction': 'projects',
            'development': 'projects',
            'employee': 'employees',
            'staff': 'employees',
            'head office': 'ho',
            'ho': 'ho',
            'manpower': 'manpower',
            'tamkeen': 'manpower',
        }
        
        for keyword, category in mapping_rules.items():
            if keyword in analytic_name_lower:
                return category
        
        return 'other'
    
    def fetch_gl_transactions_batch(self, offset=0, limit=1000):
        """Fetch GL transactions in batches"""
        try:
            # Only fetch posted transactions - no other filters
            domain = [('move_id.state', '=', 'posted')]
            
            records = self.models.execute_kw(
                self.db, self.uid, self.password,
                'account.move.line', 'search_read',
                [domain],
                {
                    'fields': [
                        'id', 'date', 'company_id', 'account_id', 'amount_currency',
                        'credit', 'debit', 'balance', 'name', 'move_id', 'partner_id',
                        'analytic_distribution', 'create_date', 'create_uid'
                    ],
                    'offset': offset,
                    'limit': limit,
                    'order': 'id'
                }
            )
            return records
        except Exception as e:
            print(f"❌ Error fetching batch {offset}: {e}")
            return []
    
    def get_cached_name(self, cache_type: str, record_id: int) -> str:
        """Get name from cache with fallback"""
        if not record_id:
            return "Unknown"
        return self.cache[cache_type].get(record_id, f"Unknown {cache_type}")
    
    def get_move_status(self, move_id: int) -> str:
        """Get move status from cache"""
        if not move_id:
            return "draft"
        move_data = self.cache['moves'].get(move_id, {})
        return move_data.get('state', 'draft')
    
    def get_move_name(self, move_id: int) -> str:
        """Get move name from cache"""
        if not move_id:
            return "Unknown"
        move_data = self.cache['moves'].get(move_id, {})
        return move_data.get('name', f"MOV{move_id}")
    
    def map_status_display(self, status: str) -> str:
        """Map Odoo status codes to display names"""
        status_map = {
            'posted': 'Posted'
        }
        return status_map.get(status, status.title())
    
    def clear_existing_data(self, db_session):
        """Delete all existing data from gl_transactions table"""
        try:
            print("🗑️ Clearing existing data from gl_transactions table...")
            result = db_session.execute(text("DELETE FROM gl_transactions"))
            db_session.commit()
            print(f"✅ Deleted {result.rowcount} existing records")
            return True
        except Exception as e:
            db_session.rollback()
            print(f"❌ Error clearing existing data: {e}")
            return False
    
    def process_transactions_to_mysql(self):
        """Process all GL transactions and import to MySQL database"""
        if not self.connect():
            return False
        
        start_time = time.time()
        
        # Preload all reference data first
        self.preload_reference_data()
        
        # Fetch analytic accounts
        self.analytic_account_map = self.fetch_all_analytic_accounts()
        
        # Create database session
        db_session = self.Session()
        
        try:
            # Clear existing data before import
            if not self.clear_existing_data(db_session):
                return False
            
            # Process in larger batches
            batch_size = 1000
            offset = 0
            total_processed = 0
            batch_number = 1
            new_records_count = 0
            
            print("🚀 Starting data import to MySQL...")
            
            while True:
                batch_start = time.time()
                
                # Fetch all posted transactions
                records = self.fetch_gl_transactions_batch(offset, batch_size)
                if not records:
                    break
                
                # Process batch
                processed_count = 0
                
                for record in records:
                    processed_record = self._process_single_record(record)
                    if processed_record:
                        # Insert record
                        sql = text("""
                            INSERT INTO gl_transactions (
                                odoo_id, transaction_date, company, account_code, account_name,
                                credit, debit, balance, label, document_number, partner,
                                analytic_amount, analytic_category, analytic_account_names,
                                analytic_distribution, analytic_department, analytic_employees,
                                analytic_inter_companies, analytic_investment_at_cost,
                                analytic_investment_at_fv, analytic_investment_at_oci,
                                analytic_investment_in_fund, analytic_projects, analytic_shareholders,
                                created_at, user_id, status
                            ) VALUES (
                                :odoo_id, :transaction_date, :company, :account_code, :account_name,
                                :credit, :debit, :balance, :label, :document_number, :partner,
                                :analytic_amount, :analytic_category, :analytic_account_names,
                                :analytic_distribution, :analytic_department, :analytic_employees,
                                :analytic_inter_companies, :analytic_investment_at_cost,
                                :analytic_investment_at_fv, :analytic_investment_at_oci,
                                :analytic_investment_in_fund, :analytic_projects, :analytic_shareholders,
                                :created_at, :user_id, :status
                            )
                        """)
                        
                        # Execute the insert
                        result = db_session.execute(sql, {
                            'odoo_id': processed_record.get('odoo_id', ''),
                            'transaction_date': processed_record.get('transaction_date', ''),
                            'company': processed_record.get('company', ''),
                            'account_code': processed_record.get('account_code', ''),
                            'account_name': processed_record.get('account_name', ''),
                            'credit': float(processed_record.get('credit', 0)),
                            'debit': float(processed_record.get('debit', 0)),
                            'balance': float(processed_record.get('balance', 0)),
                            'label': processed_record.get('label', ''),
                            'document_number': processed_record.get('document_number', ''),
                            'partner': processed_record.get('partner', ''),
                            'analytic_amount': float(processed_record.get('analytic_amount', 0)),
                            'analytic_category': processed_record.get('analytic_category', ''),
                            'analytic_account_names': processed_record.get('analytic_account_names', ''),
                            'analytic_distribution': processed_record.get('analytic_distribution', ''),
                            'analytic_department': processed_record.get('analytic_department', ''),
                            'analytic_employees': processed_record.get('analytic_employees', ''),
                            'analytic_inter_companies': processed_record.get('analytic_inter_companies', ''),
                            'analytic_investment_at_cost': processed_record.get('analytic_investment_at_cost', ''),
                            'analytic_investment_at_fv': processed_record.get('analytic_investment_at_fv', ''),
                            'analytic_investment_at_oci': processed_record.get('analytic_investment_at_oci', ''),
                            'analytic_investment_in_fund': processed_record.get('analytic_investment_in_fund', ''),
                            'analytic_projects': processed_record.get('analytic_projects', ''),
                            'analytic_shareholders': processed_record.get('analytic_shareholders', ''),
                            'created_at': processed_record.get('created_at', ''),
                            'user_id': processed_record.get('user_id', ''),
                            'status': processed_record.get('status', '')
                        })
                        
                        if result.rowcount > 0:
                            new_records_count += 1
                        
                        processed_count += 1
                
                # Commit after each batch
                db_session.commit()
                
                batch_time = time.time() - batch_start
                total_processed += len(records)
                
                # Progress update
                print(f"📦 Batch {batch_number}: {total_processed:,} records processed | "
                      f"{len(records)} records in {batch_time:.1f}s")
                
                if len(records) < batch_size:
                    break
                    
                offset += batch_size
                batch_number += 1
        
        except Exception as e:
            db_session.rollback()
            print(f"❌ Error during database operation: {e}")
            return False
        
        finally:
            db_session.close()
        
        total_time = time.time() - start_time
        print(f"🎉 Import completed!")
        print(f"📊 Total records processed: {total_processed:,}")
        print(f"📊 New records added: {new_records_count:,}")
        print(f"⏱️ Total time: {total_time:.1f} seconds")
        if total_time > 0:
            print(f"📈 Speed: {total_processed/total_time:.1f} records/second")
        print(f"💾 Data successfully added to MySQL gl_transactions table")
        
        return True
    
    def _process_single_record(self, record: Dict) -> Dict:
        """Process a single GL transaction record efficiently"""
        try:
            # Get IDs from record
            company_id = record.get('company_id', [0])[0] if record.get('company_id') else 0
            account_id = record.get('account_id', [0])[0] if record.get('account_id') else 0
            partner_id = record.get('partner_id', [0])[0] if record.get('partner_id') else 0
            move_id = record.get('move_id', [0])[0] if record.get('move_id') else 0
            user_id = record.get('create_uid', [0])[0] if record.get('create_uid') else 0
            
            # Get names from cache (fast)
            company_name = self.get_cached_name('companies', company_id)
            account_full = self.get_cached_name('accounts', account_id)
            partner_name = self.get_cached_name('partners', partner_id)
            user_name = self.get_cached_name('users', user_id)
            
            # Get move information including status
            move_number = self.get_move_name(move_id)
            move_status = self.get_move_status(move_id)
            status_display = self.map_status_display(move_status)
            
            # Skip if status is not Posted
            if status_display != 'Posted':
                return None
            
            # Split account info
            account_parts = account_full.split(' ', 1)
            account_code = account_parts[0] if account_parts else "Unknown"
            account_name = account_parts[1] if len(account_parts) > 1 else account_full
            
            # Process analytic distribution
            analytic_dist = record.get('analytic_distribution', {})
            analytic_info = self._process_analytic_distribution(analytic_dist)
            
            return {
                'odoo_id': record.get('id', ''),
                'transaction_date': record.get('date', ''),
                'company': company_name,
                'account_code': account_code,
                'account_name': account_name,
                'credit': float(record.get('credit', 0)),
                'debit': float(record.get('debit', 0)),
                'balance': float(record.get('balance', 0)),
                'label': record.get('name', ''),
                'document_number': move_number,
                'partner': partner_name,
                'analytic_amount': float(record.get('amount_currency', 0)),
                'analytic_distribution': str(analytic_dist),
                'analytic_category': analytic_info['category'],
                'analytic_account_names': analytic_info['names'],
                'analytic_department': analytic_info['department'],
                'analytic_employees': analytic_info['employees'],
                'analytic_inter_companies': analytic_info['inter_companies'],
                'analytic_investment_at_cost': analytic_info['investment_at_cost'],
                'analytic_investment_at_fv': analytic_info['investment_at_fv'],
                'analytic_investment_at_oci': analytic_info['investment_at_oci'],
                'analytic_investment_in_fund': analytic_info['investment_in_fund'],
                'analytic_projects': analytic_info['projects'],
                'analytic_shareholders': analytic_info['shareholders'],
                'analytic_ho': analytic_info['ho'],
                'analytic_manpower': analytic_info['manpower'],
                'created_at': record.get('create_date', ''),
                'user_id': 1,
                'status': status_display
            }
            
        except Exception as e:
            print(f"⚠️ Error processing record {record.get('id')}: {e}")
            return None
    
    def _process_analytic_distribution(self, analytic_dist: Dict) -> Dict:
        """Process analytic distribution efficiently"""
        categories = defaultdict(list)
        analytic_names = []
        main_category = 'none'
        
        if analytic_dist:
            for analytic_id_str in analytic_dist.keys():
                try:
                    analytic_id = int(analytic_id_str)
                    analytic_name = self.analytic_account_map.get(analytic_id)
                    if analytic_name:
                        analytic_names.append(analytic_name)
                        category = self.map_analytic_account_to_category(analytic_name)
                        categories[category].append(analytic_name)
                        
                        if main_category == 'none' and category != 'other':
                            main_category = category
                except (ValueError, TypeError):
                    continue
        
        if main_category == 'none' and analytic_names:
            main_category = 'other'
        
        # Convert lists to strings
        result = {'category': main_category, 'names': ', '.join(analytic_names)}
        for category in ['department', 'employees', 'inter_companies', 'investment_at_cost',
                        'investment_at_fv', 'investment_at_oci', 'investment_in_fund',
                        'projects', 'shareholders', 'ho', 'manpower']:
            result[category] = ', '.join(categories[category])
        
        return result

def main():
    """Main execution function"""
    print("=== ODOO GL TRANSACTION IMPORTER ===")
    print("Starting MySQL import process...\n")
    
    importer = OdooGLTransactionImporter()
    success = importer.process_transactions_to_mysql()
    
    if success:
        print("\n✅ Import completed successfully!")
    else:
        print("\n❌ Import failed!")

if __name__ == "__main__":
    main()