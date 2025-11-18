'use client';

import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Eye, 
  Heart, 
  Globe, 
  Target,
  Mail,
  CheckCircle,
} from 'lucide-react';
import Link from 'next/link';
import Logo from '@/components/Logo';

/**
 * Work With Me Page - For Brand Sponsorships
 * 
 * Purpose: Professional page to pitch sponsors when ready
 * Strategy:
 * - Hidden for now (not linked on main site)
 * - Professional but accessible
 * - Showcases audience stats and demographics
 * - Clear collaboration opportunities
 * - Contact form for inquiries
 * 
 * This page is ready to go when you start reaching out to brands!
 */

export default function WorkWithMePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header/Nav */}
      <nav className="bg-white border-b border-gray-200 py-4">
        <div className="section-container">
          <div className="flex items-center justify-between">
            <Logo size="small" variant="dark" />
            <Link
              href="/"
              className="text-gray-600 hover:text-primary transition-colors font-medium"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-container py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 text-sm font-bold">
            <Target className="w-4 h-4" />
            <span>Brand Partnerships</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Partner With
            <br />
            <span className="text-primary">The Office Vibes</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 mb-8">
            Reach over <span className="font-bold text-primary">1M+ engaged office workers</span> monthly
            <br />
            with authentic, relatable content they actually love.
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="section-container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="font-display text-3xl font-bold text-center text-gray-900 mb-8">
            Our Reach & Engagement
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stat 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">1.1M+</div>
              <div className="text-gray-600 font-medium">Monthly Views</div>
            </div>

            {/* Stat 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">526K+</div>
              <div className="text-gray-600 font-medium">Engaged Viewers</div>
            </div>

            {/* Stat 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">68.9%</div>
              <div className="text-gray-600 font-medium">Retention Rate</div>
            </div>

            {/* Stat 4 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">19K+</div>
              <div className="text-gray-600 font-medium">Monthly Likes</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Audience Demographics */}
      <section className="section-container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 sm:p-12">
            <div className="flex items-center gap-3 mb-8">
              <Globe className="w-8 h-8 text-primary" />
              <h2 className="font-display text-3xl font-bold text-gray-900">
                Who We Reach
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Geographic Breakdown */}
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-4">Top Locations</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">🇺🇸 United States</span>
                    <span className="font-bold text-primary">48.2%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">🇬🇧 United Kingdom</span>
                    <span className="font-bold text-primary">6.5%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">🇨🇦 Canada</span>
                    <span className="font-bold text-primary">4.8%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">🇩🇪 Germany</span>
                    <span className="font-bold text-primary">4.0%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">🇦🇺 Australia</span>
                    <span className="font-bold text-primary">3.0%</span>
                  </div>
                </div>
              </div>

              {/* Audience Profile */}
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-4">Audience Profile</h3>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold">Working Professionals</div>
                      <div className="text-sm text-gray-600">Ages 25-45, office workers</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold">High Engagement</div>
                      <div className="text-sm text-gray-600">68.9% watch to completion</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold">Active Sharers</div>
                      <div className="text-sm text-gray-600">4,900+ monthly shares</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold">Growing Community</div>
                      <div className="text-sm text-gray-600">239+ new subscribers monthly</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Collaboration Opportunities */}
      <section className="section-container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="font-display text-3xl font-bold text-center text-gray-900 mb-8">
            Partnership Opportunities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Option 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Sponsored Shorts</h3>
              <p className="text-gray-600">
                Naturally integrate your brand into our relatable office content that resonates with viewers.
              </p>
            </div>

            {/* Option 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Product Placements</h3>
              <p className="text-gray-600">
                Seamlessly feature your products in our office scenes and scenarios.
              </p>
            </div>

            {/* Option 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-4xl mb-4">📢</div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Brand Mentions</h3>
              <p className="text-gray-600">
                Direct shoutouts and mentions across our growing social media presence.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="section-container py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="bg-gradient-to-br from-primary via-primary-dark to-primary-darker rounded-3xl p-12 text-white">
            <Mail className="w-16 h-16 mx-auto mb-6 text-accent" />
            <h2 className="font-display text-4xl font-bold mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Interested in partnering? We&apos;d love to hear from you.
            </p>
            
            {/* Contact Options */}
            <div className="space-y-4">
              <a
                href="mailto:delictodelight@gmail.com"
                className="inline-block bg-accent hover:bg-accent-dark text-gray-900 font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Get in Touch
              </a>
              <p className="text-sm text-white/70">
                Or reach out via social media (links in footer)
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

