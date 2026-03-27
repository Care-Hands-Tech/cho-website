import type { Metadata } from "next";
import { BreadcrumbNav } from "@/components/shared/BreadcrumbNav";
import { PageHero } from "@/components/shared/PageHero";
import { BlogGrid } from "./BlogGrid";

export const metadata: Metadata = {
  title: "Blog",
  description: "Visa updates, scholarships, country guides, and study abroad tips.",
};

export default function BlogPage() {
  return (
    <>
      <BreadcrumbNav items={[{ label: "Blog" }]} />
      <PageHero
        title="Blog"
        subtitle="Visa updates, scholarships, and study abroad guides."
        image="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1600&h=600&fit=crop"
      />
      <BlogGrid />
    </>
  );
}
