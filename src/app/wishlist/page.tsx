"use client";

import Link from "next/link";
import { HeartOff } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ProductCard } from "@/components/catalog/ProductCard";
import { useWishlist } from "@/context/WishlistContext";
import { Button } from "@/components/ui/Button";

export default function WishlistPage() {
  const { items } = useWishlist();

  // 1. Empty State
  if (items.length === 0) {
    return (
      <Container className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <div className="mb-6 rounded-full bg-stone-100 p-6">
          <HeartOff className="h-10 w-10 text-stone-400" />
        </div>
        <h2 className="text-2xl font-bold text-stone-900">Your wishlist is empty</h2>
        <p className="mt-2 max-w-md text-stone-500">
          Browse our catalog to find design inspiration.
        </p>
        <Link href="/" className="mt-8">
          <Button>Start Browsing</Button>
        </Link>
      </Container>
    );
  }

  // 2. Grid State (with items)
  return (
    <Container className="py-12 sm:py-20">
      <div className="mb-10 flex items-end justify-between border-b border-stone-100 pb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-stone-900">
            My Wishlist
          </h1>
          <p className="mt-2 text-stone-500">
            {items.length} {items.length === 1 ? 'item' : 'items'} saved for later
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Container>
  );
}

