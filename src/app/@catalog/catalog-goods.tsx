import { ProductCard } from "@/components/shared";
import Headline from "./goods-headline";
import GoodsPagination from "./goods-pagination";

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

      <div className="mb-20 grid grid-cols-[repeat(auto-fit,_minmax(14rem,_1fr))] gap-x-8 gap-y-14 max-md:gap-x-4 max-md:gap-y-7 max-md:mb-10">
        {products.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </div>

      <GoodsPagination />
    </div>
  );
}
