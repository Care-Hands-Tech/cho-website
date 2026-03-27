"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { AnimateIn } from "@/components/shared/AnimateIn";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-purple-600 to-accent-dark animate-gradient" />
      <div className="noise-bg absolute inset-0" />

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[10%] top-[20%] h-64 w-64 rounded-full bg-white/10 blur-3xl"
      />
      <motion.div
        animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[10%] right-[10%] h-48 w-48 rounded-full bg-white/10 blur-3xl"
      />

      <AnimateIn>
        <div className="relative mx-auto max-w-xl px-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Ready to begin?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/60">
            Book a free consultation or chat with us on WhatsApp.
            No obligations — just clear guidance.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-medium text-primary transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-white/20"
            >
              Book consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%27m%20interested%20in%20studying%20abroad.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp us
            </a>
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}
