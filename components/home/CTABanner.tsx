"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { AnimateIn } from "@/components/shared/AnimateIn";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      {/* Premium gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-purple-600 to-accent-dark animate-gradient" />
      <div className="noise-bg absolute inset-0" />

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-white/[0.08] blur-[60px]"
      />
      <motion.div
        animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[10%] right-[10%] h-56 w-56 rounded-full bg-white/[0.08] blur-[50px]"
      />

      <AnimateIn>
        <div className="relative mx-auto max-w-xl px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to begin?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/60">
            Book a free consultation or chat with us on WhatsApp.
            No obligations — just clear guidance.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 rounded-2xl bg-white px-8 py-4 text-sm font-bold text-primary shadow-lg shadow-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-white/20"
            >
              Book consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%2C%20I%27m%20interested%20in%20studying%20abroad.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:shadow-lg"
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
