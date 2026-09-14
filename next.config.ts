import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      "../build/polyfills/polyfill-module": "./lib/modern-polyfill.js",
      "next/dist/build/polyfills/polyfill-module": "./lib/modern-polyfill.js",
    },
  },

  experimental: {
    inlineCss: true,

    optimizePackageImports: [
      "react-icons",
      "lucide-react",
      "swiper",
      "react-toastify",
      "react-datepicker",
      "react-calendar",
      "react-phone-input-2",
      "libphonenumber-js",
      "countries-list",
      "@reduxjs/toolkit",
      "@paypal/react-paypal-js",
      "axios",
    ],
  },

  images: {
    localPatterns: [
      {
        pathname: "/**",
      },
    ],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "newcnpl.s3.ap-south-1.amazonaws.com",
        pathname: "/**",
      },
    ],

    formats: ["image/webp"],

    minimumCacheTTL: 60 * 60 * 24 * 30,

    deviceSizes: [
      640,
      750,
      828,
      1080,
      1200,
      1920,
      2048,
      3840,
    ],

    imageSizes: [
      16,
      32,
      48,
      64,
      96,
      128,
      256,
      384,
    ],
  },

  productionBrowserSourceMaps: false,

  compress: true,

  poweredByHeader: false,

  async headers() {
    return [
      // Add custom headers here if required
    ];
  },
};

export default nextConfig;