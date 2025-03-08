import { Facebook, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductSocialShareProps {
  title: string;
}

export default function ProductSocialShare({ title }: ProductSocialShareProps) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-sm font-medium text-dark">Share this product:</span>
      <div className="flex gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full"
          asChild
          aria-label="Share on Facebook"
        >
          <a href={`#`} target="_blank" rel="noopener noreferrer">
            <Facebook className="h-4 w-4" />
          </a>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full"
          asChild
          aria-label="Share on Twitter"
        >
          <a href={`#`} target="_blank" rel="noopener noreferrer">
            <Twitter className="h-4 w-4" />
          </a>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full"
          asChild
          aria-label="Share on LinkedIn"
        >
          <a href={`#`} target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-4 w-4" />
          </a>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full"
          asChild
          aria-label="Share via Email"
        >
          <a href={`mailto:#`} target="_blank" rel="noopener noreferrer">
            <Mail className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
}
