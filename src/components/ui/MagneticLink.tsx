'use client';

import { ComponentPropsWithoutRef, useEffect, useRef } from 'react';
import Link from 'next/link';

type Props = ComponentPropsWithoutRef<typeof Link> & {
  strength?: number;
};

const MagneticLink = ({ strength = 18, children, className = '', ...rest }: Props) => {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;

    let raf = 0;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;

    const tick = () => {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      tx = (dx / r.width) * strength;
      ty = (dy / r.height) * strength;
    };

    const onLeave = () => {
      tx = 0;
      ty = 0;
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [strength]);

  return (
    <Link ref={ref} className={`will-change-transform ${className}`} {...rest}>
      {children}
    </Link>
  );
};

export default MagneticLink;
