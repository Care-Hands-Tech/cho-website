import Link from "next/link";
import Image from "next/image";
import { mainNavItems } from "@/data/navigation";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <nav className="flex h-14 items-center justify-between rounded-2xl border border-white/[0.06] bg-background/70 px-5 shadow-lg shadow-black/20 backdrop-blur-2xl">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Care Hands Overseas Education"
              width={160}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          <div className="hidden items-center gap-0.5 lg:flex">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3.5 py-1.5 text-[13px] font-medium text-muted-foreground transition-all duration-200 hover:bg-white/[0.05] hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            <Link
              href="/contact"
              className="hidden items-center gap-1.5 rounded-xl bg-gradient-to-r from-accent to-accent-dark px-5 py-2 text-[13px] font-medium text-white shadow-md shadow-accent/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/30 sm:inline-flex"
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
