'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

/**
 * Donation Section - THE MONEY MAKER
 * 
 * Purpose: Convert visitors into supporters with ZERO friction
 * Strategy:
 * - Multiple payment options (people have preferences)
 * - Large, clear buttons (impossible to miss)
 * - Fun, relatable copy (no guilt trip, just authentic)
 * - Direct links (one click to donate, no forms)
 * - Track which platform performs best (analytics)
 */

// Donation platform data with brand colors and info
const donationPlatforms = [
  {
    name: 'Ko-fi',
    url: 'https://ko-fi.com/officevibes',
    icon: '☕',
    color: 'bg-[#FF5E5B]', // Ko-fi brand red
    hoverColor: 'hover:bg-[#FF4542]',
    description: 'Buy me a coffee',
    popular: true, // Mark as most popular for creators
  },
  {
    name: 'PayPal',
    url: 'https://paypal.me/nickndegwaG',
    icon: '💳',
    color: 'bg-[#0070BA]', // PayPal brand blue
    hoverColor: 'hover:bg-[#005A9C]',
    description: 'Send via PayPal',
    popular: false,
  },
  {
    name: 'Cash App',
    url: 'https://cash.app/$nickndegwaG',
    icon: '💵',
    color: 'bg-[#00D632]', // Cash App brand green
    hoverColor: 'hover:bg-[#00BD2A]',
    description: 'Send via Cash App',
    popular: false,
  },
  {
    name: 'Venmo',
    url: 'https://venmo.com/u/NickTCA',
    icon: '💸',
    color: 'bg-[#3D95CE]', // Venmo brand blue
    hoverColor: 'hover:bg-[#2E7AB8]',
    description: 'Send via Venmo',
    popular: false,
  },
];

export default function DonationSection() {
  // Track donation button clicks for analytics
  const handleDonationClick = (platform: string) => {
    // Google Analytics event tracking (will set up GA4 later)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'donation_click', {
        platform: platform,
        event_category: 'engagement',
        event_label: platform,
      });
    }
    console.log(`Donation clicked: ${platform}`); // For now, log to console
  };

  return (
    <section id="donate" className="relative py-20 bg-gradient-to-b from-background to-background-secondary overflow-hidden">
      {/* Subtle pattern background */}
      <div className="absolute inset-0 pattern-dots opacity-30" />
      
      <div className="relative z-10 section-container">
        {/* Section Header - Fun & Relatable */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          {/* Main headline - emotional connection */}
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            If We&apos;ve Made Your Workday
            <br />
            <span className="text-primary">Slightly Less Painful...</span> 😅
          </h2>

          {/* Subheadline - authentic, no pressure */}
          <p className="text-xl sm:text-2xl text-gray-700 mb-4">
            Your support helps me avoid updating my LinkedIn and keep creating these instead.
          </p>

          {/* Optional: Small disclaimer text */}
          <p className="text-sm text-gray-500 italic">
            (No pressure though. Seriously. Just glad you&apos;re here 💙)
          </p>
        </motion.div>

        {/* Donation Buttons Grid - THE CONVERSION ZONE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {donationPlatforms.map((platform, index) => (
            <motion.a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleDonationClick(platform.name)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className={`
                relative group
                ${platform.color} ${platform.hoverColor}
                text-white font-bold
                py-6 px-8 rounded-2xl
                shadow-xl hover:shadow-2xl
                transition-all duration-300
                flex items-center justify-between
                overflow-hidden
              `}
            >
              {/* Popular badge for Ko-fi */}
              {platform.popular && (
                <div className="absolute top-3 right-3 bg-accent text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              {/* Button content */}
              <div className="flex items-center gap-4 z-10">
                {/* Platform icon/emoji */}
                <span className="text-4xl" role="img" aria-label={platform.name}>
                  {platform.icon}
                </span>
                
                {/* Platform name and description */}
                <div className="text-left">
                  <div className="text-2xl font-bold mb-1">{platform.name}</div>
                  <div className="text-sm opacity-90">{platform.description}</div>
                </div>
              </div>

              {/* External link icon */}
              <ExternalLink className="w-6 h-6 opacity-80 group-hover:opacity-100 transition-opacity z-10" />

              {/* Hover effect - subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          ))}
        </div>

        {/* Additional info - transparency builds trust */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-gray-200">
            <h3 className="font-display text-xl font-bold text-gray-900 mb-3">
              What Your Support Helps With
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-700">
              <div>
                <span className="text-2xl mb-2 block">🎬</span>
                <span className="font-semibold">Better editing tools</span>
              </div>
              <div>
                <span className="text-2xl mb-2 block">☕</span>
                <span className="font-semibold">Actual coffee</span>
              </div>
              <div>
                <span className="text-2xl mb-2 block">⏰</span>
                <span className="font-semibold">More daily content</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Optional: Show supporter count (if you track it later) */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-8"
        >
          <p className="text-gray-600">
            <span className="font-bold text-primary">127 supporters</span> and counting 💙
          </p>
        </motion.div> */}
      </div>
    </section>
  );
}

