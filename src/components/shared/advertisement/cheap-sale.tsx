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
      <div className="grid grid-cols-2 items-center gap-2 bg-overlay pr-8 h-60">
        <div className="relative -mt-16">
          <Image src={image} alt={title} width={292} height={292} />
        </div>
        <div className="text-right">
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
