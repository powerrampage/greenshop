"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/base";
import { toast } from "sonner";

export function SocialButtons() {
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isTelegramLoading, setIsTelegramLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      setIsGoogleLoading(true);
      // In a real app, you would implement Google OAuth
      // For demo purposes, we'll just show a toast
      toast.info("Google authentication", {
        description: "Google authentication is not implemented in this demo.",
      });
    } catch (error) {
      toast.error("Authentication failed", {
        description: "Could not sign in with Google. Please try again.",
      });
    } finally {
      setIsGoogleLoading(false);
    }
  };

  const handleTelegramSignIn = async () => {
    try {
      setIsTelegramLoading(true);
      // In a real app, you would implement Telegram login
      // For demo purposes, we'll just show a toast
      toast.info("Telegram authentication", {
        description: "Telegram authentication is not implemented in this demo.",
      });
    } catch (error) {
      toast.error("Authentication failed", {
        description: "Could not sign in with Telegram. Please try again.",
      });
    } finally {
      setIsTelegramLoading(false);
    }
  };

  return (
    <div className="flex flex-col space-y-2">
      <Button
        variant="outline"
        type="button"
        disabled={isGoogleLoading}
        onClick={handleGoogleSignIn}
      >
        {isGoogleLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}
        Continue with Google
      </Button>
      <Button
        variant="outline"
        type="button"
        disabled={isTelegramLoading}
        onClick={handleTelegramSignIn}
      >
        {isTelegramLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.telegram className="mr-2 h-4 w-4" />
        )}
        Continue with Telegram
      </Button>
    </div>
  );
}
