"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

interface ProductSizeSelectorProps {
  sizes: string[];
  selectedSize: string;
  onSelectSize: (size: string) => void;
}

export default function ProductSizeSelector({
  sizes,
  selectedSize,
  onSelectSize,
}: ProductSizeSelectorProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="size-group" className="text-base font-medium">
        Size:
      </Label>
      <RadioGroup
        id="size-group"
        value={selectedSize}
        onValueChange={onSelectSize}
        className="flex gap-2"
      >
        {sizes.map((size) => (
          <Label
            key={size}
            htmlFor={`size-${size}`}
            className={cn(
              "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border text-sm text-tertiary",
              selectedSize === size
                ? "border-primary bg-primary text-primary-foreground font-bold text-lg"
                : "border-input hover:bg-accent hover:text-primary"
            )}
          >
            <RadioGroupItem
              id={`size-${size}`}
              value={size}
              className="sr-only"
              aria-label={`Size ${size}`}
            />
            {size}
          </Label>
        ))}
      </RadioGroup>
    </div>
  );
}
