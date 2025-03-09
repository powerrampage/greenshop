import Link from "next/link";
import { PackageX } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function EmptyOrders() {
  return (
    <Card className="mx-auto max-w-md">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <div className="rounded-full bg-muted p-6">
            <PackageX
              className="h-12 w-12 text-muted-foreground"
              aria-hidden="true"
            />
          </div>
        </div>
        <CardTitle className="text-xl">No Orders Found</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-muted-foreground">
          You haven&apos;t placed any orders yet. Start shopping to see your
          orders here.
        </p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button asChild>
          <Link href="/shop">Start Shopping</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
