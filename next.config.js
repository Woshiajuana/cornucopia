/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // 试验性功能
  experimental: {
    // https://github.com/vercel/next.js/issues/44999
    // https://github.com/vercel/next.js/issues/46672
    scrollRestoration: true,
  },

  // 重定向
  // redirects() {},
}

module.exports = nextConfig
