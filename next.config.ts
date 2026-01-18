import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Image optimization settings
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Experimental features
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  // Ensure proper trailing slash handling
  trailingSlash: false,

  // Optimize build output
  compress: true,

  // Enable React strict mode
  reactStrictMode: true,

  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
