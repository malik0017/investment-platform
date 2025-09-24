#!/bin/bash
echo "Starting deployment process..."

# Backup current deployment
echo "Backing up current deployment..."
ssh user@your-server-ip "cd /var/www/investment-platform && tar -czf backup-$(date +%Y%m%d-%H%M%S).tar.gz ."

# Transfer files
echo "Transferring files..."
rsync -avz --exclude 'venv' --exclude '.env' --exclude '__pycache__' ./ user@your-server-ip:/var/www/investment-platform/

echo "Deployment files transferred successfully!"