import { FC } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Nav from "./nav";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import UserMenu from "./user-menu";

const Header: FC = () => {
  return (
    <header className="pt-2">
      <div className="ui-container">
        <Sheet>
          <div className="flex justify-between items-center border-b-[0.0625rem] border-b-primary/50 pb-2 sm:pb-0">
            <Link href="/" className="logo">
              <Image
                src="/images/logo.svg"
                alt="logo"
                width={150}
                height={34.3}
              />
            </Link>

            <Nav navProps={{ className: "max-sm:hidden" }} />

            <div className="flex items-center gap-7 max-sm:gap-4">
              <Button
                size="sm"
                variant="link"
                className="p-1 text-dark hover:text-primary h-auto"
              >
                <Search />
              </Button>
              <Button
                size="sm"
                variant="link"
                className="p-1 text-dark hover:text-primary h-auto"
              >
                <ShoppingCart />
              </Button>

              <SheetTrigger className="sm:hidden">
                <Menu />
              </SheetTrigger>

              <div className="max-sm:hidden">
                <UserMenu />
              </div>
            </div>
          </div>

          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>
                Navigation options for the application
              </SheetDescription>
            </SheetHeader>
            <Nav
              navProps={{ className: "mb-5" }}
              ulProps={{ className: "flex-col gap-0 [&_a]:py-2" }}
            />
            <UserMenu />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export { Header };
