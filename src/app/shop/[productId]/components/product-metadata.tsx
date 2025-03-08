import Link from "next/link";

interface ProductMetadataProps {
  sku: string;
  categories: string[];
  tags: string[];
}

export default function ProductMetadata({
  sku,
  categories,
  tags,
}: ProductMetadataProps) {
  return (
    <div className="space-y-2 text-sm">
      <div className="flex items-center gap-2">
        <span className="text-muted-foreground">SKU:</span>
        <span>{sku}</span>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-muted-foreground">Categories:</span>
        <div className="flex flex-wrap gap-1">
          {categories.map((category, index) => (
            <span key={category}>
              <Link
                href={`/shop/category/${category
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="text-primary hover:underline"
              >
                {category}
              </Link>
              {index < categories.length - 1 && ", "}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-muted-foreground">Tags:</span>
        <div className="flex flex-wrap gap-1">
          {tags.map((tag, index) => (
            <span key={tag}>
              <Link
                href={`/shop/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-primary hover:underline"
              >
                {tag}
              </Link>
              {index < tags.length - 1 && ", "}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
