# Deployment Guide - The Office Vibes
## Deploying to Hetzner VPS

This guide covers deploying your Next.js site to a Hetzner VPS with Node.js, PM2, Nginx, and SSL.

---

## Prerequisites

- Hetzner VPS (Ubuntu 22.04 or similar)
- Domain: theofficevibes.com pointed to your VPS IP
- SSH access to your server
- Node.js 18+ installed on server

---

## Step 1: Prepare Your Server

### 1.1 Connect to VPS
```bash
ssh root@your-vps-ip
```

### 1.2 Update System
```bash
apt update && apt upgrade -y
```

### 1.3 Install Node.js (if not installed)
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
apt install -y nodejs
node --version  # Should be v20.x
```

### 1.4 Install PM2 (Process Manager)
```bash
npm install -g pm2
```

### 1.5 Install Nginx (Reverse Proxy)
```bash
apt install -y nginx
systemctl enable nginx
systemctl start nginx
```

---

## Step 2: Set Up Your Project on VPS

### 2.1 Create App Directory
```bash
mkdir -p /var/www/theofficevibes
cd /var/www/theofficevibes
```

### 2.2 Clone from Git (after you push)
```bash
# We'll do this in Step 3 after setting up Git
```

---

## Step 3: Push to Git Repository

### 3.1 Initialize Git (on your local machine)
```bash
cd /home/dell/theofficevibes
git init
git add .
git commit -m "Initial commit - The Office Vibes landing page"
```

### 3.2 Create GitHub Repository
1. Go to github.com and create a new private repository
2. Name it: `theofficevibes`
3. Don't initialize with README (we already have code)

### 3.3 Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/theofficevibes.git
git branch -M main
git push -u origin main
```

---

## Step 4: Deploy to VPS

### 4.1 Clone Repository on VPS
```bash
ssh root@your-vps-ip
cd /var/www/theofficevibes
git clone https://github.com/YOUR_USERNAME/theofficevibes.git .
```

### 4.2 Install Dependencies
```bash
npm install
```

### 4.3 Build for Production
```bash
npm run build
```

### 4.4 Start with PM2
```bash
pm2 start npm --name "theofficevibes" -- start
pm2 save
pm2 startup  # Follow the instructions it gives you
```

### 4.5 Verify it's Running
```bash
pm2 status
pm2 logs theofficevibes  # Check for errors
```

Your site should now be running on `http://localhost:3000` on the VPS.

---

## Step 5: Configure Nginx Reverse Proxy

### 5.1 Create Nginx Configuration
```bash
nano /etc/nginx/sites-available/theofficevibes
```

### 5.2 Paste This Configuration
```nginx
server {
    listen 80;
    listen [::]:80;
    server_name theofficevibes.com www.theofficevibes.com;

    # Logging
    access_log /var/log/nginx/theofficevibes_access.log;
    error_log /var/log/nginx/theofficevibes_error.log;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 5.3 Enable Site
```bash
ln -s /etc/nginx/sites-available/theofficevibes /etc/nginx/sites-enabled/
nginx -t  # Test configuration
systemctl reload nginx
```

---

## Step 6: Set Up SSL with Let's Encrypt

### 6.1 Install Certbot
```bash
apt install -y certbot python3-certbot-nginx
```

### 6.2 Get SSL Certificate
```bash
certbot --nginx -d theofficevibes.com -d www.theofficevibes.com
```

Follow the prompts:
- Enter your email
- Agree to terms
- Choose redirect (option 2) to force HTTPS

### 6.3 Test Auto-Renewal
```bash
certbot renew --dry-run
```

---

## Step 7: Configure Domain DNS

Go to your domain registrar and set these DNS records:

| Type  | Name | Value            | TTL  |
|-------|------|------------------|------|
| A     | @    | YOUR_VPS_IP      | 3600 |
| A     | www  | YOUR_VPS_IP      | 3600 |

Wait 5-60 minutes for DNS propagation.

---

## Step 8: Verify Deployment

Visit:
- `https://theofficevibes.com` ✅
- `https://www.theofficevibes.com` ✅

Both should load your site with HTTPS!

---

## Updating Your Site (Future Deployments)

### On Your Local Machine:
```bash
# Make changes
git add .
git commit -m "Update: description of changes"
git push origin main
```

### On Your VPS:
```bash
ssh root@your-vps-ip
cd /var/www/theofficevibes
git pull origin main
npm install  # If dependencies changed
npm run build
pm2 restart theofficevibes
```

---

## Useful PM2 Commands

```bash
pm2 list                      # Show all running apps
pm2 logs theofficevibes       # View logs
pm2 restart theofficevibes    # Restart app
pm2 stop theofficevibes       # Stop app
pm2 start theofficevibes      # Start app
pm2 delete theofficevibes     # Remove from PM2
pm2 monit                     # Monitor CPU/Memory
```

---

## Useful Nginx Commands

```bash
systemctl status nginx        # Check status
systemctl restart nginx       # Restart Nginx
nginx -t                      # Test configuration
tail -f /var/log/nginx/theofficevibes_error.log  # Watch errors
```

---

## Firewall Setup (Optional but Recommended)

```bash
ufw allow 22     # SSH
ufw allow 80     # HTTP
ufw allow 443    # HTTPS
ufw enable
ufw status
```

---

## Performance Optimization (Optional)

### Enable Nginx Gzip Compression
```bash
nano /etc/nginx/nginx.conf
```

Add inside `http` block:
```nginx
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css text/xml text/javascript application/javascript application/json application/xml+rss;
```

Restart: `systemctl reload nginx`

---

## Monitoring

### Set Up PM2 Monitoring (Optional)
```bash
pm2 install pm2-logrotate  # Automatic log rotation
```

---

## Troubleshooting

### Site Not Loading
1. Check PM2 status: `pm2 status`
2. Check PM2 logs: `pm2 logs theofficevibes`
3. Check Nginx: `nginx -t` and `systemctl status nginx`
4. Check DNS: Use `dig theofficevibes.com` to verify DNS

### "502 Bad Gateway"
- Next.js app isn't running: `pm2 restart theofficevibes`
- Port mismatch in Nginx config

### SSL Issues
- Run: `certbot renew --force-renewal`
- Check certificate: `certbot certificates`

---

## Environment Variables (If Needed Later)

If you need environment variables:

```bash
nano /var/www/theofficevibes/.env.production
```

Then restart PM2:
```bash
pm2 restart theofficevibes --update-env
```

---

## Backup Strategy

### Automated Backups (Recommended)
```bash
# Create backup script
nano /root/backup-theofficevibes.sh
```

```bash
#!/bin/bash
tar -czf /root/backups/theofficevibes-$(date +%Y%m%d).tar.gz /var/www/theofficevibes
find /root/backups -name "theofficevibes-*.tar.gz" -mtime +30 -delete
```

```bash
chmod +x /root/backup-theofficevibes.sh
mkdir -p /root/backups

# Add to crontab (daily at 2 AM)
crontab -e
```

Add line:
```
0 2 * * * /root/backup-theofficevibes.sh
```

---

## Next Steps After Deployment

1. ✅ Test all pages and features
2. ✅ Set up Google Analytics (if you want)
3. ✅ Test donation buttons
4. ✅ Test email signup
5. ✅ Share link with friends for feedback
6. ✅ Update YouTube description with link
7. ✅ Start driving traffic!

---

## Need Help?

Common issues and solutions are in the Troubleshooting section above.

For PM2: https://pm2.keymetrics.io/docs/usage/quick-start/
For Nginx: https://nginx.org/en/docs/
For Let's Encrypt: https://certbot.eff.org/

---

**Your site is ready to go live! 🚀**

