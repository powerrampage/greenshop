"use client";
import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  slug: string;
}

export interface InterestedProductsProps {
  products: Product[];
}

export function InterestedProducts({ products }: InterestedProductsProps) {
  return (
    <section className="w-full py-12">
      <div className="ui-container">
        <h2 className="text-2xl font-bold tracking-tight text-primary">
          You may be interested in
        </h2>

        <Separator className="bg-primary/50 mt-3 mb-10" />

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {products.map((product) => (
              <CarouselItem
                key={product.id}
                className="pl-4 basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <Card className="h-full">
                  <CardContent className="p-4">
                    <Link
                      href={`/shop/${product.slug}`}
                      className="relative block aspect-square overflow-hidden rounded-lg"
                    >
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </Link>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start gap-2 p-4">
                    <Link
                      href={`/shop/${product.slug}`}
                      className="font-medium hover:underline"
                    >
                      {product.name}
                    </Link>
                    <p className="text-lg font-bold text-primary">
                      ${product.price.toFixed(2)}
                    </p>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselDots className="pt-4" />
          <div className="hidden lg:block">
            <CarouselPrevious className="absolute -left-12 top-1/2" />
            <CarouselNext className="absolute -right-12 top-1/2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
