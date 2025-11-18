'use client';

import { motion } from 'framer-motion';
import { Play, TrendingUp } from 'lucide-react';
import { useState } from 'react';

/**
 * Shorts Showcase Component - Social Proof & Engagement
 * 
 * Purpose: Keep visitors engaged and show social proof
 * Strategy:
 * - Display best-performing shorts
 * - Lazy load for performance (critical for mobile)
 * - Encourage clicking through to YouTube (builds familiarity)
 * - Shows variety of content (not one-note)
 * - Reinforces value before they leave or donate
 */

// Best performing shorts data
const shorts = [
  {
    id: '73lmu2w-lvQ',
    title: 'Office Moment',
    url: 'https://youtube.com/shorts/73lmu2w-lvQ',
  },
  {
    id: 'sTPvTgeJEcg',
    title: 'Work Life',
    url: 'https://www.youtube.com/shorts/sTPvTgeJEcg',
  },
  {
    id: 'a7S5VkkVbgw',
    title: 'Relatable',
    url: 'https://youtube.com/shorts/a7S5VkkVbgw',
  },
  {
    id: 'tnI1KrzdsEA',
    title: 'Office Vibes',
    url: 'https://youtube.com/shorts/tnI1KrzdsEA',
  },
  {
    id: 'injz6SDWTec',
    title: 'Work Humor',
    url: 'https://youtube.com/shorts/injz6SDWTec',
  },
  {
    id: 'UsF5Hpx4jSg',
    title: 'Office Life',
    url: 'https://youtube.com/shorts/UsF5Hpx4jSg',
  },
];

// Individual Short Card Component
function ShortCard({ short, index }: { short: typeof shorts[0]; index: number }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Card container with aspect ratio for Shorts (9:16) */}
      <div className="relative w-full aspect-[9/16] bg-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
        {/* Loading placeholder */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10">
            <div className="flex flex-col items-center gap-3">
              <Play className="w-12 h-12 text-primary animate-pulse" />
              <span className="text-sm text-gray-600 font-medium">Loading...</span>
            </div>
          </div>
        )}

        {/* YouTube iframe embed - lazy loaded */}
        <iframe
          src={`https://www.youtube.com/embed/${short.id}?controls=1&modestbranding=1&rel=0`}
          title={short.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          className="absolute inset-0 w-full h-full"
        />

        {/* Hover overlay with "Watch on YouTube" */}
        <a
          href={short.url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100"
          onClick={() => {
            // Track analytics
            const windowWithGtag = window as Window & { gtag?: (...args: unknown[]) => void };
            if (typeof window !== 'undefined' && windowWithGtag.gtag) {
              windowWithGtag.gtag('event', 'short_click', {
                video_id: short.id,
                event_category: 'engagement',
              });
            }
          }}
        >
          <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-primary transform scale-90 group-hover:scale-100 transition-transform">
            Watch on YouTube →
          </div>
        </a>
      </div>
    </motion.div>
  );
}

export default function ShortsShowcase() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="relative z-10 section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4 text-sm font-bold">
            <TrendingUp className="w-4 h-4" />
            <span>Fan Favorites</span>
          </div>

          {/* Headline */}
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            If You&apos;re New Here,
            <br />
            <span className="text-primary">Start With These</span> 😎
          </h2>

          {/* Subheadline */}
          <p className="text-xl text-gray-600">
            The office moments that made people spit out their coffee
          </p>
        </motion.div>

        {/* Shorts Grid - Responsive */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto mb-12">
          {shorts.map((short, index) => (
            <ShortCard key={short.id} short={short} index={index} />
          ))}
        </div>

        {/* CTA to YouTube Channel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <a
            href="https://youtube.com/@officevibesonly"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary-dark text-white font-bold text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            onClick={() => {
              // Track YouTube channel click
              const windowWithGtag = window as Window & { gtag?: (...args: unknown[]) => void };
              if (typeof window !== 'undefined' && windowWithGtag.gtag) {
                windowWithGtag.gtag('event', 'youtube_channel_click', {
                  event_category: 'engagement',
                  event_label: 'shorts_section',
                });
              }
            }}
          >
            <Play className="w-6 h-6" />
            <span>See All on YouTube</span>
          </a>

          <p className="text-sm text-gray-500 mt-4">
            New shorts daily (during work hours, obviously)
          </p>
        </motion.div>
      </div>
    </section>
  );
}

