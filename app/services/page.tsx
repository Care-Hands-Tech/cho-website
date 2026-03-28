import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { ServicesGrid } from "./ServicesGrid";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Comprehensive overseas education services.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our services"
        subtitle="End-to-end support for your study abroad journey."
        image="/images/pages/services.svg"
      />
      <ServicesGrid />
    </>
  );
}
