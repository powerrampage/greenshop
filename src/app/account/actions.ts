"use server";

import { cookies } from "next/headers";
import { verify } from "jsonwebtoken";

// In a real app, you would use a database
const users = [
  {
    id: "1",
    name: "Demo User",
    email: "user@example.com",
    password: "password123", // In a real app, this would be hashed
    image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Aidan",
  },
];

export async function getCurrentUser() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth-token");

    if (!token) {
      return null;
    }

    // Verify token
    const decoded = verify(
      token.value,
      process.env.NEXTAUTH_SECRET || "your-secret-key"
    ) as {
      id: string;
      email: string;
      name: string;
    };

    // Find user (in a real app, you would query your database)
    const user = users.find((user) => user.id === decoded.id);

    if (!user) {
      return null;
    }

    // Return user info (without password)
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      image: user.image,
    };
  } catch (error) {
    console.error("Auth error:", error);
    return null;
  }
}

export async function updateProfile(data: any) {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // In a real app, this would update the user profile in your database
    console.log("Updating profile:", data);

    return { success: true };
  } catch (error) {
    console.error("Failed to update profile:", error);
    return { success: false, error: "Failed to update profile" };
  }
}

export async function saveAddress(data: any) {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // In a real app, this would save the address in your database
    console.log(`Saving ${data.type} address:`, data);

    return { success: true };
  } catch (error) {
    console.error("Failed to save address:", error);
    return { success: false, error: "Failed to save address" };
  }
}

export async function removeFromWishlist(itemId: string) {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // In a real app, this would remove the item from the wishlist in your database
    console.log("Removing item from wishlist:", itemId);

    return { success: true };
  } catch (error) {
    console.error("Failed to remove from wishlist:", error);
    return { success: false, error: "Failed to remove from wishlist" };
  }
}

export async function addToCart(itemId: string) {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // In a real app, this would add the item to the cart in your database
    console.log("Adding item to cart:", itemId);

    return { success: true };
  } catch (error) {
    console.error("Failed to add to cart:", error);
    return { success: false, error: "Failed to add to cart" };
  }
}
