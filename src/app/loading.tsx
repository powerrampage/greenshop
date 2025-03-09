import { Loader2 } from "lucide-react";

export default function RootLoading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-50">
      <div className="flex flex-col items-center gap-2 text-center">
        <Loader2
          className="h-10 w-10 animate-spin text-primary"
          aria-hidden="true"
        />
        <h2 className="text-xl font-semibold">Loading</h2>
        <p className="text-sm text-muted-foreground">
          Please wait while we load your content...
        </p>
      </div>
    </div>
  );
}
