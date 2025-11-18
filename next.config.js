/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better error handling
  reactStrictMode: true,
  
  // Optimize images from external domains
  images: {
    domains: ['i.ytimg.com', 'img.youtube.com'],
    formats: ['image/avif', 'image/webp'],
  },
  
  // Enable compression for faster loading
  compress: true,
  
  // Optimize for production
  swcMinify: true,
  
  // Skip type checking and linting during build to reduce memory usage
  // Run separately with: npm run lint
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Disable webpack build worker to prevent SIGBUS errors on low-memory VPS
  // This is a known issue with Next.js 14 on servers with limited RAM
  experimental: {
    webpackBuildWorker: false,
  },
};

module.exports = nextConfig;

