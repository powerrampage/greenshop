"use client";

import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface ProductQuantityProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export default function ProductQuantity({
  quantity,
  onIncrement,
  onDecrement,
}: ProductQuantityProps) {
  return (
    <div className="flex items-center gap-4">
      <Label htmlFor="quantity-display" className="text-base font-medium">
        Quantity:
      </Label>
      <div className="flex items-center">
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full border-primary text-primary"
          onClick={onDecrement}
          disabled={quantity <= 1}
          aria-label="Decrease quantity"
        >
          <Minus className="h-4 w-4" />
        </Button>

        <span
          id="quantity-display"
          className="w-12 text-center font-medium"
          aria-live="polite"
          aria-atomic="true"
        >
          {quantity}
        </span>

        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full border-primary text-primary"
          onClick={onIncrement}
          aria-label="Increase quantity"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
