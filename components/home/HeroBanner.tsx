"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles, GraduationCap, Globe, CheckCircle, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";

const words = ["Future", "Career", "Dreams", "Journey"];

const floatingCountries = [
  { name: "UK", flag: "\u{1F1EC}\u{1F1E7}", x: "82%", y: "15%" },
  { name: "Canada", flag: "\u{1F1E8}\u{1F1E6}", x: "88%", y: "45%" },
  { name: "Australia", flag: "\u{1F1E6}\u{1F1FA}", x: "75%", y: "72%" },
];

export function HeroBanner() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setWordIndex((i) => (i + 1) % words.length), 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="grid-bg absolute inset-0" />
        <div className="absolute -right-32 top-20 h-[600px] w-[600px] rounded-full bg-accent/[0.07] blur-[120px] animate-aurora" />
        <div className="absolute -left-32 bottom-20 h-[500px] w-[500px] rounded-full bg-purple-500/[0.05] blur-[120px] animate-aurora" style={{ animationDelay: "-7s" }} />
        <div className="absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-indigo-500/[0.04] blur-[100px]" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left — Text */}
          <div className="pt-28 sm:pt-36 lg:pt-24">
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.08] px-4 py-2 text-xs font-medium text-accent-light">
                <Sparkles className="h-3.5 w-3.5" />
                Trusted by 5,000+ students worldwide
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 text-[2.75rem] font-bold leading-[1.05] tracking-tight text-primary sm:text-5xl lg:text-[3.5rem]"
            >
              Your Global{" "}
              <span className="relative inline-block">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[wordIndex]}
                    initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                    transition={{ duration: 0.4 }}
                    className="inline-block gradient-text"
                  >
                    {words[wordIndex]}
                  </motion.span>
                </AnimatePresence>
                <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-accent/40 to-purple-500/40" />
              </span>
              <br />
              Starts Here
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground"
            >
              Expert guidance for admissions, visas, and global careers.
              Study at top universities across 40+ countries with our{" "}
              <span className="font-semibold text-primary">98% visa success rate</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-accent to-accent-dark px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-accent/30"
              >
                Book Free Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%27m%20interested%20in%20studying%20abroad.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-2xl border border-border bg-card px-7 py-4 text-sm font-semibold text-primary transition-all duration-300 hover:border-[#25D366]/30 hover:shadow-lg hover:shadow-[#25D366]/10"
              >
                <MessageCircle className="h-4 w-4 text-[#25D366]" />
                WhatsApp Us
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-12 flex items-center gap-10"
            >
              {[
                { value: "98%", label: "Visa Success" },
                { value: "40+", label: "Countries" },
                { value: "500+", label: "Universities" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-xl font-bold text-primary">{s.value}</div>
                  <div className="text-[11px] font-medium text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden pt-24 lg:block"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/[0.06]">
              <Image
                src="/images/hero-students.jpg"
                alt="Students studying abroad"
                fill
                sizes="(max-width: 1024px) 0vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-1/2 h-40 w-80 -translate-x-1/2 translate-y-1/2 rounded-full bg-accent/20 blur-[60px]" />
            </div>

            {/* Floating country pills */}
            {floatingCountries.map((c, i) => (
              <motion.div
                key={c.name}
                animate={{ y: [-(4 + i * 2), 4 + i * 2, -(4 + i * 2)] }}
                transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                className="glass-card absolute rounded-full px-4 py-2 shadow-lg"
                style={{ left: c.x, top: c.y }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-base">{c.flag}</span>
                  <span className="text-xs font-semibold text-primary">{c.name}</span>
                </div>
              </motion.div>
            ))}

            {/* Floating stat card */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="glass-card absolute -left-8 top-12 rounded-2xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                  <GraduationCap className="h-5 w-5 text-accent-light" />
                </div>
                <div>
                  <div className="text-sm font-bold text-primary">5,000+</div>
                  <div className="text-[11px] text-muted-foreground">Students placed</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="glass-card absolute -left-4 bottom-20 rounded-2xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/10">
                  <Users className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <div className="text-sm font-bold text-primary">40+ Countries</div>
                  <div className="text-[11px] text-muted-foreground">Global network</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [-4, 8, -4] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="glass-card absolute -right-4 bottom-10 rounded-xl px-4 py-3 shadow-lg"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span className="text-xs font-semibold text-primary">98% Visa Success</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
