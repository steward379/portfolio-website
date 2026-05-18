/**
 * `public/` 靜態檔 URL。正式環境含 GitHub Pages 子路徑 `/portfolio-website`，本機開發為根路徑。
 */
export function assetUrl(src: string): string {
  if (!src || src.startsWith('http') || src.startsWith('data:')) return src;

  let path = src;
  if (path.startsWith('/portfolio-website/')) {
    path = path.slice('/portfolio-website'.length);
  }

  const prefix = process.env.NODE_ENV === 'production' ? '/portfolio-website' : '';
  return `${prefix}${path}`;
}

/** 本機開發時將文案裡寫死的 `/portfolio-website/` 內連結改成根路徑 */
export function rewriteInternalHtml(html: string): string {
  if (process.env.NODE_ENV === 'production') return html;
  return html.replaceAll('href="/portfolio-website/', 'href="/');
}
