import { SuperSale } from "@/components/shared";
import CatalogFilter from "./catalog-filter";
import CatalogGoods from "./catalog-goods";

export default function Catalog() {
  return (
    <section className="text-base grid grid-cols-[minmax(280px,_310px)_1fr] gap-12 max-lg:gap-6 mt-11 mb-20">
      <aside>
        <CatalogFilter />
        <SuperSale />
      </aside>
      <main>
        <CatalogGoods />
      </main>
    </section>
  );
}
