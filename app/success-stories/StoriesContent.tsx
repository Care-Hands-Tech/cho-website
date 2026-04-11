"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/shared/Container";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/shared/AnimateIn";

export function StoriesContent() {
  return (
    <>
      {/* Stats */}
      <section className="border-b border-border py-10">
        <Container>
          <AnimateIn>
            <div className="flex flex-wrap items-center justify-center gap-12 text-center">
              {[
                { value: "5,000+", label: "Students" },
                { value: "98%", label: "Visa success" },
                { value: "40+", label: "Countries" },
                { value: "500+", label: "Universities" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-semibold text-primary">{s.value}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <Container>
          <StaggerChildren className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <StaggerItem key={t.id}>
                <TestimonialCard testimonial={t} index={i} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-accent-dark py-20">
        <AnimateIn>
          <div className="mx-auto max-w-xl px-4 text-center">
            <h2 className="text-2xl font-semibold text-white">Write your own story</h2>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-background transition-all duration-300 hover:shadow-xl hover:shadow-white/10"
              >
                Start your journey <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </AnimateIn>
      </section>
    </>
  );
}
