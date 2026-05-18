import Portfolio from '@/components/portfolio/Portfolio';
import MagnifierSection from '@/components/ui/MagnifierSection';
import { heroLoupeSourceBackground } from '@/lib/heroGradient';

export const metadata = {
  title: '作品集 | 縮小檢視工作室 · Setup Studio',
  description: '瀏覽我們的作品集，了解我們在網站開發與設計方面的專業技能和創意。',
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <MagnifierSection className="relative" data-spotlight>
        <div data-magnifier-stack className="relative pt-[140px] md:pt-[180px]">
          <div
            aria-hidden
            data-magnifier-source
            className="pointer-events-none absolute inset-0 -z-10"
            style={heroLoupeSourceBackground}
          />
          <div className="shell">
            <div className="grid grid-cols-12 gap-y-8 md:gap-x-6">
              <div className="col-span-12 md:col-span-3" data-reveal>
                <div className="eyebrow">Portfolio</div>
              </div>
              <div className="col-span-12 md:col-span-9" data-reveal style={{ ['--reveal-delay' as string]: '120ms' }}>
                <h1 className="font-display text-[clamp(3rem,9vw,9rem)] leading-[0.92] tracking-tight">
                  <span className="clip-reveal">
                    <span>Selected</span>
                  </span>{' '}
                  <span className="clip-reveal">
                    <span className="font-display-italic">archive.</span>
                  </span>
                </h1>
                <p className="mt-10 max-w-[55ch] text-[var(--ink-2)] md:text-[1.1rem]">
                  探索我們的最新作品，展示我們在網站開發與設計領域的專業能力與創意。
                  以類別與產業切換，找到你感興趣的案例。
                </p>
              </div>
            </div>
          </div>
        </div>
      </MagnifierSection>

      <div className="mt-20" />

      <Portfolio />
    </div>
  );
}
