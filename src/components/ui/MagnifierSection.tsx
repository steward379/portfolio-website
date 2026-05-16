'use client';

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
} from 'react';
import { createPortal } from 'react-dom';

/** 略高倍率：字型與邊線等細節在鏡頭內更易分辨 */
const ZOOM = 2.35;
const LENS_PX = 200;
const R = LENS_PX / 2;

type MagnifierSectionProps = ComponentPropsWithoutRef<'section'>;

function useClientMediaQuery(query: string) {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false,
  );
  useEffect(() => {
    const mq = window.matchMedia(query);
    const sync = () => setMatches(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, [query]);
  return matches;
}

function sanitizeLoupeClone(el: HTMLElement) {
  el.style.pointerEvents = 'none';
  el.style.userSelect = 'none';
  if (el.hasAttribute('data-magnifier-stack')) {
    return;
  }
  el.style.position = 'absolute';
  el.style.left = '0';
  el.style.top = '0';
  el.style.right = 'auto';
  el.style.bottom = 'auto';
  el.style.zIndex = '0';
  el.style.isolation = 'auto';
  el.classList.remove('-z-10', '-z-20');
}

/** 游標落在排除區時不顯示鏡頭（區塊須在 `[data-magnifier]` section 內） */
function pointerHitsMagnifierExclude(
  section: HTMLElement,
  clientX: number,
  clientY: number,
): boolean {
  const nodes = section.querySelectorAll<HTMLElement>('[data-magnifier-exclude]');
  for (const el of nodes) {
    if (!section.contains(el)) continue;
    const er = el.getBoundingClientRect();
    if (
      clientX >= er.left &&
      clientX <= er.right &&
      clientY >= er.top &&
      clientY <= er.bottom
    ) {
      return true;
    }
  }
  return false;
}

export default function MagnifierSection({
  children,
  className = '',
  ...rest
}: MagnifierSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const lensShellRef = useRef<HTMLDivElement>(null);
  const shiftLayerRef = useRef<HTMLDivElement>(null);
  const scaledLayerRef = useRef<HTMLDivElement>(null);
  const cloneRef = useRef<HTMLElement | null>(null);

  const [mounted, setMounted] = useState(false);
  const finePointer = useClientMediaQuery('(pointer: fine)');
  const reduceMotion = useClientMediaQuery('(prefers-reduced-motion: reduce)');

  useEffect(() => setMounted(true), []);

  const syncCloneSize = useCallback(() => {
    const section = sectionRef.current;
    const scaled = scaledLayerRef.current;
    const clone = cloneRef.current;
    if (!section || !scaled || !clone) return;
    const root =
      section.querySelector<HTMLElement>('[data-magnifier-stack]') ?? section;
    const w = root.offsetWidth;
    const h = root.offsetHeight;
    scaled.style.width = `${w}px`;
    scaled.style.height = `${h}px`;
    clone.style.width = `${w}px`;
    clone.style.height = `${h}px`;
  }, []);

  const showLens = mounted && finePointer && !reduceMotion;

  useLayoutEffect(() => {
    if (!showLens) {
      cloneRef.current = null;
      return;
    }
    const section = sectionRef.current;
    const stack =
      section?.querySelector<HTMLElement>('[data-magnifier-stack]') ?? null;
    const source =
      stack ??
      section?.querySelector<HTMLElement>('[data-magnifier-source]') ??
      null;
    const scaled = scaledLayerRef.current;
    if (!section || !source || !scaled) return;

    const clone = source.cloneNode(true) as HTMLElement;
    clone.removeAttribute('data-magnifier-stack');
    clone.removeAttribute('data-magnifier-source');
    clone.setAttribute('aria-hidden', 'true');
    sanitizeLoupeClone(clone);
    cloneRef.current = clone;
    scaled.innerHTML = '';
    scaled.appendChild(clone);

    scaled.style.transform = `scale(${ZOOM})`;
    scaled.style.transformOrigin = '0 0';

    requestAnimationFrame(() => {
      syncCloneSize();
      requestAnimationFrame(syncCloneSize);
    });

    const root =
      section.querySelector<HTMLElement>('[data-magnifier-stack]') ?? section;
    const ro = new ResizeObserver(() => syncCloneSize());
    ro.observe(root);

    return () => {
      ro.disconnect();
      cloneRef.current = null;
    };
  }, [showLens, syncCloneSize]);

  useEffect(() => {
    if (!showLens) return;

    const onMove = (e: MouseEvent) => {
      const section = sectionRef.current;
      const lens = lensShellRef.current;
      const shift = shiftLayerRef.current;
      if (!section || !lens || !shift || !cloneRef.current) return;

      const r = section.getBoundingClientRect();
      const root =
        section.querySelector<HTMLElement>('[data-magnifier-stack]') ?? section;
      const rr = root.getBoundingClientRect();
      const inside =
        e.clientX >= r.left &&
        e.clientX <= r.right &&
        e.clientY >= r.top &&
        e.clientY <= r.bottom;

      const excluded = pointerHitsMagnifierExclude(section, e.clientX, e.clientY);
      lens.style.opacity = inside && !excluded ? '1' : '0';
      lens.style.left = `${e.clientX}px`;
      lens.style.top = `${e.clientY}px`;

      if (!inside || excluded) return;

      const sx = e.clientX - rr.left;
      const sy = e.clientY - rr.top;
      /* 先 scale(Z)（原點 0,0），再平移使 (sx,sy) 落在鏡頭圓心 (R,R) */
      shift.style.transform = `translate(${R - sx * ZOOM}px, ${R - sy * ZOOM}px)`;
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [showLens]);

  const lens =
    showLens &&
    createPortal(
      <div
        ref={lensShellRef}
        className="pointer-events-none fixed z-40"
        style={{
          width: LENS_PX,
          height: LENS_PX,
          transform: 'translate(-50%, -50%)',
          left: -9999,
          top: -9999,
          opacity: 0,
          willChange: 'transform, opacity',
        }}
        aria-hidden
      >
        <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-[var(--ink)] bg-[var(--bg)] shadow-[0_16px_48px_-10px_rgba(0,0,0,0.35)] ring-1 ring-[color-mix(in_oklab,var(--line)_75%,transparent)]">
          <div ref={shiftLayerRef} className="absolute left-0 top-0">
            <div ref={scaledLayerRef} className="absolute left-0 top-0 will-change-transform" />
          </div>
        </div>
      </div>,
      document.body,
    );

  return (
    <>
      <section
        ref={sectionRef}
        data-magnifier
        className={`max-md:cursor-auto md:cursor-none ${className} [&_[data-magnifier-exclude]_a]:cursor-pointer [&_[data-magnifier-exclude]_button]:cursor-pointer [&_a]:cursor-pointer [&_button]:cursor-pointer [&_input]:cursor-auto [&_textarea]:cursor-auto [&_select]:cursor-auto`}
        {...rest}
      >
        {children}
      </section>
      {lens}
    </>
  );
}
