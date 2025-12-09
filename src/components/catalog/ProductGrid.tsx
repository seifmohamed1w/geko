// src/components/catalog/ProductGrid.tsx
"use client";

import { useProducts } from "@/hooks/useProducts";
import { ProductCard } from "@/components/catalog/ProductCard";
import { Button } from "@/components/ui/Button";

export function ProductGrid() {
  const { products, loading, error } = useProducts();

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
        {/* Simple Loading Skeleton */}
        {[...Array(8)].map((_, i) => (
          <div key={i} className="animate-pulse space-y-3">
            <div className="aspect-square rounded-md bg-stone-100" />
            <div className="h-4 w-2/3 bg-stone-100 rounded" />
            <div className="h-3 w-1/3 bg-stone-100 rounded" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <p className="text-red-500">Failed to load catalog.</p>
        <Button onClick={() => window.location.reload()} variant="outline" className="mt-4">
          Try Again
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}