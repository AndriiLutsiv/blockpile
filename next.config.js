const { URL } = require('url');

// Extract hostname from environment variable
const wpRestUrl = new URL(process.env.WP_REST_URL);
const wpRestHostname = wpRestUrl.hostname;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [wpRestHostname],
  },
}

module.exports = nextConfig;
