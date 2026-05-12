import ContactForm from '@/components/contact/ContactForm';
import { LINE_ADD_FRIEND_URL } from '@/data/contact';

export const metadata = {
  title: '關於我們 | 縮小檢視工作室 · Setup Studio',
  description: '了解我們的公司故事，以及我們如何為客戶提供專業的網站和設計服務。',
};

const values = [
  {
    label: '01',
    title: '創新思維',
    EnglishTitle: 'Innovative',
    body: '我們不斷探索新的創意和技術，為客戶提供前沿的解決方案。我們鼓勵團隊突破常規思維，從不同角度看待問題。',
  },
  {
    label: '02',
    title: '以客戶為中心',
    EnglishTitle: 'Customer-Centric',
    body: '我們深入了解客戶的需求和目標，與客戶建立長期的合作關係。我們相信真正了解客戶的業務是提供優質服務的關鍵。',
  },
  {
    label: '03',
    title: '品質與專業',
    EnglishTitle: 'Quality and Professional',
    body: '我們對每個項目都投入百分之百的專注和努力，確保交付的成果符合最高標準。我們注重細節，不斷追求卓越。',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <section className="relative pt-[140px] md:pt-[180px]" data-spotlight>
        <div className="shell">
          <div className="grid grid-cols-12 gap-y-8 md:gap-x-6">
            <div className="col-span-12 md:col-span-3" data-reveal>
              <div className="eyebrow">Index · 03</div>
            </div>
            <div className="col-span-12 md:col-span-9" data-reveal style={{ ['--reveal-delay' as string]: '120ms' }}>
              <h1 className="font-display text-[clamp(3rem,9vw,9rem)] leading-[0.92] tracking-tight">
                <span className="clip-reveal">
                  <span>About the</span>
                </span>{' '}
                <span className="clip-reveal">
                  <span className="font-display-italic">studio.</span>
                </span>
              </h1>
              <p className="mt-10 max-w-[55ch] text-[var(--ink-2)] md:text-[1.1rem]">
                我們是一家充滿熱情的設計與開發團隊，致力於為客戶創造獨特的數位體驗。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 md:py-44">
        <div className="shell">
          <div className="grid grid-cols-12 gap-y-12 md:gap-x-6">
            <div className="col-span-12 md:col-span-4" data-reveal>
              <div className="font-mono-label">Story · Est. 2020</div>
              <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight md:text-5xl">
                Our<span className="font-display-italic"> Story</span>
              </h2>
            </div>

            <div className="col-span-12 space-y-7 md:col-span-7 md:col-start-6" data-reveal style={{ ['--reveal-delay' as string]: '120ms' }}>
              <p className="text-[var(--ink-2)] md:text-[1.05rem]">
                縮小檢視工作室（Setup Studio）成立於 2020 年，由一群具有豐富行業經驗的設計師和開發人員組成。
                我們相信優秀的設計不僅僅是美觀，更應該能夠解決問題並創造價值。
              </p>
              <p className="text-[var(--ink-2)] md:text-[1.05rem]">
                從成立之初，我們就專注於為客戶提供全方位的設計和開發服務，包括品牌設計、網站開發、UI/UX 設計等。
                我們與各行各業的企業合作，從初創公司到大型企業，幫助他們在數位時代建立強大的品牌形象。
              </p>
              <p className="text-[var(--ink-2)] md:text-[1.05rem]">
                我們的團隊擁有多元化的背景和技能，這使我們能夠從不同角度思考問題，
                為客戶提供創新且實用的解決方案。我們相信透過設計的力量，可以幫助企業實現其業務目標，
                同時為用戶創造愉悅的體驗。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line)] bg-[var(--bg-2)] py-32 md:py-44">
        <div className="shell">
          <div
            className="grid grid-cols-12 items-end gap-y-10 border-b border-[var(--line)] pb-10 md:gap-x-6"
            data-reveal
          >
            <div className="col-span-12 md:col-span-4">
              <div className="eyebrow">Values · 04</div>
            </div>
            <div className="col-span-12 md:col-span-8">
              <h2 className="font-display text-[clamp(2.4rem,6vw,5rem)] leading-[0.95] tracking-tight">
                Our<span className="font-display-italic"> Values</span>
              </h2>
            </div>
          </div>

          <ul>
            {values.map((v, i) => (
              <li
                key={v.label}
                className="group relative grid grid-cols-12 items-baseline gap-y-3 border-b border-[var(--line)] py-9 md:gap-x-6 md:py-12"
                data-reveal
                style={{ ['--reveal-delay' as string]: `${i * 90}ms` }}
              >
                <span className="numeral col-span-2 text-3xl md:col-span-1 md:text-4xl">{v.label}</span>
                <h3 className="col-span-10 font-display text-3xl tracking-tight md:col-span-4 md:text-4xl">
                  {v.EnglishTitle}
                  <br />
                  <span className="font-display-italic text-lg md:text-xl">{v.title}</span>
                </h3>
                <p className="col-span-12 max-w-[60ch] text-[var(--ink-2)] md:col-span-6">{v.body}</p>
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 -top-px h-px origin-left scale-x-0 bg-[var(--accent)] transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-x-100"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-32 md:py-44">
        <div className="shell">
          <div
            className="grid grid-cols-12 items-end gap-y-10 border-b border-[var(--line)] pb-10 md:gap-x-6"
            data-reveal
          >
            <div className="col-span-12 md:col-span-4">
              <div className="eyebrow">Contact · 05</div>
            </div>
            <div className="col-span-12 md:col-span-8">
              <h2 className="font-display text-[clamp(2.4rem,6vw,5rem)] leading-[0.95] tracking-tight">
                Any Questions?
                <br />
                <span className="font-display-italic">Just Ask.</span>
              </h2>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-12 gap-y-16 md:gap-x-6">
            <div className="col-span-12 md:col-span-5">
              <dl className="space-y-10">
                <div>
                  <dt className="font-mono-label">Address</dt>
                  <dd className="mt-2 text-lg text-[var(--ink)]">無實體地址</dd>
                </div>
                <div>
                  <dt className="font-mono-label">Email</dt>
                  <dd className="mt-2 text-lg">
                    <a href="mailto:steward379@gmail.com" className="link-underline text-[var(--ink)]">
                      steward379@gmail.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-mono-label md:hidden">LINE</dt>
                  <dt className="font-mono-label hidden md:block">Phone</dt>
                  <dd className="mt-2 text-lg">
                    <a
                      href={LINE_ADD_FRIEND_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline text-[var(--ink)] md:hidden"
                    >
                      Line steward379
                    </a>
                    <a
                      href="tel:+886212345678"
                      className="link-underline hidden text-[var(--ink)] md:inline"
                    >
                      Call me
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-mono-label">Hours</dt>
                  <dd className="mt-2 text-lg leading-relaxed text-[var(--ink-2)]">
                    平日晚間為主，白天可視情況處理
                    <br />
                    週末中午～晚間皆可
                  </dd>
                </div>
              </dl>
            </div>

            <div className="col-span-12 md:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
