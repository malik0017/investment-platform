# backend/upload_excel_data.py
import os
import sys
from datetime import datetime
import re

# Check for required dependencies before proceeding
try:
    import pandas as pd
    import mysql.connector
    from mysql.connector import Error
except ImportError as e:
    print(f"Missing required dependency: {e}")
    print("Please install the required packages:")
    print("pip install pandas mysql-connector-python openpyxl")
    sys.exit(1)

class ExcelToDBUploader:
    def __init__(self, db_config):
        self.db_config = db_config
        self.connection = None
        self.companies_mapping = {
            'RSR': 'rsr_data',
            'RTCC': 'rtcc_data', 
            'SMC': 'smc_data',
            'SSEM': 'ssem_data',
            'Razin': 'razin_data',
            'Rafaya': 'rafaya_data',
            'PPC': 'ppc_data',
            'G.Chicken': 'g_chicken_data',
            'Bayan': 'bayan_data',
            'Abetong': 'abetong_data',
            'Food Aroma': 'food_aroma',
            'Impulse': 'impulse_data',
            'Marooj': 'marooj_data'
        }
    
    def connect_to_db(self):
        """Establish database connection"""
        try:
            self.connection = mysql.connector.connect(**self.db_config)
            print("Connected to MySQL database")
            return True
        except Error as e:
            print(f"Error connecting to MySQL: {e}")
            return False
    
    def disconnect_from_db(self):
        """Close database connection"""
        if self.connection and self.connection.is_connected():
            self.connection.close()
            print("Database connection closed")
    
    def extract_year_from_column(self, column_header):
        """Extract year from column header like 'December 31,2023' or '31 December 2024'"""
        if pd.isna(column_header):
            return None
        
        # Convert to string and clean
        header_str = str(column_header).strip()
        
        # Pattern for various date formats
        patterns = [
            r'(\d{4})',  # Simple 4-digit year
            r'(\d{2})$',  # 2-digit year at end
            r'(\d{4})\s*$',  # 4-digit year at end
            r'\b(20\d{2})\b',  # 20XX pattern
        ]
        
        for pattern in patterns:
            match = re.search(pattern, header_str)
            if match:
                year = match.group(1)
                if len(year) == 2:
                    return int("20" + year)  # Convert YY to YYYY
                elif len(year) == 4:
                    return int(year)
        
        return None
    
    def clean_account_item(self, item):
        """Clean account item names"""
        if pd.isna(item):
            return None
        
        item_str = str(item).strip()
        
        # Skip empty items or items that are clearly not account names
        if not item_str or item_str in ['', '=', '0']:
            return None
        
        # Remove Excel formulas and special characters
        item_str = re.sub(r'^=.*', '', item_str)  # Remove formulas starting with =
        item_str = re.sub(r'<br>', ' ', item_str)  # Replace <br> with space
        item_str = re.sub(r'\s+', ' ', item_str)  # Replace multiple spaces with single space
        
        cleaned = item_str.strip()
        
        # Skip if it's just a number or very short meaningless text
        if len(cleaned) < 2 or cleaned.isdigit():
            return None
            
        return cleaned
    
    def find_account_items_column(self, sheet_data):
        """Find the column that contains account items"""
        # Look for common financial statement item patterns
        financial_keywords = [
            'ASSETS', 'LIABILITIES', 'EQUITY', 'REVENUE', 'EXPENSE', 
            'PROFIT', 'LOSS', 'CASH', 'INVENTORY', 'PROPERTY'
        ]
        
        # Check each column for financial keywords
        for col_idx, col_name in enumerate(sheet_data.columns):
            if pd.isna(col_name):
                continue
                
            col_str = str(col_name).upper()
            # If column is empty or looks like a description column
            if not col_str or col_str in ['', 'DISCRIPTION', 'DESCRIPTION', 'ACCOUNT', 'ITEMS']:
                return col_idx
        
        # If no obvious column found, assume first column contains account items
        return 0
    
    def find_year_columns(self, sheet_data, account_col_idx):
        """Find columns that contain year data"""
        year_columns = []
        
        for col_idx, col_name in enumerate(sheet_data.columns):
            if col_idx <= account_col_idx:
                continue
                
            year = self.extract_year_from_column(col_name)
            if year:
                year_columns.append((col_idx, year, col_name))
        
        return year_columns
    
    def process_sheet_data(self, sheet_name, sheet_data):
        """Process data from a single sheet"""
        processed_data = []
        
        # Get the table name for this company
        table_name = self.companies_mapping.get(sheet_name)
        if not table_name:
            print(f"No table mapping found for company: {sheet_name}")
            return processed_data
        
        print(f"Processing {sheet_name} -> {table_name}")
        
        # Find account items column
        account_col_idx = self.find_account_items_column(sheet_data)
        print(f"Account items column: {account_col_idx}")
        
        # Find year columns
        year_columns = self.find_year_columns(sheet_data, account_col_idx)
        
        if not year_columns:
            print(f"Could not find year columns for {sheet_name}")
            return processed_data
        
        print(f"Found {len(year_columns)} year columns: {[year for _, year, _ in year_columns]}")
        
        # Process each row
        for idx, row in sheet_data.iterrows():
            account_item = self.clean_account_item(row.iloc[account_col_idx])
            
            if not account_item:
                continue
            
            # Process each year column
            for col_idx, year, col_name in year_columns:
                amount = row.iloc[col_idx]
                
                # Convert amount to numeric, handling various formats
                if pd.notna(amount) and str(amount).strip() not in ['', '=', '0']:
                    try:
                        # Remove commas and convert to float
                        amount_str = str(amount).replace(',', '').strip()
                        
                        # Skip formulas and text values
                        if (amount_str and not amount_str.startswith('=') and 
                            not amount_str.startswith('SUM(') and
                            not amount_str.isalpha()):
                            
                            amount_value = float(amount_str)
                            
                            processed_data.append({
                                'company_name': sheet_name,
                                'financial_year': year,
                                'account_item': account_item,
                                'amount': amount_value,
                                'table_name': table_name
                            })
                    except (ValueError, TypeError) as e:
                        # Skip invalid amounts
                        continue
        
        print(f"Processed {len(processed_data)} records for {sheet_name}")
        return processed_data
    
    def upload_to_database(self, data):
        """Upload processed data to database"""
        if not data:
            print("No data to upload")
            return
        
        cursor = self.connection.cursor()
        
        try:
            # Group data by table
            data_by_table = {}
            for record in data:
                table_name = record['table_name']
                if table_name not in data_by_table:
                    data_by_table[table_name] = []
                data_by_table[table_name].append(record)
            
            total_inserted = 0
            
            for table_name, records in data_by_table.items():
                print(f"Uploading {len(records)} records to {table_name}")
                
                # Clear existing data for this company to avoid duplicates
                delete_query = f"DELETE FROM {table_name} WHERE company_name = %s"
                cursor.execute(delete_query, (records[0]['company_name'],))
                
                insert_query = f"""
                    INSERT INTO {table_name} 
                    (company_name, financial_year, account_item, amount, created_at)
                    VALUES (%s, %s, %s, %s, %s)
                """
                
                batch_data = []
                for record in records:
                    batch_data.append((
                        record['company_name'],
                        record['financial_year'],
                        record['account_item'],
                        record['amount'],
                        datetime.now()
                    ))
                
                cursor.executemany(insert_query, batch_data)
                total_inserted += cursor.rowcount
                print(f"Uploaded {cursor.rowcount} records to {table_name}")
            
            self.connection.commit()
            print(f"Successfully uploaded {total_inserted} total records to database")
            
        except Error as e:
            print(f"Error uploading data: {e}")
            self.connection.rollback()
        finally:
            cursor.close()
    
    def upload_excel_file(self, excel_file_path):
        """Main method to upload Excel file data"""
        if not self.connect_to_db():
            return False
        
        try:
            print(f"Reading Excel file: {excel_file_path}")
            
            # Read all sheets with explicit engine specification
            all_sheets_data = pd.read_excel(excel_file_path, sheet_name=None, engine='openpyxl')
            
            print(f"Found {len(all_sheets_data)} sheets: {list(all_sheets_data.keys())}")
            
            all_processed_data = []
            
            for sheet_name, sheet_data in all_sheets_data.items():
                print(f"\n{'='*50}")
                print(f"Processing sheet: {sheet_name}")
                print(f"{'='*50}")
                
                # Skip sheets that don't have a table mapping
                if sheet_name not in self.companies_mapping:
                    print(f"Skipping sheet '{sheet_name}' - no table mapping")
                    continue
                
                processed_data = self.process_sheet_data(sheet_name, sheet_data)
                all_processed_data.extend(processed_data)
            
            # Upload to database
            self.upload_to_database(all_processed_data)
            
            return True
            
        except Exception as e:
            print(f"Error processing Excel file: {e}")
            import traceback
            traceback.print_exc()
            return False
        finally:
            self.disconnect_from_db()

# Configuration
def get_db_config():
    """Get database configuration from environment variables or use defaults"""
    return {
        'host': 'localhost',
        'database': 'investment_db',
        'user': 'root',
        'password': '',
        'port': 3306
    }

def check_dependencies():
    """Check if all required dependencies are installed"""
    try:
        import openpyxl
        print("✓ openpyxl is installed")
        return True
    except ImportError:
        print("✗ openpyxl is not installed")
        print("Please install it using: pip install openpyxl")
        return False

if __name__ == "__main__":
    print("Excel to Database Uploader")
    print("=" * 40)
    
    # Check dependencies first
    if not check_dependencies():
        sys.exit(1)
    
    # Update this path to your Excel file location
    excel_file_path = "../RSR And Associates Data.xlsx"
    
    if not os.path.exists(excel_file_path):
        print(f"Excel file not found at: {excel_file_path}")
        print("Current working directory:", os.getcwd())
        print("Files in current directory:", os.listdir('.'))
        print("Files in parent directory:", os.listdir('..'))
        sys.exit(1)
    else:
        print(f"✓ Excel file found: {excel_file_path}")
        uploader = ExcelToDBUploader(get_db_config())
        success = uploader.upload_excel_file(excel_file_path)
        
        if success:
            print("\n" + "="*50)
            print("Data upload completed successfully!")
            print("="*50)
        else:
            print("\n" + "="*50)
            print("Data upload failed!")
            print("="*50)