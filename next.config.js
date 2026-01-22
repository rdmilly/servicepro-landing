/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['img.youtube.com'],
  },
  // Enable experimental features if needed
  experimental: {
    // serverActions: true,
  },
}

module.exports = nextConfig