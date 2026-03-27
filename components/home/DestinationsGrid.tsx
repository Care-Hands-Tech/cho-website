"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { countries } from "@/data/countries";
import { countryImages } from "@/data/images";
import { Container } from "@/components/shared/Container";
import { AnimateIn } from "@/components/shared/AnimateIn";

const featuredSlugs = [
  "england", "canada", "australia", "united-states", "germany", "ireland",
  "new-zealand", "france", "singapore", "uae", "japan", "netherlands",
];

export function DestinationsGrid() {
  const featured = featuredSlugs
    .map((slug) => countries.find((c) => c.slug === slug))
    .filter(Boolean) as typeof countries;

  return (
    <section className="relative overflow-hidden bg-primary py-32">
      {/* Noise */}
      <div className="noise-bg absolute inset-0" />

      {/* Gradient orbs */}
      <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[100px]" />
      <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-purple-500/5 blur-[80px]" />

      <Container className="relative">
        <AnimateIn variant="blurIn">
          <div className="mx-auto max-w-lg text-center">
            <span className="text-xs font-medium uppercase tracking-widest text-accent-light">
              Destinations
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Study across the globe
            </h2>
            <p className="mt-4 text-sm text-white/40">
              {countries.length}+ countries. Top universities. Clear pathways.
            </p>
          </div>
        </AnimateIn>

        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {featured.map((country, i) => {
            const img = countryImages[country.slug];
            return (
              <motion.div
                key={country.slug}
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={`/study-destinations/${country.slug}`}
                  className="group relative block overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] transition-all duration-500 hover:border-white/10 hover:bg-white/[0.06]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {img ? (
                      <Image
                        src={img}
                        alt={country.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-white/5 text-4xl">
                        {country.flagEmoji}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <span className="text-sm font-medium text-white">{country.name}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <AnimateIn className="mt-12 text-center">
          <Link
            href="/study-destinations"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-white/10"
          >
            View all {countries.length}+ destinations
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </AnimateIn>
      </Container>
    </section>
  );
}
