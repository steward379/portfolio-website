//next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // 使用自訂網域 (stewardtsou.com) 時不需要 basePath
  // 如果部署到 username.github.io/portfolio-website 才需要設置 basePath
  // basePath: '/portfolio-website',
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