import type { Metadata } from "next";
import { redirect } from "next/navigation";
import CheckoutForm from "./components/checkout-form";
import OrderSummary from "./components/order-summary";

export const metadata: Metadata = {
  title: "Checkout - Secure Payment | Your Store",
  description:
    "Complete your purchase securely. We use industry-standard encryption to protect your personal information.",
  robots: {
    index: false, // Don't index checkout pages
    follow: false,
  },
};

// This would typically fetch data from your cart/session
export default async function CheckoutPage() {
  // In a real app, redirect if cart is empty
  const cart = await getCart();
  if (!cart?.items?.length) {
    redirect("/cart");
  }

  return (
    <main className="py-8 mb-32 max-md:mb-5">
      <div className="ui-container">
        <h1 className="sr-only">Checkout</h1>

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <CheckoutForm />
          </div>
          <div>
            <OrderSummary cart={cart} />
          </div>
        </div>
      </div>
    </main>
  );
}

// Mock function to get cart data
async function getCart() {
  return {
    items: [
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
    ],
    subtotal: 2683.0,
    shipping: 16.0,
    discount: 0,
    total: 2699.0,
  };
}
