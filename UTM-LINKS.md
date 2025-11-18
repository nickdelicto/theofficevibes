# UTM-Tagged Links for Tracking

Use these specific links on each platform to track where your traffic and conversions come from.

---

## **Your UTM-Tagged Links**

### **YouTube Shorts** (Description / Pinned Comment)
```
https://theofficevibes.com/?utm_source=youtube&utm_medium=shorts&utm_campaign=support
```

### **YouTube Channel** (About section)
```
https://theofficevibes.com/?utm_source=youtube&utm_medium=channel&utm_campaign=support
```

### **Instagram Bio**
```
https://theofficevibes.com/?utm_source=instagram&utm_medium=bio&utm_campaign=support
```

### **Instagram Stories**
```
https://theofficevibes.com/?utm_source=instagram&utm_medium=story&utm_campaign=support
```

### **Facebook Posts**
```
https://theofficevibes.com/?utm_source=facebook&utm_medium=post&utm_campaign=support
```

---

## **What You'll See in Google Analytics**

### **Traffic Sources Report**
Go to: **Reports → Acquisition → Traffic acquisition**

You'll see:
- How many visitors from YouTube vs Instagram vs Facebook
- Which source has the highest engagement
- Which source converts best to donations/emails

### **Events Report** (Most Important!)
Go to: **Reports → Engagement → Events**

Track these custom events we set up:
- `donation_click` - Which platform they clicked (Ko-fi, PayPal, etc.)
- `email_signup` - Newsletter subscriptions
- `short_click` - YouTube Short video clicks
- `social_click` - Social media icon clicks
- `youtube_channel_click` - Clicks to your YouTube channel

### **Example Insights You'll Get:**

**Question:** Which platform sends the most traffic?
**Answer:** Check Traffic Acquisition report → See "youtube / shorts" vs "instagram / bio"

**Question:** Which donation platform do people prefer?
**Answer:** Events → Filter by "donation_click" → See event parameters

**Question:** Which traffic source converts best to email signups?
**Answer:** Cross-reference utm_source with email_signup events

**Question:** Do people watch embedded shorts or go to YouTube?
**Answer:** Compare "short_click" vs "youtube_channel_click" events

---

## **Quick Start Guide**

### **Step 1: Add Links to Your Platforms**
1. **YouTube:** Add the YouTube link to your Shorts descriptions
2. **Instagram:** Update your bio link
3. **Facebook:** Use the Facebook link in posts

### **Step 2: Wait 24-48 Hours**
Give GA4 time to collect data

### **Step 3: Check Your Dashboard**
1. Go to: https://analytics.google.com/
2. Select "The Office Vibes" property
3. Check Reports → Acquisition → Traffic acquisition
4. Check Reports → Engagement → Events

---

## **Pro Tips**

### **Test Your Links**
Before going live, click each UTM link yourself and check if it appears in GA4 Realtime report (within 30 seconds)

### **Optimize Based on Data**
After 1-2 weeks, you'll know:
- Which platform to focus on (highest traffic)
- Which converts best (highest donation rate)
- Which donation platform to prioritize
- If email signups are working

### **A/B Testing**
Try different CTAs on different platforms:
- YouTube: "Support the laughs ☕"
- Instagram: "Buy me a coffee 😄"
- Facebook: "Keep the content coming!"

Then see which converts best in GA4!

---

## **Your Measurement ID**
`G-6W5M87LSZM`

Already configured in `.env.local` (production only)

