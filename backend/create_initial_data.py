# backend/create_initial_data.py
from backend.models import ProjectCategory
from backend.extension import db

def create_initial_categories():
    categories = [
        {'name': 'Investment', 'description': 'Direct investment projects', 'color': '#28a745'},
        {'name': 'Associate', 'description': 'Projects with associate companies', 'color': '#007bff'},
        {'name': 'Subsidiary', 'description': 'Projects with subsidiary companies', 'color': '#ffc107'},
        {'name': 'Internal', 'description': 'Internal company projects', 'color': '#6c757d'},
        {'name': 'Research', 'description': 'Market research and analysis', 'color': '#17a2b8'}
    ]
    
    for cat_data in categories:
        category = ProjectCategory.query.filter_by(name=cat_data['name']).first()
        if not category:
            category = ProjectCategory(**cat_data)
            db.session.add(category)
    
    db.session.commit()
    print("Initial project categories created")