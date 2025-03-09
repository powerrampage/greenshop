import type React from "react";
import type { Metadata } from "next";
import { AccountSidebar } from "./components/account-sidebar";

export const metadata: Metadata = {
  title: "Account | Your Store",
  description: "Manage your account settings and preferences",
};

export default async function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="py-8 mb-36 max-md:mb-10">
      <div className="ui-container">
        <h1 className="text-2xl font-bold tracking-tight mb-8">My Account</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <AccountSidebar />
          </div>
          <div className="md:col-span-3">{children}</div>
        </div>
      </div>
    </main>
  );
}
