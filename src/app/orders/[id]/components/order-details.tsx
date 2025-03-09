import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  CheckCircle,
  TruckIcon,
  PackageOpen,
  Clock,
  AlertCircle,
  ExternalLink,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface OrderItem {
  id: string;
  name: string;
  sku: string;
  price: number;
  quantity: number;
  image: string;
}

interface Address {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

interface Order {
  id: string;
  date: string;
  status: "processing" | "shipped" | "delivered" | "cancelled";
  total: number;
  subtotal: number;
  shipping: number;
  discount: number;
  paymentMethod: string;
  shippingAddress: Address;
  billingAddress: Address;
  items: OrderItem[];
  trackingNumber: string | null;
  trackingUrl: string | null;
}

interface OrderDetailsProps {
  order: Order;
}

export default function OrderDetails({ order }: OrderDetailsProps) {
  // Format date to readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  };

  // Get status icon and color
  const getStatusDetails = (status: Order["status"]) => {
    switch (status) {
      case "delivered":
        return {
          icon: <CheckCircle className="h-5 w-5" />,
          label: "Delivered",
          color:
            "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
          description: "Your order has been delivered successfully.",
        };
      case "shipped":
        return {
          icon: <TruckIcon className="h-5 w-5" />,
          label: "Shipped",
          color:
            "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
          description: "Your order is on its way to you.",
        };
      case "processing":
        return {
          icon: <PackageOpen className="h-5 w-5" />,
          label: "Processing",
          color:
            "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
          description: "Your order is being processed and will ship soon.",
        };
      case "cancelled":
        return {
          icon: <AlertCircle className="h-5 w-5" />,
          label: "Cancelled",
          color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
          description: "Your order has been cancelled.",
        };
      default:
        return {
          icon: <Clock className="h-5 w-5" />,
          label: "Pending",
          color:
            "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300",
          description: "Your order is pending confirmation.",
        };
    }
  };

  const status = getStatusDetails(order.status);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <Button asChild variant="ghost" size="sm">
          <Link href="/orders" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Orders
          </Link>
        </Button>
        <h1 className="text-2xl font-bold tracking-tight">Order Details</h1>
      </div>

      {/* Order Status */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Order #{order.id}</CardTitle>
              <CardDescription>
                Placed on {formatDate(order.date)}
              </CardDescription>
            </div>
            <Badge
              variant="outline"
              className={`flex items-center gap-1.5 px-3 py-1.5 text-sm ${status.color}`}
            >
              {status.icon}
              {status.label}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{status.description}</p>

          {order.trackingNumber && (
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="text-sm font-medium">Tracking Number:</span>
              <code className="px-2 py-1 bg-muted rounded text-sm">
                {order.trackingNumber}
              </code>
              {order.trackingUrl && (
                <Button
                  asChild
                  variant="link"
                  size="sm"
                  className="h-auto p-0 sm:ml-2"
                >
                  <a
                    href={order.trackingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    Track Package
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </Button>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Order Items */}
      <Card>
        <CardHeader>
          <CardTitle>Order Items</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {order.items.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="relative h-20 w-20 rounded-md overflow-hidden flex-shrink-0">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt=""
                    fill
                    className="object-cover"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    SKU: {item.sku}
                  </p>
                  <div className="mt-1 flex justify-between">
                    <span className="text-sm">
                      ${item.price.toFixed(2)} x {item.quantity}
                    </span>
                    <span className="font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Order Summary and Addresses */}
      <div className="grid gap-8 md:grid-cols-2">
        {/* Order Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>${order.subtotal.toFixed(2)}</span>
              </div>
              {order.discount > 0 && (
                <div className="flex justify-between text-sm">
                  <span>Discount</span>
                  <span>-${order.discount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-sm">
                <span>Shipping</span>
                <span>${order.shipping.toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>${order.total.toFixed(2)}</span>
              </div>
              <div className="pt-2 text-sm text-muted-foreground">
                <span>Payment Method: {order.paymentMethod}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Addresses */}
        <Card>
          <CardHeader>
            <CardTitle>Addresses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Shipping Address */}
              <div>
                <h3 className="font-medium mb-2">Shipping Address</h3>
                <address className="not-italic text-sm text-muted-foreground">
                  <p>{order.shippingAddress.name}</p>
                  <p>{order.shippingAddress.address}</p>
                  <p>
                    {order.shippingAddress.city}, {order.shippingAddress.state}{" "}
                    {order.shippingAddress.zip}
                  </p>
                  <p>{order.shippingAddress.country}</p>
                </address>
              </div>

              {/* Billing Address */}
              <div>
                <h3 className="font-medium mb-2">Billing Address</h3>
                <address className="not-italic text-sm text-muted-foreground">
                  <p>{order.billingAddress.name}</p>
                  <p>{order.billingAddress.address}</p>
                  <p>
                    {order.billingAddress.city}, {order.billingAddress.state}{" "}
                    {order.billingAddress.zip}
                  </p>
                  <p>{order.billingAddress.country}</p>
                </address>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Actions */}
      <div className="flex justify-between">
        <Button asChild variant="outline">
          <Link href="/orders">Back to Orders</Link>
        </Button>
        <Button asChild>
          <Link href="/shop">Continue Shopping</Link>
        </Button>
      </div>
    </div>
  );
}
