import Link from "next/link";
import { Container } from "./Container";

interface Crumb {
  label: string;
  href?: string;
}

export function BreadcrumbNav({ items }: { items: Crumb[] }) {
  return (
    <div className="border-b border-border py-3">
      <Container>
        <nav className="flex items-center gap-1.5 text-xs text-muted-foreground" aria-label="Breadcrumb">
          <Link href="/" className="transition-colors hover:text-primary">Home</Link>
          {items.map((item, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <span className="text-border">/</span>
              {item.href ? (
                <Link href={item.href} className="transition-colors hover:text-primary">
                  {item.label}
                </Link>
              ) : (
                <span className="text-primary">{item.label}</span>
              )}
            </span>
          ))}
        </nav>
      </Container>
    </div>
  );
}
