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

const cardColors = [
  { icon: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: "text-purple-400", bg: "bg-purple-500/10" },
  { icon: "text-emerald-400", bg: "bg-emerald-500/10" },
  { icon: "text-amber-400", bg: "bg-amber-500/10" },
  { icon: "text-rose-400", bg: "bg-rose-500/10" },
  { icon: "text-cyan-400", bg: "bg-cyan-500/10" },
];

const gridClasses = [
  "sm:col-span-2 sm:row-span-2",
  "sm:col-span-2 sm:row-span-2",
  "", "", "", "",
];

export function ServicesSnapshot() {
  return (
    <section className="relative overflow-hidden bg-card py-28 sm:py-36">
      <div className="dot-bg absolute inset-0" />

      <Container className="relative">
        <AnimateIn variant="blurIn">
          <div className="mx-auto max-w-lg text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-light">
              Services
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Everything you need
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Comprehensive support at every step of your study abroad journey.
            </p>
          </div>
        </AnimateIn>

        <div className="mt-16 grid gap-4 sm:grid-cols-4">
          {services.slice(0, 6).map((service, i) => {
            const Icon = iconMap[service.icon] || Compass;
            const color = cardColors[i];
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
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-background p-6 transition-all duration-500 hover:border-accent/20 hover:shadow-xl hover:shadow-accent/[0.06] ${
                    isLarge ? "sm:p-8" : ""
                  }`}
                >
                  <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${color.bg} transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className={`h-5 w-5 ${color.icon}`} />
                  </div>
                  <h3 className={`font-bold text-primary ${isLarge ? "text-lg" : "text-[15px]"}`}>
                    {service.title}
                  </h3>
                  <p className={`mt-2.5 flex-1 leading-relaxed text-muted-foreground ${isLarge ? "text-sm" : "text-xs"}`}>
                    {isLarge ? service.shortDescription : service.shortDescription.split(".")[0] + "."}
                  </p>
                  <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-accent-light opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Learn more
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
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
