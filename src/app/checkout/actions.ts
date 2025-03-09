"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

// Form validation schema (same as client-side)
const checkoutSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  country: z.string().min(1),
  city: z.string().min(1),
  address1: z.string().min(5),
  address2: z.string().optional(),
  state: z.string().min(1),
  zip: z.string().min(5),
  email: z.string().email(),
  phone: z.string().min(10),
  shippingAddress: z.boolean(),
  notes: z.string().optional(),
  paymentMethod: z.enum(["card", "bank", "cash"]),
});

export async function processOrder(data: z.infer<typeof checkoutSchema>) {
  try {
    // Validate the data server-side
    const validatedData = checkoutSchema.parse(data);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In a real app, you would:
    // 1. Process the payment
    // 2. Create the order in your database
    // 3. Send confirmation emails
    // 4. Update inventory
    // 5. Clear the cart
    console.log("Processing order:", validatedData);

    // Revalidate relevant pages
    revalidatePath("/cart");
    revalidatePath("/orders");

    return {
      success: true,
      orderId: `ORD${Date.now()}`,
    };
  } catch (error) {
    console.error("Order processing error:", error);
    return {
      success: false,
      error: "Failed to process your order. Please try again.",
    };
  }
}
