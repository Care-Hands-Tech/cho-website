"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { courseCategories } from "@/data/courses";
import { Container } from "@/components/shared/Container";
import { StaggerChildren, StaggerItem } from "@/components/shared/AnimateIn";

export function CoursesGrid() {
  return (
    <section className="py-20">
      <Container>
        <StaggerChildren className="grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
          {courseCategories.map((course) => (
            <StaggerItem key={course.slug}>
              <Link
                href={`/courses/${course.slug}`}
                className="group flex flex-col rounded-2xl p-6 transition-all duration-300 hover:bg-muted"
              >
                <h3 className="text-lg font-semibold text-primary">
                  {course.name}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground line-clamp-3">
                  {course.description}
                </p>
                <div className="mt-4 space-y-1 text-xs text-muted-foreground">
                  <p>{course.duration}</p>
                  <p>{course.feeRange}</p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-accent opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Explore <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
