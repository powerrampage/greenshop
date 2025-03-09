"use client";

import type React from "react";

import { useState, useRef, useOptimistic, useActionState } from "react";
import { Star, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useFormStatus } from "react-dom";

// Server actions (would normally be in a separate file)
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

// Helper function to format dates using native JS
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

async function submitReview(
  prevState: ReviewState,
  formData: FormData
): Promise<ReviewState> {
  // Simulate server delay
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
  const newReview = {
    id: Math.random().toString(),
    userId: "user-1", // In a real app, this would come from auth
    userName: "Current User", // In a real app, this would come from auth
    rating,
    comment,
    date: new Date().toISOString(),
    replies: [],
  };

  return {
    ...prevState,
    success: true,
    error: null,
    review: newReview,
  };
}

async function submitReply(
  prevState: ReplyState,
  formData: FormData
): Promise<ReplyState> {
  // Simulate server delay
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
  const newReply = {
    id: Math.random().toString(),
    userId: "user-1", // In a real app, this would come from auth
    userName: "Current User", // In a real app, this would come from auth
    comment,
    date: new Date().toISOString(),
  };

  return {
    ...prevState,
    success: true,
    error: null,
    reply: newReply,
    reviewId,
  };
}

// Form submission button with loading state
function SubmitButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Submitting..." : children}
    </Button>
  );
}

interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  replies?: Array<{
    id: string;
    userId: string;
    userName: string;
    comment: string;
    date: string;
  }>;
}

interface ProductReviewsProps {
  reviews: Review[];
}

export default function ProductReviews({
  reviews: initialReviews,
}: ProductReviewsProps) {
  const [reviews, setReviews] = useState(initialReviews);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [rating, setRating] = useState(5);
  const reviewFormRef = useRef<HTMLFormElement>(null);
  const replyFormRef = useRef<HTMLFormElement>(null);

  // Optimistic updates
  const [optimisticReviews, addOptimisticReview] = useOptimistic(
    reviews,
    (state, newReview: Review) => [newReview, ...state]
  );

  // Form state for review submission - using useActionState instead of useFormState
  const [reviewState, reviewAction] = useActionState<ReviewState, FormData>(
    submitReview,
    {
      success: false,
      error: null,
      review: null,
    }
  );

  // Form state for reply submission - using useActionState instead of useFormState
  const [replyState, replyAction] = useActionState<ReplyState, FormData>(
    submitReply,
    {
      success: false,
      error: null,
      reply: null,
      reviewId: null,
    }
  );

  // Handle successful review submission
  if (reviewState.success && reviewState.review) {
    // Add to state and reset form
    setReviews((prev) => [reviewState.review!, ...prev]);
    setRating(5);
    reviewFormRef.current?.reset();
    // Reset form state (this would be handled differently in a real app)
    reviewState.success = false;
    reviewState.review = null;
  }

  // Handle successful reply submission
  if (replyState.success && replyState.reply) {
    // Add reply to the correct review
    setReviews((prev) =>
      prev.map((review) => {
        if (review.id === replyState.reviewId) {
          return {
            ...review,
            replies: [...(review.replies || []), replyState.reply!],
          };
        }
        return review;
      })
    );

    // Reset reply form
    setReplyingTo(null);
    replyFormRef.current?.reset();

    // Reset form state (this would be handled differently in a real app)
    replyState.success = false;
    replyState.reply = null;
    replyState.reviewId = null;
  }

  return (
    <div className="space-y-8">
      {/* Review Form */}
      <form ref={reviewFormRef} action={reviewAction} className="space-y-6">
        <div>
          <Label htmlFor="rating">Rating</Label>
          <input type="hidden" name="rating" value={rating} />
          <div className="flex gap-1 mt-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className="text-primary"
              >
                <Star
                  className={`h-6 w-6 ${
                    star <= rating ? "fill-primary" : "fill-muted"
                  }`}
                />
                <span className="sr-only">Rate {star} stars</span>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="comment">Your Review</Label>
          <Textarea
            id="comment"
            name="comment"
            placeholder="Write your review here..."
            className="min-h-[100px]"
            required
            minLength={10}
          />
          {reviewState.error && (
            <p className="text-sm font-medium text-destructive">
              {reviewState.error}
            </p>
          )}
        </div>

        <SubmitButton>Submit Review</SubmitButton>
      </form>

      <Separator className="my-8" />

      {/* Reviews List */}
      <div className="space-y-8">
        {optimisticReviews.filter(Boolean).map((review) => (
          <div key={review.id} className="space-y-4">
            <div className="flex items-start gap-4 max-sm:gap-2">
              <Avatar className="max-sm:h-8 max-sm:w-8">
                <AvatarImage
                  src={`/placeholder-user.jpg`}
                  alt={review.userName}
                />
                <AvatarFallback>{review.userName.slice(0, 2)}</AvatarFallback>
              </Avatar>

              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{review.userName}</p>
                    <div className="flex gap-1 text-primary">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            review.rating && i < review.rating
                              ? "fill-primary"
                              : "fill-muted"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <time className="text-sm text-muted-foreground">
                    {formatDate(review.date)}
                  </time>
                </div>

                <p className="text-muted-foreground max-sm:text-sm">
                  {review.comment}
                </p>

                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2"
                  onClick={() => setReplyingTo(review.id)}
                >
                  <MessageCircle className="h-4 w-4" />
                  Reply
                </Button>
              </div>
            </div>

            {/* Reply Form */}
            {replyingTo === review.id && (
              <div className="ml-12">
                <form
                  ref={replyFormRef}
                  action={replyAction}
                  className="space-y-4"
                >
                  <input type="hidden" name="reviewId" value={review.id} />

                  <div className="space-y-2">
                    <Textarea
                      name="comment"
                      placeholder="Write your reply..."
                      className="min-h-[80px]"
                      required
                    />
                    {replyState.error && replyState.reviewId === review.id && (
                      <p className="text-sm font-medium text-destructive">
                        {replyState.error}
                      </p>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <SubmitButton>Post Reply</SubmitButton>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => setReplyingTo(null)}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </div>
            )}

            {/* Replies */}
            {review.replies && review.replies.length > 0 && (
              <div className="ml-12 space-y-4">
                {review.replies.map((reply) => (
                  <div
                    key={reply.id}
                    className="flex items-start gap-4 max-sm:gap-2"
                  >
                    <Avatar className="max-sm:h-8 max-sm:w-8">
                      <AvatarImage
                        src={`/placeholder-user.jpg`}
                        alt={reply.userName}
                      />
                      <AvatarFallback>
                        {reply.userName.slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">{reply.userName}</p>
                        <time className="text-sm text-muted-foreground">
                          {formatDate(reply.date)}
                        </time>
                      </div>
                      <p className="text-muted-foreground max-sm:text-sm">
                        {reply.comment}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <Separator className="my-6" />
          </div>
        ))}
      </div>
    </div>
  );
}
