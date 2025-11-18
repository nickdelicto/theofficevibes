// PM2 Ecosystem Configuration
// This file configures PM2 for production deployment

module.exports = {
  apps: [{
    name: 'theofficevibes',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/theofficevibes',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '500M',
    env: {
      NODE_ENV: 'production',
      PORT: 3000,
    },
    error_file: '/var/log/pm2/theofficevibes-error.log',
    out_file: '/var/log/pm2/theofficevibes-out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
  }],
};

