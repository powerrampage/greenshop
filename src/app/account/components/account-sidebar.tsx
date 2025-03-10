"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  User,
  MapPin,
  ShoppingBag,
  Heart,
  BarChart2,
  Download,
  HelpCircle,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/providers/auth.provider";

const menuItems = [
  {
    title: "Account Details",
    href: "/account",
    icon: User,
  },
  {
    title: "Address",
    href: "/account/address",
    icon: MapPin,
  },
  {
    title: "Orders",
    href: "/account/orders",
    icon: ShoppingBag,
  },
  {
    title: "Wishlist",
    href: "/account/wishlist",
    icon: Heart,
  },
  {
    title: "Reports",
    href: "/account/reports",
    icon: BarChart2,
  },
  {
    title: "Downloads",
    href: "/account/downloads",
    icon: Download,
  },
  {
    title: "Support",
    href: "/account/support",
    icon: HelpCircle,
  },
];

export function AccountSidebar() {
  const pathname = usePathname();
  const { logout } = useAuth();

  return (
    <div className="space-y-1">
      <nav className="flex flex-col space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              )}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>
      <div className="pt-4 mt-4 border-t">
        <Button
          variant="ghost"
          className="w-full justify-start text-muted-foreground hover:text-foreground"
          onClick={() => logout()}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  );
}
