import { FC, ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

import "./product-card.css";
import Actions from "./product-actions";

export interface ProductCardProps {
  id: number;
  title: ReactNode;
  image: string;
  price: number;
  oldPrice?: number;
  discount?: {
    percent: number;
  };
}

export const ProductCard: FC<ProductCardProps> = (props) => {
  return (
    <Link href={`/shops/${props.id}`} className="product-card">
      <div className="product-card-image">
        <Image
          src={props.image}
          alt="Product"
          width={258}
          height={300}
          className="object-cover h-full w-full"
        />
        <Actions />
        {!!props?.discount?.percent && (
          <div
            className="product-card-discount-badge"
            title={`Discount ${props.discount.percent}% off`}
          >
            {props.discount.percent}% OFF
          </div>
        )}
      </div>
      <h4 className="text-dark mb-[0.375em]">{props.title}</h4>
      <div className="flex items-center gap-4">
        <div className="text-primary text-lg font-bold">
          ${props.price.toFixed(2)}
        </div>
        {!!props.oldPrice && (
          <s className="text-[#757575] text-lg">${props.oldPrice.toFixed(2)}</s>
        )}
      </div>
    </Link>
  );
};
