"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { CourseCategory, Country } from "@/lib/types";
import { Container } from "@/components/shared/Container";
import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/shared/AnimateIn";

export function CourseContent({
  course,
  availableCountries,
}: {
  course: CourseCategory;
  availableCountries: Country[];
}) {
  return (
    <>
      {/* Quick facts */}
      <section className="border-b border-border py-10">
        <Container>
          <AnimateIn>
            <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-8 text-center text-sm">
              <div>
                <div className="text-xs text-muted-foreground">Duration</div>
                <div className="mt-0.5 font-medium text-primary">{course.duration}</div>
              </div>
              <div className="h-6 w-px bg-border" />
              <div>
                <div className="text-xs text-muted-foreground">Fee range</div>
                <div className="mt-0.5 font-medium text-primary">{course.feeRange}</div>
              </div>
              <div className="h-6 w-px bg-border" />
              <div>
                <div className="text-xs text-muted-foreground">Available in</div>
                <div className="mt-0.5 font-medium text-primary">{availableCountries.length} countries</div>
              </div>
            </div>
          </AnimateIn>
        </Container>
      </section>

      {/* Specializations */}
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-2xl">
            <AnimateIn>
              <h2 className="mb-8 text-xl font-semibold text-primary">Specializations</h2>
            </AnimateIn>
            <StaggerChildren className="grid gap-3 sm:grid-cols-2">
              {course.popularSpecializations.map((spec) => (
                <StaggerItem key={spec}>
                  <div className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 shrink-0 text-accent" />
                    <span className="text-sm text-muted-foreground">{spec}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </Container>
      </section>

      {/* Career */}
      <section className="border-t border-border py-20">
        <Container>
          <div className="mx-auto max-w-2xl">
            <AnimateIn>
              <h2 className="mb-8 text-xl font-semibold text-primary">Career scope</h2>
            </AnimateIn>
            <StaggerChildren className="space-y-3">
              {course.careerScope.map((career) => (
                <StaggerItem key={career}>
                  <div className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span className="text-sm text-muted-foreground">{career}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </Container>
      </section>

      {/* Countries */}
      <section className="border-t border-border py-20">
        <Container>
          <div className="mx-auto max-w-2xl">
            <AnimateIn>
              <h2 className="mb-8 text-xl font-semibold text-primary">
                Where to study {course.name.toLowerCase()}
              </h2>
            </AnimateIn>
            <StaggerChildren className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {availableCountries.map((c) => (
                <StaggerItem key={c.slug}>
                  <Link
                    href={`/study-destinations/${c.slug}`}
                    className="flex items-center gap-2.5 rounded-xl p-3 text-sm transition-all duration-200 hover:bg-muted"
                  >
                    <span className="text-lg">{c.flagEmoji}</span>
                    <span className="font-medium text-primary">{c.name}</span>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-accent-dark py-20">
        <AnimateIn>
          <div className="mx-auto max-w-xl px-4 text-center">
            <h2 className="text-2xl font-semibold text-white">
              Start your {course.name.toLowerCase()} journey
            </h2>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-background transition-all duration-300 hover:shadow-xl hover:shadow-white/10"
              >
                Book consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </AnimateIn>
      </section>
    </>
  );
}
