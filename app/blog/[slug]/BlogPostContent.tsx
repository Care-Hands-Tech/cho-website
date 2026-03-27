"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { BlogPost } from "@/lib/types";
import { Container } from "@/components/shared/Container";

const categoryLabels: Record<string, string> = {
  "visa-updates": "Visa Updates",
  scholarships: "Scholarships",
  "country-guides": "Country Guides",
  "global-news": "Global News",
};

export function BlogPostContent({
  post,
  related,
}: {
  post: BlogPost;
  related: BlogPost[];
}) {
  const paragraphs = post.content
    .split(". ")
    .reduce<string[]>((acc, sentence, i, arr) => {
      const chunkSize = 3;
      if (i % chunkSize === 0) {
        acc.push(arr.slice(i, i + chunkSize).join(". "));
      }
      return acc;
    }, []);

  return (
    <article className="py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl"
        >
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-3 w-3" /> Back
          </Link>

          <span className="mb-3 inline-block text-xs text-muted-foreground">
            {categoryLabels[post.category]} &middot;{" "}
            {new Date(post.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>

          <h1 className="text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
            {post.title}
          </h1>

          <div className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 rounded-2xl bg-muted p-8 text-center">
            <h3 className="text-lg font-semibold text-primary">Need guidance?</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Our counselors can help with personalized advice.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-primary-light"
            >
              Book consultation <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-14">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Related
              </h3>
              <div className="space-y-3">
                {related.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/blog/${rp.slug}`}
                    className="block rounded-xl p-3 transition-all duration-200 hover:bg-muted"
                  >
                    <h4 className="text-sm font-medium text-primary">{rp.title}</h4>
                    <p className="mt-0.5 text-xs text-muted-foreground line-clamp-1">
                      {rp.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </Container>
    </article>
  );
}
