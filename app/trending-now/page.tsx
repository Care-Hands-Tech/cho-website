import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { TrendingContent } from "./TrendingContent";

export const metadata: Metadata = {
  title: "Trending Now",
  description: "Trending study destinations, scholarships, and careers.",
};

export default function TrendingNowPage() {
  return (
    <>
      <PageHero
        title="Trending now"
        subtitle="The latest in study destinations, scholarships, and in-demand careers."
        image="/images/pages/trending.svg"
      />
      <TrendingContent />
    </>
  );
}
