import type { Metadata } from "next";
import { BreadcrumbNav } from "@/components/shared/BreadcrumbNav";
import { PageHero } from "@/components/shared/PageHero";
import { TrendingContent } from "./TrendingContent";

export const metadata: Metadata = {
  title: "Trending Now",
  description: "Trending study destinations, scholarships, and careers.",
};

export default function TrendingNowPage() {
  return (
    <>
      <BreadcrumbNav items={[{ label: "Trending Now" }]} />
      <PageHero
        title="Trending now"
        subtitle="The latest in study destinations, scholarships, and in-demand careers."
        image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&h=600&fit=crop"
      />
      <TrendingContent />
    </>
  );
}
