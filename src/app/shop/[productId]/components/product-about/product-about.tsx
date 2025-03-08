"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductDescription from "./product-description";
import ProductReviews from "./product-reviews";

interface ProductAboutProps {
  description: string;
  roomDescriptions: {
    living: string;
    dining: string;
    office: string;
  };
  reviews: Array<{
    id: string;
    userId: string;
    userName: string;
    rating: number;
    comment: string;
    date: string;
    replies?: Array<{
      id: string;
      userId: string;
      userName: string;
      comment: string;
      date: string;
    }>;
  }>;
}

export default function ProductAbout({
  description,
  roomDescriptions,
  reviews,
}: ProductAboutProps) {
  return (
    <Tabs defaultValue="description" className="w-full mt-12">
      <TabsList className="border-b rounded-none w-full justify-start h-auto p-0 bg-transparent">
        <TabsTrigger
          value="description"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 pb-2 mr-8"
        >
          Product Description
        </TabsTrigger>
        <TabsTrigger
          value="reviews"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 pb-2"
        >
          Reviews ({reviews.length})
        </TabsTrigger>
      </TabsList>

      <TabsContent value="description" className="mt-8">
        <ProductDescription
          description={description}
          roomDescriptions={roomDescriptions}
        />
      </TabsContent>

      <TabsContent value="reviews" className="mt-8">
        <ProductReviews reviews={reviews} />
      </TabsContent>
    </Tabs>
  );
}
