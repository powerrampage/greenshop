"use client";
import { Button } from "@/components/ui/button";
import { Heart, Search, ShoppingCart } from "lucide-react";
import { ComponentProps, ReactNode } from "react";

export default function Actions() {
  const actions: {
    title: string;
    icon: ReactNode;
    onClick: ComponentProps<"button">["onClick"];
  }[] = [
    {
      title: "Add to cart",
      icon: <ShoppingCart />,
      onClick: (event) => event.stopPropagation(),
    },
    {
      title: "Add to favorites",
      icon: <Heart />,
      onClick: (event) => event.stopPropagation(),
    },
    {
      title: "Search this product",
      icon: <Search />,
      onClick: (event) => event.stopPropagation(),
    },
  ];

  return (
    <div className="product-card-actions">
      {actions.map(({ title, icon, onClick }, index) => {
        return (
          <Button
            key={index}
            size="sm"
            variant="outline"
            className="p-2 hover:text-primary"
            onClick={onClick}
            title={title}
          >
            {icon}
          </Button>
        );
      })}
    </div>
  );
}
