import type { Metadata } from "next";
import "./globals.css";
import { PropsWithChildren } from "react";
import { Footer, Header } from "@/components/shared";
import Providers from "@/providers";

export const metadata: Metadata = {
  title: "GreenShop",
  description:
    "Let’s Make a Better Planet. We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-cerapro antialiased">
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
