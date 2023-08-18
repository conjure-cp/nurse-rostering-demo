const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  swcMinify: true,
  experimental: { appDir: true },
  future: { webpack5: true },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
  basePath:    isProd ? '/nurse-rostering' : '',
  assetPrefix: isProd ? '/nurse-rostering' : ''
};

module.exports = nextConfig;
