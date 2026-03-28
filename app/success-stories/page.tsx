import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { StoriesContent } from "./StoriesContent";

export const metadata: Metadata = {
  title: "Success Stories",
  description: "Inspiring stories from students who studied abroad with Care Hands.",
};

export default function SuccessStoriesPage() {
  return (
    <>
      <PageHero
        title="Success stories"
        subtitle="Real students, real journeys, real results."
        image="/images/pages/success-stories.svg"
      />
      <StoriesContent />
    </>
  );
}
