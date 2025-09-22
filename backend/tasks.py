# backend/tasks.py
from celery import Celery
from backend.app import create_app
from backend.services.data_sync_service import get_data_sync_service
from backend.services.analytics_service import get_analytics_service
import logging

logger = logging.getLogger(__name__)

def make_celery(app):
    celery = Celery(
        app.import_name,
        backend=app.config['CELERY_RESULT_BACKEND'],
        broker=app.config['CELERY_BROKER_URL']
    )
    celery.conf.update(app.config)
    
    class ContextTask(celery.Task):
        def __call__(self, *args, **kwargs):
            with app.app_context():
                return self.run(*args, **kwargs)
    
    celery.Task = ContextTask
    return celery

# Create Flask app and then celery
flask_app = create_app()
celery = make_celery(flask_app)

@celery.task
def sync_odoo_data(days_back=1):
    """Celery task to sync data from Odoo"""
    try:
        sync_service = get_data_sync_service()
        result = sync_service.sync_all_data(days_back)
        
        logger.info(f"Celery task completed: Synced {result} records")
        return result
    except Exception as e:
        logger.error(f"Celery task failed: {str(e)}")
        raise

@celery.task
def generate_daily_reports():
    """Celery task to generate daily reports"""
    try:
        analytics_service = get_analytics_service()
        
        # Generate forecasts for key classifications
        forecasts = {}
        for classification in ['Asset', 'Liability', 'Income', 'Expense']:
            try:
                forecast = analytics_service.forecast_financials(classification, periods=12)
                forecasts[classification] = forecast
            except Exception as e:
                logger.warning(f"Failed to forecast {classification}: {str(e)}")
        
        # Calculate financial ratios
        ratios = analytics_service.get_financial_ratios()
        
        # Detect anomalies
        anomalies = {}
        for classification in ['Asset', 'Liability']:
            try:
                classification_anomalies = analytics_service.detect_anomalies(classification)
                anomalies[classification] = classification_anomalies
            except Exception as e:
                logger.warning(f"Failed to detect anomalies for {classification}: {str(e)}")
        
        logger.info("Daily reports generated successfully")
        return {
            'forecasts': forecasts,
            'ratios': ratios,
            'anomalies': anomalies
        }
    except Exception as e:
        logger.error(f"Daily reports task failed: {str(e)}")
        raise