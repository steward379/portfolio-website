'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationItem {
  name: string;
  path: string;
}

interface NavigationProps {
  className?: string;
}

const Navigation = ({ className = '' }: NavigationProps) => {
  const pathname = usePathname();
  
  const navItems: NavigationItem[] = [
    { name: '首頁', path: '/' },
    { name: '作品集', path: '/portfolio' },
    { name: '關於我們', path: '/about' },
  ];

  return (
    <nav className={className}>
      <ul className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              href={item.path}
              className={`${
                pathname === item.path
                  ? 'text-blue-600 font-medium'
                  : 'text-gray-900 hover:text-blue-600'
              } transition-colors duration-300`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;