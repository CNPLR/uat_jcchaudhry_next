import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
     inlineCss: true,     
    cssChunking: 'strict', // or 'strict' for more aggressive chunking
  },
   images: {
    remotePatterns: [new URL('https://newcnpl.s3.ap-south-1.amazonaws.com/**')],
  },
};

export default nextConfig;
