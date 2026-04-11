"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/shared/AnimateIn";

const destinations = [
  { slug: "canada", flag: "🇨🇦", name: "Canada", reason: "New PGWP rules for graduates" },
  { slug: "germany", flag: "🇩🇪", name: "Germany", reason: "Zero tuition + job seeker visa" },
  { slug: "ireland", flag: "🇮🇪", name: "Ireland", reason: "Tech giants + Stay Back visa" },
  { slug: "australia", flag: "🇦🇺", name: "Australia", reason: "Extended post-study work visa" },
  { slug: "netherlands", flag: "🇳🇱", name: "Netherlands", reason: "Most English-friendly in Europe" },
  { slug: "south-korea", flag: "🇰🇷", name: "South Korea", reason: "Affordable + K-wave culture" },
];

const scholarships = [
  { name: "Chevening (UK)", coverage: "Full funding", deadline: "Nov 2025" },
  { name: "DAAD (Germany)", coverage: "Tuition + stipend", deadline: "Oct 2025" },
  { name: "Fulbright (USA)", coverage: "Full scholarship", deadline: "Oct 2025" },
  { name: "Australia Awards", coverage: "Full funding", deadline: "Apr 2025" },
  { name: "Erasmus Mundus", coverage: "Tuition + allowance", deadline: "Varies" },
  { name: "KGSP (Korea)", coverage: "Full funding", deadline: "Mar 2025" },
];

const careers = [
  { title: "AI & Data Science", note: "300% demand growth in 3 years" },
  { title: "Healthcare & Nursing", note: "Global shortage = massive demand" },
  { title: "Sustainable Engineering", note: "Green jobs are the future" },
  { title: "Cybersecurity", note: "Critical demand worldwide" },
];

export function TrendingContent() {
  return (
    <>
      {/* Destinations */}
      <section className="py-20">
        <Container>
          <AnimateIn>
            <h2 className="text-xl font-semibold text-primary">Trending destinations</h2>
          </AnimateIn>
          <StaggerChildren className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((d) => (
              <StaggerItem key={d.slug}>
                <Link
                  href={`/study-destinations/${d.slug}`}
                  className="group flex items-center gap-3 rounded-xl p-4 transition-all duration-200 hover:bg-muted"
                >
                  <span className="text-2xl">{d.flag}</span>
                  <div>
                    <div className="text-sm font-medium text-primary">{d.name}</div>
                    <div className="text-xs text-muted-foreground">{d.reason}</div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      {/* Scholarships */}
      <section className="border-t border-border py-20">
        <Container>
          <AnimateIn>
            <h2 className="text-xl font-semibold text-primary">Hot scholarships</h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="mt-8 divide-y divide-border">
              {scholarships.map((s) => (
                <div key={s.name} className="flex items-center justify-between py-3.5">
                  <div>
                    <div className="text-sm font-medium text-primary">{s.name}</div>
                    <div className="text-xs text-muted-foreground">{s.coverage}</div>
                  </div>
                  <span className="text-xs text-muted-foreground">{s.deadline}</span>
                </div>
              ))}
            </div>
          </AnimateIn>
        </Container>
      </section>

      {/* Careers */}
      <section className="border-t border-border py-20">
        <Container>
          <AnimateIn>
            <h2 className="text-xl font-semibold text-primary">In-demand careers</h2>
          </AnimateIn>
          <StaggerChildren className="mt-8 grid gap-6 sm:grid-cols-2">
            {careers.map((c) => (
              <StaggerItem key={c.title}>
                <div>
                  <h3 className="text-sm font-semibold text-primary">{c.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{c.note}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-accent-dark py-20">
        <AnimateIn>
          <div className="mx-auto max-w-xl px-4 text-center">
            <h2 className="text-2xl font-semibold text-white">Stay ahead</h2>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-background transition-all duration-300 hover:shadow-xl hover:shadow-white/10"
              >
                Talk to an expert <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </AnimateIn>
      </section>
    </>
  );
}
