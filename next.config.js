/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placehold.jp', '140.83.55.4']
  },
  experimental: {
    outputStandalone: true
  }
}

module.exports = nextConfig
