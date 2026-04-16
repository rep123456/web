import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        // Allow all images served from /public (e.g. /Oven.jpg, /dishwasher.jpg, etc.)
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
