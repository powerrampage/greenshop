import { Metadata } from "next";
import { getOrders } from "./actions";
import OrdersList from "./components/orders-list";
import EmptyOrders from "./components/empty-orders";

export const metadata: Metadata = {
  title: "Your Orders | Your Store",
  description: "View and track your order history and status",
};

export default async function OrdersPage() {
  const orders = await getOrders();
  const hasOrders = orders.length > 0;

  return (
    <main className="py-8 mb-36 max-md:mb-10">
      <div className="ui-container">
        <h1 className="text-2xl font-bold tracking-tight mb-8">Your Orders</h1>
        {hasOrders ? <OrdersList orders={orders} /> : <EmptyOrders />}
      </div>
    </main>
  );
}
