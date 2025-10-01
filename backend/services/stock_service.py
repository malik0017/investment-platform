from decimal import Decimal
from datetime import datetime
from backend.extension import db

class StockService:
    
    @staticmethod
    def create_stock(company_name, ticker_symbol, market, purchase_date, 
                    shares, purchase_price):
        """Create a new stock holding with initial purchase"""
        # Import models locally to avoid circular imports
        from backend.models import StockPortfolio, StockTransaction, StockYearStartPrice
        
        total_cost = shares * purchase_price
        
        stock = StockPortfolio(
            company_name=company_name,
            ticker_symbol=ticker_symbol,
            market=market,
            no_of_shares=shares,
            average_cost=purchase_price,
            total_cost_basis=total_cost,
            market_price=purchase_price,
            current_value=total_cost,
            price_at_last_year_end=purchase_price,
            value_at_last_year_end=total_cost
        )
        
        db.session.add(stock)
        db.session.flush()
        
        # Create initial transaction
        transaction = StockTransaction(
            stock_id=stock.id,
            transaction_type='BUY',
            transaction_date=purchase_date,
            shares=shares,
            price_per_share=purchase_price,
            total_amount=total_cost,
            notes="Initial purchase"
        )
        
        db.session.add(transaction)
        # Capture year-start price if it's Jan 1st or later in the current year
        StockService.capture_year_start_price_if_needed(stock, purchase_date)
        return stock
    
    @staticmethod
    def capture_year_start_price_if_needed(stock, transaction_date):
        """Capture year-start price for new stocks created during the year"""
        from backend.models import StockYearStartPrice
        
        current_year = datetime.now().year
        
        # If stock is created on or after Jan 1, set year-start price
        if transaction_date.year == current_year:            
            # Check if we need to set a year-start price
            existing_price = StockYearStartPrice.query.filter_by(
                stock_id=stock.id, year=current_year
            ).first()
            
            if not existing_price:
                # Use the first available price (purchase price for new stocks)
                year_start_price = StockYearStartPrice(
                    stock_id=stock.id,
                    year=current_year,
                    price=stock.market_price,
                    recorded_date=transaction_date
                )
                db.session.add(year_start_price)

    @staticmethod
    def buy_more_stock(stock_id, additional_shares, purchase_price, purchase_date):
        """Purchase additional shares of existing stock"""
        from backend.models import StockPortfolio, StockTransaction
        
        stock = StockPortfolio.query.get_or_404(stock_id)
        
        # Calculate new average cost using weighted average
        current_investment = stock.total_cost_basis
        new_investment = additional_shares * purchase_price
        total_investment = current_investment + new_investment
        total_shares = stock.no_of_shares + additional_shares
        
        new_avg_cost = total_investment / total_shares
        
        # Update stock
        stock.no_of_shares = total_shares
        stock.average_cost = new_avg_cost
        stock.total_cost_basis = total_investment
        # Update market price to current purchase price (optional)
        stock.market_price = purchase_price
        # Recalculate all values including YTD
        stock.update_values()
        
        # Create transaction
        transaction = StockTransaction(
            stock_id=stock_id,
            transaction_type='BUY',
            transaction_date=purchase_date,
            shares=additional_shares,
            price_per_share=purchase_price,
            total_amount=new_investment,
            notes="Additional purchase"
        )
        
        db.session.add(transaction)
        return stock
    
    @staticmethod
    def sell_stock(stock_id, shares_to_sell, sell_price, sell_date):
        """Sell shares of a stock"""
        from backend.models import StockPortfolio, StockTransaction
        
        stock = StockPortfolio.query.get_or_404(stock_id)
        
        if shares_to_sell  > stock.no_of_shares:
            raise ValueError("Cannot sell more shares than available")
        
        sale_proceeds = shares_to_sell * sell_price
        cost_of_sold_shares = shares_to_sell * stock.average_cost
        realized_gain_loss = sale_proceeds - cost_of_sold_shares
        
        # Update stock
        stock.no_of_shares -= shares_to_sell
        stock.total_cost_basis -= cost_of_sold_shares
        # Update market price to current sell price (optional)
        stock.market_price = sell_price
        # Recalculate all values including YTD
        stock.update_values()
        
        # Create transaction
        transaction = StockTransaction(
            stock_id=stock_id,
            transaction_type='SELL',
            transaction_date=sell_date,
            shares=shares_to_sell,
            price_per_share=sell_price,
            total_amount=sale_proceeds,
            notes=f"Realized P&L: {realized_gain_loss:.2f}"
        )
        
        db.session.add(transaction)
        return stock, realized_gain_loss
    
    @staticmethod
    def update_market_price(stock_id, market_price, update_date=None):
        """Update current market price and recalculate values"""
        from backend.models import StockPortfolio, StockTransaction
        
        stock = StockPortfolio.query.get_or_404(stock_id)
        
        stock.market_price = market_price
        stock.update_values()
        
        if update_date:
            transaction = StockTransaction(
                stock_id=stock_id,
                transaction_type='UPDATE',
                transaction_date=update_date,
                shares=0,
                price_per_share=market_price,
                total_amount=0,
                notes="Market price update"
            )
            db.session.add(transaction)
        
        return stock
    
    @staticmethod
    def set_year_end_prices(year_end_date):
        """Set year-end prices and reset YTD calculations"""
        from backend.models import StockPortfolio
        
        stocks = StockPortfolio.query.all()
        
        for stock in stocks:
            if stock.market_price:
                stock.price_at_last_year_end = stock.market_price
                stock.value_at_last_year_end = stock.no_of_shares * stock.market_price
                stock.unrealized_ytd_gain_loss = 0
                stock.unrealized_ytd_gain_loss_percent = 0
        
        db.session.commit()
        return len(stocks)
    
    @staticmethod
    def capture_year_start_prices():
        """Automatically capture Jan 1st prices for all stocks - improved version"""
        from backend.models import StockPortfolio, StockYearStartPrice
        
        current_year = datetime.now().year
        current_date = datetime.now().date()
        
        # Allow capturing within first week of January
        jan_1_date = datetime(current_year, 1, 1).date()
        jan_7_date = datetime(current_year, 1, 7).date()
        
        if jan_1_date <= current_date <= jan_7_date:
            stocks = StockPortfolio.query.all()
            captured_count = 0
            
            for stock in stocks:
                # Check if we already have this year's price
                existing = StockYearStartPrice.query.filter_by(
                    stock_id=stock.id, year=current_year
                ).first()
                
                if not existing and stock.market_price and stock.no_of_shares > 0:
                    # Capture the current market price as year-start price
                    year_start_price = StockYearStartPrice(
                        stock_id=stock.id,
                        year=current_year,
                        price=stock.market_price,
                        recorded_date=current_date
                    )
                    db.session.add(year_start_price)
                    captured_count += 1
            
            db.session.commit()
            return f"Year-start prices captured for {captured_count} stocks"
        
        return "Not within first week of January - year-start prices not captured"
    
    @staticmethod
    def get_current_ytd_price(stock_id):
        """Get the YTD baseline price for a stock"""
        from backend.models import StockYearStartPrice
        
        current_year = datetime.now().year
        year_start_price = StockYearStartPrice.query.filter_by(
            stock_id=stock_id, year=current_year
        ).first()
        
        if year_start_price:
            return year_start_price.price
        
        # Fallback: use the last available price
        last_year_price = StockYearStartPrice.query.filter_by(
            stock_id=stock_id
        ).order_by(StockYearStartPrice.year.desc()).first()
        
        return last_year_price.price if last_year_price else None
    
    @staticmethod
    def initialize_year_start_prices():
        """Initialize year-start prices for all existing stocks (run this once)"""
        from backend.models import StockPortfolio, StockYearStartPrice
        
        current_year = datetime.now().year
        stocks = StockPortfolio.query.all()
        count = 0
        
        for stock in stocks:
            # Check if year-start price exists
            existing = StockYearStartPrice.query.filter_by(
                stock_id=stock.id, year=current_year
            ).first()
            
            if not existing:
                # Use current market price or average cost as fallback
                ytd_price = stock.market_price if stock.market_price else stock.average_cost
                
                year_start_price = StockYearStartPrice(
                    stock_id=stock.id,
                    year=current_year,
                    price=ytd_price,
                    recorded_date=datetime.now().date()
                )
                db.session.add(year_start_price)
                count += 1
        
        db.session.commit()
        return f"Year-start prices initialized for {count} stocks"
    
    @staticmethod
    def recalculate_stock_from_transactions(stock_id):
        """Recalculate stock portfolio from all transactions"""
        from backend.models import StockPortfolio, StockTransaction
        
        stock = StockPortfolio.query.get_or_404(stock_id)
        transactions = StockTransaction.query.filter_by(
            stock_id=stock_id
        ).order_by(StockTransaction.transaction_date.asc()).all()
        
        # Reset stock values
        total_shares = Decimal('0')
        total_investment = Decimal('0')
        
        # Process all transactions in chronological order
        for transaction in transactions:
            if transaction.transaction_type == 'BUY':
                total_shares += transaction.shares
                total_investment += transaction.total_amount
            elif transaction.transaction_type == 'SELL':
                if total_shares > 0:
                    # Calculate average cost before sell
                    avg_cost = total_investment / total_shares if total_shares > 0 else Decimal('0')
                    cost_of_sold = transaction.shares * avg_cost
                    total_shares -= transaction.shares
                    total_investment -= cost_of_sold
        
        # Update stock with recalculated values
        stock.no_of_shares = total_shares
        stock.total_cost_basis = total_investment
        stock.average_cost = total_investment / total_shares if total_shares > 0 else Decimal('0')
        
        # Update current values and YTD
        stock.update_values()
        
        return stock