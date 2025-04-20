/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // 如果部署到 GitHub Pages 的子目錄，例如 username.github.io/portfolio-website
  // 需要設置 basePath
  // basePath: '/portfolio-website',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;