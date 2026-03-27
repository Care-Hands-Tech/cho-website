"use client";

import { services } from "@/data/services";
import { Container } from "@/components/shared/Container";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { StaggerChildren, StaggerItem } from "@/components/shared/AnimateIn";

export function ServicesGrid() {
  return (
    <section className="py-20">
      <Container>
        <StaggerChildren className="grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
