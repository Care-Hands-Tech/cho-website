"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Country } from "@/lib/types";
import { Container } from "@/components/shared/Container";
import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/shared/AnimateIn";

export function CountryContent({ country }: { country: Country }) {
  return (
    <>
      {/* Why Study Here */}
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <AnimateIn>
              <h2 className="text-xl font-semibold text-primary">
                Why study in {country.name}?
              </h2>
            </AnimateIn>
            <StaggerChildren className="mt-6 space-y-3">
              {country.whyStudy.map((reason, i) => (
                <StaggerItem key={i}>
                  <div className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span className="text-sm text-muted-foreground">{reason}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </Container>
      </section>

      {/* Universities */}
      <section className="border-t border-border py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <AnimateIn>
              <h2 className="text-xl font-semibold text-primary">Top universities</h2>
            </AnimateIn>
            <StaggerChildren className="mt-6 space-y-2">
              {country.topUniversities.map((uni) => (
                <StaggerItem key={uni.name}>
                  <div className="flex items-center justify-between rounded-xl p-3 transition-colors hover:bg-muted">
                    <span className="text-sm font-medium text-primary">{uni.name}</span>
                    {uni.ranking && (
                      <span className="text-xs text-muted-foreground">{uni.ranking}</span>
                    )}
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </Container>
      </section>

      {/* Courses */}
      <section className="border-t border-border py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <AnimateIn>
              <h2 className="mb-6 text-xl font-semibold text-primary">Popular courses</h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="flex flex-wrap gap-2">
                {country.popularCourses.map((course) => (
                  <span
                    key={course}
                    className="rounded-full bg-muted px-3.5 py-1.5 text-xs font-medium text-primary"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </AnimateIn>
          </div>
        </Container>
      </section>

      {/* Costs */}
      <section className="border-t border-border py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <AnimateIn>
              <h2 className="mb-6 text-xl font-semibold text-primary">Cost breakdown</h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-0 divide-y divide-border">
                {country.costBreakdown.map((cost) => (
                  <div key={cost.item} className="flex items-center justify-between py-3.5">
                    <span className="text-sm text-muted-foreground">{cost.item}</span>
                    <span className="text-sm font-medium text-primary">{cost.range}</span>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </Container>
      </section>

      {/* Visa Process */}
      <section className="border-t border-border py-20" id="visa-process">
        <Container>
          <div className="mx-auto max-w-3xl">
            <AnimateIn>
              <h2 className="mb-8 text-xl font-semibold text-primary">Visa process</h2>
            </AnimateIn>
            <StaggerChildren className="space-y-6">
              {country.visaProcess.map((step) => (
                <StaggerItem key={step.step}>
                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold text-primary">
                      {step.step}
                    </div>
                    <div className="pt-0.5">
                      <h3 className="text-sm font-medium text-primary">{step.title}</h3>
                      <p className="mt-0.5 text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </Container>
      </section>

      {/* Work & PR */}
      <section className="border-t border-border py-20">
        <Container>
          <div className="mx-auto grid max-w-3xl gap-12 sm:grid-cols-2">
            <AnimateIn>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Work opportunities
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {country.workOpportunities}
              </p>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                PR pathways
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {country.prPathways}
              </p>
            </AnimateIn>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20">
        <AnimateIn>
          <div className="mx-auto max-w-xl px-4 text-center">
            <h2 className="text-2xl font-semibold text-white">
              Ready to study in {country.name}?
            </h2>
            <p className="mt-2 text-xs text-white/40">
              Intakes: {country.intakeMonths.join(", ")}
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-dark px-6 py-3 text-sm font-medium text-white shadow-md shadow-accent/25 transition-all duration-300 hover:shadow-xl hover:shadow-accent/30"
              >
                Get free consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </AnimateIn>
      </section>
    </>
  );
}
