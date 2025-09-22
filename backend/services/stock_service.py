from decimal import Decimal
from datetime import datetime
from sqlalchemy import func
from backend.models import StockPortfolio, StockTransaction, db

class StockService:
    
    @staticmethod
    def create_stock(company_name, ticker_symbol, market, purchase_date, 
                    shares, purchase_price):
        """Create a new stock holding with initial purchase"""
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
            total_amount=total_cost
        )
        
        db.session.add(transaction)
        return stock
    
    @staticmethod
    def buy_more_stock(stock_id, shares, price, purchase_date):
        """Purchase additional shares of existing stock"""
        stock = StockPortfolio.query.get_or_404(stock_id)
        
        # Calculate new average cost using weighted average
        current_investment = stock.total_cost_basis
        new_investment = shares * price
        total_investment = current_investment + new_investment
        total_shares = stock.no_of_shares + shares
        
        new_avg_cost = total_investment / total_shares
        
        # Update stock
        stock.no_of_shares = total_shares
        stock.average_cost = new_avg_cost
        stock.total_cost_basis = total_investment
        stock.update_values()
        
        # Create transaction
        transaction = StockTransaction(
            stock_id=stock_id,
            transaction_type='BUY',
            transaction_date=purchase_date,
            shares=shares,
            price_per_share=price,
            total_amount=new_investment
        )
        
        db.session.add(transaction)
        return stock
    
    @staticmethod
    def sell_stock(stock_id, shares, price, sell_date):
        """Sell shares of a stock"""
        stock = StockPortfolio.query.get_or_404(stock_id)
        
        if shares > stock.no_of_shares:
            raise ValueError("Cannot sell more shares than available")
        
        sale_proceeds = shares * price
        cost_of_sold_shares = shares * stock.average_cost
        realized_gain_loss = sale_proceeds - cost_of_sold_shares
        
        # Update stock
        stock.no_of_shares -= shares
        stock.total_cost_basis -= cost_of_sold_shares
        stock.update_values()
        
        # Create transaction
        transaction = StockTransaction(
            stock_id=stock_id,
            transaction_type='SELL',
            transaction_date=sell_date,
            shares=shares,
            price_per_share=price,
            total_amount=sale_proceeds,
            notes=f"Realized P&L: ${realized_gain_loss:.2f}"
        )
        
        db.session.add(transaction)
        return stock, realized_gain_loss
    
    @staticmethod
    def update_market_price(stock_id, market_price, update_date=None):
        """Update current market price and recalculate values"""
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
        stocks = StockPortfolio.query.all()
        
        for stock in stocks:
            if stock.market_price:
                stock.price_at_last_year_end = stock.market_price
                stock.value_at_last_year_end = stock.no_of_shares * stock.market_price
                stock.unrealized_ytd_gain_loss = 0
                stock.unrealized_ytd_gain_loss_percent = 0
        
        db.session.commit()
        return len(stocks)