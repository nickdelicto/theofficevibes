'use client';

import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { useState, FormEvent } from 'react';

/**
 * Email Signup Component - Capture Before Bounce
 * 
 * Purpose: Build email list for future engagement & sponsor pitches
 * Strategy:
 * - Capture emails before they leave
 * - Fun, no-pressure copy
 * - Show value proposition (what they get)
 * - Simple form (just email, no friction)
 * - Uses Google Sheets for now (free, instant)
 */

export default function EmailSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');

    try {
      // Call our API route to save email
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('You\'re in! Welcome to the club 🎉');
        setEmail('');
        
        // Track conversion
        const windowWithGtag = window as Window & { gtag?: (...args: unknown[]) => void };
        if (typeof window !== 'undefined' && windowWithGtag.gtag) {
          windowWithGtag.gtag('event', 'email_signup', {
            event_category: 'engagement',
            event_label: 'newsletter',
          });
        }
      } else {
        throw new Error('Subscription failed');
      }
    } catch {
      setStatus('error');
      setMessage('Oops! Something went wrong. Try again?');
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-primary via-primary-dark to-primary-darker overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pattern-dots opacity-10" />
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 section-container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-6"
          >
            <Mail className="w-8 h-8 text-gray-900" />
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Stay in the Loop 📬
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl text-white/90 mb-8"
          >
            Get new clips before your coworkers steal the joke!
          </motion.p>

          {/* Email Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="max-w-md mx-auto mb-6"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Email Input */}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="yourname@email.com"
                disabled={status === 'loading' || status === 'success'}
                className="flex-1 px-6 py-4 rounded-full text-gray-900 font-medium placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-accent/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                required
              />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="bg-secondary hover:bg-secondary-dark text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                {status === 'loading' && (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Joining...</span>
                  </>
                )}
                {status === 'success' && (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Subscribed!</span>
                  </>
                )}
                {status !== 'loading' && status !== 'success' && (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Sign Up</span>
                  </>
                )}
              </button>
            </div>

            {/* Status Messages */}
            {message && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 text-sm font-medium ${
                  status === 'success' ? 'text-accent' : 'text-red-300'
                }`}
              >
                {message}
              </motion.p>
            )}
          </motion.form>

          {/* Privacy note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm text-white/60"
          >
            No spam, just laughs. Unsubscribe anytime.
            <br />
            (I promise I won&apos;t sell your email to your boss)
          </motion.p>
        </div>
      </div>
    </section>
  );
}

