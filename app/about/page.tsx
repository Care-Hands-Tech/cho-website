import type { Metadata } from "next";
import { BreadcrumbNav } from "@/components/shared/BreadcrumbNav";
import { PageHero } from "@/components/shared/PageHero";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Care Hands Overseas Education.",
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbNav items={[{ label: "About Us" }]} />
      <PageHero
        title="About Care Hands"
        subtitle="For over a decade, we've been the trusted bridge between ambitious students and world-class education abroad."
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&h=600&fit=crop"
      />
      <AboutContent />
    </>
  );
}
