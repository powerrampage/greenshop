import type { Metadata } from "next";
import CartItems from "./components/cart-items";
import CartTotals from "./components/cart-totals";
import EmptyCart from "./components/empty-cart";
import { InterestedProducts } from "@/components/shared";

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "View and manage your shopping cart items",
};

export default function CartPage() {
  const cartItems = [
    {
      id: "1",
      name: "Barberton Daisy",
      sku: "1995751877966",
      price: 119.0,
      quantity: 2,
      image: "/images/plants/1.png",
    },
    {
      id: "2",
      name: "Blushing Bromeliad",
      sku: "1995751875706",
      price: 139.0,
      quantity: 6,
      image: "/images/plants/2.png",
    },
    {
      id: "3",
      name: "Aluminum Plant",
      sku: "1995751877786",
      price: 179.0,
      quantity: 9,
      image: "/images/plants/3.png",
    },
  ];

  const interestedProducts = [
    {
      id: "1",
      name: "Beach Spider Lily",
      price: 129.0,
      image: "/images/plants/1.png",
      slug: "beach-spider-lily",
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
    {
      id: "4",
      name: "Bird's Nest Fern",
      price: 99.0,
      image: "/images/plants/4.png",
      slug: "birds-nest-fern",
    },
    {
      id: "5",
      name: "Chinese Evergreen",
      price: 39.0,
      image: "/images/plants/5.png",
      slug: "chinese-evergreen",
    },
  ];

  const cartTotals = {
    subtotal: 2683.0,
    shipping: 16.0,
    discount: 0,
    total: 2699.0,
  };

  const isEmpty = cartItems.length === 0;

  return (
    <main className="py-8">
      <div className="ui-container mb-20">
        <h1 className="text-2xl font-bold tracking-tight mb-8">
          Shopping Cart
        </h1>

        {isEmpty ? (
          <EmptyCart />
        ) : (
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <CartItems items={cartItems} />
            </div>
            <div>
              <CartTotals totals={cartTotals} />
            </div>
          </div>
        )}
      </div>

      <div className="mb-20 max-md:mb-5">
        <InterestedProducts products={interestedProducts} />
      </div>
    </main>
  );
}
