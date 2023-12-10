/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["priyeshportfolio.info", "127.0.0.1"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "priyeshportfolio.info",
        port: "443",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "3000",
      },
    ],
  },
};

module.exports = nextConfig;
