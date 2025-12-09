// src/context/WishlistContext.tsx
"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { CatalogProduct } from '@/types';

interface WishlistContextType {
  items: CatalogProduct[];
  addItem: (product: CatalogProduct) => void;
  removeItem: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CatalogProduct[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load from LocalStorage on mount (Client-side only)
  useEffect(() => {
    const saved = localStorage.getItem('geko_wishlist');
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse wishlist", e);
      }
    }
    setIsInitialized(true);
  }, []);

  // Save to LocalStorage whenever items change
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('geko_wishlist', JSON.stringify(items));
    }
  }, [items, isInitialized]);

  const addItem = (product: CatalogProduct) => {
    setItems((prev) => {
      if (prev.find((item) => item.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  const removeItem = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const isInWishlist = (productId: string) => {
    return items.some((item) => item.id === productId);
  };

  return (
    <WishlistContext.Provider value={{ items, addItem, removeItem, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

// Custom hook to use the context easily
export function useWishlist() {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}