import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Care Hands Overseas Education.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Care Hands"
        subtitle="For over a decade, we've been the trusted bridge between ambitious students and world-class education abroad."
        image="/images/pages/about.svg"
      />
      <AboutContent />
    </>
  );
}
