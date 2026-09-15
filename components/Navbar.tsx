'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Notes', path: '/notes' },
  { name: 'Projects', path: '/projects' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="py-6 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-border pb-6">
      <Link
        href="/"
        className="font-serif text-lg font-medium tracking-tight text-text-primary hover:opacity-80 transition-opacity"
      >
        Hendry Bambang
      </Link>
      <div className="flex items-center gap-5">
        <nav className="flex items-center gap-5">
          {navItems.map((item) => {
            const isActive =
              item.path === '/'
                ? pathname === '/'
                : pathname.startsWith(item.path);

            return (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm tracking-wide transition-colors ${
                  isActive
                    ? 'text-text-primary font-medium'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="pl-3 border-l border-border flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
