//next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // 如果部署到 GitHub Pages 的子目錄，例如 username.github.io/portfolio-website
  // 需要設置 basePath
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