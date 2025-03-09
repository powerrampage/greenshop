"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { removeFromWishlist, addToCart } from "../actions";
import { toast } from "sonner";

// Mock wishlist data
const initialWishlistItems = [
  {
    id: "1",
    name: "Barberton Daisy",
    price: 119.0,
    image: "/images/plants/1.png",
    slug: "barberton-daisy",
  },
  {
    id: "2",
    name: "Blushing Bromeliad",
    price: 139.0,
    image: "/images/plants/2.png",
    slug: "blushing-bromeliad",
  },
  {
    id: "3",
    name: "Aluminum Plant",
    price: 179.0,
    image: "/images/plants/3.png",
    slug: "aluminum-plant",
  },
];

export function WishlistItems() {
  const [wishlistItems, setWishlistItems] = useState(initialWishlistItems);
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>(
    {}
  );

  const handleRemoveFromWishlist = async (itemId: string) => {
    setLoadingStates((prev) => ({ ...prev, [`remove-${itemId}`]: true }));
    try {
      await removeFromWishlist(itemId);
      setWishlistItems((prev) => prev.filter((item) => item.id !== itemId));
      toast.success("Item removed", {
        description: "The item has been removed from your wishlist.",
      });
    } catch (error) {
      toast.error("Something went wrong", {
        description: "The item could not be removed. Please try again.",
      });
    } finally {
      setLoadingStates((prev) => ({ ...prev, [`remove-${itemId}`]: false }));
    }
  };

  const handleAddToCart = async (itemId: string) => {
    setLoadingStates((prev) => ({ ...prev, [`cart-${itemId}`]: true }));
    try {
      await addToCart(itemId);
      toast.success("Item added to cart", {
        description: "The item has been added to your cart.",
      });
    } catch (error) {
      toast.error("Something went wrong", {
        description: "The item could not be added to cart. Please try again.",
      });
    } finally {
      setLoadingStates((prev) => ({ ...prev, [`cart-${itemId}`]: false }));
    }
  };

  if (wishlistItems.length === 0) {
    return (
      <Card>
        <CardContent className="pt-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-muted p-6">
              <Heart
                className="h-12 w-12 text-muted-foreground"
                aria-hidden="true"
              />
            </div>
          </div>
          <h3 className="text-lg font-medium mb-2">Your wishlist is empty</h3>
          <p className="text-muted-foreground mb-4">
            Add items to your wishlist to keep track of products you&apos;re
            interested in.
          </p>
          <Button asChild>
            <Link href="/shop">Continue Shopping</Link>
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {wishlistItems.map((item) => (
        <Card key={item.id} className="overflow-hidden">
          <div className="relative aspect-square">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.name}
              fill
              className="object-cover transition-transform hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <Button
              variant="destructive"
              size="icon"
              className="absolute top-2 right-2 h-8 w-8 rounded-full"
              onClick={() => handleRemoveFromWishlist(item.id)}
              disabled={loadingStates[`remove-${item.id}`]}
              aria-label={`Remove ${item.name} from wishlist`}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
          <CardContent className="p-4">
            <Link
              href={`/shop/${item.slug}`}
              className="font-medium hover:underline"
            >
              {item.name}
            </Link>
            <div className="flex items-center justify-between mt-2">
              <p className="text-lg font-bold text-primary">
                ${item.price.toFixed(2)}
              </p>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1"
                onClick={() => handleAddToCart(item.id)}
                disabled={loadingStates[`cart-${item.id}`]}
              >
                <ShoppingCart className="h-4 w-4" />
                Add to Cart
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
