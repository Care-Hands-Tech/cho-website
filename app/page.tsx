import { HeroBanner } from "@/components/home/HeroBanner";
import { LeadForm } from "@/components/home/LeadForm";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ServicesSnapshot } from "@/components/home/ServicesSnapshot";
import { DestinationsGrid } from "@/components/home/DestinationsGrid";
import { SuccessStoriesPreview } from "@/components/home/SuccessStoriesPreview";
import { CTABanner } from "@/components/home/CTABanner";
import { BlogPreview } from "@/components/home/BlogPreview";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <LeadForm />
      <WhyChooseUs />
      <ServicesSnapshot />
      <DestinationsGrid />
      <SuccessStoriesPreview />
      <CTABanner />
      <BlogPreview />
    </>
  );
}
