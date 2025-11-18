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
};

module.exports = nextConfig;

