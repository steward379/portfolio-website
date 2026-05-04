import { ReactNode } from 'react';

interface MarqueeProps {
  children: ReactNode;
  duration?: number;
  className?: string;
}

const Marquee = ({ children, duration = 40, className = '' }: MarqueeProps) => {
  return (
    <div
      className={`marquee-pause overflow-hidden ${className}`}
      style={{ ['--marquee-d' as string]: `${duration}s` }}
      aria-hidden
    >
      <div className="marquee">
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
