"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/shared/Container";
import { AnimateIn } from "@/components/shared/AnimateIn";

const stats = [
  { value: 10, suffix: "+", label: "Years of\nExperience" },
  { value: 98, suffix: "%", label: "Visa\nSuccess Rate" },
  { value: 5000, suffix: "+", label: "Students\nPlaced" },
  { value: 500, suffix: "+", label: "Partner\nUniversities" },
  { value: 40, suffix: "+", label: "Countries\nCovered" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Subtle grid */}
      <div className="grid-bg absolute inset-0" />

      <Container className="relative">
        <AnimateIn variant="blurIn">
          <div className="mx-auto max-w-lg text-center">
            <span className="text-xs font-medium uppercase tracking-widest text-accent">
              Why Care Hands
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
              Numbers that speak
            </h2>
          </div>
        </AnimateIn>

        <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-2xl border border-border/50 bg-card p-6 text-center transition-all duration-500 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-2 whitespace-pre-line text-xs leading-relaxed text-muted-foreground">
                {stat.label}
              </div>
              {/* Glow on hover */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-b from-accent/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
