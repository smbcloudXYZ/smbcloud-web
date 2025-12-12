const { withContentlayer } = require("next-contentlayer2");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Empty Turbopack config to silence webpack compatibility warning
  turbopack: {},
};

module.exports = withContentlayer(nextConfig);
