"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="my-3 bg-overlay dark:bg-[transparent]">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          <CarouselItem>
            <Content />
          </CarouselItem>
          <CarouselItem>
            <Content />
          </CarouselItem>
          <CarouselItem>
            <Content />
          </CarouselItem>
        </CarouselContent>
        <CarouselDots className="pb-4" />
        <CarouselPrevious className="max-lg:hidden" />
        <CarouselNext className="max-lg:hidden" />
      </Carousel>
    </section>
  );
}

function Content() {
  return (
    <section className="grid items-center md:grid-cols-[60%_40%] max-md:py-8 max-md:relative">
      <div className="text-dark pl-10 max-lg:pl-4 max-md:relative max-md:z-[2] max-md:px-4">
        <p className="uppercase font-medium text-sm tracking-widest mb-1">
          Welcome to GreenShop
        </p>
        <h1 className="font-black uppercase text-7xl max-lg:text-6xl max-sm:text-4xl mb-[0.071em]">
          Let’s Make a Better{" "}
          <mark className="text-primary bg-[transparent]">Planet</mark>
        </h1>
        <p className="text-tertiary">
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use our plants to create an unique Urban Jungle. Order your
          favorite plants!
        </p>

        <Button className="px-7 mt-11 max-sm:mt-6">SHOP NOW</Button>
      </div>
      <div className="flex items-end md:relative max-md:opacity-20">
        <div className="md:absolute left-12 bottom-9 max-lg:left-2">
          <Image
            src="/images/flower-small.png"
            alt="Small Flower"
            width={135}
            height={135}
            className="max-md:absolute max-md:right-40 max-md:bottom-0 max-sm:hidden object-contain"
          />
        </div>
        <Image
          priority
          src="/images/flower-big.png"
          alt="Big Flower"
          width={480}
          height={450}
          objectFit="cover"
          className="h-[450px] max-lg:h-[400px] max-md:absolute max-md:-right-14 max-md:-bottom-8 max-sm:-left-30"
        />
      </div>
    </section>
  );
}
