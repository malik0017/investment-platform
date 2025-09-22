# backend/models.py
from .extension import db 

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False) # HASH THIS IN PROD!
    is_admin = db.Column(db.Boolean, default=False)
    role = db.Column(db.String(50), default='viewer')

     # Define valid roles as a class variable
    VALID_ROLES = ['super_admin', 'Group_Chief_accountant', 'viewer', 'portfolio_manager']

    def __init__(self, username, password, is_admin=False, role='viewer'):
        if role not in self.VALID_ROLES:
            raise ValueError(f"Invalid role. Must be one of: {', '.join(self.VALID_ROLES)}")
        self.username = username
        self.password = password  # Remember to hash in production!
        self.is_admin = is_admin
        self.role = role

    # Relationships
    investments = db.relationship('Investment', backref='investor', lazy=True)
    transactions = db.relationship('Transaction', backref='transaction_user', lazy=True)
    portfolios = db.relationship('Portfolio', backref='manager', lazy=True)
    wallets = db.relationship('Wallet', backref='wallet_owner', lazy=True)
    substrides = db.relationship('Substride', backref='substride_responsible', lazy=True)
    gl_transactions = db.relationship('GLTransaction', backref='gl_user', lazy=True)


    def __repr__(self):
        return f'<User {self.username}>'

class ChartOfAccount(db.Model):
    __tablename__ = 'chart_of_accounts'
    account_id = db.Column(db.Integer, primary_key=True)
    level1 = db.Column(db.String(100), nullable=False)
    level2 = db.Column(db.String(100))
    level3 = db.Column(db.String(100))
    level4 = db.Column(db.String(100))
    classification = db.Column(db.String(50))
    code = db.Column(db.String(50), unique=True, nullable=False)
    description_as_investments = db.Column(db.Text)
    description = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())

    transactions = db.relationship('Transaction', backref='account', lazy=True)
    gl_transactions = db.relationship('GLTransaction', backref='gl_account', lazy=True)

    def __repr__(self):
        return f'<ChartOfAccount {self.account_name}>'

class GLTransaction(db.Model):
    __tablename__ = 'gl_transactions'
    id = db.Column(db.Integer, primary_key=True)
    transaction_date = db.Column(db.Date, nullable=False)

    # Link to ChartOfAccount
    account_id = db.Column(db.Integer, db.ForeignKey('chart_of_accounts.account_id'), nullable=False)

    account_code = db.Column(db.String(50), nullable=False)
    account_name = db.Column(db.String(255))
    credit = db.Column(db.Numeric(18, 4), default=0.00)
    debit = db.Column(db.Numeric(18, 4), default=0.00)
    balance = db.Column(db.Numeric(18, 4))
    label = db.Column(db.String(255))
    document_number = db.Column(db.String(100))
    partner = db.Column(db.String(255))
    analytic_amount = db.Column(db.Numeric(18, 4))
    analytic_department = db.Column(db.String(100))
    analytic_employees = db.Column(db.String(100))
    analytic_inter_companies = db.Column(db.String(100))
    analytic_investment_at_cost = db.Column(db.String(100))
    analytic_investment_at_fv = db.Column(db.String(100))
    analytic_investment_at_oci = db.Column(db.String(100))
    analytic_investment_in_fund = db.Column(db.String(100))
    analytic_projects = db.Column(db.String(100))
    analytic_shareholders = db.Column(db.String(100))
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())

    # Existing foreign key to User
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=True)

    def __repr__(self):
        return f'<GLTransaction {self.id} - {self.account_code}>'


class Company(db.Model):
    __tablename__ = 'companies'
    company_id = db.Column(db.Integer, primary_key=True)
    company_name = db.Column(db.String(255), unique=True, nullable=False)
    legal_name = db.Column(db.String(255))
    registration_number = db.Column(db.String(100))
    country = db.Column(db.String(100))
    city = db.Column(db.String(100))
    address = db.Column(db.Text)
    contact_person = db.Column(db.String(255))
    contact_email = db.Column(db.String(255))
    contact_phone = db.Column(db.String(50))
    incorporation_date = db.Column(db.Date)
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())

    investments = db.relationship('Investment', backref='company_investment', lazy=True)
    transactions = db.relationship('Transaction', backref='company_transaction', lazy=True)
    wallets = db.relationship('Wallet', backref='company_wallet', lazy=True)
    cash_flows = db.relationship('CashFlow', backref='company_cash_flow', lazy=True)
    substrides = db.relationship('Substride', backref='company_substride', lazy=True)

    def __repr__(self):
        return f'<Company {self.company_name}>'

class Investment(db.Model):
    __tablename__ = 'investments'
    investment_id = db.Column(db.Integer, primary_key=True)
    company_id = db.Column(db.Integer, db.ForeignKey('companies.company_id'))
    investment_type = db.Column(db.String(50), nullable=False)
    asset_name = db.Column(db.String(255), nullable=False)
    ticker_symbol = db.Column(db.String(20))
    purchase_date = db.Column(db.Date, nullable=False)
    purchase_price = db.Column(db.Numeric(18, 4), nullable=False)
    quantity = db.Column(db.Numeric(18, 4), nullable=False)
    current_price = db.Column(db.Numeric(18, 4))
    currency = db.Column(db.String(10), default='USD', nullable=False)
    status = db.Column(db.String(50), default='Active')
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())
    updated_at = db.Column(db.DateTime, default=db.func.current_timestamp(), onupdate=db.func.current_timestamp())

    transactions = db.relationship('Transaction', backref='investment_transaction', lazy=True)
    sales = db.relationship('Sale', backref='investment_sale', lazy=True)
    purchases = db.relationship('Purchase', backref='investment_purchase', lazy=True)
    portfolio_associations = db.relationship('PortfolioInvestment', backref='associated_investment', lazy=True)

    def __repr__(self):
        return f'<Investment {self.asset_name} ({self.ticker_symbol})>'

class Transaction(db.Model):
    __tablename__ = 'transactions'
    transaction_id = db.Column(db.Integer, primary_key=True)
    transaction_date = db.Column(db.Date, nullable=False)
    transaction_type = db.Column(db.String(50), nullable=False)
    account_id = db.Column(db.Integer, db.ForeignKey('chart_of_accounts.account_id'), nullable=False)
    investment_id = db.Column(db.Integer, db.ForeignKey('investments.investment_id'))
    company_id = db.Column(db.Integer, db.ForeignKey('companies.company_id'))
    amount = db.Column(db.Numeric(18, 4), nullable=False)
    currency = db.Column(db.String(10), default='USD', nullable=False)
    description = db.Column(db.Text)
    reference_number = db.Column(db.String(100))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())

    def __repr__(self):
        return f'<Transaction {self.transaction_type} - {self.amount}>'

class Sale(db.Model):
    __tablename__ = 'sales'
    sale_id = db.Column(db.Integer, primary_key=True)
    investment_id = db.Column(db.Integer, db.ForeignKey('investments.investment_id'), nullable=False)
    sale_date = db.Column(db.Date, nullable=False)
    sale_price = db.Column(db.Numeric(18, 4), nullable=False)
    quantity_sold = db.Column(db.Numeric(18, 4), nullable=False)
    total_sale_amount = db.Column(db.Numeric(18, 4)) # Calculated, but can store for convenience
    gain_loss = db.Column(db.Numeric(18, 4))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())

    def __repr__(self):
        return f'<Sale {self.investment_id} - {self.total_sale_amount}>'

class Purchase(db.Model):
    __tablename__ = 'purchases'
    purchase_id = db.Column(db.Integer, primary_key=True)
    investment_id = db.Column(db.Integer, db.ForeignKey('investments.investment_id'), nullable=False)
    purchase_date = db.Column(db.Date, nullable=False)
    purchase_price = db.Column(db.Numeric(18, 4), nullable=False)
    quantity_purchased = db.Column(db.Numeric(18, 4), nullable=False)
    total_purchase_amount = db.Column(db.Numeric(18, 4)) # Calculated, but can store for convenience
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())

    def __repr__(self):
        return f'<Purchase {self.investment_id} - {self.total_purchase_amount}>'

class Portfolio(db.Model):
    __tablename__ = 'portfolios'
    portfolio_id = db.Column(db.Integer, primary_key=True)
    portfolio_name = db.Column(db.String(255), unique=True, nullable=False)
    description = db.Column(db.Text)
    manager_user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())
    updated_at = db.Column(db.DateTime, default=db.func.current_timestamp(), onupdate=db.func.current_timestamp())

    investments = db.relationship('PortfolioInvestment', backref='portfolio', lazy=True)

    def __repr__(self):
        return f'<Portfolio {self.portfolio_name}>'

class PortfolioInvestment(db.Model):
    __tablename__ = 'portfolio_investments'
    portfolio_investment_id = db.Column(db.Integer, primary_key=True)
    portfolio_id = db.Column(db.Integer, db.ForeignKey('portfolios.portfolio_id'), nullable=False)
    investment_id = db.Column(db.Integer, db.ForeignKey('investments.investment_id'), nullable=False)
    allocated_quantity = db.Column(db.Numeric(18, 4))
    allocated_value = db.Column(db.Numeric(18, 4))
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())

    __table_args__ = (db.UniqueConstraint('portfolio_id', 'investment_id', name='_portfolio_investment_uc'),)

    def __repr__(self):
        return f'<PortfolioInvestment Portfolio:{self.portfolio_id} Inv:{self.investment_id}>'

class Wallet(db.Model):
    __tablename__ = 'wallets'
    wallet_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    company_id = db.Column(db.Integer, db.ForeignKey('companies.company_id'))
    currency = db.Column(db.String(10), default='USD', nullable=False)
    balance = db.Column(db.Numeric(18, 4), default=0.00)
    wallet_type = db.Column(db.String(50), default='General')
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())
    updated_at = db.Column(db.DateTime, default=db.func.current_timestamp(), onupdate=db.func.current_timestamp())

    def __repr__(self):
        return f'<Wallet {self.wallet_id} - {self.balance} {self.currency}>'

class CashFlow(db.Model):
    __tablename__ = 'cash_flow'
    cash_flow_id = db.Column(db.Integer, primary_key=True)
    company_id = db.Column(db.Integer, db.ForeignKey('companies.company_id'), nullable=False)
    flow_date = db.Column(db.Date, nullable=False)
    flow_type = db.Column(db.String(50), nullable=False)
    description = db.Column(db.Text)
    amount = db.Column(db.Numeric(18, 4), nullable=False)
    currency = db.Column(db.String(10), default='USD', nullable=False)
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())

    def __repr__(self):
        return f'<CashFlow {self.flow_type} {self.amount}>'

class Substride(db.Model):
    __tablename__ = 'substrides'
    substride_id = db.Column(db.Integer, primary_key=True)
    substride_name = db.Column(db.String(255), nullable=False)
    company_id = db.Column(db.Integer, db.ForeignKey('companies.company_id'))
    start_date = db.Column(db.Date)
    end_date = db.Column(db.Date)
    status = db.Column(db.String(50), default='Planned')
    budget = db.Column(db.Numeric(18, 4))
    actual_cost = db.Column(db.Numeric(18, 4))
    description = db.Column(db.Text)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())
    updated_at = db.Column(db.DateTime, default=db.func.current_timestamp(), onupdate=db.func.current_timestamp())

    def __repr__(self):
        return f'<Substride {self.substride_name}>'
    
class CalendarEvent(db.Model):
    __tablename__ = 'calendar_events'
    
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text)
    start_datetime = db.Column(db.DateTime, nullable=False)
    end_datetime = db.Column(db.DateTime, nullable=False)
    event_type = db.Column(db.Enum('meeting', 'event', 'announcement'), nullable=False)
    location = db.Column(db.String(255))
    organizer_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    attendees = db.Column(db.Text)  # JSON string of attendee emails
    send_email = db.Column(db.Boolean, default=False)
    email_subject = db.Column(db.String(255))
    email_message = db.Column(db.Text)
    send_whatsapp = db.Column(db.Boolean, default=False)
    whatsapp_numbers = db.Column(db.Text, nullable=True)
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())
    updated_at = db.Column(db.DateTime, default=db.func.current_timestamp(), 
                          onupdate=db.func.current_timestamp())
    
    # Relationship to User
    organizer = db.relationship('User', backref=db.backref('calendar_events', lazy=True))
    
    def __repr__(self):
        return f'<CalendarEvent {self.title} - {self.start_datetime}>'
    
    
class StockPortfolio(db.Model):
    """Represents the current aggregate holding of a single stock."""
    __tablename__ = 'stock_portfolio'
    
    id = db.Column(db.Integer, primary_key=True)
    company_name = db.Column(db.String(100), nullable=False)
    ticker_symbol = db.Column(db.String(20), nullable=False, unique=True)
    market = db.Column(db.String(50))
    no_of_shares = db.Column(db.Numeric(18, 4), default=0)
    average_cost = db.Column(db.Numeric(18, 4), default=0)
    total_cost_basis = db.Column(db.Numeric(18, 4), default=0)
    market_price = db.Column(db.Numeric(18, 4), default=0)
    current_value = db.Column(db.Numeric(18, 4), default=0)
    unrealized_gain_loss = db.Column(db.Numeric(18, 4), default=0)
    unrealized_gain_loss_percent = db.Column(db.Numeric(8, 4), default=0)
    price_at_last_year_end = db.Column(db.Numeric(18, 4))
    value_at_last_year_end = db.Column(db.Numeric(18, 4))
    unrealized_ytd_gain_loss = db.Column(db.Numeric(18, 4), default=0)
    unrealized_ytd_gain_loss_percent = db.Column(db.Numeric(8, 4), default=0)
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())
    updated_at = db.Column(db.DateTime, default=db.func.current_timestamp(), 
                          onupdate=db.func.current_timestamp())
    
    transactions = db.relationship('StockTransaction', backref='stock', lazy=True, 
                                 cascade='all, delete-orphan')

    def update_values(self):
        """Update calculated values based on current data"""
        if self.market_price and self.no_of_shares:
            self.current_value = self.no_of_shares * self.market_price
            self.unrealized_gain_loss = self.current_value - self.total_cost_basis
            if self.total_cost_basis > 0:
                self.unrealized_gain_loss_percent = (
                    self.unrealized_gain_loss / self.total_cost_basis * 100
                )
            
            # Update YTD values
            if self.price_at_last_year_end:
                ytd_value = self.no_of_shares * self.price_at_last_year_end
                self.unrealized_ytd_gain_loss = self.current_value - ytd_value
                if ytd_value > 0:
                    self.unrealized_ytd_gain_loss_percent = (
                        self.unrealized_ytd_gain_loss / ytd_value * 100
                    )

class StockTransaction(db.Model):
    """Records every single Buy and Sell transaction."""
    __tablename__ = 'stock_transactions'
    
    id = db.Column(db.Integer, primary_key=True)
    stock_id = db.Column(db.Integer, db.ForeignKey('stock_portfolio.id'), nullable=False)
    transaction_type = db.Column(db.Enum('BUY', 'SELL', 'UPDATE', name='transaction_type'), nullable=False)
    transaction_date = db.Column(db.Date, nullable=False)
    shares = db.Column(db.Numeric(18, 4), nullable=False)
    price_per_share = db.Column(db.Numeric(18, 4), nullable=False)
    total_amount = db.Column(db.Numeric(18, 4), nullable=False)
    notes = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())


class SystemLog(db.Model):
    """Logs system-level actions like year-end price setting."""
    __tablename__ = 'system_logs'
    
    id = db.Column(db.Integer, primary_key=True)
    action_type = db.Column(db.String(50), nullable=False)
    description = db.Column(db.Text, nullable=False)
    details = db.Column(db.Text, nullable=True)
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())
    
    def __repr__(self):
        return f'<SystemLog {self.action_type} - {self.created_at}>'
    
class ProjectCategory(db.Model):
    __tablename__ = 'project_categories'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text)
    color = db.Column(db.String(7), default='#007bff')  # Hex color
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())
    
    projects = db.relationship('Project', backref='category', lazy=True)

class Project(db.Model):
    __tablename__ = 'projects'
    id = db.Column(db.BigInteger, primary_key=True, autoincrement=True)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text)
    category_id = db.Column(db.Integer, db.ForeignKey('project_categories.id'))
    company_id = db.Column(db.Integer, db.ForeignKey('companies.company_id'))
    priority = db.Column(db.Enum('Low', 'Medium', 'High', 'Critical'), default='Medium')
    status = db.Column(db.Enum('Planning', 'Active', 'On Hold', 'Completed', 'Cancelled'), default='Planning')
    start_date = db.Column(db.Date)
    end_date = db.Column(db.Date)
    budget = db.Column(db.Numeric(18, 4))
    actual_cost = db.Column(db.Numeric(18, 4))
    progress = db.Column(db.Integer, default=0)  # 0-100%
    manager_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())
    updated_at = db.Column(db.DateTime, default=db.func.current_timestamp(), onupdate=db.func.current_timestamp())
    
    tasks = db.relationship('ProjectTask', back_populates='project', lazy=True)
    milestones = db.relationship('ProjectMilestone', back_populates='project', lazy=True)
    documents = db.relationship('ProjectDocument', back_populates='project', lazy=True)
    team_members = db.relationship('ProjectTeam', back_populates='project', lazy=True)
    activities = db.relationship(
        'ProjectActivity',
        back_populates='project',
        lazy=True,
        order_by='ProjectActivity.created_at.desc()'
    )

class ProjectTask(db.Model):
    __tablename__ = 'project_tasks'
    id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, db.ForeignKey('projects.id'), nullable=False)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text)
    status = db.Column(db.Enum('To Do', 'In Progress', 'Review', 'Completed'), default='To Do')
    priority = db.Column(db.Enum('Low', 'Medium', 'High'), default='Medium')
    assigned_to = db.Column(db.Integer, db.ForeignKey('user.id'))
    due_date = db.Column(db.Date)
    estimated_hours = db.Column(db.Numeric(8, 2))
    actual_hours = db.Column(db.Numeric(8, 2))
    progress = db.Column(db.Integer, default=0)  # 0-100%
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())
    updated_at = db.Column(db.DateTime, default=db.func.current_timestamp(), onupdate=db.func.current_timestamp())
        
    # Relationship to User
    assignee = db.relationship('User', backref=db.backref('assigned_tasks', lazy=True))
    project = db.relationship('Project', back_populates='tasks')
    @property
    def assigned_user(self):
        if self.assigned_to:
            return User.query.get(self.assigned_to)
        return None

class ProjectTeam(db.Model):
    __tablename__ = 'project_teams'
    id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, db.ForeignKey('projects.id'), nullable=False)
    project = db.relationship('Project', back_populates='team_members')
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    role = db.Column(db.String(100))
    joined_date = db.Column(db.DateTime, default=db.func.current_timestamp())
    
    # Relationship to User
    member = db.relationship('User', backref=db.backref('project_memberships', lazy=True))

class ProjectMilestone(db.Model):
    __tablename__ = 'project_milestones'
    id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, db.ForeignKey('projects.id'), nullable=False)
    project = db.relationship('Project', back_populates='milestones')
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text)
    due_date = db.Column(db.Date)
    completed_date = db.Column(db.Date)
    status = db.Column(db.Enum('Pending', 'Achieved', 'Delayed'), default='Pending')
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())

class ProjectDocument(db.Model):
    __tablename__ = 'project_documents'
    id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, db.ForeignKey('projects.id'), nullable=False)
    project = db.relationship('Project', back_populates='documents')
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text)
    file_path = db.Column(db.String(500), nullable=False)
    file_type = db.Column(db.String(50))
    uploaded_by = db.Column(db.Integer, db.ForeignKey('user.id'))
    uploaded_at = db.Column(db.DateTime, default=db.func.current_timestamp())
    
    # Relationship to User
    uploader = db.relationship('User', backref=db.backref('uploaded_documents', lazy=True))

class ProjectActivity(db.Model):
    __tablename__ = 'project_activities'
    id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, db.ForeignKey('projects.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    activity_type = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())
    
    # Relationships - use back_populates to match Project model
    project = db.relationship('Project', back_populates='activities')
    user = db.relationship('User', backref=db.backref('project_activities', lazy=True))

class MutualFund(db.Model):
    """Represents a mutual fund product"""
    __tablename__ = 'mutual_funds'
    
    id = db.Column(db.BigInteger, primary_key=True, autoincrement=True)
    fund_name = db.Column(db.String(255), nullable=False)
    fund_code = db.Column(db.String(50), unique=True, nullable=False)
    fund_type = db.Column(db.String(100))  # Equity, Debt, Hybrid, etc.
    category = db.Column(db.String(100))   # Large Cap, Mid Cap, Small Cap, etc.
    fund_manager = db.Column(db.String(255))
    inception_date = db.Column(db.Date)
    expense_ratio = db.Column(db.Numeric(5, 4))
    exit_load = db.Column(db.Numeric(5, 4))
    minimum_investment = db.Column(db.Numeric(18, 4))
    sip_minimum = db.Column(db.Numeric(18, 4))
    risk_level = db.Column(db.String(50))
    fund_house = db.Column(db.String(255))
    is_active = db.Column(db.Boolean, default=True)
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())
    updated_at = db.Column(db.DateTime, default=db.func.current_timestamp(),
                           onupdate=db.func.current_timestamp())
    
    # Relationships
    nav_history = db.relationship('MutualFundNAV', backref='fund', lazy=True)
    holdings = db.relationship('MutualFundHolding', back_populates='fund', lazy=True)
    transactions = db.relationship('MutualFundTransaction', backref='fund_transaction', lazy=True)

    def __repr__(self):
        return f'<MutualFund {self.fund_code} - {self.fund_name}>'

class MutualFundNAV(db.Model):
    """Historical NAV data for mutual funds"""
    __tablename__ = 'mutual_fund_nav'
    
    id = db.Column(db.BigInteger, primary_key=True, autoincrement=True)
    fund_id = db.Column(db.BigInteger, db.ForeignKey('mutual_funds.id'), nullable=False)
    nav_date = db.Column(db.Date, nullable=False)
    nav_value = db.Column(db.Numeric(18, 4), nullable=False)
    repurchase_price = db.Column(db.Numeric(18, 4))
    sale_price = db.Column(db.Numeric(18, 4))
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())
    
    __table_args__ = (db.UniqueConstraint('fund_id', 'nav_date', name='fund_nav_date_uc'),)

    def __repr__(self):
        return f'<MutualFundNAV {self.fund_id} - {self.nav_date}: {self.nav_value}>'

class MutualFundHolding(db.Model):
    """Represents holdings of mutual funds by the company"""
    __tablename__ = 'mutual_fund_holdings'
    
    id = db.Column(db.BigInteger, primary_key=True, autoincrement=True)
    fund_id = db.Column(db.BigInteger, db.ForeignKey('mutual_funds.id'), nullable=False)
    purchase_date = db.Column(db.Date, nullable=False)
    units = db.Column(db.Numeric(18, 4), nullable=False)
    purchase_nav = db.Column(db.Numeric(18, 4), nullable=False)
    purchase_value = db.Column(db.Numeric(18, 4), nullable=False)
    current_nav = db.Column(db.Numeric(18, 4))
    current_value = db.Column(db.Numeric(18, 4))
    unrealized_gain_loss_percent = db.Column(db.Numeric(8, 4))
    unrealized_gain_loss = db.Column(db.Float, default=0.0)
    folio_number = db.Column(db.String(100))
    is_active = db.Column(db.Boolean, default=True)
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())
    updated_at = db.Column(db.DateTime, default=db.func.current_timestamp(),
                           onupdate=db.func.current_timestamp())
    
    # Fix the relationship - add backref or use relationship
    fund = db.relationship('MutualFund', back_populates='holdings', lazy=True)
    transactions = db.relationship('MutualFundTransaction', backref='holding', lazy=True)

    def __repr__(self):
        return f'<MutualFundHolding {self.fund_id} - {self.units} units>'

class MutualFundTransaction(db.Model):
    """Records all transactions for mutual funds"""
    __tablename__ = 'mutual_fund_transactions'
    
    id = db.Column(db.BigInteger, primary_key=True, autoincrement=True)
    holding_id = db.Column(db.BigInteger, db.ForeignKey('mutual_fund_holdings.id'), nullable=False)
    fund_id = db.Column(db.BigInteger, db.ForeignKey('mutual_funds.id'), nullable=False)
    transaction_type = db.Column(db.Enum('PURCHASE', 'REDEMPTION', 'DIVIDEND', 'SWITCH',
                                         name='mutual_fund_transaction_type'), nullable=False)
    transaction_date = db.Column(db.Date, nullable=False)
    units = db.Column(db.Numeric(18, 4))
    nav = db.Column(db.Numeric(18, 4))
    amount = db.Column(db.Numeric(18, 4), nullable=False)
    description = db.Column(db.Text)
    reference_number = db.Column(db.String(100))
    user_id = db.Column(db.BigInteger, db.ForeignKey('user.id', ondelete='SET NULL'))
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())

    def __repr__(self):
        return f'<MutualFundTransaction {self.transaction_type} - {self.amount}>'