"use client";

import { useState } from "react";
import { useTranslations } from 'next-intl';
import { Container } from "@/components/layout/Container";
import ProductCard from "@/components/catalog/ProductCard";
import { useProducts } from "@/hooks/useProducts";
import { Filter } from "lucide-react";

export default function CatalogPage() {
  const t = useTranslations();
  const { categories, loading } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Header Section */}
      <section className="bg-white border-b border-stone-200">
        <Container className="py-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
              {t('catalog.title')}
            </h1>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              {t('catalog.description')}
            </p>
          </div>

          {/* Category Filter */} 
          <div className="flex items-center justify-center gap-4 flex-wrap">  
            <div className="flex items-center gap-2 text-sm text-stone-500">
              <Filter className="w-4 h-4" />
              <span className="font-medium">{t('common.filterBy')}</span>
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setSelectedCategory("All")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === "All"
                    ? "bg-stone-900 text-white"
                    : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                }`}
              >
                {t('common.allProducts')}
              </button>
              
              {!loading && categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-stone-900 text-white"
                      : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <Container>
          <FilteredProductGrid selectedCategory={selectedCategory} />
        </Container>
      </section>
    </div>
  );
}

// Separate component to handle filtering
function FilteredProductGrid({ selectedCategory }: { selectedCategory: string }) {
  const t = useTranslations();
  const { products, loading, error } = useProducts();

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter((p) => p.category === selectedCategory);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="animate-pulse space-y-3">
            <div className="aspect-square rounded-md bg-stone-200" />
            <div className="h-4 w-2/3 bg-stone-200 rounded" />
            <div className="h-3 w-1/3 bg-stone-200 rounded" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <p className="text-red-500 mb-4">{t('common.failedToLoad')}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-stone-900 text-white rounded-full hover:bg-stone-800 transition-colors"
        >
          {t('common.tryAgain')}
        </button>
      </div>
    );
  }

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-stone-500 text-lg">{t('common.noProducts')}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6 flex justify-between items-center">
        <p className="text-sm text-stone-500">
          {t('common.showing')} <span className="font-semibold text-stone-900">{filteredProducts.length}</span> {filteredProducts.length === 1 ? t('common.product') : t('common.products')}
          {selectedCategory !== "All" && (
            <span> {t('common.in')} <span className="font-semibold text-stone-900">{selectedCategory}</span></span>
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
        {filteredProducts.map((product, index) => (
          <ProductCard key={`${product.id}-${index}`} product={product} />
        ))}
      </div>
    </div>
  );
}

