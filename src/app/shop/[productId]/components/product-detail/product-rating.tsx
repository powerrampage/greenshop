import { Star } from "lucide-react";

interface ProductRatingProps {
  rating: number;
  reviewCount: number;
}

export default function ProductRating({
  rating,
  reviewCount,
}: ProductRatingProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1" aria-label={`Rated ${rating} out of 5 stars`}>
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating
                ? "fill-[#FFAC0C] text-[#FFAC0C]"
                : "fill-muted text-muted-foreground"
            }`}
            aria-hidden="true"
          />
        ))}
      </div>
      <span className="text-sm text-dark">
        {reviewCount} Customer {reviewCount === 1 ? "Review" : "Reviews"}
      </span>
    </div>
  );
}
