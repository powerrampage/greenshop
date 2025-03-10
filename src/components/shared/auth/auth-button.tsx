"use client";

import { useRouter } from "next/navigation";
import { User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icons } from "@/components/base";
import { useState } from "react";
import { useAuth } from "@/providers/auth.provider";

export function AuthButton() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleSignIn = () => {
    router.push("/?auth=true&type=login");
  };

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      await logout();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  if (loading) {
    return (
      <Button variant="ghost" size="sm" disabled>
        <Icons.spinner className="h-4 w-4 mr-2 animate-spin" />
        Loading...
      </Button>
    );
  }

  if (!user) {
    return (
      <Button variant="ghost" size="sm" onClick={handleSignIn}>
        <User className="h-4 w-4 mr-2" />
        Sign In
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="relative h-8 w-8 rounded-full"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.image || ""} alt={user.name || "User"} />
            <AvatarFallback>{user.name?.charAt(0) || "U"}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => router.push("/account")}>
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/account/address")}>
          Addresses
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/orders")}>
          Orders
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/account/wishlist")}>
          Wishlist
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={handleLogout}
          disabled={isLoggingOut}
          className="text-destructive focus:text-destructive"
        >
          {isLoggingOut ? (
            <Icons.spinner className="h-4 w-4 mr-2 animate-spin" />
          ) : (
            <LogOut className="h-4 w-4 mr-2" />
          )}
          {isLoggingOut ? "Signing out..." : "Sign out"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
