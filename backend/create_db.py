# backend/create_db.py
import sys
from pathlib import Path
from datetime import datetime, timedelta

# Add project root to Python path
sys.path.append(str(Path(__file__).parent.parent))

from backend.app import create_app
from backend.extension import db
from backend.models import User, ChartOfAccount

app = create_app()

def initialize_database():
    with app.app_context():
        try:
            # Create tables
            db.create_all()
            print("Database tables created!")

            # Create users
            create_users()
            
            # Create chart of accounts
            create_chart_of_accounts()

            db.session.commit()
            print("Database initialization complete!")
        except Exception as e:
            db.session.rollback()
            print(f"Error initializing database: {str(e)}")
            raise

def create_users():
    # Create admin user if not exists
    admin_data = {
        'username': 'admin',
        'password': 'admin123',  # Remember to hash in production!
        'is_admin': True,
        'role': 'super_admin'
    }
    create_user_if_not_exists(admin_data)

    # Create Bilal user
    bilal_data = {
        'username': 'Bilal',
        'password': 'bilal123@',
        'is_admin': True,
        'role': 'Group_Chief_accountant'
    }
    create_user_if_not_exists(bilal_data)

    # Create Abrar user
    abrar_data = {
        'username': 'Abrar',
        'password': 'viewerpass@',
        'is_admin': False,
        'role': 'viewer'
    }
    create_user_if_not_exists(abrar_data)

def create_user_if_not_exists(user_data):
    if not db.session.execute(db.select(User).filter_by(username=user_data['username'])).scalar():
        user = User(**user_data)
        db.session.add(user)
        print(f"Created user '{user_data['username']}' with role '{user_data['role']}'")
    else:
        print(f"User '{user_data['username']}' already exists")

def create_chart_of_accounts():
    if not db.session.execute(db.select(ChartOfAccount)).scalar():
        accounts = [
            {
                'level1': 'Assets',
                'level2': 'Current Assets',
                'level3': 'Cash and Cash Equivalents',
                'level4': 'Main Operating Account',
                'classification': 'Balance Sheet',
                'code': '1000.100.10.01',
                'description': 'Primary bank account',
                'account_name': 'Cash - Operating Account',
                'account_type': 'Asset',
                'normal_balance': 'Debit'
            },
            {
                'level1': 'Assets',
                'level2': 'Investments',
                'level3': 'Equity Investments',
                'level4': 'Public Stocks',
                'classification': 'Balance Sheet',
                'code': '1000.200.20.01',
                'description': 'Listed equity securities',
                'account_name': 'Investments - Public Equity',
                'account_type': 'Asset',
                'normal_balance': 'Debit'
            },
            # Add other accounts as needed
        ]
        
        for account_data in accounts:
            account = ChartOfAccount(**account_data)
            db.session.add(account)
        
        print("Initial Chart of Accounts data added.")

if __name__ == "__main__":
    initialize_database()