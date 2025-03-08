import type { Metadata } from "next";
import ProductDetail from "./components/product-detail";
import ProductAbout from "./components/product-about";
import { RelatedProducts } from "@/components/shared";

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

  const productDetails = {
    description: `The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.

Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.`,
    roomDescriptions: {
      living:
        "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      dining:
        "The benefits of houseplants are endless. In addition to cleaning the air of harmful toxins, they can help to improve your mood, reduce stress and provide you with better sleep. Fill every room of your home with houseplants and their restorative qualities will improve your life.",
      office:
        "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    reviews: [
      {
        id: "1",
        userId: "user-1",
        userName: "Sarah Johnson",
        rating: 5,
        comment:
          "This planter is absolutely beautiful! The ceramic quality is excellent and the wooden stand is very sturdy. My plants look amazing in it.",
        date: "2024-03-01T10:00:00.000Z",
        replies: [
          {
            id: "reply-1",
            userId: "admin-1",
            userName: "Store Admin",
            comment:
              "Thank you for your wonderful review, Sarah! We're so glad you're enjoying your planter.",
            date: "2024-03-02T09:00:00.000Z",
          },
        ],
      },
      {
        id: "2",
        userId: "user-2",
        userName: "Michael Chen",
        rating: 4,
        comment:
          "Great product overall. The design is modern and fits well with my home decor. Only giving 4 stars because the delivery took longer than expected.",
        date: "2024-02-28T15:30:00.000Z",
      },
    ],
  };

  const relatedProducts = [
    {
      id: "1",
      name: "Beach Spider Lily",
      price: 129.0,
      image: "/images/plants/1.png",
      slug: "beach-spider-lily",
    },
    {
      id: "2",
      name: "Blushing Bromeliad",
      price: 139.0,
      image: "/images/plants/2.png",
      slug: "blushing-bromeliad",
    },
    {
      id: "3",
      name: "Aluminum Plant",
      price: 179.0,
      image: "/images/plants/3.png",
      slug: "aluminum-plant",
    },
    {
      id: "4",
      name: "Bird's Nest Fern",
      price: 99.0,
      image: "/images/plants/4.png",
      slug: "birds-nest-fern",
    },
    {
      id: "5",
      name: "Chinese Evergreen",
      price: 39.0,
      image: "/images/plants/5.png",
      slug: "chinese-evergreen",
    },
  ];

  return (
    <>
      <ProductDetail product={product} />
      <div className="ui-container mx-auto px-4 mb-32">
        <ProductAbout
          description={productDetails.description}
          roomDescriptions={productDetails.roomDescriptions}
          reviews={productDetails.reviews}
        />
      </div>

      <div className="mb-32">
        <RelatedProducts products={relatedProducts} />
      </div>
    </>
  );
}
