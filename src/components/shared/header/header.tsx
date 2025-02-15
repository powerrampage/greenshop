import { FC } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogOut, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Nav from "./nav";

const Header: FC = () => {
  return (
    <header className="pt-2">
      <div className="ui-container">
        <div className="flex justify-between items-center border-b-[0.0625rem] border-b-primary/50">
          <Link href="/" className="logo">
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={150}
              height={34.3}
            />
          </Link>
          <Nav />
          <div className="flex items-center gap-7">
            <Button
              size="sm"
              variant="link"
              className="p-1 text-base hover:text-primary h-auto"
            >
              <Search />
            </Button>
            <Button
              size="sm"
              variant="link"
              className="p-1 text-base hover:text-primary h-auto"
            >
              <ShoppingCart />
            </Button>
            <Button size="sm">
              <LogOut />
              Login
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
