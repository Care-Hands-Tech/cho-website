import Link from "next/link";
import { Container } from "@/components/shared/Container";

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center py-20">
      <Container>
        <div className="mx-auto max-w-sm text-center">
          <div className="mb-6 text-7xl font-semibold text-border">404</div>
          <h1 className="text-xl font-semibold text-primary">Page not found</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Link
              href="/"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-accent-light"
            >
              Go home
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-muted px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-border"
            >
              Contact us
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
