"use client";
import { Button } from "@/components/ui/button";
import { Heart, Search, ShoppingCart } from "lucide-react";
import { ComponentProps, ReactNode } from "react";

export default function Actions() {
  const actions: {
    icon: ReactNode;
    onClick: ComponentProps<"button">["onClick"];
  }[] = [
    { icon: <ShoppingCart />, onClick: (event) => event.stopPropagation() },
    { icon: <Heart />, onClick: (event) => event.stopPropagation() },
    { icon: <Search />, onClick: (event) => event.stopPropagation() },
  ];

  return (
    <div className="product-card-actions">
      {actions.map(({ icon, onClick }, index) => {
        return (
          <Button
            key={index}
            size="sm"
            variant="outline"
            className="p-2 hover:text-primary"
            onClick={onClick}
          >
            {icon}
          </Button>
        );
      })}
    </div>
  );
}
