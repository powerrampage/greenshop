import type { Metadata } from "next";
import { WishlistItems } from "../components/wishlist-items";

export const metadata: Metadata = {
  title: "Wishlist | Your Store",
  description: "View and manage your wishlist items",
};

export default function WishlistPage() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">My Wishlist</h2>
      <WishlistItems />
    </div>
  );
}
