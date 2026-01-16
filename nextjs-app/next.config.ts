import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: '/certu-site/v2/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
