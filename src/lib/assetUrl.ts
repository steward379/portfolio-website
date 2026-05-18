/**
 * `public/` 靜態檔 URL。
 * - GitHub Pages：production 且非 Vercel → `/portfolio-website` 前綴
 * - Vercel（VERCEL=1）：production 仍為網站根路徑
 * - 本機：`NODE_ENV !== 'production'` → 無前綴
 */
function productionAssetPrefix(): string {
  if (process.env.NODE_ENV !== 'production') return '';
  if (process.env.VERCEL === '1') return '';
  return '/portfolio-website';
}

export function assetUrl(src: string): string {
  if (!src || src.startsWith('http') || src.startsWith('data:')) return src;

  let path = src;
  if (path.startsWith('/portfolio-website/')) {
    path = path.slice('/portfolio-website'.length);
  }

  const prefix = productionAssetPrefix();
  return `${prefix}${path}`;
}

/** 將文案裡寫死的 `/portfolio-website/` 內連結改成適合目前部署的根路徑 */
export function rewriteInternalHtml(html: string): string {
  if (process.env.NODE_ENV !== 'production') {
    return html.replaceAll('href="/portfolio-website/', 'href="/');
  }
  if (process.env.VERCEL === '1') {
    return html.replaceAll('href="/portfolio-website/', 'href="/');
  }
  return html;
}
