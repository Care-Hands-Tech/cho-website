import { HeroBanner } from "@/components/home/HeroBanner";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ServicesSnapshot } from "@/components/home/ServicesSnapshot";
import { DestinationsGrid } from "@/components/home/DestinationsGrid";
import { LeadForm } from "@/components/home/LeadForm";
import { CTABanner } from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <WhyChooseUs />
      <ServicesSnapshot />
      <DestinationsGrid />
      <LeadForm />
      <CTABanner />
    </>
  );
}
