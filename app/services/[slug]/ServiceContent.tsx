"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { Service } from "@/lib/types";
import { Container } from "@/components/shared/Container";
import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/shared/AnimateIn";

export function ServiceContent({ service }: { service: Service }) {
  return (
    <>
      <section className="py-20">
        <Container>
          <AnimateIn>
            <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
              {service.fullDescription}
            </p>
          </AnimateIn>
        </Container>
      </section>

      <section className="border-t border-border py-20">
        <Container>
          <div className="mx-auto max-w-2xl">
            <AnimateIn>
              <h2 className="mb-8 text-xl font-semibold text-primary">What&apos;s included</h2>
            </AnimateIn>
            <StaggerChildren className="grid gap-3 sm:grid-cols-2">
              {service.features.map((feature) => (
                <StaggerItem key={feature}>
                  <div className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-20">
        <Container>
          <div className="mx-auto max-w-2xl">
            <AnimateIn>
              <h2 className="mb-8 text-xl font-semibold text-primary">Our process</h2>
            </AnimateIn>
            <StaggerChildren className="space-y-6">
              {service.process.map((step) => (
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

      <section className="border-t border-border py-20">
        <Container>
          <AnimateIn>
            <div className="mx-auto max-w-2xl rounded-2xl bg-muted p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Who is this for?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-primary">
                {service.whoItsFor}
              </p>
            </div>
          </AnimateIn>
        </Container>
      </section>

      <section className="bg-primary py-20">
        <AnimateIn>
          <div className="mx-auto max-w-xl px-4 text-center">
            <h2 className="text-2xl font-semibold text-white">Ready to get started?</h2>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-primary transition-all duration-300 hover:shadow-xl hover:shadow-white/10"
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
