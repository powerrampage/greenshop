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
import { SheetTrigger } from "@/components/ui/sheet";
import { Filter } from "lucide-react";

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
    <header className="flex items-center justify-between gap-5 mb-8 max-sm:justify-center max-sm:flex-wrap max-sm:mb-4">
      <ul className="flex items-center gap-9 max-sm:justify-center">
        {types.map(({ id, label }) => {
          const isActive = id === type;

          return (
            <li key={id} className="text-[0.938rem]">
              <button
                onClick={() => setType(id)}
                className={cn("hover:text-primary transition-colors", {
                  "text-primary border-b-2 border-b-primary font-bold":
                    isActive,
                })}
              >
                {label}
              </button>
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
          <SelectTrigger className="w-32" title="Select sort type">
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
        <SheetTrigger
          className="md:hidden p-[6.5px] border-input border-[1px] rounded-sm"
          title="Filter products"
        >
          <Filter />
        </SheetTrigger>
      </div>
    </header>
  );
}
