"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles, GraduationCap, Globe, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";

const words = ["Future", "Career", "Dreams", "Journey"];

export function HeroBanner() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setWordIndex((i) => (i + 1) % words.length), 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pb-32">
      {/* Background elements */}
      <div className="grid-bg absolute inset-0" />
      <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-accent/[0.04] blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-purple-500/[0.03] blur-3xl" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/15 bg-accent/5 px-3.5 py-1.5 text-xs font-medium text-accent">
                <Sparkles className="h-3 w-3" />
                Trusted by 5,000+ students worldwide
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 text-4xl font-semibold leading-[1.08] tracking-tight text-primary sm:text-5xl lg:text-6xl"
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
                    className="inline-block text-accent"
                  >
                    {words[wordIndex]}
                  </motion.span>
                </AnimatePresence>
                <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-accent/20" />
              </span>
              <br />
              Starts Here
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground"
            >
              Expert guidance for admissions, visas, and global careers.
              Study at top universities across 40+ countries with our
              98% visa success rate.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/15"
              >
                Book Free Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%27m%20interested%20in%20studying%20abroad.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-medium text-primary transition-all duration-300 hover:border-[#25D366]/40 hover:shadow-lg hover:shadow-[#25D366]/10"
              >
                <MessageCircle className="h-4 w-4 text-[#25D366]" />
                WhatsApp Us
              </a>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-10 flex items-center gap-8"
            >
              {[
                { value: "98%", label: "Visa Success" },
                { value: "40+", label: "Countries" },
                { value: "500+", label: "Universities" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-lg font-semibold text-primary">{s.value}</div>
                  <div className="text-[11px] text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Image collage with floating cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            {/* Main image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=1000&fit=crop"
                alt="Students celebrating graduation"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating card — Top right */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-6 top-8 rounded-2xl border border-border/50 bg-card/90 p-4 shadow-xl shadow-black/[0.08] backdrop-blur-lg"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                  <GraduationCap className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-primary">5,000+</div>
                  <div className="text-[11px] text-muted-foreground">Students placed</div>
                </div>
              </div>
            </motion.div>

            {/* Floating card — Bottom left */}
            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-6 bottom-24 rounded-2xl border border-border/50 bg-card/90 p-4 shadow-xl shadow-black/[0.08] backdrop-blur-lg"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10">
                  <Globe className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-primary">40+ Countries</div>
                  <div className="text-[11px] text-muted-foreground">Global reach</div>
                </div>
              </div>
            </motion.div>

            {/* Floating card — Bottom right */}
            <motion.div
              animate={{ y: [-4, 8, -4] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 bottom-8 rounded-2xl border border-border/50 bg-card/90 p-4 shadow-xl shadow-black/[0.08] backdrop-blur-lg"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-xs font-medium text-primary">98% Visa Success</span>
              </div>
            </motion.div>

            {/* Second image — overlapping */}
            <div className="absolute -bottom-4 -left-12 h-40 w-32 overflow-hidden rounded-2xl border-4 border-background shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=300&h=400&fit=crop"
                alt="Students studying"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
