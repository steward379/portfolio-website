'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Navigation from './Navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;
      setScrolled(y > 8);
      if (Math.abs(delta) > 6) {
        setHidden(delta > 0 && y > 120);
        lastY.current = y;
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((v) => !v);

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 transition-[transform,background,backdrop-filter,border-color] duration-500',
        scrolled ? 'border-b border-[var(--line)] bg-[color-mix(in_oklab,var(--bg)_88%,transparent)] backdrop-blur-md' : 'border-b border-transparent',
        hidden ? '-translate-y-full' : 'translate-y-0',
      ].join(' ')}
      style={{ ['--ease' as string]: 'cubic-bezier(0.22,1,0.36,1)' }}
    >
      <div className="shell flex h-[68px] items-center justify-between gap-6">
        <Link href="/" className="group flex items-center gap-3" aria-label="Home">
          <span className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden border border-[var(--line-2)]">
            <Image
              src="/portfolio-website/logo.jpg"
              alt=""
              width={36}
              height={36}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-mono-label">Studio</span>
            <span className="font-display text-lg tracking-tight text-[var(--ink)]">縮小檢視</span>
          </span>
        </Link>

        <div className="flex items-center gap-8">
          <Navigation className="hidden md:flex" />

          <a
            href="https://www.facebook.com/ZoomOutDesign"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hidden items-center gap-2 text-[var(--muted)] transition-colors hover:text-[var(--ink)] md:inline-flex"
          >
            <span className="font-mono-label">FB</span>
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>

          <button
            type="button"
            className="relative inline-flex h-10 w-10 items-center justify-center md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? '關閉選單' : '開啟選單'}
          >
            <span
              className={`absolute h-px w-6 bg-[var(--ink)] transition-transform duration-300 ${
                isMenuOpen ? 'translate-y-0 rotate-45' : '-translate-y-[5px]'
              }`}
            />
            <span
              className={`absolute h-px w-6 bg-[var(--ink)] transition-transform duration-300 ${
                isMenuOpen ? 'translate-y-0 -rotate-45' : 'translate-y-[5px]'
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden border-t border-[var(--line)] bg-[var(--bg)] overflow-hidden transition-[max-height,opacity] duration-500 ${
          isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="shell py-6">
          <Navigation onNavigate={() => setIsMenuOpen(false)} />
        </div>
      </div>
    </header>
  );
};

export default Header;
