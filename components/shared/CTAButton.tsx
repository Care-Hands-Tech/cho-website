import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-light hover:shadow-lg hover:shadow-accent/15",
  secondary:
    "bg-muted text-primary hover:bg-border",
  ghost:
    "text-primary hover:bg-muted",
};

export function CTAButton({
  children,
  href,
  variant = "primary",
  className,
  onClick,
  type,
  disabled,
}: {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  const styles = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300",
    variantStyles[variant],
    disabled && "pointer-events-none opacity-40",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type || "button"}
      className={styles}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
