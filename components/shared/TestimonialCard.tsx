import Image from "next/image";
import type { Testimonial } from "@/lib/types";
import { testimonialImages } from "@/data/images";

export function TestimonialCard({
  testimonial,
  index = 0,
}: {
  testimonial: Testimonial;
  index?: number;
}) {
  const avatar = testimonialImages[index % testimonialImages.length];

  return (
    <div className="flex h-full flex-col rounded-2xl bg-muted p-6">
      <p className="flex-1 text-sm leading-relaxed text-foreground/80">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-5 flex items-center gap-3">
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
          <Image
            src={avatar}
            alt={testimonial.studentName}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <div className="text-sm font-medium text-primary">
            {testimonial.studentName}
          </div>
          <div className="text-xs text-muted-foreground">{testimonial.course}</div>
        </div>
      </div>
    </div>
  );
}
