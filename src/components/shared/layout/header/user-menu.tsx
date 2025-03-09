"use client";

import { useSession } from "next-auth/react";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { redirect } from "next/navigation";

export default () => {
  const { data: session, status } = useSession();

  if (status === "loading") return null;

  const isLogged = status === "authenticated" && session;

  console.log({ session, status });

  function handleLogin() {
    redirect("?auth=true&type=login");
  }

  return isLogged ? (
    <Link href="/account">
      <Avatar>
        <AvatarImage
          src={session.user?.image as string}
          alt={session.user?.name ?? "Avatar"}
        />
        <AvatarFallback>{session?.user?.name}</AvatarFallback>
      </Avatar>
    </Link>
  ) : (
    <Button size="sm" onClick={handleLogin}>
      <LogOut />
      Login
    </Button>
  );
};
