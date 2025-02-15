import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export default () => {
  const isLogged = false;

  return isLogged ? (
    <></>
  ) : (
    <Button size="sm">
      <LogOut />
      Login
    </Button>
  );
};
