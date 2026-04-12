/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for production
  reactStrictMode: true,
  swcMinify: true,
  
  // Image optimization
  images: {
    unoptimized: false,
  },
  
  // Build configuration
  distDir: '.next',
  
  // Ensure proper output
  output: 'standalone',
};

module.exports = nextConfig;
