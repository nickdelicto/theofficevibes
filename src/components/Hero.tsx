'use client';

import { motion } from 'framer-motion';
import { Coffee, TrendingUp, Users, Sparkles } from 'lucide-react';
import Link from 'next/link';

/**
 * Hero Component - The MOST CRITICAL section for conversions
 * 
 * Purpose: Hook visitors immediately and drive them to donate
 * Strategy: 
 * - Clear value proposition in 2 seconds
 * - Immediate CTA above the fold (no scrolling needed)
 * - Social proof badges for credibility
 * - Mobile-first design (most traffic from YouTube Shorts)
 * - Fun, relatable copy that matches the content vibe
 */
export default function Hero() {
  // Smooth scroll to donation section when CTA clicked
  const scrollToDonations = () => {
    const donationSection = document.getElementById('donate');
    if (donationSection) {
      donationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary-darker">
      {/* Logo at top - subtle brand identifier */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-6 left-6 sm:top-8 sm:left-8 z-20"
      >
        {/* Custom logo for hero - single line to avoid squishing */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 font-display font-bold text-lg transition-all duration-300 hover:scale-105 group"
        >
          <Coffee className="w-5 h-5 text-accent group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-white whitespace-nowrap">
            THE OFFICE <span className="text-accent">VIBES</span>
          </span>
        </Link>
      </motion.div>

      {/* Background decorative elements - subtle, don't distract */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main content - centered and focused */}
      <div className="relative z-10 section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Small badge above headline - builds credibility instantly */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6 mt-8 sm:mt-0 text-sm font-medium"
          >
            <Sparkles className="w-4 h-4" />
            <span>Trusted by 1M+ viewers monthly</span>
          </motion.div>

          {/* Main headline - Hook them in 2 seconds */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Did Our Clips Make You
            <br />
            <span className="text-accent">Laugh Today?</span> 😄
          </motion.h1>

          {/* Subheadline - Value proposition & relatability */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-8 font-medium max-w-3xl mx-auto"
          >
            Help keep the daily laughs coming (and save me from LinkedIn)
          </motion.p>

          {/* Primary CTA - Large, impossible to miss */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            onClick={scrollToDonations}
            className="btn-primary shadow-2xl text-xl sm:text-2xl px-12 py-6 mb-12"
          >
            Buy Us a Coffee ☕
          </motion.button>

          {/* Social proof stats - Build credibility */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {/* Stat 1: Views */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-center gap-3 mb-2">
                <TrendingUp className="w-6 h-6 text-accent" />
                <span className="text-3xl font-bold text-white">1M+</span>
              </div>
              <p className="text-white/80 font-medium">Monthly Views</p>
            </div>

            {/* Stat 2: Engaged Viewers */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Users className="w-6 h-6 text-accent" />
                <span className="text-3xl font-bold text-white">500K+</span>
              </div>
              <p className="text-white/80 font-medium">Engaged Viewers</p>
            </div>

            {/* Stat 3: Likes (people who relate) */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Coffee className="w-6 h-6 text-accent" />
                <span className="text-3xl font-bold text-white">19K+</span>
              </div>
              <p className="text-white/80 font-medium">Likes Monthly</p>
            </div>
          </motion.div>

          {/* Scroll hint - subtle nudge to explore more */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block"
            >
              <svg
                className="w-6 h-6 text-white/60"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

