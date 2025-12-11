//next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // 網站部署在 stewardtsou.com/portfolio-website/ 子路徑
  basePath: '/portfolio-website',
  images: {
    unoptimized: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;