
# 作品集網站

這是一個使用 Next.js 和 Tailwind CSS 建立的作品集網站，用於展示網站開發和設計作品。

## 功能特點

- 響應式設計，適應各種螢幕尺寸
- 作品集頁面，可依類型和產業篩選作品
- 作品詳情頁面，展示項目詳細資訊
- 聯絡表單，供潛在客戶發送合作請求
- 現代化 UI 設計，提升用戶體驗

## 技術棧

- [Next.js](https://nextjs.org/) - React 框架
- [Tailwind CSS](https://tailwindcss.com/) - 實用工具優先的 CSS 框架
- [TypeScript](https://www.typescriptlang.org/) - 靜態類型檢查
- [React 18](https://reactjs.org/) - 用戶界面庫

## 開始使用

### 先決條件

- Node.js 18.x 或更高版本
- npm 或 yarn

### 安裝

1. 克隆倉庫：

```bash
git clone https://github.com/your-username/portfolio-website.git
cd portfolio-website
```

2. 安裝依賴：

```bash
npm install
# 或
yarn install
```

3. 啟動開發伺服器：

```bash
npm run dev
# 或
yarn dev
```

4. 在瀏覽器中打開 [http://localhost:3000](http://localhost:3000) 查看網站。

## 部署

### 部署到 GitHub Pages

1. 在專案根目錄運行部署腳本：

```bash
node deploy.js
```

2. 按照腳本輸出的指示進行後續步驟。

### 手動部署

1. 建立生產環境構建：

```bash
npm run build
# 或
yarn build
```

2. 部署 `out` 目錄的內容到您的網頁伺服器或托管服務。

## 項目結構

```
portfolio-website/
├── public/            # 靜態資源文件
│   └── images/        # 圖片資源
├── src/               # 源代碼
│   ├── app/           # Next.js App Router 頁面
│   ├── components/    # React 組件
│   └── data/          # 靜態數據文件
├── .github/           # GitHub 相關配置
├── next.config.js     # Next.js 配置
└── tailwind.config.js # Tailwind CSS 配置
```

## 自定義

### 添加新作品

1. 修改 `src/data/projects.ts` 文件，添加新作品的數據。
2. 將作品的圖片添加到 `public/images/projects/` 目錄。

### 修改服務內容

修改 `src/data/services.ts` 文件，調整服務項目的內容。

### 更新團隊成員

修改 `src/data/team.ts` 文件，更新團隊成員的資訊。

## 授權

[MIT](LICENSE)
