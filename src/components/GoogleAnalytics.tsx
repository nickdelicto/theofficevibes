'use client';

import Script from 'next/script';

/**
 * Google Analytics 4 Component
 * 
 * Purpose: Track visitor behavior and conversion funnel
 * - Traffic sources (YouTube, Instagram, Facebook)
 * - Donation button clicks (Ko-fi, PayPal, etc.)
 * - Email signups
 * - YouTube Shorts clicks
 * 
 * Only loads in production to keep analytics data clean
 */

export default function GoogleAnalytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  // Don't load in development or if no measurement ID
  if (process.env.NODE_ENV !== 'production' || !measurementId) {
    return null;
  }

  return (
    <>
      {/* Google Analytics Script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

