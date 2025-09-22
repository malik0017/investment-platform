# config.py
import os
from datetime import timedelta
from celery.schedules import crontab

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'change-me-in-production'
    
    # Database
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or \
        'mysql+pymysql://root:@127.0.0.1:3306/investment_db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    
    # Odoo
    ODOO_URL = os.environ.get('ODOO_URL')
    ODOO_DB_NAME = os.environ.get('ODOO_DB_NAME')
    ODOO_USERNAME = os.environ.get('ODOO_USERNAME')
    ODOO_PASSWORD = os.environ.get('ODOO_PASSWORD')
    
    # Celery
    CELERY_BROKER_URL = os.environ.get('CELERY_BROKER_URL') or 'redis://localhost:6379/0'
    CELERY_RESULT_BACKEND = os.environ.get('CELERY_RESULT_BACKEND') or 'redis://localhost:6379/0'
    
    # Celery beat schedule
    CELERY_BEAT_SCHEDULE = {
        'sync-odoo-data-nightly': {
            'task': 'backend.tasks.sync_odoo_data',
            'schedule': crontab(hour=2, minute=0),  # Run daily at 2 AM
            'args': (1,)  # days_back
        },
        'generate-daily-reports': {
            'task': 'backend.tasks.generate_daily_reports',
            'schedule': crontab(hour=6, minute=0),  # Run daily at 6 AM
        }
    }
    
    # ML/Analytics settings
    ML_MODEL_PATH = os.environ.get('ML_MODEL_PATH') or './ml_models'
    FORECAST_HORIZON = int(os.environ.get('FORECAST_HORIZON') or 12)
    
    # Cache
    CACHE_TYPE = os.environ.get('CACHE_TYPE') or 'simple'
    CACHE_DEFAULT_TIMEOUT = int(os.environ.get('CACHE_DEFAULT_TIMEOUT') or 300)
    
    # API settings
    API_RATE_LIMIT = os.environ.get('API_RATE_LIMIT') or '100 per day'
    
    # Logging
    LOG_LEVEL = os.environ.get('LOG_LEVEL') or 'INFO'
    LOG_FILE = os.environ.get('LOG_FILE') or 'app.log'

class DevelopmentConfig(Config):
    DEBUG = True
    SQLALCHEMY_ECHO = True

class ProductionConfig(Config):
    DEBUG = False
    SQLALCHEMY_ECHO = False

class TestingConfig(Config):
    TESTING = True
    SQLALCHEMY_DATABASE_URI = 'sqlite:///:memory:'