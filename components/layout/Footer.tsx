import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/shared/Container";

const links = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Destinations", href: "/study-destinations" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "Instagram", href: siteConfig.social.instagram },
  { label: "LinkedIn", href: siteConfig.social.linkedin },
  { label: "YouTube", href: siteConfig.social.youtube },
  { label: "Facebook", href: siteConfig.social.facebook },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-card">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Image
              src="/images/logo.png"
              alt="Care Hands Overseas Education"
              width={180}
              height={45}
              className="h-10 w-auto"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Trusted guidance for admissions, visas, and global careers.
              Helping students live beyond their limits since 2014.
            </p>
            <div className="mt-6 space-y-2 text-xs text-muted-foreground">
              <p>{siteConfig.phone}</p>
              <p>{siteConfig.email}</p>
              <p>{siteConfig.address}</p>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Navigation
            </h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-foreground/60 transition-colors duration-200 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Social
            </h4>
            <ul className="space-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground/60 transition-colors duration-200 hover:text-primary"
                  >
                    {s.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-200 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/[0.06]">
        <Container className="flex items-center justify-between py-6 text-[11px] text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {siteConfig.companyName}</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="transition-colors hover:text-primary">Privacy</Link>
            <Link href="/terms" className="transition-colors hover:text-primary">Terms</Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
