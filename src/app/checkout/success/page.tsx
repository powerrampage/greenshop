import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Order Confirmed | Your Store",
  description:
    "Thank you for your order. Your order has been confirmed and will be shipped soon.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function OrderSuccessPage({
  searchParams,
}: {
  searchParams: { orderId: string };
}) {
  const { orderId } = searchParams;

  return (
    <main className="py-8">
      <div className="ui-container">
        <Card className="mx-auto max-w-lg">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle
                className="h-12 w-12 text-primary"
                aria-hidden="true"
              />
            </div>
            <CardTitle className="text-2xl">Order Confirmed!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-center">
            <p className="text-muted-foreground">
              Thank you for your order. We&apos;ve received your order and will
              begin processing it right away.
            </p>
            {orderId && (
              <p className="font-medium">
                Order number: <span className="text-primary">{orderId}</span>
              </p>
            )}
            <p className="text-sm text-muted-foreground">
              We&apos;ll send you a confirmation email with your order details
              and tracking information once your package ships.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center gap-4">
            <Button asChild variant="outline">
              <Link href="/orders">View Orders</Link>
            </Button>
            <Button asChild>
              <Link href="/shop">Continue Shopping</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
