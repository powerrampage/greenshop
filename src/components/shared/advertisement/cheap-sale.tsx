import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

export interface CheapSaleProps {
  id: number;
  image: string;
  title: string;
  description: string;
}

export function CheapSale({ id, description, image, title }: CheapSaleProps) {
  return (
    <Link href="#">
      <div className="grid grid-cols-2 items-center gap-2 bg-overlay sm:pr-8 sm:h-60 max-sm:grid-cols-1 max-sm:pb-3">
        <div className="relative -mt-12 max-sm:flex max-sm:justify-center">
          <Image src={image} alt={title} width={292} height={292} />
        </div>
        <div className="text-right max-sm:text-center">
          <h3 className="text-dark font-black text-lg mb-3">{title}</h3>
          <p className="mb-5 text-tertiary">{description}</p>
          <Button size="lg">
            Find more
            <MoveRight />
          </Button>
        </div>
      </div>
    </Link>
  );
}
