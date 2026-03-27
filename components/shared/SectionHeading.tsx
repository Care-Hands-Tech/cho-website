import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  className,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("mb-14", centered && "text-center", className)}>
      <h2 className="text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}
