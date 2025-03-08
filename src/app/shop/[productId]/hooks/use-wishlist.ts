"use client";

import { useState } from "react";
import { updateWishlist } from "../actions";

export function useWishlist() {
  const [wishlistItems, setWishlistItems] = useState<string[]>([]);

  const toggleWishlistItem = async (productId: string) => {
    // Check if item is already in wishlist
    const isInWishlist = wishlistItems.includes(productId);

    // Update local state
    setWishlistItems((prev) =>
      isInWishlist
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );

    try {
      // Call server action
      await updateWishlist(productId, !isInWishlist);
    } catch (error) {
      console.error("Error updating wishlist:", error);
    }
  };

  const isInWishlist = (productId: string) => {
    return wishlistItems.includes(productId);
  };

  return {
    wishlistItems,
    toggleWishlistItem,
    isInWishlist,
  };
}
