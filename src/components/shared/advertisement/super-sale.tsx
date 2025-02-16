import { FC } from "react";
import Image from "next/image";

export const SuperSale: FC = () => {
  return (
    <div>
      <Image
        src="/images/super-sale-banner.png"
        alt="Super Sale"
        height={470}
        width={370}
      />
    </div>
  );
};
