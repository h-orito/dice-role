/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placehold.jp', 'wolfort.net']
  },
  experimental: {
    outputStandalone: true
  }
}

module.exports = nextConfig
