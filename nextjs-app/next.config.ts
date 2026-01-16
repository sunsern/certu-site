import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/certu-site/v2',
  assetPrefix: './certu-site/v2/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
