import type { Metadata } from "next";
import ProductDetail from "./components/product-detail";

export const metadata: Metadata = {
  title: "Barberton Daisy | Shop",
  description:
    "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.",
};

// This would typically fetch data from an API based on the slug
export default function ProductPage({ params }: { params: { slug: string } }) {
  // Mock product data - in a real app, this would come from an API
  const product = {
    id: "1",
    name: "Barberton Daisy",
    price: 119.0,
    rating: 4,
    reviewCount: 19,
    description:
      "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.",
    sku: "1995751877966",
    categories: ["Potter Plants"],
    tags: ["Home", "Garden", "Plants"],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "/images/plants/1.png",
      "/images/plants/2.png",
      "/images/plants/3.png",
      "/images/plants/4.png",
    ],
  };

  return <ProductDetail product={product} />;
}
