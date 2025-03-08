"use server";

import { revalidatePath } from "next/cache";

// Define types for our state
type ReviewState = {
  success: boolean;
  error: string | null;
  review: {
    id: string;
    userId: string;
    userName: string;
    rating: number;
    comment: string;
    date: string;
    replies: Array<any>;
  } | null;
};

type ReplyState = {
  success: boolean;
  error: string | null;
  reply: {
    id: string;
    userId: string;
    userName: string;
    comment: string;
    date: string;
  } | null;
  reviewId: string | null;
};

// This would connect to your database or API in a real application
export async function addToCart(
  productId: string,
  quantity: number,
  size: string
) {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // In a real app, you would add to cart in your database
    console.log(
      `Added to cart: Product ${productId}, Quantity: ${quantity}, Size: ${size}`
    );

    // Revalidate the shop page to reflect changes
    revalidatePath("/shop");

    return { success: true };
  } catch (error) {
    console.error("Failed to add to cart:", error);
    return { success: false, error: "Failed to add to cart" };
  }
}

export async function updateWishlist(
  productId: string,
  addToWishlist: boolean
) {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // In a real app, you would update the wishlist in your database
    console.log(
      `${
        addToWishlist ? "Added to" : "Removed from"
      } wishlist: Product ${productId}`
    );

    // Revalidate the shop page to reflect changes
    revalidatePath("/shop");

    return { success: true };
  } catch (error) {
    console.error("Failed to update wishlist:", error);
    return { success: false, error: "Failed to update wishlist" };
  }
}

// Properly typed server action for review submission
export async function submitReview(
  prevState: ReviewState,
  formData: FormData
): Promise<ReviewState> {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const comment = formData.get("comment") as string;
    const rating = Number(formData.get("rating"));

    // Validation
    if (!comment || comment.length < 10) {
      return {
        ...prevState,
        success: false,
        error: "Review must be at least 10 characters",
        review: null,
      };
    }

    if (!rating || rating < 1 || rating > 5) {
      return {
        ...prevState,
        success: false,
        error: "Please select a rating",
        review: null,
      };
    }

    // In a real app, this would save to a database
    console.log(`New review: Rating ${rating}, Comment: ${comment}`);

    // Revalidate the shop page to reflect changes
    revalidatePath("/shop");

    return {
      ...prevState,
      success: true,
      error: null,
      review: {
        id: Math.random().toString(),
        userId: "user-1",
        userName: "Current User",
        rating,
        comment,
        date: new Date().toISOString(),
        replies: [],
      },
    };
  } catch (error) {
    console.error("Failed to submit review:", error);
    return {
      ...prevState,
      success: false,
      error: "Failed to submit review",
      review: null,
    };
  }
}

// Properly typed server action for reply submission
export async function submitReply(
  prevState: ReplyState,
  formData: FormData
): Promise<ReplyState> {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const comment = formData.get("comment") as string;
    const reviewId = formData.get("reviewId") as string;

    // Validation
    if (!comment || comment.length < 1) {
      return {
        ...prevState,
        success: false,
        error: "Reply cannot be empty",
        reply: null,
        reviewId,
      };
    }

    // In a real app, this would save to a database
    console.log(`New reply to review ${reviewId}: ${comment}`);

    // Revalidate the shop page to reflect changes
    revalidatePath("/shop");

    return {
      ...prevState,
      success: true,
      error: null,
      reply: {
        id: Math.random().toString(),
        userId: "user-1",
        userName: "Current User",
        comment,
        date: new Date().toISOString(),
      },
      reviewId,
    };
  } catch (error) {
    console.error("Failed to submit reply:", error);
    return {
      ...prevState,
      success: false,
      error: "Failed to submit reply",
      reply: null,
      reviewId: null,
    };
  }
}
