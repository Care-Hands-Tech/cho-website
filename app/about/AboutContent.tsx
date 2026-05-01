"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { aboutImages, testimonialImages } from "@/data/images";
import { Container } from "@/components/shared/Container";
import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/shared/AnimateIn";

const values = [
  { title: "Student-first", description: "Every decision centers around what's best for you." },
  { title: "Transparent", description: "No hidden fees, no false promises. Honest guidance always." },
  { title: "Personalized", description: "A customized roadmap for your unique profile and goals." },
  { title: "Results-driven", description: "98% visa success rate and 5,000+ placements." },
];

const team = [
  { name: "Basil Paul", role: "Managing Director", img: testimonialImages[0] },
  { name: "Joseph PJ", role: "CEO", img: testimonialImages[3] },
  { name: "Abhishek Pramod", role: "General Manager", img: testimonialImages[4] },
];

const milestones = [
  { year: "2014", event: "Founded" },
  { year: "2016", event: "15+ countries" },
  { year: "2018", event: "1,000 students" },
  { year: "2020", event: "Virtual launch" },
  { year: "2022", event: "300+ partners" },
  { year: "2024", event: "5,000+ placed" },
];

export function AboutContent() {
  return (
    <>
      {/* Story with image */}
      <section className="py-20">
        <Container>
          <div className="mx-auto grid max-w-4xl gap-12 lg:grid-cols-2 lg:items-center">
            <AnimateIn>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={aboutImages.story}
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimateIn>
            <AnimateIn delay={0.15}>
              <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                <h2 className="text-xl font-semibold text-primary">Our story</h2>
                <p>
                  Care Hands was founded with a simple belief: every student deserves access to
                  quality education, regardless of where they were born. What started as a single
                  consultancy has grown into a comprehensive advisory with certified counselors,
                  visa specialists, and career coaches.
                </p>
                <p>
                  We partner with over 500 universities across 40+ countries. Our approach is
                  deeply personal — we understand studying abroad is one of the most significant
                  decisions in a young person&apos;s life.
                </p>
              </div>
            </AnimateIn>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="border-t border-border py-20">
        <Container>
          <AnimateIn>
            <h2 className="text-center text-xl font-semibold text-primary">Our values</h2>
          </AnimateIn>
          <StaggerChildren className="mx-auto mt-10 grid max-w-3xl gap-8 sm:grid-cols-2">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div>
                  <h3 className="text-sm font-semibold text-primary">{v.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{v.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      {/* Team with photos */}
      <section className="border-t border-border py-20">
        <Container>
          <AnimateIn>
            <h2 className="text-center text-xl font-semibold text-primary">Our team</h2>
          </AnimateIn>
          <StaggerChildren className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-3">
            {team.map((m, i) => (
              <StaggerItem key={`${m.name}-${i}`}>
                <div className="text-center">
                  <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full">
                    <Image src={m.img} alt={m.name} fill className="object-cover" />
                  </div>
                  <h3 className="mt-3 text-sm font-medium text-primary">{m.name}</h3>
                  <p className="text-xs text-muted-foreground">{m.role}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      {/* Timeline */}
      <section className="border-t border-border py-20">
        <Container>
          <AnimateIn>
            <h2 className="text-center text-xl font-semibold text-primary">Our journey</h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="mx-auto mt-10 flex max-w-2xl items-center justify-between">
              {milestones.map((m) => (
                <div key={m.year} className="text-center">
                  <div className="text-lg font-semibold text-primary">{m.year}</div>
                  <div className="mt-1 text-[11px] text-muted-foreground">{m.event}</div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-accent-dark py-20">
        <AnimateIn>
          <div className="mx-auto max-w-xl px-4 text-center">
            <h2 className="text-2xl font-semibold text-white">Start your journey</h2>
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
