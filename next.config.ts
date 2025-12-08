import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [new URL('https://newcnpl.s3.ap-south-1.amazonaws.com/**')],
  },
};

export default nextConfig;
