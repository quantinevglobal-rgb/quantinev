'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAV_LINKS, SERVICES_MEGA_MENU } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openMega = useCallback(() => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setMegaOpen(true);
  }, []);

  const closeMega = useCallback(() => {
    closeTimeout.current = setTimeout(() => setMegaOpen(false), 150);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-transparent',
      )}
    >
      <div className="container-max mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 rounded-lg bg-accent-blue flex items-center justify-center">
            <span className="text-white font-bold text-lg">Q</span>
          </div>
          <span
            className={cn(
              'text-xl font-bold transition-colors',
              scrolled ? 'text-navy-950' : 'text-white',
            )}
          >
            Quantinev
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) =>
            'megaMenu' in link && link.megaMenu ? (
              <div
                key={link.href}
                onMouseEnter={openMega}
                onMouseLeave={closeMega}
              >
                <Link
                  href={link.href}
                  className={cn(
                    'flex items-center gap-1 text-sm font-medium transition-colors hover:text-accent-blue cursor-pointer',
                    scrolled ? 'text-navy-900' : 'text-white/90',
                  )}
                >
                  {link.label}
                  <ChevronDown
                    className={cn(
                      'w-3.5 h-3.5 transition-transform',
                      megaOpen && 'rotate-180',
                    )}
                  />
                </Link>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-accent-blue',
                  scrolled ? 'text-navy-900' : 'text-white/90',
                )}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button href="/contact" size="sm">
            Get a Quote
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className={cn('w-6 h-6', scrolled ? 'text-navy-950' : 'text-white')} />
          ) : (
            <Menu className={cn('w-6 h-6', scrolled ? 'text-navy-950' : 'text-white')} />
          )}
        </button>
      </div>

      {/* Mega Menu — hover zone */}
      {megaOpen && (
        <div
          ref={megaRef}
          onMouseEnter={openMega}
          onMouseLeave={closeMega}
          className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-2xl shadow-black/5 animate-fade-up"
        >
          <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid md:grid-cols-3 gap-8">
              {SERVICES_MEGA_MENU.map((group) => (
                <div key={group.category}>
                  <h4 className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-4">
                    {group.category}
                  </h4>
                  <ul className="space-y-3">
                    {group.items.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          onClick={() => setMegaOpen(false)}
                          className="group block rounded-lg p-3 -m-3 hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-sm font-semibold text-navy-900 group-hover:text-accent-blue transition-colors">
                            {item.label}
                          </span>
                          <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <Link
                href="/services"
                onClick={() => setMegaOpen(false)}
                className="text-sm font-semibold text-accent-blue hover:underline"
              >
                View all services →
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="container-max mx-auto px-4 py-6 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-navy-900 font-medium py-2.5 hover:text-accent-blue transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {/* Mobile mega-menu items inline */}
            <div className="mt-2 pt-3 border-t border-gray-100">
              <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">Services</p>
              {SERVICES_MEGA_MENU.flatMap((g) =>
                g.items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block text-sm text-navy-800 py-2 hover:text-accent-blue transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )),
              )}
            </div>
            <Button href="/contact" size="sm" className="mt-4 w-fit">
              Get a Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
