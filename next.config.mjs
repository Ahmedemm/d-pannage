/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/d-pannage',
  assetPrefix: '/d-pannage/',
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: true,
  trailingSlash: true,
};

export default nextConfig;
