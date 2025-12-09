// src/components/layout/Hero.tsx
'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const t = useTranslations();
  
  return (
    <div className="relative bg-gray-900 h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
          alt="Modern Minimalist Furniture"
          className="w-full h-full object-cover opacity-60"
        />
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
            {t('hero.title')} <br />
            <span className="text-gray-300">{t('hero.subtitle')}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-lg">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/catalog" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-200"
            >
              {t('hero.shopCollection')}
            </Link>
            <Link 
              href="/about" 
              className="inline-flex items-center justify-center px-8 py-4 border border-white/30 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-200"
            >
              {t('hero.ourPhilosophy')} <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}