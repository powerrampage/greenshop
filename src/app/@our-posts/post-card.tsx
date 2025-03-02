import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export interface PostCardProps {
  id: number;
  image: string;
  date: string;
  title: string;
  description: string;
}

export function PostCard(props: PostCardProps) {
  const { image, title, date, description } = props;
  return (
    <Link href="#id" className="flex flex-col">
      <div>
        <Image
          src={image}
          alt={title}
          width={268}
          height={195}
          className="w-full"
        />
      </div>
      <div className="py-2 px-3 bg-overlay flex-auto flex flex-col">
        <p className="text-primary mb-1 font-medium text-sm">
          {date} | Read in {6} minutes
        </p>
        <h4 className="font-bold text-xl mb-1 text-dark">{title}</h4>
        <p className={cn("flex-auto text-sm text-tertiary mb-1")}>{description}</p>
        <button
          className={cn(
            "group inline-flex font-medium text-sm items-center gap-2 text-dark hover:text-primary"
          )}
        >
          Read More
          <MoveRight className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </Link>
  );
}
