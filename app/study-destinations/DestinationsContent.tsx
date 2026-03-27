"use client";

import type { Country } from "@/lib/types";
import { Container } from "@/components/shared/Container";
import { CountryCard } from "@/components/shared/CountryCard";
import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/shared/AnimateIn";

export function DestinationsContent({
  byRegion,
}: {
  byRegion: Record<string, Country[]>;
}) {
  return (
    <section className="py-20">
      <Container>
        {Object.entries(byRegion).map(([region, regionCountries]) => (
          <div key={region} className="mb-16 last:mb-0">
            <AnimateIn>
              <h3 className="mb-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {region}
                <span className="ml-2 text-border">
                  {regionCountries.length}
                </span>
              </h3>
            </AnimateIn>
            <StaggerChildren className="grid grid-cols-3 gap-1 sm:grid-cols-4 md:grid-cols-6">
              {regionCountries.map((country) => (
                <StaggerItem key={country.slug}>
                  <CountryCard country={country} />
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        ))}
      </Container>
    </section>
  );
}
