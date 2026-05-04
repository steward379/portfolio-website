const NON_DISCLOSED_ITEMS = [
  '國立大學校園教室預約系統',
  '避震器工廠內部系統',
  '市議員官網 Wordpress',
  '叫車網站系統 Line @ 與品牌設計',
  '心理師預約表單完整設計與前後端系統',
] as const;

const NonDisclosedWorksNote = () => {
  return (
    <div className="mt-20 border-t border-[var(--line)] pt-14" data-reveal>
      <div className="font-mono-label">Confidential · 未公開內容</div>
      <p className="mt-4 max-w-[68ch] text-[15px] leading-relaxed text-[var(--ink-2)]">
        另有部分專案因客戶保密、合約或內部政策無法公布畫面與技術細節，以下僅以文字列舉名稱供參考。
      </p>
      <ul className="mt-8 space-y-3 text-[15px] text-[var(--ink)] md:columns-2 md:gap-x-12">
        {NON_DISCLOSED_ITEMS.map((line) => (
          <li
            key={line}
            className="break-inside-avoid border-l border-[var(--line-2)] py-0.5 pl-4 leading-snug"
          >
            {line}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NonDisclosedWorksNote;
