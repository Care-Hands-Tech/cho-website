"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { testimonials } from "@/data/testimonials";
import { testimonialImages } from "@/data/images";
import { Container } from "@/components/shared/Container";
import { AnimateIn } from "@/components/shared/AnimateIn";

export function SuccessStoriesPreview() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section className="relative overflow-hidden py-32">
      <div className="grid-bg absolute inset-0" />

      <Container className="relative">
        <AnimateIn variant="blurIn">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-xs font-medium uppercase tracking-widest text-accent">
                Testimonials
              </span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                Success stories
              </h2>
            </div>
            <div className="hidden items-center gap-2 sm:flex">
              <button
                onClick={() => emblaApi?.scrollPrev()}
                disabled={!canPrev}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 bg-card transition-all duration-200 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 disabled:opacity-30"
                aria-label="Previous"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => emblaApi?.scrollNext()}
                disabled={!canNext}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 bg-card transition-all duration-200 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 disabled:opacity-30"
                aria-label="Next"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <div ref={emblaRef} className="mt-12 overflow-hidden">
            <div className="-ml-4 flex">
              {testimonials.slice(0, 8).map((t, i) => (
                <div
                  key={t.id}
                  className="min-w-0 flex-[0_0_100%] pl-4 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <div className="flex h-full flex-col rounded-2xl border border-border/50 bg-card p-6 transition-all duration-500 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5">
                    {/* Stars */}
                    <div className="mb-4 flex gap-0.5 text-amber-400">
                      {[...Array(5)].map((_, j) => (
                        <svg key={j} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="flex-1 text-sm leading-relaxed text-foreground/70">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="mt-5 flex items-center gap-3 border-t border-border/50 pt-5">
                      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
                        <Image
                          src={testimonialImages[i % testimonialImages.length]}
                          alt={t.studentName}
                          fill
                          unoptimized
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-primary">{t.studentName}</div>
                        <div className="text-xs text-muted-foreground">{t.course}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>

        <AnimateIn className="mt-10 text-center">
          <Link
            href="/success-stories"
            className="group inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-dark"
          >
            View all stories
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </AnimateIn>
      </Container>
    </section>
  );
}
