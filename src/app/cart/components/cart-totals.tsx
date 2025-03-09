"use client";

import { useState, useTransition } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { applyCoupon } from "../actions";

interface CartTotalsProps {
  totals: {
    subtotal: number;
    shipping: number;
    discount: number;
    total: number;
  };
}

export default function CartTotals({ totals }: CartTotalsProps) {
  const [couponCode, setCouponCode] = useState("");
  const [isPending, startTransition] = useTransition();
  const [couponError, setCouponError] = useState<string | null>(null);

  const handleApplyCoupon = () => {
    if (!couponCode) {
      setCouponError("Please enter a coupon code");
      return;
    }

    setCouponError(null);
    startTransition(() => {
      applyCoupon(couponCode);
    });
  };

  return (
    <form action="/checkout">
      <Card>
        <CardHeader>
          <CardTitle>Cart Totals</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Coupon */}
          <div className="space-y-2">
            <label htmlFor="coupon-code" className="text-sm font-medium">
              Coupon Apply
            </label>
            <div className="flex gap-2">
              <Input
                id="coupon-code"
                type="text"
                placeholder="Enter coupon code here..."
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                aria-describedby={couponError ? "coupon-error" : undefined}
                aria-invalid={couponError ? "true" : "false"}
              />
              <Button
                variant="secondary"
                onClick={handleApplyCoupon}
                disabled={isPending}
                aria-label="Apply coupon code"
              >
                Apply
              </Button>
            </div>
            {couponError && (
              <p id="coupon-error" className="text-sm text-destructive">
                {couponError}
              </p>
            )}
          </div>

          {/* Totals */}
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span id="subtotal-label">Subtotal</span>
              <span
                aria-labelledby="subtotal-label"
                className="text-base font-medium"
              >
                ${totals.subtotal.toFixed(2)}
              </span>
            </div>
            {totals.discount > 0 && (
              <div className="flex justify-between text-sm">
                <span id="discount-label">Coupon Discount</span>
                <span aria-labelledby="discount-label" className="text-primary">
                  -${totals.discount.toFixed(2)}
                </span>
              </div>
            )}
            <div className="flex justify-between text-sm">
              <span id="shipping-label">Shipping</span>
              <div className="text-right">
                <span
                  aria-labelledby="shipping-label"
                  className="text-base font-medium"
                >
                  ${totals.shipping.toFixed(2)}
                </span>
                <Link
                  href="/shipping"
                  className="block text-xs text-primary hover:underline"
                  aria-label="View shipping charge details"
                >
                  View shipping charge
                </Link>
              </div>
            </div>
            <Separator aria-hidden="true" />
            <div className="flex justify-between font-medium">
              <span id="total-label">Total</span>
              <span
                aria-labelledby="total-label"
                className="text-lg text-primary"
              >
                ${totals.total.toFixed(2)}
              </span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-3">
          <Button className="w-full" type="submit">
            Proceed To Checkout
          </Button>
          <Link
            href="/shop"
            className="text-center text-sm text-primary hover:underline"
          >
            Continue Shopping
          </Link>
        </CardFooter>
      </Card>
    </form>
  );
}
