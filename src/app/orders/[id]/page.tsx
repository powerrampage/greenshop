import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getOrderDetails } from "../actions";
import OrderDetails from "./components/order-details";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  return {
    title: `Order ${params.id} | Your Store`,
    description: "View your order details and tracking information",
  };
}

export default async function OrderPage({
  params,
}: {
  params: { id: string };
}) {
  const order = await getOrderDetails(params.id);

  if (!order) {
    notFound();
  }

  return (
    <main className="py-8 mb-36 max-md:mb-10">
      <div className="ui-container">
        <OrderDetails order={order} />
      </div>
    </main>
  );
}
