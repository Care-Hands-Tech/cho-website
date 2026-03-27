import type { Metadata } from "next";
import { BreadcrumbNav } from "@/components/shared/BreadcrumbNav";
import { PageHero } from "@/components/shared/PageHero";
import { ServicesGrid } from "./ServicesGrid";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Comprehensive overseas education services.",
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbNav items={[{ label: "Services" }]} />
      <PageHero
        title="Our services"
        subtitle="End-to-end support for your study abroad journey."
        image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1600&h=600&fit=crop"
      />
      <ServicesGrid />
    </>
  );
}
