import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'msrit-bucket.s3.us-west-2.amazonaws.com',
        pathname: '/Gallery/**',
      },
      {
        protocol: 'https',
        hostname: 'www.linkedin.com',
        pathname: '/**', // Allowing all paths from linkedin.com
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        pathname: '/**', // Allowing all paths from media.licdn.com
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
