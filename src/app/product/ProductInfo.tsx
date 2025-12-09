"use client";

import { Heart, Share2 } from "lucide-react";
import { CatalogProduct } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useWishlist } from "@/context/WishlistContext";

interface ProductInfoProps {
  product: CatalogProduct;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const { addItem, removeItem, isInWishlist } = useWishlist();
  const isWishlisted = isInWishlist(product.id);

  const handleWishlistToggle = () => {
    if (isWishlisted) {
      removeItem(product.id);
    } else {
      addItem(product);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="space-y-6">
      {/* Category Badge */}
      <div>
        <Badge variant="outline">{product.category}</Badge>
      </div>

      {/* Product Name */}
      <div>
        <h1 className="text-4xl font-bold text-stone-900 mb-2">{product.name}</h1>
        <p className="text-lg text-stone-600 leading-relaxed">{product.description}</p>
      </div>

      {/* Product Details */}
      <div className="py-4 border-y border-stone-100">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-stone-600">
            <span className="font-medium">Type:</span>
            <span>{product.type}</span>
          </div>
          {product.variantName && (
            <div className="flex items-center gap-2 text-sm text-stone-600">
              <span className="font-medium">Variant:</span>
              <span>{product.variantName}</span>
            </div>
          )}
          {product.dimensions && (
            <div className="flex items-center gap-2 text-sm text-stone-600">
              <span className="font-medium">Dimensions:</span>
              <span>{product.dimensions}</span>
            </div>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <Button
          onClick={handleWishlistToggle}
          variant={isWishlisted ? "secondary" : "outline"}
          className="flex-1 gap-2"
        >
          <Heart className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`} />
          {isWishlisted ? "In Wishlist" : "Add to Wishlist"}
        </Button>
        <Button onClick={handleShare} variant="outline" className="gap-2">
          <Share2 className="w-5 h-5" />
          Share
        </Button>
      </div>

      {/* Stock Status */}
      <div className="flex items-center gap-2 text-sm">
        <div className="w-2 h-2 rounded-full bg-green-500"></div>
        <span className="text-stone-600">In Stock</span>
      </div>
    </div>
  );
}

