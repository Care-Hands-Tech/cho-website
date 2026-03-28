import type { Metadata } from "next";
import { countries, getCountriesByRegion } from "@/data/countries";
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
      <PageHero
        title="Study destinations"
        subtitle={`${countries.length}+ countries where your dream education awaits.`}
        image="/images/pages/destinations.svg"
      />
      <DestinationsContent byRegion={byRegion} />
    </>
  );
}
