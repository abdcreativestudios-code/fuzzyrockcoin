'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';
import { CoinIcon } from '@/components/assets/CoinIcon';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/token', label: 'Token' },
  { href: '/community', label: 'Community' },
  { href: '/transparency', label: 'Transparency' },
  { href: '/brand', label: 'Brand' },
  { href: '/faq', label: 'FAQ' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <CoinIcon className="h-10 w-10 transition-transform group-hover:rotate-180 duration-500" />
            <div>
              <span className={`font-bold text-xl transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-auto'
              }`}>{siteConfig.name}</span>
              <span className={`ml-2 font-bold transition-colors ${
                isScrolled ? 'text-cyan-600' : 'text-cyan-400'
              }`}>{siteConfig.ticker}</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isScrolled
                    ? 'text-gray-700 hover:text-cyan-600'
                    : 'text-auto-secondary hover:text-cyan-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white"
            >
              <Link href={siteConfig.social.telegram}>Join Community</Link>
            </Button>
          </div>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <div className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg font-medium text-gray-700 hover:text-cyan-600 transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button
                  asChild
                  className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white mt-4"
                >
                  <Link href={siteConfig.social.telegram}>Join Community</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
