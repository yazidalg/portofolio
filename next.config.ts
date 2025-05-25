import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true, // Makes development easier; set to false in production for optimization
  },
};

export default nextConfig;
