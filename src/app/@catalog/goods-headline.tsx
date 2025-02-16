"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const types = [
  { id: 1, label: "All Plants" },
  { id: 2, label: "New Arrivals" },
  { id: 3, label: "Sale" },
];

const sortByOptions = [
  { id: 0, label: "Default" },
  { id: 1, label: "By Price" },
  { id: 2, label: "By Discount" },
];

export default function Headline() {
  const [type, setType] = useState(1);
  const [sortBy, setSortBy] = useState("0");

  return (
    <header className="flex items-center justify-between gap-2 mb-8">
      <ul className="flex items-center gap-9">
        {types.map(({ id, label }) => {
          const isActive = id === type;

          return (
            <li
              key={id}
              role="button"
              onClick={() => setType(id)}
              className={cn(
                "text-[0.938rem] hover:text-primary transition-colors",
                {
                  "text-primary border-b-2 border-b-primary font-bold":
                    isActive,
                }
              )}
            >
              {label}
            </li>
          );
        })}
      </ul>

      <div className="flex items-center gap-2">
        <p>Short by:</p>
        <Select
          defaultValue={sortBy}
          onValueChange={(value) => setSortBy(value)}
        >
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            {sortByOptions.map(({ id, label }) => {
              return (
                <SelectItem key={id} value={id.toString()}>
                  {label}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
    </header>
  );
}
