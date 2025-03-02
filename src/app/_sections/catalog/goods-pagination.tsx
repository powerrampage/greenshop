import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function GoodsPagination() {
  return (
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
          <PaginationNext href="#" className="border-[1px] border-[#E5E5E5]" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
