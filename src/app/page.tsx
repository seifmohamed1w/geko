// src/app/page.tsx
'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, Truck, Shield, Clock, ArrowLeft } from 'lucide-react';
import Hero from '@/components/layout/Hero';
import ProductCard from '@/components/catalog/ProductCard'; 
import { products } from '@/data/products'; 

const ITEMS_PER_PAGE = 10;

export default function Home() {
  const t = useTranslations();
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    document.getElementById('product-feed')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="bg-white">
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. CURATED COLLECTIONS (Artistic Section) */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest text-gray-500 uppercase">{t('common.curatedLiving')}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-black">{t('common.shopByCollection')}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Link href="/catalog" className="group relative h-[400px] overflow-hidden rounded-2xl cursor-pointer block">
            <img 
              src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2070&auto=format&fit=crop" 
              alt="Living Room" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold">{t('common.livingRoom')}</h3>
              <div className="flex items-center gap-2 mt-2 font-medium hover:underline">
                {t('common.explore')} <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* Card 2 */}
          <Link href="/catalog" className="group relative h-[400px] overflow-hidden rounded-2xl cursor-pointer block">
            <img 
              src="https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=2070&auto=format&fit=crop" 
              alt="Workspace" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold">{t('common.workspace')}</h3>
              <div className="flex items-center gap-2 mt-2 font-medium hover:underline">
                {t('common.explore')} <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* Card 3 */}
          <Link href="/catalog" className="group relative h-[400px] overflow-hidden rounded-2xl cursor-pointer block">
            <img 
              src="https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=2071&auto=format&fit=crop" 
              alt="Bedroom" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold">{t('common.bedroom')}</h3>
              <div className="flex items-center gap-2 mt-2 font-medium hover:underline">
                {t('common.explore')} <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* 3. PRODUCT FEED (Paginated) */}
      <section id="product-feed" className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-black">{t('common.latestArrivals')}</h2>
              <p className="mt-2 text-gray-600">{t('common.thoughtfullyDesigned')}</p>
            </div>
            <span className="text-sm text-gray-500">
              {t('common.showing')} {startIndex + 1}-{Math.min(startIndex + ITEMS_PER_PAGE, products.length)} {t('common.of')} {products.length}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-16 flex justify-center items-center gap-4">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded-full border border-gray-300 hover:bg-white hover:border-black disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:border-gray-300 transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              
              <div className="flex gap-2">
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handlePageChange(idx + 1)}
                    className={`w-10 h-10 rounded-full font-medium transition-all ${
                      currentPage === idx + 1 
                        ? 'bg-black text-white' 
                        : 'bg-transparent text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 rounded-full border border-gray-300 hover:bg-white hover:border-black disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:border-gray-300 transition-all"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 4. TRUST/FEATURES SECTION */}
      <section className="py-16 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="p-4 bg-gray-100 rounded-full mb-4">
                <Truck className="w-6 h-6 text-black" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{t('common.freeShipping')}</h3>
              <p className="text-gray-500 text-sm max-w-xs">{t('common.freeShippingDesc')}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-gray-100 rounded-full mb-4">
                <Shield className="w-6 h-6 text-black" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{t('common.twoYearWarranty')}</h3>
              <p className="text-gray-500 text-sm max-w-xs">{t('common.twoYearWarrantyDesc')}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-gray-100 rounded-full mb-4">
                <Clock className="w-6 h-6 text-black" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{t('common.thirtyDayReturns')}</h3>
              <p className="text-gray-500 text-sm max-w-xs">{t('common.thirtyDayReturnsDesc')}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

