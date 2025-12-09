// src/lib/api-parser.ts
import { RawProduct, CatalogProduct } from '@/types';

// Helper to sanitize image URLs (sometimes APIs return broken links)
const sanitizeImage = (url: string) => {
  return url || '/images/placeholder-furniture.jpg'; // We'll add a placeholder later
};

export const parseProduct = (raw: RawProduct): CatalogProduct => {
  // Extract gallery images, ensuring we don't have duplicates
  const gallery = raw.images?.all
    ?.map((img) => img.url)
    .filter((url) => url !== raw.images.main); // Remove main image from gallery list to avoid dupes in carousel

  // Fallback for dimensions
  const dimensions = raw.details?.itemMeasureReferenceText || "Dimensions not available";

  return {
    id: raw.id,
    name: raw.name,
    type: raw.typeName,
    category: raw.category,
    variantName: raw.details?.designText || '',
    description: `A classic ${raw.details?.designText} ${raw.typeName} designed for modern living.`, // Generating a simple description
    dimensions: dimensions,
    images: {
      main: sanitizeImage(raw.images?.main),
      gallery: gallery && gallery.length > 0 ? gallery : [sanitizeImage(raw.images?.contextual)],
    },
    rating: raw.rating?.average || 0,
    reviewCount: raw.rating?.count || 0,
    isBestSeller: raw.details?.badge === "Best seller",
    isNew: false, // You can add logic here later
    slug: raw.id, // Using ID as slug for simplicity
  };
};

export const parseProducts = (rawData: RawProduct[]): CatalogProduct[] => {
  return rawData.map(parseProduct);
};