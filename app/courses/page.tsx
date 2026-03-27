import type { Metadata } from "next";
import { BreadcrumbNav } from "@/components/shared/BreadcrumbNav";
import { PageHero } from "@/components/shared/PageHero";
import { CoursesGrid } from "./CoursesGrid";

export const metadata: Metadata = {
  title: "Courses",
  description: "Popular courses for international students.",
};

export default function CoursesPage() {
  return (
    <>
      <BreadcrumbNav items={[{ label: "Courses" }]} />
      <PageHero
        title="Popular courses"
        subtitle="In-demand fields of study across 40+ countries."
        image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1600&h=600&fit=crop"
      />
      <CoursesGrid />
    </>
  );
}
