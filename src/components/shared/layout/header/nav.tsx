"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";

const links = [
  { label: "Shop", href: "/shop" },
  { label: "Plant Care", href: "/plan-care" },
  { label: "Blogs", href: "/blogs" },
];

export default ({
  navProps,
  ulProps,
}: {
  navProps?: ComponentProps<"nav">;
  ulProps?: ComponentProps<"ul">;
}) => {
  const pathname = usePathname();

  return (
    <nav {...navProps}>
      <ul {...ulProps} className={cn("flex gap-12", ulProps?.className)}>
        {links.map(({ label, href }) => {
          const isActive = pathname.startsWith(href);

          return (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  "block pt-6 pb-6 hover:text-primary transition-all border-b-[3px] border-b-[transparent]",
                  { "border-b-primary font-bold": isActive }
                )}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
