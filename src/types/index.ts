// src/types/index.ts

export interface RawProductPrice {
  currency: string;
  currentPrice: number;
  formattedPrice: string;
}

export interface RawProductImage {
  type: string;
  url: string;
}

export interface RawVariant {
  id: string;
  url: string;
  designText: string;
  imageUrl: string;
  price: RawProductPrice;
}

// 1. The shape of your raw JSON data (for internal parsing only)
export interface RawProduct {
  id: string;
  name: string;
  typeName: string;
  url: string;
  price: RawProductPrice; // We fetch it, but never show it
  rating: {
    average: number;
    count: number;
  };
  images: {
    main: string;
    contextual: string;
    all: RawProductImage[];
  };
  details: {
    itemMeasureReferenceText: string;
    designText: string;
    isOnlineSellable: boolean;
    badge: string | null;
  };
  categoryPath: Array<{ name: string; key: string }>;
  variants: RawVariant[];
  category: string; // "Dressers", "Beds", etc.
}

// 2. The Clean "Catalog" shape (This is what the UI sees)
export interface CatalogProduct {
  id: string;
  name: string; // e.g. "HEMNES"
  type: string; // e.g. "8-drawer dresser"
  category: string; // e.g. "Storage"
  variantName: string; // e.g. "Black-brown"
  description: string;
  dimensions: string; // e.g. "63x37 3/4 ""
  images: {
    main: string;
    gallery: string[];
  };
  rating: number; // 0-5
  reviewCount: number;
  isNew: boolean; // Derived logic (e.g. if created recently, or random for now)
  isBestSeller: boolean;
  slug: string; // URL-friendly ID
}