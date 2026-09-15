'use client';

import { useEffect, useState } from 'react';

const navItems = [
  { id: 'about', label: 'ABOUT' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'expertise', label: 'TECHNOLOGY & EXPERTISE' },
];

export default function SidebarNav() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -50% 0px',
        threshold: 0.1,
      }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav aria-label="In-page navigation" className="hidden lg:block py-4">
      <ul className="space-y-3">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className="group flex items-center gap-3 text-[11px] tracking-widest py-0.5 font-semibold uppercase"
              >
                <span
                  className={`h-0.5 transition-all duration-300 ${
                    isActive
                      ? 'w-8 bg-text-primary'
                      : 'w-3 bg-text-secondary group-hover:w-6 group-hover:bg-text-primary'
                  }`}
                />
                <span
                  className={`transition-colors ${
                    isActive
                      ? 'text-text-primary font-bold'
                      : 'text-text-secondary group-hover:text-text-primary'
                  }`}
                >
                  {item.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
