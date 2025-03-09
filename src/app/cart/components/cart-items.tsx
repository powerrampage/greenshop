"use client";

import Image from "next/image";
import { Trash2, Minus, Plus } from "lucide-react";
import { useTransition } from "react";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { updateCartItem, removeCartItem } from "../actions";
import { VisuallyHidden } from "@/components/base";

interface CartItem {
  id: string;
  name: string;
  sku: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartItemsProps {
  items: CartItem[];
}

export default function CartItems({ items }: CartItemsProps) {
  const [isPending, startTransition] = useTransition();

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    if (newQuantity < 1) return;

    startTransition(() => {
      updateCartItem(itemId, newQuantity);
    });
  };

  const handleRemoveItem = (itemId: string, productName: string) => {
    startTransition(() => {
      removeCartItem(itemId);
    });
  };

  return (
    <div className="rounded-lg border">
      <Table aria-label="Shopping cart items">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50%]">Products</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-center">Quantity</TableHead>
            <TableHead className="text-right">Total</TableHead>
            <TableHead className="w-[50px]">
              <VisuallyHidden>Actions</VisuallyHidden>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <div className="flex gap-4">
                  <div className="relative h-20 w-20 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt=""
                      fill
                      className="object-cover"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium" id={`product-${item.id}-name`}>
                      {item.name}
                    </h3>
                    <p
                      className="text-sm text-muted-foreground"
                      id={`product-${item.id}-sku`}
                    >
                      SKU: {item.sku}
                    </p>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <span
                  id={`product-${item.id}-price`}
                  className="font-medium text-tertiary"
                >
                  ${item.price.toFixed(2)}
                </span>
              </TableCell>
              <TableCell>
                <div
                  className="flex justify-center items-center gap-2"
                  role="group"
                  aria-labelledby={`quantity-label-${item.id}`}
                >
                  <VisuallyHidden id={`quantity-label-${item.id}`}>
                    Quantity for {item.name}
                  </VisuallyHidden>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-full"
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                    disabled={item.quantity <= 1 || isPending}
                    aria-label={`Decrease quantity of ${item.name}`}
                    aria-controls={`quantity-${item.id}`}
                  >
                    <Minus className="h-3 w-3" aria-hidden="true" />
                  </Button>
                  <span
                    className="w-8 text-center"
                    id={`quantity-${item.id}`}
                    aria-live="polite"
                  >
                    {item.quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-full"
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                    disabled={isPending}
                    aria-label={`Increase quantity of ${item.name}`}
                    aria-controls={`quantity-${item.id}`}
                  >
                    <Plus className="h-3 w-3" aria-hidden="true" />
                  </Button>
                </div>
              </TableCell>
              <TableCell className="text-right font-medium text-primary text-base font-bold">
                <span id={`product-${item.id}-total`}>
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </TableCell>
              <TableCell>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => handleRemoveItem(item.id, item.name)}
                  disabled={isPending}
                  aria-label={`Remove ${item.name} from cart`}
                >
                  <Trash2 className="h-4 w-4" aria-hidden="true" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
