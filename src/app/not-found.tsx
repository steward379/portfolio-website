import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] items-center bg-[var(--bg)]">
      <div className="shell">
        <div className="grid grid-cols-12 gap-y-12 md:gap-x-6">
          <div className="col-span-12 md:col-span-3" data-reveal>
            <div className="eyebrow">Error · 404</div>
          </div>
          <div
            className="col-span-12 md:col-span-9"
            data-reveal
            style={{ ['--reveal-delay' as string]: '120ms' }}
          >
            <h1 className="font-display text-[clamp(5rem,18vw,16rem)] leading-[0.85] tracking-tighter">
              <span className="clip-reveal">
                <span>Lost in</span>
              </span>{' '}
              <span className="clip-reveal">
                <span className="font-display-italic">space.</span>
              </span>
            </h1>
            <p className="mt-8 max-w-[48ch] text-[var(--ink-2)] md:text-[1.1rem]">
              您要尋找的頁面不存在或已被移除。讓我們把您帶回主舞台。
            </p>
            <Link href="/" className="btn mt-10">
              返回首頁
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
