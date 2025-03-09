import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface CartItem {
  id: string;
  name: string;
  sku: string;
  price: number;
  quantity: number;
  image: string;
}

interface Cart {
  items: CartItem[];
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
}

interface OrderSummaryProps {
  cart: Cart;
}

export default function OrderSummary({ cart }: OrderSummaryProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Order</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Products */}
        <div className="space-y-4">
          {cart.items.map((item) => (
            <div key={item.id} className="flex gap-4">
              <div className="relative h-16 w-16 rounded overflow-hidden flex-shrink-0">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt=""
                  fill
                  className="object-cover"
                  aria-hidden="true"
                />
              </div>
              <div className="flex-1 space-y-1">
                <h3 className="font-medium leading-none">{item.name}</h3>
                <p className="text-sm text-muted-foreground">SKU: {item.sku}</p>
                <div className="flex justify-between text-sm">
                  <span>x {item.quantity}</span>
                  <span className="font-medium text-primary">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Separator />

        {/* Coupon */}
        <div className="text-sm">
          <p>
            Have a coupon code?{" "}
            <Link href="#" className="text-primary hover:underline">
              Click here
            </Link>
          </p>
        </div>

        {/* Order Total */}
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${cart.subtotal.toFixed(2)}</span>
          </div>
          {cart.discount > 0 && (
            <div className="flex justify-between text-primary">
              <span>Coupon Discount</span>
              <span>-${cart.discount.toFixed(2)}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span>Shipping</span>
            <div className="text-right">
              <span>${cart.shipping.toFixed(2)}</span>
              <Link
                href="/shipping"
                className="block text-xs text-primary hover:underline"
              >
                View shipping charge
              </Link>
            </div>
          </div>
          <Separator />
          <div className="flex justify-between font-medium">
            <span>Total</span>
            <span className="text-lg text-primary">
              ${cart.total.toFixed(2)}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
