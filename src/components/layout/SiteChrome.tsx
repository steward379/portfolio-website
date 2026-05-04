'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

const SiteChrome = ({ children }: { children: ReactNode }) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handle = () => setReduceMotion(mq.matches);
    handle();
    mq.addEventListener('change', handle);
    return () => mq.removeEventListener('change', handle);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    let raf = 0;
    let tx = -100;
    let ty = -100;
    let cx = -100;
    let cy = -100;

    const lerp = (a: number, b: number, n: number) => a + (b - a) * n;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (
        t?.closest(
          'a, button, [data-cursor="lg"], [role="button"], input, textarea, select, label',
        )
      ) {
        cursorRef.current?.classList.add('is-large');
      } else {
        cursorRef.current?.classList.remove('is-large');
      }
    };

    const tick = () => {
      cx = lerp(cx, tx, 0.22);
      cy = lerp(cy, ty, 0.22);
      const el = cursorRef.current;
      if (el) {
        el.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
    };
  }, [reduceMotion]);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? (h.scrollTop / max) * 100 : 0;
      const el = progressRef.current;
      if (el) el.style.width = `${p}%`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ----------------------------------------------------------------
   * Reveal-on-scroll
   * Re-run on every route change; also use MutationObserver to catch
   * dynamically-rendered nodes; safety timeout reveals everything if
   * the observer hasn't fired (e.g. very short pages).
   * ---------------------------------------------------------------- */
  useEffect(() => {
    const observed = new WeakSet<Element>();

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -4% 0px' },
    );

    const observeAll = () => {
      document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
        if (!observed.has(el) && !el.classList.contains('is-visible')) {
          observed.add(el);
          io.observe(el);
        }
      });
    };

    observeAll();

    const mo = new MutationObserver(() => observeAll());
    mo.observe(document.body, { childList: true, subtree: true });

    const safety = window.setTimeout(() => {
      document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
        el.classList.add('is-visible');
      });
    }, 1800);

    return () => {
      io.disconnect();
      mo.disconnect();
      window.clearTimeout(safety);
    };
  }, [pathname]);

  /* ----------------------------------------------------------------
   * Spotlight cursor follow — re-attach on route change
   * ---------------------------------------------------------------- */
  useEffect(() => {
    if (reduceMotion) return;

    const handlers = new Map<HTMLElement, (e: MouseEvent) => void>();

    const attach = (el: HTMLElement) => {
      if (handlers.has(el)) return;
      const handler = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width) * 100;
        const y = ((e.clientY - r.top) / r.height) * 100;
        el.style.setProperty('--mx', `${x}%`);
        el.style.setProperty('--my', `${y}%`);
      };
      el.addEventListener('mousemove', handler);
      handlers.set(el, handler);
    };

    const attachAll = () => {
      document
        .querySelectorAll<HTMLElement>('[data-spotlight]')
        .forEach((el) => attach(el));
    };

    attachAll();

    const mo = new MutationObserver(() => attachAll());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      handlers.forEach((handler, el) => el.removeEventListener('mousemove', handler));
      handlers.clear();
    };
  }, [reduceMotion, pathname]);

  return (
    <>
      <div className="scroll-progress" aria-hidden>
        <span ref={progressRef} />
      </div>
      <div ref={cursorRef} className="cursor-dot" aria-hidden />
      {children}
    </>
  );
};

export default SiteChrome;
