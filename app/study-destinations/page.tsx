import type { Metadata } from "next";
import { countries, getCountriesByRegion } from "@/data/countries";
import { BreadcrumbNav } from "@/components/shared/BreadcrumbNav";
import { PageHero } from "@/components/shared/PageHero";
import { DestinationsContent } from "./DestinationsContent";

export const metadata: Metadata = {
  title: "Study Destinations",
  description: `Explore ${countries.length}+ countries for overseas education.`,
};

export default function StudyDestinationsPage() {
  const byRegion = getCountriesByRegion();

  return (
    <>
      <BreadcrumbNav items={[{ label: "Study Destinations" }]} />
      <PageHero
        title="Study destinations"
        subtitle={`${countries.length}+ countries where your dream education awaits.`}
        image="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1600&h=600&fit=crop"
      />
      <DestinationsContent byRegion={byRegion} />
    </>
  );
}
