//next.config.js
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/portfolio-website' : '';

const nextConfig = {
  output: 'export',
  // 正式環境部署於 /portfolio-website；本機開發 basePath 為空，根路徑即首頁
  basePath,
  assetPrefix: basePath || undefined,
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