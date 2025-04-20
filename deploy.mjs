// deploy.mjs (使用 .mjs 擴展名表示這是 ES Module)
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { execSync } from 'child_process';

// 獲取目前檔案的目錄
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 創建必要的文件
const createNextConfig = () => {
  const configContent = `
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
`;

  fs.writeFileSync('next.config.js', configContent.trim());
  console.log('✅ Created next.config.js');
};

// 創建 GitHub Actions 部署工作流程
const createGitHubWorkflow = () => {
  const workflowsDir = path.join('.github', 'workflows');

  if (!fs.existsSync('.github')) {
    fs.mkdirSync('.github');
  }

  if (!fs.existsSync(workflowsDir)) {
    fs.mkdirSync(workflowsDir);
  }

  const workflowContent = `
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout 🛎️
        uses: actions/checkout@v3

      - name: Setup Node.js ⚙️
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'npm'

      - name: Install dependencies 📦
        run: npm ci

      - name: Build 🔧
        run: npm run build

      - name: Deploy 🚀
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: out
`;

  fs.writeFileSync(
    path.join(workflowsDir, 'deploy.yml'),
    workflowContent.trim()
  );
  console.log('✅ Created GitHub Actions workflow');
};

// 更新 package.json
const updatePackageJson = () => {
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

  // 添加 homepage 和部署腳本
  packageJson.scripts = {
    ...packageJson.scripts,
    predeploy: 'npm run build',
    deploy: 'touch out/.nojekyll && gh-pages -d out --dotfiles',
  };

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  console.log('✅ Updated package.json');
};

// 執行部署準備
const prepareForDeployment = () => {
  console.log('🚀 準備部署到 GitHub Pages...');

  // 建立必要文件
  createNextConfig();
  createGitHubWorkflow();
  updatePackageJson();

  // 安裝部署所需的依賴
  console.log('📦 安裝 gh-pages 依賴...');
  execSync('npm install --save-dev gh-pages', { stdio: 'inherit' });

  console.log(`
✅ 部署準備完成!

接下來的步驟:

1. 在 GitHub 上創建一個新的倉庫
2. 推送你的代碼到 GitHub:
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main

3. 使用 GitHub Actions 自動部署:
   推送代碼到 main 分支後，GitHub Actions 將自動構建和部署你的網站。

4. 或者使用 gh-pages 手動部署:
   npm run deploy

5. 設置 GitHub Pages:
   - 在倉庫設置中，找到 Pages 部分
   - 選擇 "gh-pages" 分支作為源
   - 點擊 Save

你的網站將在幾分鐘內部署到 https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
  `);
};

prepareForDeployment();