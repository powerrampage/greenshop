"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Shop", href: "/shop" },
  { label: "Plant Care", href: "/plan-care" },
  { label: "Blogs", href: "/blogs" },
];

export default () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex gap-12">
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
