"use client";

import { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({
  images,
  productName,
}: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="space-y-4">
      <div className="relative aspect-square overflow-hidden rounded-lg border bg-background">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 z-10 rounded-full bg-background/80"
          aria-label="Zoom image"
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <Search className="h-4 w-4" />
        </Button>
        <Image
          src={images[selectedImage] || "/placeholder.svg"}
          alt={`${productName} - Image ${selectedImage + 1}`}
          fill
          className={cn(
            "object-cover transition-all duration-300 scale-75",
            isZoomed && "scale-125"
          )}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>

      <div
        className="flex space-x-2 overflow-x-auto p-1 pb-2"
        style={{ scrollbarWidth: "thin" }}
      >
        {images.map((image, index) => (
          <button
            key={index}
            className={cn(
              "relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border",
              selectedImage === index && "ring-2 ring-primary"
            )}
            onClick={() => setSelectedImage(index)}
            aria-label={`View image ${index + 1}`}
            aria-current={selectedImage === index}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${productName} thumbnail ${index + 1}`}
              fill
              className="object-cover"
              sizes="80px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
