import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: true,
});


const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      '../build/polyfills/polyfill-module': './lib/modern-polyfill.js',
      'next/dist/build/polyfills/polyfill-module': './lib/modern-polyfill.js',
    },
  },

  experimental: {
    inlineCss: true,
    cssChunking: 'strict', // or 'strict' for more aggressive chunking
    optimizePackageImports: [
      'react-icons',        // Huge icon library - biggest win
      'lucide-react',
      'swiper',             // Heavy carousel library
      'react-toastify',
      'react-datepicker',
      'react-calendar',
      'react-phone-input-2',
      'libphonenumber-js',  // Large phone validation lib
      'countries-list',
      '@reduxjs/toolkit',
      '@paypal/react-paypal-js',
      'axios',
    ],
  },
  images: {
    localPatterns: [
     {
      pathname: '/**',
    },
    ],
    remotePatterns: [{
        protocol: 'https',
        hostname: 'newcnpl.s3.ap-south-1.amazonaws.com',
        pathname: '/**',
      },],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  productionBrowserSourceMaps: false,
  compress: true,
  poweredByHeader: false,

  async headers() {
    return [
      // {
      //   source: '/_next/static/:path*',
      //   headers: [
      //     { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
      //   ],
      // },
      // {
      //   source: '/_next/image',
      //   headers: [
      //     { key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400' },
      //   ],
      // },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
