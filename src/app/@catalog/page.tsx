import { SuperSale } from "@/components/shared";
import CatalogFilter from "./catalog-filter";
import CatalogGoods from "./catalog-goods";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export default function Catalog() {
  return (
    <Sheet>
      <section className="text-base grid grid-cols-[310px_1fr] max-xl:grid-cols-[250px_1fr] max-lg:grid-cols-[220px_1fr] max-md:grid-cols-1 gap-12 max-lg:gap-6 mt-11 mb-20 max-md:my-5">
        <aside className="max-md:hidden">
          <CatalogFilter />
          <SuperSale />
        </aside>
        <main>
          <CatalogGoods />
        </main>
      </section>

      <SheetContent className="overflow-auto">
        <SheetHeader className="mb-4">
          <SheetTitle>Filter Products</SheetTitle>
          <SheetDescription>Filter the products you need</SheetDescription>
        </SheetHeader>
        <CatalogFilter />
      </SheetContent>
    </Sheet>
  );
}
