/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/dice-role',
  reactStrictMode: true,
  images: {
    domains: ['placehold.jp', '140.83.55.4']
  },
  experimental: {
    outputStandalone: true
  }
}

module.exports = nextConfig
