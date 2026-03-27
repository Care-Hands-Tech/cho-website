import type { Metadata } from "next";
import { BreadcrumbNav } from "@/components/shared/BreadcrumbNav";
import { PageHero } from "@/components/shared/PageHero";
import { StoriesContent } from "./StoriesContent";

export const metadata: Metadata = {
  title: "Success Stories",
  description: "Inspiring stories from students who studied abroad with Care Hands.",
};

export default function SuccessStoriesPage() {
  return (
    <>
      <BreadcrumbNav items={[{ label: "Success Stories" }]} />
      <PageHero
        title="Success stories"
        subtitle="Real students, real journeys, real results."
        image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&h=600&fit=crop"
      />
      <StoriesContent />
    </>
  );
}
