// src/hooks/useProducts.ts
"use client";

import { useState, useEffect, useMemo } from 'react';
import { CatalogProduct, RawProduct } from '@/types';
import { parseProducts } from '@/lib/api-parser';

export function useProducts() {
  const [products, setProducts] = useState<CatalogProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        // Fetching from the public folder directly
        const response = await fetch('/data/products.json');
        if (!response.ok) throw new Error('Failed to load products');
        
        const rawData: RawProduct[] = await response.json();
        const parsedData = parseProducts(rawData);
        
        setProducts(parsedData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  // Derived state: Get unique categories for filters
  const categories = useMemo(() => {
    const cats = new Set(products.map(p => p.category));
    return Array.from(cats).sort();
  }, [products]);

  // Helper to get a single product by ID
  const getProductById = (id: string) => {
    return products.find(p => p.id === id);
  };

  // Helper to get related products (simple implementation: same category)
  const getRelatedProducts = (currentProductId: string, category: string, limit = 4) => {
    return products
      .filter(p => p.category === category && p.id !== currentProductId)
      .slice(0, limit);
  };

  return {
    products,
    categories,
    loading,
    error,
    getProductById,
    getRelatedProducts
  };
}