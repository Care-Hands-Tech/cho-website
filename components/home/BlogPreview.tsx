"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import { blogPlaceholders } from "@/data/images";
import { Container } from "@/components/shared/Container";
import { AnimateIn } from "@/components/shared/AnimateIn";

const categoryLabels: Record<string, string> = {
  "visa-updates": "Visa",
  scholarships: "Scholarships",
  "country-guides": "Guides",
  "global-news": "News",
};

export function BlogPreview() {
  const posts = blogPosts.slice(0, 3);

  return (
    <section className="relative overflow-hidden py-32">
      <div className="dot-bg absolute inset-0" />

      <Container className="relative">
        <AnimateIn variant="blurIn">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-xs font-medium uppercase tracking-widest text-accent">
                Blog
              </span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                Latest insights
              </h2>
            </div>
            <Link
              href="/blog"
              className="group hidden items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-dark sm:inline-flex"
            >
              All articles
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </AnimateIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-500 hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={blogPlaceholders[i]}
                    alt={post.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute bottom-3 left-3 rounded-lg bg-white/90 px-2.5 py-0.5 text-[11px] font-medium text-primary backdrop-blur-sm">
                    {categoryLabels[post.category]}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-[11px] text-muted-foreground">
                    {new Date(post.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <h3 className="mt-2 text-[15px] font-semibold leading-snug text-primary transition-colors group-hover:text-accent">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-xs text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-accent opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Read <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
