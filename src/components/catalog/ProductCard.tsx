// src/components/catalog/ProductCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react"; // Make sure you installed lucide-react
import { CatalogProduct } from "@/types";
import { useWishlist } from "@/context/WishlistContext";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: CatalogProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const { isInWishlist, addItem, removeItem } = useWishlist();
  const isSaved = isInWishlist(product.id);

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating to PDP
    if (isSaved) {
      removeItem(product.id);
    } else {
      addItem(product);
    }
  };

  return (
    <Link href={`/product/${product.id}`} className="group block h-full">
      <div className="relative h-full flex flex-col space-y-3">
        
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden rounded-md bg-stone-100">
          {/* Badge Overlay */}
          {product.isBestSeller && (
            <div className="absolute left-2 top-2 z-10">
              <Badge variant="accent">Best Seller</Badge>
            </div>
          )}

          {/* Wishlist Button Overlay */}
          <button
            onClick={toggleWishlist}
            className="absolute right-2 top-2 z-10 rounded-full bg-white/80 p-2 text-stone-500 backdrop-blur-sm transition-all hover:bg-white hover:text-red-500 hover:shadow-sm"
          >
            <Heart
              className={cn("h-5 w-5", isSaved && "fill-red-500 text-red-500")}
            />
          </button>

          {/* Main Image with Zoom Effect */}
          <Image
            src={product.images.main}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col space-y-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-lg text-stone-900 leading-tight group-hover:underline decoration-stone-400 underline-offset-4">
                {product.name}
              </h3>
              <p className="text-sm text-stone-500">{product.type}</p>
            </div>
          </div>
          
          {/* Specs / Category */}
          <div className="flex items-center gap-2 text-xs text-stone-400 pt-1">
            <span>{product.category}</span>
            <span>•</span>
            <span>{product.dimensions}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default ProductCard;