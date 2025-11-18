'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

/**
 * Header Component - Sticky Navigation
 * 
 * Features:
 * - Appears after scrolling past hero
 * - Sticky at top
 * - Shows logo for easy navigation back home
 * - Quick link to donations
 * - Smooth animations
 */

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling 300px (past hero section)
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToDonations = () => {
    const donationSection = document.getElementById('donate');
    if (donationSection) {
      donationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md"
        >
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Logo size="small" variant="dark" />

              {/* CTA Button */}
              <button
                onClick={scrollToDonations}
                className="bg-secondary hover:bg-secondary-dark text-white font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 transform hover:scale-105 text-sm sm:text-base whitespace-nowrap"
              >
                Support Us ☕
              </button>
            </div>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
}

