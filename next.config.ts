import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  experimental: {
     inlineCss: true,     
    cssChunking: 'strict', // or 'strict' for more aggressive chunking
  },
   images: {
    unoptimized: true ,
    remotePatterns: [new URL('https://newcnpl.s3.ap-south-1.amazonaws.com/**')],
  },
  productionBrowserSourceMaps: false,
};

export default nextConfig;
