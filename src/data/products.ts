// src/data/products.ts
import rawData from '@/../public/data/products.json';
import { parseProducts } from '@/lib/api-parser';
import { RawProduct } from '@/types';

// Parse the raw JSON data into the clean CatalogProduct format
export const products = parseProducts(rawData as RawProduct[]);

