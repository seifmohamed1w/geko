"use client";

import { useState, useMemo } from "react";
import Image from "next/image";

interface ImageGalleryProps {
  images: string[] | { main: string; gallery: string[] };
  name: string;
}

export function ImageGallery({ images, name }: ImageGalleryProps) {
  // Normalize images to array format
  const imageArray = useMemo(() => {
    if (Array.isArray(images)) {
      return images;
    }
    // If it's an object with main and gallery
    if (images && typeof images === 'object' && 'main' in images) {
      const imageObj = images as { main: string; gallery: string[] };
      return [imageObj.main, ...(imageObj.gallery || [])].filter(Boolean);
    }
    return [];
  }, [images]);

  const [selectedImage, setSelectedImage] = useState(0);

  if (!imageArray || imageArray.length === 0) {
    return (
      <div className="aspect-square relative overflow-hidden rounded-2xl bg-stone-100 flex items-center justify-center">
        <span className="text-stone-400">No image available</span>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="aspect-square relative overflow-hidden rounded-2xl bg-stone-100">
        <Image
          src={imageArray[selectedImage]}
          alt={`${name} - Image ${selectedImage + 1}`}
          fill
          className="object-cover"
          priority={selectedImage === 0}
          unoptimized
          onError={(e) => {
            console.error('Image failed to load:', imageArray[selectedImage]);
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>

      {/* Thumbnail Gallery */}
      {imageArray.length > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {imageArray.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`aspect-square relative overflow-hidden rounded-lg transition-all ${
                selectedImage === index
                  ? "ring-2 ring-stone-900"
                  : "ring-1 ring-stone-200 hover:ring-stone-400"
              }`}
            >
              <Image
                src={image}
                alt={`${name} thumbnail ${index + 1}`}
                fill
                className="object-cover"
                unoptimized
                onError={(e) => {
                  console.error('Thumbnail failed to load:', image);
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

