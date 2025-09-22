# backend/services/investment_services.py 
from dateutil.relativedelta import relativedelta
from datetime import date, datetime
from decimal import Decimal
from sqlalchemy import text
from ..extension import db
from datetime import datetime, timedelta

def get_investment_report(start_date=None, end_date=None):
    try:
        # Default to all time if no dates provided
        date_condition = ""
        params = {}
        
        if start_date and end_date:
            date_condition = "AND gl.transaction_date BETWEEN :start_date AND :end_date"
            params = {'start_date': start_date, 'end_date': end_date}
        
        query = text(f"""
            SELECT 
                CASE 
                    WHEN GROUPING(coa.level4) = 1 THEN coa.level3
                    ELSE coa.level4 
                END AS investment_category,
                SUM(gl.balance) AS total_balance
            FROM chart_of_accounts coa
            JOIN gl_transactions gl ON coa.code = gl.account_code
            WHERE coa.level3 = 'Investments'
              AND LOWER(coa.level4) LIKE 'investment%'
              {date_condition}
            GROUP BY coa.level3, coa.level4 WITH ROLLUP
            HAVING GROUPING(coa.level3) = 0
            ORDER BY 
                CASE WHEN GROUPING(coa.level4) = 1 THEN 0 ELSE 1 END,
                coa.level4;
        """) 

        result = db.session.execute(query, params).all()
        data = [dict(row._mapping) for row in result]

        return data

    except Exception as e:
        print("Error in get_investment_report:", str(e))
        return []

def get_investment_time_series(start_date, end_date):
    """Get time-based investment data for each category"""
    try:
        query = text("""
            SELECT 
                DATE_FORMAT(gl.transaction_date, '%Y-%m') as month,
                COALESCE(coa.level4, coa.level3) AS investment_category,
                SUM(gl.balance) AS total_balance
            FROM gl_transactions gl
            JOIN chart_of_accounts coa ON gl.account_code = coa.code
            WHERE coa.level3 = 'Investments'
            AND DATE(gl.transaction_date) BETWEEN :start_date AND :end_date
            GROUP BY DATE_FORMAT(gl.transaction_date, '%Y-%m'), COALESCE(coa.level4, coa.level3)
            ORDER BY month, investment_category;
        """)
        
        result = db.session.execute(query, {
            'start_date': start_date,
            'end_date': end_date
        }).fetchall()
        
        # Process the data into the format needed for the chart
        months = sorted(set(row.month for row in result))
        categories = sorted(set(row.investment_category for row in result))
        
        # Create dataset for each category
        datasets = []
        for category in categories:
            category_data = []
            for month in months:
                # Find the balance for this category and month
                balance = next((float(row.total_balance) / 1000000 for row in result 
                              if row.month == month and row.investment_category == category), 0)
                category_data.append(balance)
            
            datasets.append({
                'label': category,
                'data': category_data,
                'borderColor': '#4e73df',  # Will be overridden by JS
                'backgroundColor': '#4e73df20',
                'borderWidth': 2,
                'fill': False,
                'tension': 0.4
            })
        
        return {
            'labels': months,
            'datasets': datasets
        }
        
    except Exception as e:
        print("Error in get_investment_time_series:", str(e))
        return {
            'labels': [],
            'datasets': []
        }


def get_detailed_investments(start_date=None, end_date=None):
    try:
        # Default to all time if no dates provided
        date_condition = ""
        params = {}
        
        if start_date and end_date:
            date_condition = "AND gl.transaction_date BETWEEN :start_date AND :end_date"
            params = {'start_date': start_date, 'end_date': end_date}
            
        query = text(f"""
            SELECT 
                coa.code,
                coa.level3 AS type,
                coa.level4 AS Category,
                coa.description_as_investments AS investment_name,
                SUM(gl.balance) AS total_investment_balance
            FROM 
                chart_of_accounts coa
            JOIN 
                gl_transactions gl ON coa.code = gl.account_code
            WHERE 
                coa.level3 = 'Investments' 
                AND coa.level4 LIKE 'investment%'
                {date_condition}
            GROUP BY 
                coa.level3, coa.level4, coa.description_as_investments, coa.code 
            ORDER BY Category ASC
        """)

        result = db.session.execute(query, params).all()
        
        # Transform the result to match the expected format
        data = [{
            'investment_code': row._mapping['code'],
            'investment_name': row._mapping['investment_name'],
            'investment_category': row._mapping['Category'],
            'investment_balance': float(row._mapping['total_investment_balance']) if row._mapping['total_investment_balance'] is not None else 0.0
        } for row in result]
        
        return data

    except Exception as e:
        print("Error in get_detailed_investments:", str(e))
        return []

def get_profit_loss_totals(start_date=None, end_date=None):
    """Get classification totals for P&L statement"""
    try:
        query = text("""
            SELECT 
                coa.classification as head,
                SUM(gl.balance) as amount
            FROM gl_transactions gl
            JOIN chart_of_accounts coa ON gl.account_code = coa.code
            WHERE coa.classification IN (
                'Revenue', 'Cost of Revenue', 'Salaries & Related','GOSI','Medical Insurance',
                'Office Rent','Other Office Exp','Professional Fees','Business Travel','Consultation',
                'Depreciation','Unrealized Valuation from Investment at Fair Value','Income from investment at FV realised Gain',
                'Dividend from investment at fair value P/L','Results in Subsidiary','Results in Associate','Dividend from Investment at cost',
                'Interest Income','Finance Cost','Zakat/Tax','Income from investment at Octal',
                'Change in the fair value of equity investment at fair value through OCI',
                'Impairment losses on investment in subsidiary','Gain from disposal of associate',
                'Remeasurement of defined employee benefits obligations','Other Income'
            )
            AND (:start_date IS NULL OR DATE(gl.transaction_date) >= :start_date)
            AND (:end_date IS NULL OR DATE(gl.transaction_date) <= :end_date)
            GROUP BY coa.classification
            ORDER BY coa.classification;
        """)
        
        # Convert date objects to strings if needed
        if isinstance(start_date, date):
            start_date = start_date.strftime('%Y-%m-%d')
        if isinstance(end_date, date):
            end_date = end_date.strftime('%Y-%m-%d')
        
        result = db.session.execute(query, {
            'start_date': start_date,
            'end_date': end_date
        }).fetchall()
        
        # Convert Decimal to float for template compatibility
        return [{
            'head': row._mapping['head'],
            'amount': float(row._mapping['amount']) if row._mapping['amount'] is not None else 0.0
        } for row in result]
        
    except Exception as e:
        print(f"Error in get_classification_totals: {str(e)}")
        import traceback
        traceback.print_exc()
        return []
    

def get_balance_sheet_totals(start_date=None, end_date=None):
    try:
        # If no dates provided, use fixed start date and current date
        if not start_date:
            start_date = date(2020, 12, 30)
        if not end_date:
            end_date = date.today()
        
        query = text("""
            SELECT  
                coa.classification AS head,
                SUM(gl.balance) AS amount
            FROM chart_of_accounts coa
            JOIN gl_transactions gl 
                ON coa.code = gl.account_code
            WHERE gl.transaction_date BETWEEN :start_date AND :end_date
            GROUP BY coa.classification
            ORDER BY coa.classification;
        """)
        
        result = db.session.execute(query, {
            'start_date': start_date,
            'end_date': end_date
        }).all()
        
        data = [{
            'head': row._mapping['head'],
            'amount': float(row._mapping['amount']) if row._mapping['amount'] is not None else 0.0
        } for row in result]
        
        return data

    except Exception as e:
        print("Error in get_balance_sheet_totals:", str(e))
        return []# backend/services/investment_services.py 


def get_investment_report(start_date=None, end_date=None):
    try:
        # Default to all time if no dates provided
        date_condition = ""
        params = {}
        
        if start_date and end_date:
            date_condition = "AND gl.transaction_date BETWEEN :start_date AND :end_date"
            params = {'start_date': start_date, 'end_date': end_date}
        
        query = text(f"""
            SELECT 
                CASE 
                    WHEN GROUPING(coa.level4) = 1 THEN coa.level3
                    ELSE coa.level4 
                END AS investment_category,
                SUM(gl.balance) AS total_balance
            FROM chart_of_accounts coa
            JOIN gl_transactions gl ON coa.code = gl.account_code
            WHERE coa.level3 = 'Investments'
              AND LOWER(coa.level4) LIKE 'investment%'
              {date_condition}
            GROUP BY coa.level3, coa.level4 WITH ROLLUP
            HAVING GROUPING(coa.level3) = 0
            ORDER BY 
                CASE WHEN GROUPING(coa.level4) = 1 THEN 0 ELSE 1 END,
                coa.level4;
        """) 

        result = db.session.execute(query, params).all()
        data = [dict(row._mapping) for row in result]

        return data

    except Exception as e:
        print("Error in get_investment_report:", str(e))
        return []

def get_investment_time_series(start_date, end_date):
    """Get time-based investment data for each category"""
    try:
        query = text("""
            SELECT 
                DATE_FORMAT(gl.transaction_date, '%Y-%m') as month,
                COALESCE(coa.level4, coa.level3) AS investment_category,
                SUM(gl.balance) AS total_balance
            FROM gl_transactions gl
            JOIN chart_of_accounts coa ON gl.account_code = coa.code
            WHERE coa.level3 = 'Investments'
            AND DATE(gl.transaction_date) BETWEEN :start_date AND :end_date
            GROUP BY DATE_FORMAT(gl.transaction_date, '%Y-%m'), COALESCE(coa.level4, coa.level3)
            ORDER BY month, investment_category;
        """)
        
        result = db.session.execute(query, {
            'start_date': start_date,
            'end_date': end_date
        }).fetchall()
        
        # Process the data into the format needed for the chart
        months = sorted(set(row.month for row in result))
        categories = sorted(set(row.investment_category for row in result))
        
        # Create dataset for each category
        datasets = []
        for category in categories:
            category_data = []
            for month in months:
                # Find the balance for this category and month
                balance = next((float(row.total_balance) / 1000000 for row in result 
                              if row.month == month and row.investment_category == category), 0)
                category_data.append(balance)
            
            datasets.append({
                'label': category,
                'data': category_data,
                'borderColor': '#4e73df',  # Will be overridden by JS
                'backgroundColor': '#4e73df20',
                'borderWidth': 2,
                'fill': False,
                'tension': 0.4
            })
        
        return {
            'labels': months,
            'datasets': datasets
        }
        
    except Exception as e:
        print("Error in get_investment_time_series:", str(e))
        return {
            'labels': [],
            'datasets': []
        }


def get_detailed_investments(start_date=None, end_date=None):
    try:
        # Default to all time if no dates provided
        date_condition = ""
        params = {}
        
        if start_date and end_date:
            date_condition = "AND gl.transaction_date BETWEEN :start_date AND :end_date"
            params = {'start_date': start_date, 'end_date': end_date}
            
        query = text(f"""
            SELECT 
                coa.code,
                coa.level3 AS type,
                coa.level4 AS Category,
                coa.description_as_investments AS investment_name,
                gl.transaction_date AS transactions_date,
                gl.label AS Labels,
                SUM(gl.balance) AS total_investment_balance
            FROM 
                chart_of_accounts coa
            JOIN 
                gl_transactions gl ON coa.code = gl.account_code
            WHERE 
                coa.level3 = 'Investments' 
                AND coa.level4 LIKE 'investment%'
                {date_condition}
            GROUP BY 
                coa.level3, coa.level4, coa.description_as_investments, coa.code, gl.transaction_date, gl.label 
            ORDER BY Category ASC
        """)

        result = db.session.execute(query, params).all()
        
        # Transform the result to match the expected format
        data = [{
            'investment_code': row._mapping['code'],
            'investment_name': row._mapping['investment_name'],
            'investment_category': row._mapping['Category'],
            'investment_date': row._mapping['transactions_date'],
            'investment_labels': row._mapping['Labels'],
            'investment_balance': float(row._mapping['total_investment_balance']) if row._mapping['total_investment_balance'] is not None else 0.0
        } for row in result]
        
        return data

    except Exception as e:
        print("Error in get_detailed_investments:", str(e))
        return []

def get_profit_loss_totals(start_date=None, end_date=None):
    """Get classification totals for P&L statement"""
    try:
        query = text("""
            SELECT 
                coa.classification as head,
                SUM(gl.balance) as amount
            FROM gl_transactions gl
            JOIN chart_of_accounts coa ON gl.account_code = coa.code
            WHERE coa.classification IN (
                'Revenue', 'Cost of Revenue', 'Salaries & Related','GOSI','Medical Insurance',
                'Office Rent','Other Office Exp','Professional Fees','Business Travel','Consultation',
                'Depreciation','Unrealized Valuation from Investment at Fair Value','Income from investment at FV realised Gain',
                'Dividend from investment at fair value P/L','Results in Subsidiary','Results in Associate','Dividend from Investment at cost',
                'Interest Income','Finance Cost','Zakat/Tax','Income from investment at Octal',
                'Change in the fair value of equity investment at fair value through OCI',
                'Impairment losses on investment in subsidiary','Gain from disposal of associate',
                'Remeasurement of defined employee benefits obligations','Other Income'
            )
            AND (:start_date IS NULL OR DATE(gl.transaction_date) >= :start_date)
            AND (:end_date IS NULL OR DATE(gl.transaction_date) <= :end_date)
            GROUP BY coa.classification
            ORDER BY coa.classification;
        """)
        
        # Convert date objects to strings if needed
        if isinstance(start_date, date):
            start_date = start_date.strftime('%Y-%m-%d')
        if isinstance(end_date, date):
            end_date = end_date.strftime('%Y-%m-%d')
        
        result = db.session.execute(query, {
            'start_date': start_date,
            'end_date': end_date
        }).fetchall()
        
        # Convert Decimal to float for template compatibility
        return [{
            'head': row._mapping['head'],
            'amount': float(row._mapping['amount']) if row._mapping['amount'] is not None else 0.0
        } for row in result]
        
    except Exception as e:
        print(f"Error in get_classification_totals: {str(e)}")
        import traceback
        traceback.print_exc()
        return []
    

def get_balance_sheet_totals(start_date=None, end_date=None):
    try:
        # If no dates provided, use fixed start date and current date
        if not start_date:
            start_date = date(2020, 12, 30)
        if not end_date:
            end_date = date.today()
        
        query = text("""
            SELECT  
                coa.classification AS head,
                SUM(gl.balance) AS amount
            FROM chart_of_accounts coa
            JOIN gl_transactions gl 
                ON coa.code = gl.account_code
            WHERE gl.transaction_date BETWEEN :start_date AND :end_date
            GROUP BY coa.classification
            ORDER BY coa.classification;
        """)
        
        result = db.session.execute(query, {
            'start_date': start_date,
            'end_date': end_date
        }).all()
        
        data = [{
            'head': row._mapping['head'],
            'amount': float(row._mapping['amount']) if row._mapping['amount'] is not None else 0.0
        } for row in result]
        
        return data

    except Exception as e:
        print("Error in get_balance_sheet_totals:", str(e))
        return []
    

def get_cash_flow_account(start_date=None, end_date=None):
    """Fetch cash flow account balances with totals"""
    try:
        # Optional date filter
        date_condition = ""
        params = {}
        if start_date and end_date:
            date_condition = "AND g.transaction_date BETWEEN :start_date AND :end_date"
            params = {"start_date": start_date, "end_date": end_date}

        query = text(f"""
            WITH account_mapping AS (
                SELECT '114.20.CA.SB.01' as account_code, 'Petty Cash' as cash_flow_name
                UNION ALL SELECT '114.21.CA.CB.01', 'ANB-Current'
                UNION ALL SELECT '114.21.CA.CB.02', 'ANB-Current'
                UNION ALL SELECT '114.21.CA.CB.03', 'ANB-Inv'
                UNION ALL SELECT '114.21.CA.CB.04', 'ANB-Current'
                UNION ALL SELECT '114.21.CA.CB.05', 'ANB-Inv'
                UNION ALL SELECT '114.21.CA.CB.06', 'ANB-Current'
                UNION ALL SELECT '114.21.CA.CB.07', 'ANB-Current'
                UNION ALL SELECT '114.21.CA.CB.08', 'ANB-Current'
                UNION ALL SELECT '114.21.CA.CB.09', 'ANB-Current'
                UNION ALL SELECT '114.21.CA.CB.10', 'ANB-Current'
                UNION ALL SELECT '114.21.CA.CB.11', 'ANB-Current'
                UNION ALL SELECT '114.21.CA.CB.12', 'RYD-Current'
                UNION ALL SELECT '114.21.CA.CB.13', 'RYD-Inv'
                UNION ALL SELECT '114.21.CA.CB.14', 'Lomb-Inv'
                UNION ALL SELECT '114.21.CA.CB.15', 'SNB-Inv'
                UNION ALL SELECT '114.21.CA.CB.17', 'SNB-Current'
                UNION ALL SELECT '114.21.CA.CB.18', 'Al Mall-Inv'
                UNION ALL SELECT '114.22.CA.CE.02', 'Petty Cash'
                UNION ALL SELECT '114.22.CA.CE.03', 'ANB-Current'
                UNION ALL SELECT '114.22.CA.CE.04', 'Petty Cash'
                UNION ALL SELECT '118.29.CA.RC.14', 'Deposit'
                UNION ALL SELECT '118.30.CA.SD.02', 'Deposit'
                UNION ALL SELECT '118.30.CA.SD.03', 'Deposit'
            ),
            cash_flow_totals AS (
                SELECT 
                    a.cash_flow_name as cash_flow_name,
                    SUM(CASE WHEN g.balance > 0 THEN g.balance ELSE 0 END) as debit,
                    SUM(CASE WHEN g.balance < 0 THEN ABS(g.balance) ELSE 0 END) as credit,
                    SUM(g.balance) as total_balance
                FROM gl_transactions g
                INNER JOIN account_mapping a ON g.account_code = a.account_code
                WHERE g.account_code IN (
                    '114.20.CA.SB.01','114.21.CA.CB.01','114.21.CA.CB.02','114.21.CA.CB.03',
                    '114.21.CA.CB.04','114.21.CA.CB.05','114.21.CA.CB.06','114.21.CA.CB.07',
                    '114.21.CA.CB.08','114.21.CA.CB.09','114.21.CA.CB.10','114.21.CA.CB.11',
                    '114.21.CA.CB.12','114.21.CA.CB.13','114.21.CA.CB.14','114.21.CA.CB.15',
                    '114.21.CA.CB.17','114.21.CA.CB.18','114.22.CA.CE.02','114.22.CA.CE.03',
                    '114.22.CA.CE.04','118.29.CA.RC.14','118.30.CA.SD.02','118.30.CA.SD.03'
                )
                {date_condition}
                GROUP BY a.cash_flow_name
            )

            SELECT 
                '' as code,
                '' as account_name,
                cft.cash_flow_name,
                COALESCE(cft.debit, 0) as debit,
                COALESCE(cft.credit, 0) as credit,
                COALESCE(cft.total_balance, 0) as total_balance
            FROM cash_flow_totals cft

            UNION ALL

            SELECT 
                'GRAND TOTAL' as code,
                '' as account_name,
                '' as cash_flow_name,
                COALESCE(SUM(cft.debit), 0) as debit,
                COALESCE(SUM(cft.credit), 0) as credit,
                COALESCE(SUM(cft.total_balance), 0) as total_balance
            FROM cash_flow_totals cft

            ORDER BY CASE WHEN code = 'GRAND TOTAL' THEN 2 ELSE 1 END, cash_flow_name;
        """)

        result = db.session.execute(query, params).all()
        
        data = [dict(row._mapping) for row in result]

        return data

    except Exception as e:
        print("Error in get_cash_flow_account:", str(e))
        return []

def get_cash_flow_transaction_detail(start_date=None, end_date=None):
    """Fetch cash flow transaction details with account mapping"""
    try:
        # Optional date filter
        date_condition = ""
        params = {}
        if start_date and end_date:
            date_condition = "AND transaction_date BETWEEN :start_date AND :end_date"
            params = {"start_date": start_date, "end_date": end_date}
        else:
            # Default to last 30 days if no dates provided
            date_condition = "AND transaction_date >= CURRENT_DATE - INTERVAL 30 DAY"

        query = text(f"""
            SELECT 
                account_code,
                account_name,
                label, 
                DATE(transaction_date) as txn_date,
                CASE 
                    WHEN account_code = '114.20.CA.SB.01' THEN 'Petty Cash'
                    WHEN account_code IN ('114.21.CA.CB.01', '114.21.CA.CB.02', '114.21.CA.CB.04', 
                                        '114.21.CA.CB.06', '114.21.CA.CB.07', '114.21.CA.CB.08', 
                                        '114.21.CA.CB.09', '114.21.CA.CB.10', '114.21.CA.CB.11') THEN 'ANB-Current'
                    WHEN account_code IN ('114.21.CA.CB.03', '114.21.CA.CB.05') THEN 'ANB-Inv'
                    WHEN account_code = '114.21.CA.CB.12' THEN 'RYD-Current'
                    WHEN account_code = '114.21.CA.CB.13' THEN 'RYD-Inv'
                    WHEN account_code = '114.21.CA.CB.14' THEN 'Lomb-Inv'
                    WHEN account_code = '114.21.CA.CB.15' THEN 'SNB-Inv'
                    WHEN account_code = '114.21.CA.CB.17' THEN 'SNB-Current'
                    WHEN account_code = '114.21.CA.CB.18' THEN 'Al Mall-Inv'
                    WHEN account_code IN ('114.22.CA.CE.02', '114.22.CA.CE.04') THEN 'Petty Cash'
                    WHEN account_code = '114.22.CA.CE.03' THEN 'ANB-Current'
                    WHEN account_code IN ('118.29.CA.RC.14', '118.30.CA.SD.02', '118.30.CA.SD.03') THEN 'Deposit'
                    ELSE 'Unknown'
                END as cash_flow_names,
                SUM(CASE WHEN balance = 'debit' OR balance > 0 THEN COALESCE(balance,0) ELSE 0 END) as debit,
                SUM(CASE WHEN balance = 'credit' OR balance < 0 THEN ABS(COALESCE(balance,0)) ELSE 0 END) as credit,
                SUM(balance) as total_balance
            FROM gl_transactions 
            WHERE account_code IN (
                '114.20.CA.SB.01',
                '114.21.CA.CB.01',
                '114.21.CA.CB.02',
                '114.21.CA.CB.03',
                '114.21.CA.CB.04',
                '114.21.CA.CB.05',
                '114.21.CA.CB.06',
                '114.21.CA.CB.07',
                '114.21.CA.CB.08',
                '114.21.CA.CB.09',
                '114.21.CA.CB.10',
                '114.21.CA.CB.11',
                '114.21.CA.CB.12',
                '114.21.CA.CB.13',
                '114.21.CA.CB.14',
                '114.21.CA.CB.15',
                '114.21.CA.CB.17',
                '114.21.CA.CB.18',
                '114.22.CA.CE.02',
                '114.22.CA.CE.03',
                '114.22.CA.CE.04',
                '118.29.CA.RC.14',
                '118.30.CA.SD.02',
                '118.30.CA.SD.03'
            )
            {date_condition}
            GROUP BY account_code, account_name, DATE(transaction_date), label
            ORDER BY txn_date DESC, account_code
        """)

        result = db.session.execute(query, params).all()
        data = [dict(row._mapping) for row in result]
        return data

    except Exception as e:
        print("Error in get_cash_flow_transaction_detail:", str(e))
        return []
    
def get_total_loans(start_date=None, end_date=None):
    """Calculate total loans (short term + long term) from balance sheet data"""
    try:
        # Get balance sheet totals
        balance_sheet_totals = get_balance_sheet_totals(start_date, end_date)
        
        # Convert to dictionary for easy access
        totals_dict = {row['head']: row['amount'] for row in balance_sheet_totals}
        
        # Calculate total loans
        short_term_loan = totals_dict.get('Short Term Loan', 0)
        long_term_loan = totals_dict.get('Long Term Loan', 0)
        total_loans = short_term_loan + long_term_loan
        
        return {
            'short_term_loan': short_term_loan,
            'long_term_loan': long_term_loan,
            'total_loans': total_loans
        }
        
    except Exception as e:
        print("Error in get_total_loans:", str(e))
        return {
            'short_term_loan': 0,
            'long_term_loan': 0,
            'total_loans': 0
        }
    
def get_dividends_details():
    """Get detailed dividends information with analytics categorization"""
    try:
        query = text("""
            SELECT 
                EXTRACT(YEAR FROM transaction_date) AS year,
                '6818.77.EX.GL.02' as account_code,
                analytic_account_names,
                SUM(balance) AS total_balance,
                'Detailed' AS report_level
            FROM gl_transactions
            WHERE account_code = '6818.77.EX.GL.02'
                AND analytic_account_names NOT LIKE '%SNB (DPM) FV Investment%'
            GROUP BY EXTRACT(YEAR FROM transaction_date), analytic_account_names

            UNION ALL

            SELECT 
                EXTRACT(YEAR FROM transaction_date) AS year,
                '6818.77.EX.GL.02' as account_code,
                'SNB (DPM) FV Investment' AS analytic_account_names,
                SUM(balance) AS total_balance,
                'Detailed' AS report_level
            FROM gl_transactions
            WHERE account_code = '6818.77.EX.GL.02'
                AND analytic_account_names LIKE '%SNB (DPM) FV Investment%'
            GROUP BY EXTRACT(YEAR FROM transaction_date)

            UNION ALL

            SELECT 
                EXTRACT(YEAR FROM transaction_date) AS year,
                '6818.77.EX.GL.02' as account_code,
                'TOTAL - All Other Analytics' AS analytic_account_names,
                SUM(balance) AS total_balance,
                'Summary' AS report_level
            FROM gl_transactions
            WHERE account_code = '6818.77.EX.GL.02'
                AND analytic_account_names NOT LIKE '%SNB (DPM) FV Investment%'
            GROUP BY EXTRACT(YEAR FROM transaction_date)

            UNION ALL

            SELECT 
                EXTRACT(YEAR FROM transaction_date) AS year,
                '6818.77.EX.GL.02' as account_code,
                'TOTAL - SNB (DPM) FV Investment' AS analytic_account_names,
                SUM(balance) AS total_balance,
                'Summary' AS report_level
            FROM gl_transactions
            WHERE account_code = '6818.77.EX.GL.02'
                AND analytic_account_names LIKE '%SNB (DPM) FV Investment%'
            GROUP BY EXTRACT(YEAR FROM transaction_date)

            ORDER BY year, report_level, analytic_account_names;
        """)

        result = db.session.execute(query).all()
        
        # Transform the result
        data = [{
            'year': int(row._mapping['year']) if row._mapping['year'] else None,
            'account_code': row._mapping['account_code'],
            'analytic_account_names': row._mapping['analytic_account_names'],
            'total_balance': float(row._mapping['total_balance']) if row._mapping['total_balance'] is not None else 0.0,
            'report_level': row._mapping['report_level']
        } for row in result]
        
        return data

    except Exception as e:
        print("Error in get_dividends_details:", str(e))
        import traceback
        traceback.print_exc()
        return []

def get_realised_gain_details():
    """Get detailed realised gain information with analytics categorization"""
    try:
        query = text("""
            SELECT 
                EXTRACT(YEAR FROM transaction_date) AS year,
                '6818.77.EX.GL.23' as account_code,
                analytic_account_names,
                SUM(balance) AS total_balance,
                'Detailed' AS report_level
            FROM gl_transactions
            WHERE account_code = '6818.77.EX.GL.23'
                AND analytic_account_names NOT LIKE '%SNB (DPM) FV Investment%'
            GROUP BY EXTRACT(YEAR FROM transaction_date), analytic_account_names

            UNION ALL

            SELECT 
                EXTRACT(YEAR FROM transaction_date) AS year,
                '6818.77.EX.GL.23' as account_code,
                'SNB (DPM) FV Investment' AS analytic_account_names,
                SUM(balance) AS total_balance,
                'Detailed' AS report_level
            FROM gl_transactions
            WHERE account_code = '6818.77.EX.GL.23'
                AND analytic_account_names LIKE '%SNB (DPM) FV Investment%'
            GROUP BY EXTRACT(YEAR FROM transaction_date)

            UNION ALL

            SELECT 
                EXTRACT(YEAR FROM transaction_date) AS year,
                '6818.77.EX.GL.23' as account_code,
                'TOTAL - All Other Analytics' AS analytic_account_names,
                SUM(balance) AS total_balance,
                'Summary' AS report_level
            FROM gl_transactions
            WHERE account_code = '6818.77.EX.GL.23'
                AND analytic_account_names NOT LIKE '%SNB (DPM) FV Investment%'
            GROUP BY EXTRACT(YEAR FROM transaction_date)

            UNION ALL

            SELECT 
                EXTRACT(YEAR FROM transaction_date) AS year,
                '6818.77.EX.GL.23' as account_code,
                'TOTAL - SNB (DPM) FV Investment' AS analytic_account_names,
                SUM(balance) AS total_balance,
                'Summary' AS report_level
            FROM gl_transactions
            WHERE account_code = '6818.77.EX.GL.23'
                AND analytic_account_names LIKE '%SNB (DPM) FV Investment%'
            GROUP BY EXTRACT(YEAR FROM transaction_date)

            ORDER BY year, report_level, analytic_account_names;
        """)

        result = db.session.execute(query).all()
        
        # Transform the result
        data = [{
            'year': int(row._mapping['year']) if row._mapping['year'] else None,
            'account_code': row._mapping['account_code'],
            'analytic_account_names': row._mapping['analytic_account_names'],
            'total_balance': float(row._mapping['total_balance']) if row._mapping['total_balance'] is not None else 0.0,
            'report_level': row._mapping['report_level']
        } for row in result]
        
        return data

    except Exception as e:
        print("Error in get_realised_gain_details:", str(e))
        import traceback
        traceback.print_exc()
        return []
    
def get_unrealised_gain_detail():
    """Get detailed unrealised gain information"""
    try:
        query = text("""
            SELECT 
                EXTRACT(YEAR FROM transaction_date) AS year,
                account_code,
                analytic_account_names,
                SUM(balance) AS total_balance,
                COUNT(*) AS transaction_count,
                'Detailed' AS report_level
            FROM gl_transactions
            WHERE account_code = '6818.77.EX.GL.22'
            GROUP BY EXTRACT(YEAR FROM transaction_date), account_code, analytic_account_names

            UNION ALL

            SELECT 
                EXTRACT(YEAR FROM transaction_date) AS year,
                account_code,
                'YEARLY TOTAL' AS analytic_account_names,
                SUM(balance) AS total_balance,
                COUNT(*) AS transaction_count,
                'Summary' AS report_level
            FROM gl_transactions
            WHERE account_code = '6818.77.EX.GL.22'
            GROUP BY EXTRACT(YEAR FROM transaction_date), account_code

            ORDER BY year, report_level, analytic_account_names;
        """)

        result = db.session.execute(query).all()
        
        # Transform the result
        data = [{
            'year': int(row._mapping['year']) if row._mapping['year'] else None,
            'account_code': row._mapping['account_code'],
            'analytic_account_names': row._mapping['analytic_account_names'],
            'total_balance': float(row._mapping['total_balance']) if row._mapping['total_balance'] is not None else 0.0,
            'transaction_count': int(row._mapping['transaction_count']),
            'report_level': row._mapping['report_level']
        } for row in result]
        
        return data

    except Exception as e:
        print("Error in get_unrealised_gain_detail:", str(e))
        import traceback
        traceback.print_exc()
        return []
    
def get_fund_income(account_code, start_date=None, end_date=None):
    try:
        params = {'account_code': account_code}
        
        # Default to December 1st, 2024 to current date if no dates provided
        if start_date is None and end_date is None:
            date_condition = "AND transaction_date >= '2024-12-01' AND transaction_date <= CURRENT_DATE"
        # Use custom dates if both are provided
        elif start_date and end_date:
            date_condition = "AND transaction_date BETWEEN :start_date AND :end_date"
            params.update({'start_date': start_date, 'end_date': end_date})
        # Handle cases where only one date is provided
        else:
            if start_date:
                date_condition = "AND transaction_date >= :start_date"
                params.update({'start_date': start_date})
            else:
                date_condition = "AND transaction_date <= :end_date"
                params.update({'end_date': end_date})
            
        query = text(f"""
            SELECT 
                analytic_account_names,
                SUM(balance) AS balance,
                SUM(SUM(balance)) OVER() AS total_balance
            FROM gl_transactions
            WHERE account_code = :account_code
                {date_condition}
            GROUP BY analytic_account_names
            ORDER BY analytic_account_names;
        """)

        result = db.session.execute(query, params).all()

        # Transform the result
        data = []
        total_balance = 0.0
        
        for row in result:
            row_data = {
                'analytic_account_names': row._mapping['analytic_account_names'],
                'balance': float(row._mapping['balance']) if row._mapping['balance'] is not None else 0.0,
                'total_balance': float(row._mapping['total_balance']) if row._mapping['total_balance'] is not None else 0.0
            }
            data.append(row_data)
            # Store the total balance from the first row (it's the same for all rows)
            if total_balance == 0.0:
                total_balance = row_data['total_balance']
            
        return data

    except Exception as e:
        print(f"Error in get_fund_income: {str(e)}")
        print(f"Error type: {type(e).__name__}")
        return []
    
def get_equity_income(account_code, start_date=None, end_date=None):
    try:
        params = {'account_code': account_code}
        
        # Default to December 1st, 2024 to current date if no dates provided
        if start_date is None and end_date is None:
            date_condition = "AND transaction_date >= '2024-12-01' AND transaction_date <= CURRENT_DATE"
        # Use custom dates if both are provided
        elif start_date and end_date:
            date_condition = "AND transaction_date BETWEEN :start_date AND :end_date"
            params.update({'start_date': start_date, 'end_date': end_date})
        # Handle cases where only one date is provided
        else:
            if start_date:
                date_condition = "AND transaction_date >= :start_date"
                params.update({'start_date': start_date})
            else:
                date_condition = "AND transaction_date <= :end_date"
                params.update({'end_date': end_date})
            
        query = text(f"""
            SELECT 
            analytic_account_names,
            SUM(balance) AS balance,
            SUM(SUM(balance)) OVER() AS total_balance
            FROM gl_transactions
            WHERE account_code = :account_code
                    {date_condition}
            GROUP BY analytic_account_names
            ORDER BY analytic_account_names;
        """)

        # Print the query and parameters for debugging
        # print(f"Executing expense query: {query}")
        
        result = db.session.execute(query, params).all()

        
        # Transform the result
        data = [{
            'balance': float(row._mapping['balance']) if row._mapping['balance'] is not None else 0.0,
            'analytic_account_names': row._mapping['analytic_account_names'],
            'total_balance': float(row._mapping['total_balance']) if row._mapping['total_balance'] is not None else 0.0
        } for row in result]
            
        return data

    except Exception as e:
        print(f"Error in get_equity_fund_expense: {str(e)}")
        print(f"Error type: {type(e).__name__}")
        return []
    
def get_equity_investment(start_date=None, end_date=None):
    
    try:
        params = {}  
        date_condition = ""  
        # Default to December 1st, 2024 to current date if no dates provided
        if start_date is None and end_date is None:
            date_condition = "AND transaction_date >= '2024-12-01' AND transaction_date <= CURRENT_DATE"
        # Use custom dates if both are provided
        elif start_date and end_date:
            date_condition = "AND transaction_date BETWEEN :start_date AND :end_date"
            params.update({'start_date': start_date, 'end_date': end_date})
        # Handle cases where only one date is provided
        else:
            if start_date:
                date_condition = "AND transaction_date >= :start_date"
                params.update({'start_date': start_date})
            else:
                date_condition = "AND transaction_date <= :end_date"
                params.update({'end_date': end_date})
            
        query = text(f"""
            SELECT 
                analytic_account_names,
                SUM(balance) AS balance,
                SUM(SUM(balance)) OVER() AS total_balance
            FROM gl_transactions
            WHERE account_code LIKE '113.16.FA.FI%'
            {date_condition}
            GROUP BY analytic_account_names
            ORDER BY analytic_account_names;
        """)

        # Print the query and parameters for debugging
        # print(f"Executing expense query: {query}")
        
        result = db.session.execute(query, params).all()
        
        # Transform the result
        data = [{
            'balance': float(row._mapping['balance']) if row._mapping['balance'] is not None else 0.0,
            'analytic_account_names': row._mapping['analytic_account_names'],
            'total_balance': float(row._mapping['total_balance']) if row._mapping['total_balance'] is not None else 0.0
        } for row in result]
   
        return data

    except Exception as e:
        print(f"Error in get_equity_fund_expense: {str(e)}")
        print(f"Error type: {type(e).__name__}")
        return []
    
def get_fund_investment(start_date=None, end_date=None):
    
    try:
        params = {}  
        date_condition = ""  
        # Default to December 1st, 2024 to current date if no dates provided
        if start_date is None and end_date is None:
            date_condition = "AND transaction_date >= '2024-12-01' AND transaction_date <= CURRENT_DATE"
        # Use custom dates if both are provided
        elif start_date and end_date:
            date_condition = "AND transaction_date BETWEEN :start_date AND :end_date"
            params.update({'start_date': start_date, 'end_date': end_date})
        # Handle cases where only one date is provided
        else:
            if start_date:
                date_condition = "AND transaction_date >= :start_date"
                params.update({'start_date': start_date})
            else:
                date_condition = "AND transaction_date <= :end_date"
                params.update({'end_date': end_date})
            
        query = text(f"""
            SELECT 
                analytic_account_names,
                SUM(balance) AS balance,
                SUM(SUM(balance)) OVER() AS total_balance
            FROM gl_transactions
            WHERE account_code LIKE '113.18.FA.FD%'
            {date_condition}
            GROUP BY analytic_account_names
            ORDER BY analytic_account_names;
        """)

        # Print the query and parameters for debugging
        # print(f"Executing expense query: {query}")
        
        result = db.session.execute(query, params).all()
        
        # Transform the result
        data = [{
            'balance': float(row._mapping['balance']) if row._mapping['balance'] is not None else 0.0,
            'analytic_account_names': row._mapping['analytic_account_names'],
            'total_balance': float(row._mapping['total_balance']) if row._mapping['total_balance'] is not None else 0.0
        } for row in result]
        
        # Print the transformed data
        print(f"Transformed fund investment data: {data}")
        
        # Check if data is empty
        if not data:
            print("Warning: Expense query returned no results!")
        else:
            print(f"Expense query successful! Retrieved {len(data)} records")
            
        return data

    except Exception as e:
        print(f"Error in get_equity_fund_expense: {str(e)}")
        print(f"Error type: {type(e).__name__}")
        return []

def get_monthly_profit_data(months=6, end_date=None):
    """Get monthly profit/loss data for chart"""
    try:
        if not end_date:
            end_date = date.today()
        
        monthly_data = []
        for i in range(months-1, -1, -1):
            # Calculate start and end of each month
            month_end = end_date - relativedelta(months=i)
            month_start = month_end.replace(day=1)
            
            # Get the actual end of the month
            next_month = month_start + relativedelta(months=1)
            month_end = next_month - relativedelta(days=1)
            
            # Get totals for the month using the correct function
            monthly_totals = get_profit_loss_totals(month_start, month_end) 
            monthly_dict = {row['head']: row['amount'] for row in monthly_totals}
            
            # Calculate profit/loss for the month
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
            
            monthly_profit = sum(monthly_dict.get(k, 0) for k in revenue_items)
            
            monthly_data.append({
                'month': month_start.strftime('%b %Y'),
                'profit': monthly_profit
            })
        
        return monthly_data
        
    except Exception as e:
        print("Error in get_monthly_profit_data:", str(e))
        import traceback
        traceback.print_exc()
        # Return empty array instead of dummy data to avoid confusion
        return []
    
def get_monthly_expense_data(months=6, end_date=None):
    """Get monthly expense data for chart"""
    try:
        if not end_date:
            end_date = date.today()
        
        monthly_data = []
        for i in range(months-1, -1, -1):
            # Calculate start and end of each month
            month_end = end_date - relativedelta(months=i)
            month_start = month_end.replace(day=1)
            
            # Get the actual end of the month
            next_month = month_start + relativedelta(months=1)
            month_end = next_month - relativedelta(days=1)
            
            # Get totals for the month
            monthly_totals = get_profit_loss_totals(month_start, month_end)
            monthly_dict = {row['head']: row['amount'] for row in monthly_totals}
            
            # Calculate expenses for the month (negative items)
            expense_items = [
                "Cost of Revenue", "Salaries & Related", "GOSI", 
                "Medical Insurance", "Office Rent", "Other Office Exp", 
                "Professional Fees", "Business Travel", "Consultation", 
                "Depreciation", "Finance Cost", "Zakat/Tax ",
                "Impairment losses on investment in subsidiary"
            ]
            
            monthly_expense = abs(sum(monthly_dict.get(k, 0) for k in expense_items))
            
            monthly_data.append({
                'month': month_start.strftime('%b %Y'),
                'expense': monthly_expense
            })
        
        return monthly_data
        
    except Exception as e:
        print("Error in get_monthly_expense_data:", str(e))
        import traceback
        traceback.print_exc()
        return []
    
def get_monthly_liability_data(months=6, end_date=None):
    """Get monthly liability data for chart"""
    try:
        if not end_date:
            end_date = date.today()
        
        monthly_data = []
        for i in range(months-1, -1, -1):
            # Calculate start and end of each month
            month_end = end_date - relativedelta(months=i)
            month_start = month_end.replace(day=1)
            
            # Get the actual end of the month
            next_month = month_start + relativedelta(months=1)
            month_end = next_month - relativedelta(days=1)
            
            # Get totals for the month
            monthly_totals = get_balance_sheet_totals(month_start, month_end)
            monthly_dict = {row['head']: row['amount'] for row in monthly_totals}
            
            # Calculate liabilities for the month
            current_liabilities = sum(monthly_dict.get(k, 0) for k in [
                "Account Payable , Accrued Other Liabilities",
                "Short Term Loan",
                "Provision for Zakat/Tax",
                "Due to Related Party",
                "Deffered Income"
            ])
            
            non_current_liabilities = sum(monthly_dict.get(k, 0) for k in [
                "Employees defined benefits Liabilities",
                "Long Term Loan"
            ])
            
            monthly_liability = current_liabilities + non_current_liabilities
            
            monthly_data.append({
                'month': month_start.strftime('%b %Y'),
                'liability': monthly_liability
            })
        
        return monthly_data
        
    except Exception as e:
        print("Error in get_monthly_liability_data:", str(e))
        import traceback
        traceback.print_exc()
        return []

def get_monthly_asset_data(months=6, end_date=None):
    """Get monthly asset data for chart"""
    try:
        if not end_date:
            end_date = date.today()
        
        monthly_data = []
        for i in range(months-1, -1, -1):
            # Calculate start and end of each month
            month_end = end_date - relativedelta(months=i)
            month_start = month_end.replace(day=1)
            
            # Get the actual end of the month
            next_month = month_start + relativedelta(months=1)
            month_end = next_month - relativedelta(days=1)
            
            # Get totals for the month
            monthly_totals = get_balance_sheet_totals(month_start, month_end)
            monthly_dict = {row['head']: row['amount'] for row in monthly_totals}
            
            # Calculate assets for the month
            current_assets = sum(monthly_dict.get(k, 0) for k in [
                "Cash & Cash Equivalent",
                "Account Receivable Other Prepaid",
                "Inventory",
                "Due from Related Party",
                "Short Term Deposit"
            ])
            
            non_current_assets = sum(monthly_dict.get(k, 0) for k in [
                "Investment in Subsidiaries",
                "Investment in Associate",
                "Investment at Cost",
                "Investment at fair value",
                "Investment Property",
                "Property Plant & Equipment",
                "Intangible Assets"
            ])
            
            monthly_assets = current_assets + non_current_assets
            
            monthly_data.append({
                'month': month_start.strftime('%b %Y'),
                'assets': monthly_assets
            })
        
        return monthly_data
        
    except Exception as e:
        print("Error in get_monthly_asset_data:", str(e))
        import traceback
        traceback.print_exc()
        return []

def calculate_portfolio_growth(start_date, end_date):
    """Calculate portfolio growth percentage dynamically"""
    try:
        # Convert string dates to datetime objects if needed
        if isinstance(start_date, str):
            start_date = datetime.strptime(start_date, '%Y-%m-%d').date()
        if isinstance(end_date, str):
            end_date = datetime.strptime(end_date, '%Y-%m-%d').date()
        
        # Calculate previous period (30 days before start_date)
        previous_start_date = (start_date - timedelta(days=30)).isoformat()
        previous_end_date = (start_date - timedelta(days=1)).isoformat()
        
        # Get investment totals for previous period
        previous_report = get_investment_report(previous_start_date, previous_end_date)
        previous_total = sum(float(inv['total_balance']) for inv in previous_report 
                          if inv['investment_category'] != 'Investments') / 1000000
        
        # Get investment totals for current period
        current_report = get_investment_report(start_date.isoformat(), end_date.isoformat())
        current_total = sum(float(inv['total_balance']) for inv in current_report 
                         if inv['investment_category'] != 'Investments') / 1000000
        
        # Calculate growth percentage
        if previous_total > 0:
            growth_percentage = ((current_total - previous_total) / previous_total) * 100
            return round(growth_percentage, 1)
        else:
            return 0.0
            
    except Exception as e:
        print(f"Error calculating portfolio growth: {str(e)}")
        return 0.0

def calculate_weekly_growth_rate(start_date, end_date):
    """Calculate weekly growth rate dynamically"""
    try:
        # Convert string dates to datetime objects if needed
        if isinstance(start_date, str):
            start_date = datetime.strptime(start_date, '%Y-%m-%d').date()
        if isinstance(end_date, str):
            end_date = datetime.strptime(end_date, '%Y-%m-%d').date()
        
        # Calculate one week ago from start date
        week_ago_start = (start_date - timedelta(days=7)).isoformat()
        week_ago_end = (start_date - timedelta(days=1)).isoformat()
        
        # Get investment totals for one week ago
        week_ago_report = get_investment_report(week_ago_start, week_ago_end)
        week_ago_total = sum(float(inv['total_balance']) for inv in week_ago_report 
                          if inv['investment_category'] != 'Investments') / 1000000
        
        # Get current investment total
        current_report = get_investment_report(start_date.isoformat(), end_date.isoformat())
        current_total = sum(float(inv['total_balance']) for inv in current_report 
                         if inv['investment_category'] != 'Investments') / 1000000
        
        # Calculate weekly growth rate
        if week_ago_total > 0:
            weekly_growth = ((current_total - week_ago_total) / week_ago_total) * 100
            return round(weekly_growth, 1)
        else:
            return 0.0
            
    except Exception as e:
        print(f"Error calculating weekly growth rate: {str(e)}")
        return 0.0

def calculate_profit_revenue(start_date, end_date):
    """Calculate profit revenue dynamically (in thousands)"""
    try:
        # Get profit/loss data for the period
        pl_data = get_profit_loss_totals(start_date, end_date)
        
        # Convert to dictionary for easier access
        pl_dict = {row['head']: row['amount'] for row in pl_data}
        
        # Calculate total revenue (positive income items)
        revenue_items = [
            "Revenue", "Unrealized Valuation from Investment at Fair Value",
            "Income from investment at FV realised Gain", 
            "Dividend from investment at fair value P/L", "Results in Subsidiary",
            "Results in Associate", "Dividend from Investment at cost", 
            "Interest Income", "Income from investment at Octal",
            "Gain from disposal of associate", "Other Income"
        ]
        
        total_revenue = sum(pl_dict.get(item, 0) for item in revenue_items)
        
        # Calculate total expenses (negative items)
        expense_items = [
            "Cost of Revenue", "Salaries & Related", "GOSI", "Medical Insurance",
            "Office Rent", "Other Office Exp", "Professional Fees", "Business Travel",
            "Consultation", "Depreciation", "Finance Cost", "Zakat/Tax",
            "Impairment losses on investment in subsidiary"
        ]
        
        total_expenses = sum(abs(pl_dict.get(item, 0)) for item in expense_items)
        
        # Calculate profit revenue (revenue minus expenses)
        profit_revenue = total_revenue - total_expenses
        
        # Convert to thousands and return
        return round(profit_revenue / 1000, 0)
        
    except Exception as e:
        print(f"Error calculating profit revenue: {str(e)}")
        return 0

def calculate_total_investment(start_date, end_date):
    """Calculate total investment amount dynamically (in thousands)"""
    try:
        # Get investment report for the period
        investments = get_investment_report(start_date, end_date)
        
        # Calculate total investment (sum of all investment categories)
        total_investment = sum(float(inv['total_balance']) for inv in investments 
                           if inv['investment_category'] != 'Investments')
        
        # Convert to thousands and return
        return round(total_investment / 1000, 0)
        
    except Exception as e:
        print(f"Error calculating total investment: {str(e)}")
        return 0