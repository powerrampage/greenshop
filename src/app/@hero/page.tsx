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
    <section className="my-3 bg-overlay">
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
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}

function Content() {
  return (
    <section className="grid grid-cols-[55%_45%] items-center">
      <div className="text-base pl-10">
        <h5 className="uppercase font-medium text-sm tracking-widest mb-1">
          Welcome to GreenShop
        </h5>
        <h1 className="font-black uppercase text-7xl mb-[0.071em]">
          Let’s Make a Better{" "}
          <mark className="text-primary bg-[transparent]">Planet</mark>
        </h1>
        <p className="text-tertiary">
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use our plants to create an unique Urban Jungle. Order your
          favorite plants!
        </p>

        <Button className="px-7 mt-11">SHOP NOW</Button>
      </div>
      <div className="flex items-end relative">
        <div className="absolute left-12 bottom-9">
          <Image
            src="/images/flower-small.png"
            alt="Small Flower"
            width={135}
            height={135}
          />
        </div>
        <Image
          src="/images/flower-big.png"
          alt="Big Flower"
          width={480}
          height={450}
          className="h-[450px]"
        />
      </div>
    </section>
  );
}
