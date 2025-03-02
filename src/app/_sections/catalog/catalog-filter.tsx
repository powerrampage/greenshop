"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

const categories = [
  { id: 1, label: "House Plants", count: 33 },
  { id: 2, label: "Potter Plants", count: 12 },
  { id: 3, label: "Seeds", count: 19 },
  { id: 4, label: "Small Plants", count: 3 },
  { id: 5, label: "Big Plants", count: 19 },
  { id: 6, label: "Succulents", count: 13 },
  { id: 7, label: "Trerrariums", count: 17 },
  { id: 8, label: "Gardening", count: 23 },
  { id: 9, label: "Accessories", count: 39 },
];

const sizes = [
  { id: 1, label: "Small", count: 133 },
  { id: 2, label: "Medium", count: 82 },
  { id: 3, label: "Large", count: 79 },
];

export default function CatalogFilter() {
  const [range, setRange] = useState([5, 100_000]);
  const [category, setCategory] = useState(1);
  const [size, setSize] = useState<number | null>(null);

  return (
    <div className="py-3 px-4 bg-overlay">
      <h2 className="text-2xl mb-4 font-bold">Filters</h2>

      <h3 className="text-lg mb-2 font-bold">Categories</h3>

      <ul className="pl-3 pr-1 mb-9">
        {categories.map(({ label, count, id }) => {
          const isActive = category === id;

          return (
            <li key={id} className="my-1">
              <button
                onClick={() => setCategory(id)}
                className={cn(
                  "flex items-center justify-between gap-2 text-[0.938rem] leading-9 w-full text-left",
                  { "font-bold text-primary": isActive }
                )}
              >
                {label}
                <span>({count})</span>
              </button>
            </li>
          );
        })}
      </ul>

      <h3 className="text-lg mb-5 font-bold">Price Range</h3>
      <div className="pl-3 mb-11">
        <Slider
          value={range}
          minStepsBetweenThumbs={50_000}
          max={300_000}
          min={5}
          step={1}
          onValueChange={(value) => setRange(value)}
        />
        <p className="text-[0.938rem] my-4">
          Price:{" "}
          <span className="text-primary font-bold">
            ${range[0]} - ${range[1]}
          </span>
        </p>
        <Button size="lg">Filter</Button>
      </div>

      <h3 className="text-lg mb-2 font-bold">Size</h3>
      <ul className="pl-3 pr-1 pb-2">
        {sizes.map(({ label, count, id }) => {
          const isActive = size === id;

          return (
            <li key={id} className="my-1">
              <button
                onClick={() => (isActive ? setSize(null) : setSize(id))}
                className={cn(
                  "flex items-center justify-between gap-2 text-[0.938rem] leading-9 w-full text-left",
                  { "font-bold text-primary": isActive }
                )}
              >
                {label}
                <span>({count})</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
