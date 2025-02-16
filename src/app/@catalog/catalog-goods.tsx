import { ProductCard } from "@/components/shared";
import Headline from "./goods-headline";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const products = [
  { title: "Barberton Daisy", price: 119.0 },
  { title: "Angel Wing Begonia", price: 169.0 },
  {
    title: "African Violet",
    price: 199.0,
    oldPrice: 229.0,
    disCount: { percent: 75 },
  },
  { title: "Blushing Bromeliad", price: 199.0 },
  { title: "African Violet", price: 199.0 },
  { title: "Broadleaf Lady Palm", price: 199.0 },
  { title: "African Violet", price: 199.0 },
  { title: "Bird's Nest Fern", price: 199.0 },
  { title: "Chinese Evergreen", price: 199.0 },
].map((item, index) => ({
  ...item,
  id: index,
  image: `/images/plants/${index + 1}.png`,
}));

export default function CatalogGoods() {
  return (
    <div>
      <Headline />

      <div className="grid grid-cols-3 gap-x-8 gap-y-14 mb-20">
        {products.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </div>

      <Pagination>
        <PaginationContent className="gap-3">
          <PaginationItem>
            <PaginationPrevious
              href="#"
              className="border-[1px] border-[#E5E5E5]"
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              className="bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
              href="#"
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              className="border-[#E5E5E5] border-[1px] font-light"
              href="#"
            >
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#"
              className="border-[1px] border-[#E5E5E5]"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
