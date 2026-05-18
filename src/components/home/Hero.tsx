import MagneticLink from '@/components/ui/MagneticLink';
import MagnifierSection from '@/components/ui/MagnifierSection';
import { heroLoupeSourceBackground } from '@/lib/heroGradient';

const Hero = () => {
  return (
    <MagnifierSection
      className="relative isolate overflow-hidden bg-[var(--bg)]"
      data-spotlight
    >
      <div
        data-magnifier-stack
        className="relative isolate overflow-hidden pt-[140px] md:pt-[180px]"
      >
        <div
          aria-hidden
          data-magnifier-source
          className="pointer-events-none absolute inset-0 -z-10"
          style={heroLoupeSourceBackground}
        />

        <div className="shell">
          <div className="grid grid-cols-12 gap-y-12">
            <div className="col-span-12 md:col-span-8" data-reveal>
              <div className="eyebrow" style={{ ['--reveal-delay' as string]: '60ms' }}>
                Setup Studio · Est. 2020
              </div>
            </div>

            <h1
              className="col-span-12 mt-8 font-display text-[clamp(3.4rem,11vw,11rem)] leading-[0.9] tracking-[-0.03em] text-[var(--ink)] md:mt-12"
              style={{ textWrap: 'balance' }}
            >
              <span className="block" data-reveal style={{ ['--reveal-delay' as string]: '120ms' }}>
                <span className="clip-reveal">
                  <span>Design that</span>
                </span>
              </span>
              <span
                className="block pl-[8vw]"
                data-reveal
                style={{ ['--reveal-delay' as string]: '220ms' }}
              >
                <span className="clip-reveal">
                  <span className="font-display-italic">earns</span>
                </span>{' '}
                <span className="clip-reveal">
                  <span>a second</span>
                </span>
              </span>
              <span className="block" data-reveal style={{ ['--reveal-delay' as string]: '340ms' }}>
                <span className="clip-reveal">
                  <span>look.</span>
                </span>
                <span className="ml-6 inline-block translate-y-[-0.55em] align-top text-[0.18em] font-mono-label">
                  ↳ 經得起細看的設計
                </span>
              </span>
            </h1>

            <div
              className="col-span-12 mt-12 grid grid-cols-12 gap-x-6 gap-y-10 border-t border-[var(--line)] pt-10"
              data-reveal
              style={{ ['--reveal-delay' as string]: '420ms' }}
            >
              <div className="col-span-12 md:col-span-3">
                <div className="font-mono-label">About</div>
              </div>

              <div className="col-span-12 md:col-span-6" data-magnifier-exclude>
                <p className="max-w-[52ch] text-[1.5rem] leading-relaxed text-[var(--ink-2)] md:text-[1.5rem]">
                  我們是一家專注於網站開發和設計的工作室，提供從概念到實現的全方位服務。
                  以編輯設計的細節，工程師的嚴謹，幫品牌建立經得起時間的數位形象。
                </p>
              </div>

              <div
                className="col-span-12 flex flex-wrap items-center gap-3 md:col-span-3 md:justify-end"
                data-magnifier-exclude
              >
                <MagneticLink href="/portfolio" className="btn">
                  查看作品集
                  <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </MagneticLink>
                <MagneticLink href="/about" className="btn btn-ghost">
                  關於我們
                </MagneticLink>
              </div>
            </div>
          </div>

          <div className="mt-24 grid grid-cols-12 gap-x-6 gap-y-6 border-t border-[var(--line)] pt-6 md:mt-32">
            {[
              { k: 'Years', v: '5+' },
              { k: 'Projects', v: '20+' },
              { k: 'Disciplines', v: '4' },
              { k: 'Studios', v: '7' },
            ].map((s, i) => (
              <div
                key={s.k}
                className="col-span-6 md:col-span-3"
                data-reveal
                style={{ ['--reveal-delay' as string]: `${500 + i * 80}ms` }}
              >
                <div className="font-mono-label">{s.k}</div>
                <div className="mt-2 font-display text-5xl text-[var(--ink)] md:text-6xl">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="shell mt-20 flex items-end justify-between gap-6 pb-10 md:mt-28 md:pb-14">
          <div className="font-mono-label">Scroll · 向下細讀</div>
          <div aria-hidden className="h-16 w-px bg-[var(--line-2)]">
            <span className="block h-full w-px origin-top animate-[scrollLine_2.4s_var(--ease-out-expo)_infinite] bg-[var(--ink)]" />
          </div>
        </div>

        <style>{`
          @keyframes scrollLine {
            0% { transform: scaleY(0); transform-origin: top; }
            50% { transform: scaleY(1); transform-origin: top; }
            51% { transform: scaleY(1); transform-origin: bottom; }
            100% { transform: scaleY(0); transform-origin: bottom; }
          }
        `}</style>
      </div>
    </MagnifierSection>
  );
};

export default Hero;
