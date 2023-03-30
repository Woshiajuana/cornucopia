/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // https://github.com/vercel/next.js/issues/44999
    // https://github.com/vercel/next.js/issues/46672
    scrollRestoration: true,
  },
}

module.exports = nextConfig
