"use client";

import Link from "next/link";
import {
  CheckCircle,
  TruckIcon,
  PackageOpen,
  Clock,
  AlertCircle,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface Order {
  id: string;
  date: string;
  status: "processing" | "shipped" | "delivered" | "cancelled";
  total: number;
  items: number;
  trackingNumber: string | null;
}

interface OrdersListProps {
  orders: Order[];
}

export default function OrdersList({ orders }: OrdersListProps) {
  // Format date to readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Get status icon and color
  const getStatusDetails = (status: Order["status"]) => {
    switch (status) {
      case "delivered":
        return {
          icon: <CheckCircle className="h-4 w-4" />,
          label: "Delivered",
          color:
            "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
        };
      case "shipped":
        return {
          icon: <TruckIcon className="h-4 w-4" />,
          label: "Shipped",
          color:
            "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
        };
      case "processing":
        return {
          icon: <PackageOpen className="h-4 w-4" />,
          label: "Processing",
          color:
            "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
        };
      case "cancelled":
        return {
          icon: <AlertCircle className="h-4 w-4" />,
          label: "Cancelled",
          color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
        };
      default:
        return {
          icon: <Clock className="h-4 w-4" />,
          label: "Pending",
          color:
            "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300",
        };
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order History</CardTitle>
        <CardDescription>View and track your recent orders</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Total</TableHead>
              <TableHead className="text-center">Items</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => {
              const status = getStatusDetails(order.status);

              return (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{formatDate(order.date)}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={`flex w-fit items-center gap-1 ${status.color}`}
                    >
                      {status.icon}
                      {status.label}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    ${order.total.toFixed(2)}
                  </TableCell>
                  <TableCell className="text-center">{order.items}</TableCell>
                  <TableCell className="text-right">
                    <Button asChild variant="ghost" size="sm">
                      <Link
                        href={`/orders/${order.id}`}
                        className="flex items-center"
                      >
                        View
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="flex justify-between">
        <p className="text-sm text-muted-foreground">
          Showing {orders.length} orders
        </p>
        <Button asChild variant="outline" size="sm">
          <Link href="/shop">Continue Shopping</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
