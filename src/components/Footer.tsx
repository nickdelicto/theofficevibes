'use client';

import { motion } from 'framer-motion';
import { Youtube, Instagram, Facebook, Heart } from 'lucide-react';
import Logo from './Logo';

/**
 * Footer Component - Fun Wrap-Up
 * 
 * Purpose: Social links, branding, Easter eggs
 * Strategy:
 * - Keep it light and fun
 * - Easy access to all social platforms
 * - Fun copy that matches brand vibe
 * - Professional enough for sponsors who find it later
 */

const socialLinks = [
  {
    name: 'YouTube',
    url: 'https://youtube.com/@officevibesonly',
    icon: Youtube,
    color: 'hover:text-red-500',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/officevibes_only',
    icon: Instagram,
    color: 'hover:text-pink-500',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/share/1By7H4FRVb/',
    icon: Facebook,
    color: 'hover:text-blue-600',
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900 text-white py-12 overflow-hidden">
      {/* Subtle pattern background */}
      <div className="absolute inset-0 pattern-dots opacity-5" />

      <div className="relative z-10 section-container">
        <div className="max-w-5xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand Column */}
            <div className="text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-3 flex justify-center md:justify-start">
                  <Logo size="small" variant="light" />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Making workdays slightly more bearable
                  <br />
                  since 2025.
                </p>
              </motion.div>
            </div>

            {/* Social Links Column */}
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h4 className="font-bold text-lg mb-4">Follow the Vibes</h4>
                <div className="flex items-center justify-center gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className={`w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:bg-gray-700 ${social.color}`}
                        onClick={() => {
                          // Track social clicks
                          const windowWithGtag = window as Window & { gtag?: (...args: unknown[]) => void };
                          if (typeof window !== 'undefined' && windowWithGtag.gtag) {
                            windowWithGtag.gtag('event', 'social_click', {
                              platform: social.name,
                              location: 'footer',
                            });
                          }
                        }}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Quick Links Column */}
            <div className="text-center md:text-right">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="font-bold text-lg mb-4">Quick Links</h4>
                <nav className="flex flex-col gap-2 text-sm">
                  <a
                    href="#donate"
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    Support Us
                  </a>
                  <a
                    href="https://youtube.com/@officevibesonly"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    Watch on YouTube
                  </a>
                  <a
                    href="/work-with-me"
                    className="text-gray-400 hover:text-accent transition-colors"
                    onClick={() => {
                      // Track clicks to sponsor page
                      const windowWithGtag = window as Window & { gtag?: (...args: unknown[]) => void };
                      if (typeof window !== 'undefined' && windowWithGtag.gtag) {
                        windowWithGtag.gtag('event', 'sponsor_page_click', {
                          location: 'footer',
                        });
                      }
                    }}
                  >
                    Work With Us
                  </a>
                </nav>
              </motion.div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 my-8" />

          {/* Bottom Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center space-y-3"
          >
            {/* Fun Copyright with Easter Egg */}
            <p className="text-gray-400 text-sm">
              © {currentYear} The Office Vibes. All rights reserved.
              <br />
              <span className="text-gray-500 text-xs italic">
                This website was definitely made during work hours 😎
              </span>
            </p>

            {/* Made with love note */}
            <p className="text-gray-500 text-xs flex items-center justify-center gap-2">
              Made with
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              and way too much coffee
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

