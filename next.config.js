/** @type {import('next').NextConfig} */

// Static export. GitHub Pages uses subpath /portfolio-website; Vercel serves from root (VERCEL=1).
const isProd = process.env.NODE_ENV === 'production';
const onVercel = process.env.VERCEL === '1';
const basePath = isProd && !onVercel ? '/portfolio-website' : '';

const nextConfig = {
  output: 'export',
  basePath: basePath,
  assetPrefix: basePath === '' ? undefined : basePath,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
