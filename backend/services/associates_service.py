# backend/services/associates_service.py
from datetime import datetime
from decimal import Decimal
from sqlalchemy import and_, or_, desc, func
from backend.models import ASSOCIATE_MODELS, AssociateCompany
from backend.extension import db

class AssociatesService:
    # Financial statement categories
    BALANCE_SHEET_ITEMS = [
        'Non-current assets', 'Current assets', 'Total assets', 
        'Total equity', 'Non-current liability', 'Current liabilities', 
        'Total liabilities', 'Total equity and liabilities'
    ]
    
    INCOME_STATEMENT_ITEMS = [
        'Revenue','Cost of revenue','Gross (loss) / profit', 'Operating Profit / loss', 
        'Profit & loss'
    ]
    
    RATIO_ITEMS = [
        'GP Margin', 'NP Margin', 'Asset Turnover', 'Financial leverage',
        'Return On Equity', 'Current Ratio', 'Debt to Asset Ratio', 
        'Debt to Equity Ratio', 'RSR Profit %'
    ]
    
    @staticmethod
    def get_company_model(company_name):
        """Get the appropriate model for a company"""
        return ASSOCIATE_MODELS.get(company_name)
    
    @staticmethod
    def get_available_companies():
        """Get list of all available companies"""
        return list(ASSOCIATE_MODELS.keys())
    
    @staticmethod
    def get_company_years(company_name):
        """Get available years for a company"""
        model = AssociatesService.get_company_model(company_name)
        if not model:
            return []
        
        try:
            years = db.session.query(model.financial_year).distinct().order_by(desc(model.financial_year)).all()
            return [year[0] for year in years]
        except Exception as e:
            print(f"Error getting years for {company_name}: {e}")
            return []
    
    @staticmethod
    def get_financial_data(company_name, year=None, item_type=None):
        """
        Get financial data for a company
        item_type: 'balance_sheet', 'income_statement', 'ratios', or None for all
        """
        model = AssociatesService.get_company_model(company_name)
        if not model:
            return {}
        
        try:
            query = db.session.query(model)
            
            if year:
                query = query.filter(model.financial_year == year)
            
            # Filter by item type if specified
            if item_type == 'balance_sheet':
                query = query.filter(model.account_item.in_(AssociatesService.BALANCE_SHEET_ITEMS))
            elif item_type == 'income_statement':
                query = query.filter(model.account_item.in_(AssociatesService.INCOME_STATEMENT_ITEMS))
            elif item_type == 'ratios':
                query = query.filter(model.account_item.in_(AssociatesService.RATIO_ITEMS))
            
            data = query.order_by(model.account_item).all()
            
            # Format the data
            formatted_data = {}
            for record in data:
                if record.account_item not in formatted_data:
                    formatted_data[record.account_item] = {}
                formatted_data[record.account_item][record.financial_year] = float(record.amount) if record.amount else 0
            
            return formatted_data
        except Exception as e:
            print(f"Error getting financial data for {company_name}: {e}")
            return {}
    
    @staticmethod
    def get_balance_sheet(company_name, year=None):
        """Get balance sheet data"""
        return AssociatesService.get_financial_data(company_name, year, 'balance_sheet')
    
    @staticmethod
    def get_income_statement(company_name, year=None):
        """Get income statement data"""
        return AssociatesService.get_financial_data(company_name, year, 'income_statement')
    
    @staticmethod
    def get_financial_ratios(company_name, year=None):
        """Get financial ratios"""
        return AssociatesService.get_financial_data(company_name, year, 'ratios')
    
    @staticmethod
    def get_multi_year_comparison(company_name, years=None, items=None):
        """Get comparison data across multiple years"""
        model = AssociatesService.get_company_model(company_name)
        if not model:
            return {}
        
        try:
            query = db.session.query(model)
            
            if years:
                query = query.filter(model.financial_year.in_(years))
            
            if items:
                query = query.filter(model.account_item.in_(items))
            
            data = query.order_by(model.financial_year, model.account_item).all()
            
            # Organize by year then by item
            comparison_data = {}
            for record in data:
                if record.financial_year not in comparison_data:
                    comparison_data[record.financial_year] = {}
                comparison_data[record.financial_year][record.account_item] = float(record.amount) if record.amount else 0
            
            return comparison_data
        except Exception as e:
            print(f"Error getting multi-year comparison for {company_name}: {e}")
            return {}
    
    @staticmethod
    def get_company_summary(company_name):
        """Get summary data for a company"""
        model = AssociatesService.get_company_model(company_name)
        if not model:
            return {}
        
        try:
            # Get latest year
            latest_year = db.session.query(func.max(model.financial_year)).scalar()
            if not latest_year:
                return {}
            
            # Get key metrics for latest year
            data = AssociatesService.get_financial_data(company_name, latest_year)
            
            summary = {
                'company_name': company_name,
                'latest_year': latest_year,
                'total_assets': data.get('Total assets', {}).get(latest_year, 0),
                'total_equity': data.get('Total equity', {}).get(latest_year, 0),
                'net_profit': data.get('Profit & loss', {}).get(latest_year, 0),
                'gross_profit': data.get('Gross (loss) / profit', {}).get(latest_year, 0),
            }
            
            # Calculate additional metrics
            if summary['total_assets'] and summary['net_profit']:
                summary['return_on_assets'] = (summary['net_profit'] / summary['total_assets']) * 100
            
            if summary['total_equity'] and summary['net_profit']:
                summary['return_on_equity'] = (summary['net_profit'] / summary['total_equity']) 
            
            return summary
        except Exception as e:
            print(f"Error getting summary for {company_name}: {e}")
            return {}
    
    @staticmethod
    def get_all_companies_summary():
        """Get summary for all companies"""
        summaries = {}
        for company in AssociatesService.get_available_companies():
            summary = AssociatesService.get_company_summary(company)
            if summary:  # Only add if we got data
                summaries[company] = summary
        
        return summaries
    
    @staticmethod
    def search_financial_data(company_name, search_term, year=None):
        """Search financial data by account item name"""
        model = AssociatesService.get_company_model(company_name)
        if not model:
            return []
        
        try:
            query = db.session.query(model).filter(
                model.account_item.ilike(f'%{search_term}%')
            )
            
            if year:
                query = query.filter(model.financial_year == year)
            
            return query.order_by(model.financial_year, model.account_item).all()
        except Exception as e:
            print(f"Error searching data for {company_name}: {e}")
            return []
    
    @staticmethod
    def get_yearly_trend(company_name, account_item, years_back=5):
        """Get trend data for a specific account item over years"""
        model = AssociatesService.get_company_model(company_name)
        if not model:
            return {}
        
        try:
            current_year = datetime.now().year
            start_year = current_year - years_back
            
            data = db.session.query(
                model.financial_year, model.amount
            ).filter(
                model.account_item == account_item,
                model.financial_year >= start_year
            ).order_by(model.financial_year).all()
            
            trend_data = {year: float(amount) if amount else 0 for year, amount in data}
            return trend_data
        except Exception as e:
            print(f"Error getting trend for {company_name}: {e}")
            return {}
        
    @staticmethod
    def get_trend_data(companies, metrics, years_back=5):
        """Get trend data for multiple companies and metrics"""
        current_year = datetime.now().year
        start_year = current_year - years_back
        
        trend_data = {
            'labels': [],
            'datasets': []
        }
        
        # Get all available years
        all_years = set()
        for company in companies:
            company_years = AssociatesService.get_company_years(company)
            all_years.update([year for year in company_years if start_year <= year <= current_year])
        
        trend_data['labels'] = sorted(list(all_years))
        
        # Define colors for companies
        company_colors = {
            'RSR': 'rgb(75, 192, 192)',
            'RTCC': 'rgb(255, 99, 132)',
            'SMC': 'rgb(54, 162, 235)',
            'SSEM': 'rgb(255, 205, 86)',
            'Razin': 'rgb(153, 102, 255)',
            'Rafaya': 'rgb(255, 159, 64)',
            'PPC': 'rgb(201, 203, 207)',
            'G.Chicken': 'rgb(255, 99, 71)',
            'Bayan': 'rgb(50, 205, 50)',
            'Abetong': 'rgb(148, 0, 211)',
            'Food Aroma': 'rgb(220, 20, 60)',
            'Impulse': 'rgb(0, 191, 255)',
            'Marooj': 'rgb(139, 69, 19)'
        }
        
        # Get data for each metric and company
        for metric in metrics:
            for company in companies:
                model = AssociatesService.get_company_model(company)
                if not model:
                    continue
                    
                # Get data for this metric across years
                data_points = []
                for year in trend_data['labels']:
                    record = db.session.query(model).filter(
                        model.account_item == metric,
                        model.financial_year == year
                    ).first()
                    
                    value = float(record.amount) if record and record.amount else None
                    data_points.append(value)
                
                # Only add dataset if we have data
                if any(point is not None for point in data_points):
                    trend_data['datasets'].append({
                        'label': f'{company} - {metric}',
                        'data': data_points,
                        'borderColor': company_colors.get(company, 'rgb(100, 100, 100)'),
                        'backgroundColor': company_colors.get(company, 'rgb(100, 100, 100)').replace('rgb', 'rgba').replace(')', ', 0.1)'),
                        'borderWidth': 2,
                        'fill': False,
                        'tension': 0.4
                    })
        
        return trend_data

    @staticmethod
    def get_comparison_data(companies, year, metrics=None):
        """Get comparison data for multiple companies in a specific year"""
        if metrics is None:
            metrics = [
                'Non-current assets','Current assets','Total equity','Non-current liability','Current liabilities',
                'Total liabilities','Revenue','Cost of revenue','Gross (loss) / profit','Operating Profit / loss','Profit & loss',
                'GP Margin','NP Margin','Asset Turnover', 'Financial leverage', 'Return On Equity','Current Ratio', 'Debt to Asset Ratio ',
                'Debt to Equity Ratio ','RSR Profit %'
            ]
        
        comparison_data = {
            'companies': companies,
            'year': year,
            'metrics': {}
        }
        
        for metric in metrics:
            comparison_data['metrics'][metric] = {}
            for company in companies:
                model = AssociatesService.get_company_model(company)
                if not model:
                    comparison_data['metrics'][metric][company] = None
                    continue
                    
                record = db.session.query(model).filter(
                    model.account_item == metric,
                    model.financial_year == year
                ).first()
                
                value = float(record.amount) if record and record.amount else None
                comparison_data['metrics'][metric][company] = value
        
        return comparison_data

    @staticmethod
    def get_available_metrics():
        """Get all available financial metrics across companies"""
        all_metrics = set()
        
        for company_name, model in ASSOCIATE_MODELS.items():
            try:
                metrics = db.session.query(model.account_item).distinct().all()
                all_metrics.update([metric[0] for metric in metrics])
                print(f"Company: {company_name}, Metrics count: {len(metrics)}")
            except Exception as e:
                print(f"Error getting metrics for {company_name}: {e}")
                continue
        
        return sorted(list(all_metrics))