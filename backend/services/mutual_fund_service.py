# backend/services/mutual_fund_service.py
from datetime import datetime, timedelta
from decimal import Decimal
from sqlalchemy import func, and_, or_
from backend.models import MutualFund, MutualFundHolding, MutualFundTransaction, MutualFundNAV
from backend.extension import db

def get_mutual_fund_holdings(start_date=None, end_date=None):
    """
    Get mutual fund holdings with performance data
    """
    if not end_date:
        end_date = datetime.now().date()
    if not start_date:
        start_date = datetime(2020, 1, 1).date()
    
    # Query to get mutual fund holdings with current NAV
    holdings_query = db.session.query(
        MutualFundHolding,
        MutualFund.fund_name,
        MutualFund.fund_code,
        MutualFund.category,  # Add category here
        MutualFundNAV.nav_value.label('current_nav')
    ).join(
        MutualFund, MutualFundHolding.fund_id == MutualFund.id
    ).outerjoin(
        MutualFundNAV, and_(
            MutualFundNAV.fund_id == MutualFund.id,
            MutualFundNAV.nav_date == end_date
        )
    ).filter(
        MutualFundHolding.is_active == True,
        MutualFundHolding.purchase_date.between(start_date, end_date)
    )
    
    holdings_data = []
    for holding, fund_name, fund_code, fund_category, current_nav in holdings_query.all():
        # Calculate current values if we have current NAV
        if current_nav:
            current_value = holding.units * current_nav
            unrealized_gain_loss = current_value - holding.purchase_value
            unrealized_gain_loss_percent = (unrealized_gain_loss / holding.purchase_value * 100) if holding.purchase_value > 0 else 0
            
            # Update the holding with current values
            holding.current_nav = current_nav
            holding.current_value = current_value
            holding.unrealized_gain_loss = unrealized_gain_loss
            holding.unrealized_gain_loss_percent = unrealized_gain_loss_percent
            
            # Commit the updates
            db.session.add(holding)
        
        holdings_data.append({
            'holding': holding,
            'fund_name': fund_name,
            'fund_code': fund_code,
            'fund_category': fund_category,  # Add category to the dict
            'current_nav': current_nav
        })
    
    db.session.commit()
    return holdings_data

def get_mutual_fund_performance(start_date=None, end_date=None):
    """
    Get performance summary of mutual fund investments
    """
    holdings_data = get_mutual_fund_holdings(start_date, end_date)
    
    total_investment = sum(float(h['holding'].purchase_value) for h in holdings_data)
    total_current_value = sum(float(h['holding'].current_value or 0) for h in holdings_data)
    total_gain_loss = total_current_value - total_investment
    total_gain_loss_percent = (total_gain_loss / total_investment * 100) if total_investment > 0 else 0
    
    return {
        'holdings': holdings_data,
        'total_investment': total_investment,
        'total_current_value': total_current_value,
        'total_gain_loss': total_gain_loss,
        'total_gain_loss_percent': total_gain_loss_percent,
        'count': len(holdings_data)
    }

def update_mutual_fund_nav(fund_id, nav_date, nav_value, repurchase_price=None, sale_price=None):
    """
    Update NAV for a mutual fund and recalculate all holdings
    """
    # Check if NAV already exists for this date
    existing_nav = MutualFundNAV.query.filter_by(
        fund_id=fund_id, 
        nav_date=nav_date
    ).first()
    
    if existing_nav:
        existing_nav.nav_value = nav_value
        existing_nav.repurchase_price = repurchase_price or existing_nav.repurchase_price
        existing_nav.sale_price = sale_price or existing_nav.sale_price
        nav_record = existing_nav
    else:
        nav_record = MutualFundNAV(
            fund_id=fund_id,
            nav_date=nav_date,
            nav_value=nav_value,
            repurchase_price=repurchase_price,
            sale_price=sale_price
        )
        db.session.add(nav_record)
    
    # Update all active holdings for this fund
    holdings = MutualFundHolding.query.filter_by(
        fund_id=fund_id,
        is_active=True
    ).all()
    
    for holding in holdings:
        holding.current_nav = nav_value
        holding.current_value = holding.units * nav_value
        holding.unrealized_gain_loss = holding.current_value - holding.purchase_value
        if holding.purchase_value > 0:
            holding.unrealized_gain_loss_percent = (
                holding.unrealized_gain_loss / holding.purchase_value * 100
            )
        db.session.add(holding)
    
    db.session.commit()
    return nav_record

def add_mutual_fund_transaction(holding_id, fund_id, transaction_type, transaction_date, 
                               units, nav, amount, description=None, reference_number=None, user_id=None):
    """
    Add a mutual fund transaction and update the holding
    """
    transaction = MutualFundTransaction(
        holding_id=holding_id,
        fund_id=fund_id,
        transaction_type=transaction_type,
        transaction_date=transaction_date,
        units=units,
        nav=nav,
        amount=amount,
        description=description,
        reference_number=reference_number,
        user_id=user_id
    )
    
    db.session.add(transaction)
    
    # Update the holding based on transaction type
    holding = MutualFundHolding.query.get(holding_id)
    
    if transaction_type == 'PURCHASE':
        # For purchase, update units and average cost
        total_units = holding.units + units
        total_investment = holding.purchase_value + amount
        
        holding.units = total_units
        holding.purchase_value = total_investment
        holding.purchase_nav = total_investment / total_units if total_units > 0 else 0
        
    elif transaction_type == 'REDEMPTION':
        # For redemption, reduce units and calculate gain/loss
        if units > holding.units:
            raise ValueError("Cannot redeem more units than available")
        
        # Calculate the cost of redeemed units
        redeemed_cost = (units / holding.units) * holding.purchase_value
        
        holding.units -= units
        holding.purchase_value -= redeemed_cost
        
        # If all units are redeemed, mark as inactive
        if holding.units == 0:
            holding.is_active = False
    
    db.session.add(holding)
    db.session.commit()
    
    return transaction

def get_mutual_fund_summary_by_category(start_date=None, end_date=None):
    """
    Get mutual fund summary grouped by category with fund names
    """
    if not end_date:
        end_date = datetime.now().date()
    if not start_date:
        start_date = datetime(2020, 1, 1).date()
    
    # Get all holdings with their fund information
    holdings_query = db.session.query(
        MutualFundHolding,
        MutualFund.fund_name,
        MutualFund.category
    ).join(
        MutualFund, MutualFundHolding.fund_id == MutualFund.id
    ).filter(
        MutualFundHolding.is_active == True,
        MutualFundHolding.purchase_date.between(start_date, end_date)
    ).all()
    
    # Group by category and collect fund names
    category_data = {}
    for holding, fund_name, category in holdings_query:
        if category not in category_data:
            category_data[category] = {
                'fund_names': set(),
                'count': 0,
                'total_investment': Decimal('0.0'),
                'total_current_value': Decimal('0.0'),
                'total_gain_loss': Decimal('0.0')
            }
        
        category_data[category]['fund_names'].add(fund_name)
        category_data[category]['count'] += 1
        category_data[category]['total_investment'] += holding.purchase_value
        
        # Convert current_value to Decimal if it's not None
        current_value = holding.current_value or Decimal('0.0')
        if isinstance(current_value, float):
            current_value = Decimal(str(current_value))
        category_data[category]['total_current_value'] += current_value
        
        # Convert unrealized_gain_loss to Decimal if it's not None
        gain_loss = holding.unrealized_gain_loss or Decimal('0.0')
        if isinstance(gain_loss, float):
            gain_loss = Decimal(str(gain_loss))
        category_data[category]['total_gain_loss'] += gain_loss
    
    # Format the results
    summary = []
    for category, data in category_data.items():
        total_investment = float(data['total_investment'])
        total_current_value = float(data['total_current_value'])
        total_gain_loss = float(data['total_gain_loss'])
        
        summary.append({
            'category': category,
            'fund_name': ', '.join(sorted(data['fund_names'])),  # Join all fund names
            'count': data['count'],
            'total_investment': total_investment,
            'total_current_value': total_current_value,
            'total_gain_loss': total_gain_loss,
            'gain_loss_percent': (total_gain_loss / total_investment * 100) if total_investment else 0
        })
    
    return summary