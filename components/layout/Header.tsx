import Link from "next/link";
import { mainNavItems } from "@/data/navigation";
import { Container } from "@/components/shared/Container";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <nav className="flex h-14 items-center justify-between rounded-2xl border border-white/10 bg-white/70 px-5 shadow-lg shadow-black/[0.03] backdrop-blur-xl">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-dark text-[10px] font-bold text-white">
              CH
            </div>
            <span className="text-sm font-semibold tracking-tight text-primary">
              Care Hands
            </span>
          </Link>

          <div className="hidden items-center gap-0.5 lg:flex">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-1.5 text-[13px] text-muted-foreground transition-all duration-200 hover:bg-black/[0.04] hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-[13px] font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 sm:inline-flex"
            >
              Book Consultation
            </Link>
            <MobileNav />
          </div>
        </nav>
      </div>
    </header>
  );
}
