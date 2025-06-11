/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_API_KEY_SUPERMAN: process.env.NEXT_PUBLIC_API_KEY_SUPERMAN,
    NEXT_PUBLIC_API_KEY_STONNER: process.env.NEXT_PUBLIC_API_KEY_STONNER,
    NEXT_PUBLIC_API_KEY_WARRIOR: process.env.NEXT_PUBLIC_API_KEY_WARRIOR,
    NEXT_PUBLIC_API_KEY_NOSFERATU: process.env.NEXT_PUBLIC_API_KEY_NOSFERATU,
  },
};

module.exports = nextConfig;
