"use client";

import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { ImageGallery } from "../ImageGallery";
import { ProductInfo } from "../ProductInfo";
import { SpecTable } from "../SpecTable";
import { useProducts } from "@/hooks/useProducts";
import { useParams } from "next/navigation";
import { Loader2, Star } from "lucide-react";
import Link from "next/link";
import ProductCard from "@/components/catalog/ProductCard";

export default function ProductPage() {
  const params = useParams();
  const id = params.id as string;
  const { getProductById, getRelatedProducts, loading } = useProducts();
  
  if (loading) {
    return (
      <Container className="py-20">
        <div className="flex items-center justify-center min-h-[60vh]">
          <Loader2 className="w-8 h-8 animate-spin text-stone-400" />
        </div>
      </Container>
    );
  }

  const product = getProductById(id);

  if (!product) {
    return (
      <Container className="py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-stone-900 mb-4">Product Not Found</h1>
          <p className="text-stone-600 mb-8">The product you're looking for doesn't exist.</p>
          <Link
            href="/catalog"
            className="inline-flex items-center justify-center px-6 py-3 bg-stone-900 text-white font-medium rounded-full hover:bg-stone-800 transition-colors"
          >
            Back to Catalog
          </Link>
        </div>
      </Container>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, product.category, 4);

  return (
    <div className="bg-white">
      <Container className="py-12 sm:py-20">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-stone-500 mb-8">
          <Link href="/" className="hover:text-stone-900">Home</Link>
          <span>/</span>
          <Link href="/catalog" className="hover:text-stone-900">Catalog</Link>
          <span>/</span>
          <span className="text-stone-900">{product.name}</span>
        </nav>

        {/* Product Details Grid */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 mb-20">
          {/* Left Column: Image Gallery */}
          <div>
            <ImageGallery images={product.images} name={product.name} />
          </div>

          {/* Right Column: Product Information & Specs */}
          <div>
            <ProductInfo product={product} />
            
            {/* Rating Section */}
            {product.rating > 0 && (
              <div className="mt-6 flex items-center gap-4 py-4 border-t border-stone-100">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.round(product.rating)
                          ? "fill-amber-400 text-amber-400"
                          : "text-stone-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-stone-600">
                  {product.rating.toFixed(1)} ({product.reviewCount} reviews)
                </span>
              </div>
            )}
            
            <SpecTable product={product} />
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="border-t border-stone-100 pt-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-stone-900">You May Also Like</h2>
              <Link
                href="/catalog"
                className="text-sm font-medium text-stone-600 hover:text-stone-900 underline underline-offset-4"
              >
                View All
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}

