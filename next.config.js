const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  future: { webpack5: true },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
  basePath:    isProd ? '/nurse-rostering-demo' : '',
  assetPrefix: isProd ? '/nurse-rostering-demo/' : ''
};

module.exports = nextConfig;
