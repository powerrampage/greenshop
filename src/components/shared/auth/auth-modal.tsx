"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LoginForm } from "./login-form";
import { RegisterForm } from "./register-form";
import { useAuth } from "@/providers/auth.provider";

export function AuthModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user } = useAuth();

  useEffect(() => {
    // Check if auth modal should be shown based on URL params
    const showAuth = searchParams.get("auth");
    const authType = searchParams.get("type") as "login" | "register";

    if (showAuth === "true") {
      setIsOpen(true);
      if (authType && (authType === "login" || authType === "register")) {
        setActiveTab(authType);
      }
    } else {
      setIsOpen(false);
    }
  }, [searchParams]);

  // Close modal if user is authenticated
  useEffect(() => {
    if (user) {
      setIsOpen(false);
      // Remove auth params from URL
      const params = new URLSearchParams(window.location.search);
      if (params.has("auth")) {
        params.delete("auth");
        params.delete("type");
        const newUrl = params.toString()
          ? `${window.location.pathname}?${params.toString()}`
          : window.location.pathname;
        router.replace(newUrl);
      }
    }
  }, [user, router]);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      // Remove auth params from URL when modal is closed
      const params = new URLSearchParams(window.location.search);
      if (params.has("auth")) {
        params.delete("auth");
        params.delete("type");
        const newUrl = params.toString()
          ? `${window.location.pathname}?${params.toString()}`
          : window.location.pathname;
        router.replace(newUrl);
      }
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <Tabs
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as "login" | "register")}
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <LoginForm />
          </TabsContent>
          <TabsContent value="register">
            <RegisterForm />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
