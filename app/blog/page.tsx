import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { BlogGrid } from "./BlogGrid";

export const metadata: Metadata = {
  title: "Blog",
  description: "Visa updates, scholarships, country guides, and study abroad tips.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog"
        subtitle="Visa updates, scholarships, and study abroad guides."
        image="/images/pages/blog.svg"
      />
      <BlogGrid />
    </>
  );
}
