// src/components/layout/Navbar.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useLanguage } from '@/context/LanguageContext';
import { ShoppingBag, Search, Menu, X, User, Globe } from 'lucide-react';

const navLinks = [
  { key: 'home', href: '/' },
  { key: 'catalog', href: '/catalog' },
  { key: 'about', href: '/about' },
  { key: 'contact', href: '/contact' },
];

export default function Navbar() {
  const t = useTranslations();
  const { language, setLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-black hover:opacity-80 transition-opacity">
              GEKO
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-black hover:underline underline-offset-4 transition-all"
              >
                {t(`common.${link.key}`)}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="p-2 text-gray-600 hover:text-black transition-colors rounded-full hover:bg-gray-100 flex items-center gap-1"
                title="Change Language"
              >
                <Globe className="w-5 h-5" />
                <span className="text-xs font-medium uppercase">{language}</span>
              </button>
              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-[100]">
                  <button
                    onClick={() => {
                      setLanguage('en');
                      setIsLanguageMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-black hover:bg-gray-50 transition-colors ${
                      language === 'en' ? 'bg-gray-50 font-semibold' : ''
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('ro');
                      setIsLanguageMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-black hover:bg-gray-50 transition-colors ${
                      language === 'ro' ? 'bg-gray-50 font-semibold' : ''
                    }`}
                  >
                    Română
                  </button>
                </div>
              )}
            </div>
            <button className="p-2 text-gray-600 hover:text-black transition-colors rounded-full hover:bg-gray-100">
              <Search className="w-5 h-5" />
            </button>
            <Link href="/wishlist" className="p-2 text-gray-600 hover:text-black transition-colors rounded-full hover:bg-gray-100">
              <User className="w-5 h-5" />
            </Link>
            <button className="p-2 text-gray-600 hover:text-black transition-colors rounded-full hover:bg-gray-100 relative">
              <ShoppingBag className="w-5 h-5" />
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-600 hover:text-black focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg left-0 z-50">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 border-b border-gray-50 last:border-0"
              >
                {t(`common.${link.key}`)}
              </Link>
            ))}
            <div className="px-3 py-3 border-t border-gray-100 mt-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Language:</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setLanguage('en');
                      setIsMobileMenuOpen(false);
                    }}
                    className={`px-3 py-1 text-sm rounded transition-colors ${language === 'en' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('ro');
                      setIsMobileMenuOpen(false);
                    }}
                    className={`px-3 py-1 text-sm rounded transition-colors ${language === 'ro' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  >
                    RO
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Click outside to close language menu */}
      {isLanguageMenuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsLanguageMenuOpen(false)}
        />
      )}
    </nav>
  );
}