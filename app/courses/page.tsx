import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { CoursesGrid } from "./CoursesGrid";

export const metadata: Metadata = {
  title: "Courses",
  description: "Popular courses for international students.",
};

export default function CoursesPage() {
  return (
    <>
      <PageHero
        title="Popular courses"
        subtitle="In-demand fields of study across 40+ countries."
        image="/images/pages/courses.svg"
      />
      <CoursesGrid />
    </>
  );
}
