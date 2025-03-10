import type { Metadata } from "next";
import { AccountDetails } from "./components/account-details";
import { getCurrentUser } from "./actions";

export const metadata: Metadata = {
  title: "Account Details | Your Store",
  description: "Manage your personal information and account settings",
};

export default async function AccountPage() {
  const user = await getCurrentUser();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
      <AccountDetails user={user!} />
    </div>
  );
}
