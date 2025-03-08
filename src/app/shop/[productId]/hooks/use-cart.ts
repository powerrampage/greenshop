"use client";

import { useState } from "react";
import { addToCart } from "../actions";

export function useCart() {
  const [cartItems, setCartItems] = useState<
    Array<{
      id: string;
      quantity: number;
      size: string;
    }>
  >([]);

  const addItemToCart = async (
    productId: string,
    quantity: number,
    size: string
  ) => {
    // Update local state
    setCartItems((prev) => {
      const existingItem = prev.find(
        (item) => item.id === productId && item.size === size
      );

      if (existingItem) {
        return prev.map((item) =>
          item.id === productId && item.size === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prev, { id: productId, quantity, size }];
      }
    });

    try {
      // Call server action
      await addToCart(productId, quantity, size);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return {
    cartItems,
    addItemToCart,
  };
}
