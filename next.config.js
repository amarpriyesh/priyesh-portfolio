/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['priyeshportfolio.info'],
    loader: 'default',
    path: 'https://priyeshportfolio.info/',
  },

};

module.exports = nextConfig;
