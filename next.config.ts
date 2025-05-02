import type { NextConfig } from 'next';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  reactStrictMode: true,

  async rewrites() {
    const BASE_API_URL = process.env.BASE_API_URL || 'http://localhost:3000';

    return [
      {
        source: '/api/:path*',
        destination: `${BASE_API_URL}/api/:path*`,
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
