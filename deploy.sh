#!/bin/bash

# Deployment Script for The Office Vibes
# Run this on your VPS after pushing code to Git

echo "🚀 Starting deployment for The Office Vibes..."

# Navigate to project directory
cd /var/www/theofficevibes || exit

# Pull latest code
echo "📥 Pulling latest code from Git..."
git pull origin main

# Install/update dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building Next.js project..."
npm run build

# Restart PM2 process
echo "🔄 Restarting application..."
pm2 restart theofficevibes

# Show status
echo "✅ Deployment complete!"
pm2 status

echo ""
echo "Visit: https://theofficevibes.com"

