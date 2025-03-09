import type { Metadata } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { AccountDetails } from "./components/account-details";

export const metadata: Metadata = {
  title: "Account Details | Your Store",
  description: "Manage your personal information and account settings",
};

export default async function AccountPage() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
      <AccountDetails user={session?.user} />
    </div>
  );
}
