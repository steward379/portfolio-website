'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationItem {
  name: string;
  path: string;
}

interface NavigationProps {
  className?: string;
  onNavigate?: () => void;
}

const navItems: NavigationItem[] = [
  { name: '作品', path: '/portfolio' },
  { name: '社群教學', path: '/talks' },
  { name: '關於', path: '/about' },
];

const Navigation = ({ className = '', onNavigate }: NavigationProps) => {
  const pathname = usePathname();

  return (
    <nav className={className} aria-label="Primary">
      <ul className="flex flex-col gap-5 md:flex-row md:items-center md:gap-9">
        {navItems.map((item) => {
          const active = pathname?.startsWith(item.path);
          return (
            <li key={item.path}>
              <Link
                href={item.path}
                onClick={onNavigate}
                className={`group inline-flex items-baseline text-[15px] tracking-tight ${
                  active ? 'text-[var(--ink)]' : 'text-[var(--muted)] hover:text-[var(--ink)]'
                } transition-colors`}
              >
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
