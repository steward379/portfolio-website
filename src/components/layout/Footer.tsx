import Link from 'next/link';
import Marquee from '@/components/ui/Marquee';
import { LINE_ADD_FRIEND_URL } from '@/data/contact';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const tickerItems = [
    'Editorial × Tech-craft',
    '縮小檢視工作室 · Setup Studio',
    'Web · Brand · Interaction',
    'Available for select projects',
    `© ${currentYear}`,
  ];

  return (
    <footer className="relative mt-32 border-t border-[var(--line)] bg-[var(--bg-2)] text-[var(--ink)]">
      <Marquee duration={48} className="border-b border-[var(--line)] py-7">
        {tickerItems.map((t, i) => (
          <span
            key={i}
            className="flex items-center pl-10 pr-10 font-display text-[clamp(2rem,5vw,4rem)] leading-none"
          >
            {t}
            <span className="ml-10 inline-block h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden />
          </span>
        ))}
      </Marquee>

      <div className="shell grid grid-cols-1 gap-12 py-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="eyebrow">Index · 00</div>
          <h3 className="mt-5 font-display text-4xl leading-[1.1] md:text-5xl">
            Let&rsquo;s make something
            <br />
            <span className="font-display-italic">considered.</span>
          </h3>
          <p className="mt-6 max-w-md text-[var(--muted)]">
            我們提供專業的網站開發與設計服務，從內容、互動到品牌系統，
            為每個合作打造可被細讀的數位作品。
          </p>
        </div>

        <div className="md:col-span-3 md:col-start-7">
          <div className="font-mono-label">Sitemap</div>
          <ul className="mt-5 space-y-3 text-[15px]">
            <li>
              <Link href="/" className="link-underline text-[var(--ink)]">
                首頁
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="link-underline text-[var(--ink)]">
                作品集
              </Link>
            </li>
            <li>
              <Link href="/about" className="link-underline text-[var(--ink)]">
                關於我們
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="font-mono-label">Contact</div>
          <ul className="mt-5 space-y-3 text-[15px]">
            <li>
              <a href="mailto:steward379@gmail.com" className="link-underline">
                steward379@gmail.com
              </a>
            </li>
            <li className="md:hidden">
              <a
                href={LINE_ADD_FRIEND_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline"
              >
                Line steward379
              </a>
            </li>
            <li className="hidden md:block">
              <a href="tel:+886212345678" className="link-underline">
                Call me
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/ZoomOutDesign"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline"
              >
                Facebook ↗
              </a>
            </li>
          </ul>
          <p className="mt-8 text-sm text-[var(--muted)]">無實體地址</p>
        </div>
      </div>

      <div className="shell flex flex-col items-start justify-between gap-3 border-t border-[var(--line)] py-6 text-xs text-[var(--muted)] md:flex-row md:items-center">
        <span className="font-mono-label">
          © {currentYear} 縮小檢視工作室 · Setup Studio · All rights reserved
        </span>
        <span className="font-mono-label">Crafted with care · Last updated {currentYear}</span>
      </div>
    </footer>
  );
};

export default Footer;
