"use server";

type OrderStatus = "processing" | "shipped" | "delivered" | "cancelled";

interface Order {
  id: string;
  date: string;
  status: OrderStatus;
  total: number;
  items: number;
  trackingNumber: string | null;
}

interface OrderDetails {
  id: string;
  date: string;
  status: OrderStatus;
  total: number;
  subtotal: number;
  shipping: number;
  discount: number;
  paymentMethod: string;
  shippingAddress: ShippingAddress;
  billingAddress: ShippingAddress;
  items: Item[];
  trackingNumber: string | null;
  trackingUrl: string | null;
}

interface Item {
  id: string;
  name: string;
  sku: string;
  price: number;
  quantity: number;
  image: string;
}

interface ShippingAddress {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

// This would connect to your database in a real app
export async function getOrders(): Promise<Order[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Mock orders data - in a real app, this would come from your database
  return [
    {
      id: "ORD1678945612",
      date: "2024-03-15T10:30:00Z",
      status: "delivered",
      total: 238.0,
      items: 2,
      trackingNumber: "TRK789456123",
    },
    {
      id: "ORD1678945987",
      date: "2024-03-10T14:45:00Z",
      status: "shipped",
      total: 834.0,
      items: 6,
      trackingNumber: "TRK789456789",
    },
    {
      id: "ORD1678946001",
      date: "2024-03-05T09:15:00Z",
      status: "processing",
      total: 1611.0,
      items: 9,
      trackingNumber: null,
    },
  ];
}

export async function getOrderDetails(orderId: string) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Mock order details - in a real app, this would come from your database
  const orders: Record<string, OrderDetails> = {
    ORD1678945612: {
      id: "ORD1678945612",
      date: "2024-03-15T10:30:00Z",
      status: "delivered",
      total: 238.0,
      subtotal: 219.0,
      shipping: 19.0,
      discount: 0,
      paymentMethod: "Credit Card",
      shippingAddress: {
        name: "John Doe",
        address: "123 Main St, Apt 4B",
        city: "New York",
        state: "NY",
        zip: "10001",
        country: "United States",
      },
      billingAddress: {
        name: "John Doe",
        address: "123 Main St, Apt 4B",
        city: "New York",
        state: "NY",
        zip: "10001",
        country: "United States",
      },
      items: [
        {
          id: "1",
          name: "Barberton Daisy",
          sku: "1995751877966",
          price: 119.0,
          quantity: 2,
          image: "/images/plants/5.png",
        },
      ],
      trackingNumber: "TRK789456123",
      trackingUrl: "https://example.com/track/TRK789456123",
    },
    ORD1678945987: {
      id: "ORD1678945987",
      date: "2024-03-10T14:45:00Z",
      status: "shipped",
      total: 834.0,
      subtotal: 815.0,
      shipping: 19.0,
      discount: 0,
      paymentMethod: "PayPal",
      shippingAddress: {
        name: "John Doe",
        address: "123 Main St, Apt 4B",
        city: "New York",
        state: "NY",
        zip: "10001",
        country: "United States",
      },
      billingAddress: {
        name: "John Doe",
        address: "123 Main St, Apt 4B",
        city: "New York",
        state: "NY",
        zip: "10001",
        country: "United States",
      },
      items: [
        {
          id: "2",
          name: "Blushing Bromeliad",
          sku: "1995751875706",
          price: 139.0,
          quantity: 6,
          image: "/images/plants/9.png",
        },
      ],
      trackingNumber: "TRK789456789",
      trackingUrl: "https://example.com/track/TRK789456789",
    },
    ORD1678946001: {
      id: "ORD1678946001",
      date: "2024-03-05T09:15:00Z",
      status: "processing",
      total: 1611.0,
      subtotal: 1592.0,
      shipping: 19.0,
      discount: 0,
      paymentMethod: "Cash on Delivery",
      shippingAddress: {
        name: "John Doe",
        address: "123 Main St, Apt 4B",
        city: "New York",
        state: "NY",
        zip: "10001",
        country: "United States",
      },
      billingAddress: {
        name: "John Doe",
        address: "123 Main St, Apt 4B",
        city: "New York",
        state: "NY",
        zip: "10001",
        country: "United States",
      },
      items: [
        {
          id: "3",
          name: "Aluminum Plant",
          sku: "1995751877786",
          price: 179.0,
          quantity: 9,
          image: "/images/plants/8.png",
        },
      ],
      trackingNumber: null,
      trackingUrl: null,
    },
  };

  return orders[orderId as keyof typeof orders] || null;
}
