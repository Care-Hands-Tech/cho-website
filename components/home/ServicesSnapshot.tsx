"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Compass,
  GraduationCap,
  FileCheck,
  BookOpen,
  Languages,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";
import { services } from "@/data/services";
import { Container } from "@/components/shared/Container";
import { AnimateIn } from "@/components/shared/AnimateIn";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Compass,
  GraduationCap,
  FileCheck,
  BookOpen,
  Languages,
  Briefcase,
};

// Bento grid - first two items are large, rest smaller
const gridClasses = [
  "sm:col-span-2 sm:row-span-2",
  "sm:col-span-2 sm:row-span-2",
  "",
  "",
  "",
  "",
];

export function ServicesSnapshot() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="dot-bg absolute inset-0" />

      <Container className="relative">
        <AnimateIn variant="blurIn">
          <div className="mx-auto max-w-lg text-center">
            <span className="text-xs font-medium uppercase tracking-widest text-accent">
              Services
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
              Everything you need
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Comprehensive support at every step of your study abroad journey.
            </p>
          </div>
        </AnimateIn>

        <div className="mt-16 grid gap-3 sm:grid-cols-4">
          {services.slice(0, 6).map((service, i) => {
            const Icon = iconMap[service.icon] || Compass;
            const isLarge = i < 2;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={gridClasses[i]}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-card p-6 transition-all duration-500 hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 ${
                    isLarge ? "sm:p-8" : ""
                  }`}
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent/10 to-purple-500/10 text-accent transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className={`font-semibold text-primary ${isLarge ? "text-lg" : "text-[15px]"}`}>
                    {service.title}
                  </h3>
                  <p className={`mt-2 flex-1 text-muted-foreground ${isLarge ? "text-sm" : "text-xs"}`}>
                    {isLarge ? service.shortDescription : service.shortDescription.split(".")[0] + "."}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-xs font-medium text-accent opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Learn more
                    <ArrowUpRight className="h-3 w-3" />
                  </div>

                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
