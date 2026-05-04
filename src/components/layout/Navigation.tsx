'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationItem {
  name: string;
  label: string;
  path: string;
}

interface NavigationProps {
  className?: string;
  onNavigate?: () => void;
}

const navItems: NavigationItem[] = [
  { name: '首頁', label: '01', path: '/' },
  { name: '作品', label: '02', path: '/portfolio' },
  { name: '關於', label: '03', path: '/about' },
];

const Navigation = ({ className = '', onNavigate }: NavigationProps) => {
  const pathname = usePathname();

  return (
    <nav className={className} aria-label="Primary">
      <ul className="flex flex-col gap-5 md:flex-row md:items-center md:gap-9">
        {navItems.map((item) => {
          const active =
            item.path === '/'
              ? pathname === '/'
              : pathname?.startsWith(item.path);
          return (
            <li key={item.path}>
              <Link
                href={item.path}
                onClick={onNavigate}
                className={`group inline-flex items-baseline gap-2 text-[15px] tracking-tight ${
                  active ? 'text-[var(--ink)]' : 'text-[var(--muted)] hover:text-[var(--ink)]'
                } transition-colors`}
              >
                <span className="font-mono-label">{item.label}</span>
                <span className={`link-underline ${active ? 'is-active' : ''}`}>{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
