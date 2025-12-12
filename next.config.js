const { withContentlayer } = require("next-contentlayer2");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Disable ESLint during build due to ESLint 9 compatibility issues
    ignoreDuringBuilds: true,
  },
};

module.exports = withContentlayer(nextConfig);
