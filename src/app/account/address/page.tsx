import type { Metadata } from "next";
import { AddressManager } from "../components/address-manager";

export const metadata: Metadata = {
  title: "Manage Addresses | Your Store",
  description: "Manage your billing and shipping addresses",
};

export default function AddressPage() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Manage Addresses</h2>
      <AddressManager />
    </div>
  );
}
