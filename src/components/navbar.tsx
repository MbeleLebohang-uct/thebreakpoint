'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function Navbar() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/villas/blackbox', label: 'Blackbox' },
    { href: '/book', label: 'Book' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        // Always show navbar at the top of the page
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full py-3 backdrop-blur transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className='container mx-auto px-4'>
        <div className='flex h-20 items-center justify-center'>
          <nav>
            <div className='flex items-center rounded-full border-2 border-black bg-[#e8ddd4] p-2 shadow-lg'>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`mx-1 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive(link.href)
                      ? 'border border-gray-200 bg-white text-black shadow-md'
                      : 'text-black hover:bg-white/50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
