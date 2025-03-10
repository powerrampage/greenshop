"use client";

import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { redirect } from "next/navigation";
import { useAuth } from "@/providers/auth.provider";

export default () => {
  const { loading, user } = useAuth();

  if (loading) return null;

  const isLogged = !!user;

  console.log({ user });

  function handleLogin() {
    redirect("?auth=true&type=login");
  }

  return isLogged ? (
    <Link href="/account">
      <Avatar>
        <AvatarImage src={user?.image as string} alt={user?.name ?? "Avatar"} />
        <AvatarFallback>{user?.name}</AvatarFallback>
      </Avatar>
    </Link>
  ) : (
    <Button size="sm" onClick={handleLogin}>
      <LogOut />
      Login
    </Button>
  );
};
