/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  distDir: '.next',
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_API_KEY_GOKU: process.env.NEXT_PUBLIC_API_KEY_GOKU,
    NEXT_PUBLIC_API_KEY_VEGETA: process.env.NEXT_PUBLIC_API_KEY_VEGETA,
    NEXT_PUBLIC_API_KEY_GOHAN: process.env.NEXT_PUBLIC_API_KEY_GOHAN,
    NEXT_PUBLIC_API_KEY_TRUNKS: process.env.NEXT_PUBLIC_API_KEY_TRUNKS,
  }

export default nextConfig
