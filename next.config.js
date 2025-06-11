/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
  },
  distDir: '.next',
  // Add trailing slash to URLs
  trailingSlash: true,
}

export default nextConfig
