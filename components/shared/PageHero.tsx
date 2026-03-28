"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "./Container";

export function PageHero({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle?: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-card pt-32 pb-20 sm:pb-28">
      {image && (
        <>
          <Image src={image} alt="" fill unoptimized className="object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-card/80 to-card" />
        </>
      )}

      <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.08] blur-[80px]" />
      <div className="noise-bg absolute inset-0" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {subtitle}
            </p>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
