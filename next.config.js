/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Add quality 100 to support existing images using quality="100"
    qualities: [100, 75]
  }
}

module.exports = nextConfig
