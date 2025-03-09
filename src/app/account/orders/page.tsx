import { getOrders } from "@/app/orders/actions";
import EmptyOrders from "@/app/orders/components/empty-orders";
import OrdersList from "@/app/orders/components/orders-list";

export default async function OrdersPage() {
  const orders = await getOrders();
  const hasOrders = orders.length > 0;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Your Orders</h2>
      {hasOrders ? <OrdersList orders={orders} /> : <EmptyOrders />}
    </div>
  );
}
