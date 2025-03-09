import Link from "next/link";
import { ShoppingBag } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function EmptyCart() {
  return (
    <Card className="mx-auto max-w-md">
      <CardContent className="pt-6 text-center">
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-muted p-6">
            <ShoppingBag
              className="h-12 w-12 text-muted-foreground"
              aria-hidden="true"
            />
          </div>
        </div>
        <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
        <p className="text-muted-foreground">
          Looks like you haven&apos;t added any items to your cart yet.
        </p>
      </CardContent>
      <CardFooter className="flex justify-center pb-6">
        <Button asChild>
          <Link href="/shop">Shop Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
