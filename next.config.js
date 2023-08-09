/** @type {import('next').NextConfig} */
const nextConfig = {
  serverRuntimeConfig: {
    API_INTERNAL_URL: process.env.API_URL,
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
  },
};

module.exports = nextConfig;
