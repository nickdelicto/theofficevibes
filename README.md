# The Office Vibes - Landing Page 🎬☕

A conversion-optimized landing page for The Office Vibes, designed to convert YouTube Shorts viewers into supporters.

**Live Site:** https://theofficevibes.com

---

## 🎯 Purpose

Convert YouTube Shorts viewers into supporters through:
- Multiple donation options (Ko-fi, PayPal, CashApp, Venmo)
- Email list building
- Social proof (1M+ monthly views)
- Engaging content showcase

---

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Hetzner VPS (Node.js + PM2 + Nginx)

---

## 📂 Project Structure

```
theofficevibes/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with metadata & SEO
│   │   ├── page.tsx                # Main landing page
│   │   ├── globals.css             # Global styles & Tailwind
│   │   ├── work-with-me/           # Hidden sponsor page
│   │   └── api/subscribe/          # Email signup API
│   └── components/
│       ├── Hero.tsx                # Hero section
│       ├── DonationSection.tsx     # Donation buttons
│       ├── ShortsShowcase.tsx      # YouTube shorts embed
│       ├── EmailSignup.tsx         # Email capture
│       └── Footer.tsx              # Footer with social links
├── public/                         # Static assets
├── DEPLOYMENT.md                   # VPS deployment guide
├── CHECKLIST.md                    # Pre-launch checklist
├── ecosystem.config.js             # PM2 configuration
└── deploy.sh                       # Deployment script
```

---

## 🛠️ Local Development

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production
```bash
npm run build
npm start
```

---

## 🌐 Deployment

### To Hetzner VPS

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for complete step-by-step guide:
- VPS setup (Node.js, PM2, Nginx)
- Git repository setup
- SSL certificate (Let's Encrypt)
- Domain configuration
- Automated deployment script

### Quick Deploy (After Initial Setup)
```bash
# On your local machine
git add .
git commit -m "Update: your changes"
git push origin main

# On your VPS
ssh root@your-vps-ip
cd /var/www/theofficevibes
./deploy.sh
```

---

## 📋 Pre-Launch Checklist

See **[CHECKLIST.md](./CHECKLIST.md)** for complete checklist including:
- Content testing
- Mobile responsiveness
- Donation button testing
- DNS configuration
- Post-launch marketing tasks

---

## 🎨 Brand Colors

- **Primary Blue**: `#3B82F6` - Friendly & energetic
- **Secondary Orange**: `#FB923C` - Fun & warm (CTAs)
- **Accent Yellow**: `#FCD34D` - Happiness & positivity
- **Background Cream**: `#FFFBEB` - Warm & inviting

---

## 📊 Key Features

### 1. Conversion-Optimized Hero
- Value-first headline: "Did Our Clips Make You Laugh Today?"
- Social proof: 1M+ monthly views, 500K+ engaged viewers
- Clear CTA above the fold

### 2. Multi-Platform Donations
- Ko-fi (most popular for creators)
- PayPal (universal)
- Cash App (US audience)
- Venmo (casual, US)

### 3. YouTube Shorts Showcase
- Lazy-loaded embeds (performance)
- 6 best-performing shorts
- Mobile-optimized grid

### 4. Email Capture
- Simple signup form
- Fun, no-pressure copy
- API endpoint ready for integration

### 5. Hidden Sponsor Page
- Professional stats display
- Audience demographics
- Partnership opportunities
- `/work-with-me` (not indexed by search engines)

---

## 🔧 Configuration

### Environment Variables
Create `.env.local` for development or `.env.production` on VPS:
```bash
NEXT_PUBLIC_SITE_URL=https://theofficevibes.com
# Add Google Analytics, email service keys, etc. when ready
```

### PM2 Process Manager
```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

---

## 📈 Analytics & Optimization

### Track These Metrics:
1. **Donation click-through rate** (primary)
2. **Email signup rate** (secondary)
3. **Time on site / engagement** (tertiary)
4. **Bounce rate** (minimize)

### A/B Test Ideas:
- Different hero headlines
- CTA button text/colors
- Donation section placement
- Number of shorts shown

---

## 🤝 Support & Contact

**Website:** https://theofficevibes.com  
**YouTube:** [@officevibesonly](https://youtube.com/@officevibesonly)  
**Instagram:** [@officevibes_only](https://www.instagram.com/officevibes_only)

---

## 📝 License

© 2025 The Office Vibes. All rights reserved.

---

## 🎉 Launch Checklist

Before going live:
- [ ] Test all features
- [ ] Configure DNS
- [ ] Install SSL certificate
- [ ] Update social media links
- [ ] Create announcement content
- [ ] Monitor first 24 hours

**Good luck with your launch! 🚀**

