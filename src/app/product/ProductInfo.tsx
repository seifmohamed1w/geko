"use client";

import { useState } from "react";
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
  const [selectedVariant, setSelectedVariant] = useState(0);
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

      {/* Price */}
      <div className="py-4 border-y border-stone-100">
        <div className="flex items-baseline gap-3">
          <span className="text-3xl font-bold text-stone-900">{product.price}</span>
          {product.originalPrice && product.originalPrice > product.price && (
            <>
              <span className="text-xl text-stone-400 line-through">
                {product.originalPrice}
              </span>
              <Badge variant="accent">
                {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
              </Badge>
            </>
          )}
        </div>
      </div>

      {/* Variants */}
      {product.variants && product.variants.length > 0 && (
        <div>
          <label className="block text-sm font-semibold text-stone-900 mb-3">
            Select Variant
          </label>
          <div className="grid grid-cols-2 gap-3">
            {product.variants.map((variant, index) => (
              <button
                key={index}
                onClick={() => setSelectedVariant(index)}
                className={`p-4 rounded-lg border-2 transition-all text-left ${
                  selectedVariant === index
                    ? "border-stone-900 bg-stone-50"
                    : "border-stone-200 hover:border-stone-400"
                }`}
              >
                <div className="font-medium text-stone-900">{variant.name}</div>
                {variant.price && (
                  <div className="text-sm text-stone-600 mt-1">{variant.price}</div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-3">
        <Button
          onClick={handleWishlistToggle}
          variant={isWishlisted ? "default" : "outline"}
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

