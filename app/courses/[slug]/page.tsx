import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { courseCategories, getCourseBySlug } from "@/data/courses";
import { countries } from "@/data/countries";
import { PageHero } from "@/components/shared/PageHero";
import { CourseContent } from "./CourseContent";

export function generateStaticParams() {
  return courseCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return { title: "Not Found" };
  return {
    title: `Study ${course.name} Abroad`,
    description: course.description.slice(0, 160),
  };
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const availableCountries = course.countries
    .map((s) => countries.find((c) => c.slug === s))
    .filter(Boolean) as typeof countries;

  return (
    <>
      <PageHero
        title={`Study ${course.name} abroad`}
        subtitle={course.description}
      />
      <CourseContent course={course} availableCountries={availableCountries} />
    </>
  );
}
