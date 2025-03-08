"use client";

import { useState } from "react";
import { Heart } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import ProductGallery from "./product-gallery";
import ProductRating from "./product-rating";
import ProductSizeSelector from "./product-size-selector";
import ProductQuantity from "./product-quantity";
import ProductMetadata from "./product-metadata";
import ProductSocialShare from "./product-social-share";
import { Separator } from "@/components/ui/separator";

interface ProductDetailProps {
  product: {
    id: string;
    name: string;
    price: number;
    rating: number;
    reviewCount: number;
    description: string;
    sku: string;
    categories: string[];
    tags: string[];
    sizes: string[];
    images: string[];
  };
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [selectedSize, setSelectedSize] = useState("S");
  const [quantity, setQuantity] = useState(1);
  const [inWishlist, setInWishlist] = useState(false);

  const handleAddToCart = () => {
    console.log("Added to cart:", { product, quantity, selectedSize });
    // In a real app, this would call an API endpoint or dispatch an action
  };

  const handleBuyNow = () => {
    console.log("Buy now:", { product, quantity, selectedSize });
    // In a real app, this would redirect to checkout
  };

  const toggleWishlist = () => {
    setInWishlist(!inWishlist);
    console.log(
      inWishlist ? "Removed from wishlist" : "Added to wishlist",
      product
    );
    // In a real app, this would call an API endpoint or dispatch an action
  };

  return (
    <section className="ui-container mx-auto px-4 py-8 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Gallery */}
        <ProductGallery images={product.images} productName={product.name} />

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              {product.name}
            </h1>
            <div className="flex items-center justify-between mt-2">
              <p className="text-2xl font-bold text-primary">
                ${product.price.toFixed(2)}
              </p>
              <ProductRating
                rating={product.rating}
                reviewCount={product.reviewCount}
              />
            </div>
            <Separator className="bg-primary/50 mt-2" />
          </div>

          <div>
            <h2 className="font-medium mb-2">Short Description:</h2>
            <p className="text-muted-foreground">{product.description}</p>
          </div>

          <ProductSizeSelector
            sizes={product.sizes}
            selectedSize={selectedSize}
            onSelectSize={setSelectedSize}
          />

          <ProductQuantity
            quantity={quantity}
            onIncrement={() => setQuantity((prev) => prev + 1)}
            onDecrement={() => setQuantity((prev) => Math.max(1, prev - 1))}
          />

          <div className="grid grid-cols-[1fr_1fr_auto] gap-3">
            <Button
              size="lg"
              className="flex-1 bg-primary hover:bg-primary/90"
              onClick={handleBuyNow}
            >
              BUY NOW
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="flex-1 border-primary text-primary hover:bg-primary/10"
              onClick={handleAddToCart}
            >
              ADD TO CART
            </Button>
            <Button
              size="icon"
              variant="outline"
              className={cn(
                "border-primary",
                inWishlist
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground"
              )}
              onClick={toggleWishlist}
              aria-label={
                inWishlist ? "Remove from wishlist" : "Add to wishlist"
              }
            >
              <Heart className={cn("h-5 w-5", inWishlist && "fill-primary")} />
            </Button>
          </div>

          <ProductMetadata
            sku={product.sku}
            categories={product.categories}
            tags={product.tags}
          />

          <ProductSocialShare title={product.name} />
        </div>
      </div>
    </section>
  );
}
