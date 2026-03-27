import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/lib/types";
import { blogPlaceholders } from "@/data/images";

const categoryLabels: Record<string, string> = {
  "visa-updates": "Visa",
  scholarships: "Scholarships",
  "country-guides": "Guides",
  "global-news": "News",
};

export function BlogCard({ post, index = 0 }: { post: BlogPost; index?: number }) {
  const image = blogPlaceholders[index % blogPlaceholders.length];

  return (
    <Link href={`/blog/${post.slug}`} className="group flex flex-col">
      <div className="relative mb-4 h-48 overflow-hidden rounded-2xl bg-muted">
        <Image
          src={image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex items-center gap-2.5">
        <span className="rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
          {categoryLabels[post.category] || post.category}
        </span>
        <span className="text-[11px] text-muted-foreground">
          {new Date(post.date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </span>
      </div>
      <h3 className="mt-2.5 text-[15px] font-semibold leading-snug text-primary transition-colors duration-200 group-hover:text-accent">
        {post.title}
      </h3>
      <p className="mt-1.5 flex-1 text-sm text-muted-foreground line-clamp-2">
        {post.excerpt}
      </p>
      <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-accent opacity-0 transition-all duration-300 group-hover:opacity-100">
        Read <ArrowUpRight className="h-3 w-3" />
      </span>
    </Link>
  );
}
