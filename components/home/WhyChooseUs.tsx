"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Globe, ShieldCheck, Building, Clock } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { AnimateIn } from "@/components/shared/AnimateIn";

const stats = [
  { value: 10, suffix: "+", label: "Years of Experience", icon: Clock, iconColor: "text-blue-400" },
  { value: 98, suffix: "%", label: "Visa Success Rate", icon: ShieldCheck, iconColor: "text-green-400" },
  { value: 5000, suffix: "+", label: "Students Placed", icon: GraduationCap, iconColor: "text-accent-light" },
  { value: 500, suffix: "+", label: "Partner Universities", icon: Building, iconColor: "text-amber-400" },
  { value: 40, suffix: "+", label: "Countries Covered", icon: Globe, iconColor: "text-purple-400" },
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
    <section className="relative overflow-hidden py-28 sm:py-36">
      <div className="grid-bg absolute inset-0" />

      <Container className="relative">
        <AnimateIn variant="blurIn">
          <div className="mx-auto max-w-lg text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-light">
              Why Care Hands
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Numbers that speak
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              A decade of transforming study abroad dreams into reality.
            </p>
          </div>
        </AnimateIn>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-card p-6 text-center transition-all duration-500 hover:border-accent/20 hover:shadow-xl hover:shadow-accent/[0.06]"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.05]">
                  <Icon className={`h-5 w-5 ${stat.iconColor}`} />
                </div>
                <div className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-2 text-xs font-medium text-muted-foreground">
                  {stat.label}
                </div>
                <div className="pointer-events-none absolute -bottom-6 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-accent/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
