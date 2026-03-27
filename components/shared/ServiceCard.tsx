import Link from "next/link";
import { ArrowRight, Compass, GraduationCap, FileCheck, BookOpen, Languages, Briefcase, Award } from "lucide-react";
import type { Service } from "@/lib/types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Compass, GraduationCap, FileCheck, BookOpen, Languages, Briefcase, Award,
};

export function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] || Compass;

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col rounded-2xl p-6 transition-all duration-300 hover:bg-muted"
    >
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/8 text-accent">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mb-2 text-[15px] font-semibold text-primary">{service.title}</h3>
      <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
        {service.shortDescription}
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-accent opacity-0 transition-all duration-300 group-hover:opacity-100">
        Learn more <ArrowRight className="h-3 w-3" />
      </span>
    </Link>
  );
}
