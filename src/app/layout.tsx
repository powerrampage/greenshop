import type { Metadata } from "next";
import "./globals.css";
import { PropsWithChildren } from "react";
import { Footer, Header } from "@/components/shared";
import Providers from "@/providers";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "GreenShop",
  description:
    "Let’s Make a Better Planet. We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
};

// const baseFont = localFont({
//   src: "/fonts/CeraPro-Regular.woff2",
//   weight: "normal",
//   variable: "--font-cerapro",
// });

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          // baseFont?.className,
          "antialiased text-dark grid grid-rows-[auto_1fr_auto]"
        )}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
