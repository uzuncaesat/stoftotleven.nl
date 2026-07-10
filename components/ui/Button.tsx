import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type Variant = "solid" | "outline" | "ghost" | "light";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  withArrow?: boolean;
};

// Quiet corporate button — square corners, single-color transitions.
const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-none px-7 py-3.5 text-[0.74rem] font-medium uppercase tracking-[0.18em] transition-colors duration-300";

const variants: Record<Variant, string> = {
  solid: "bg-ink text-linen hover:bg-forest-soft",
  outline: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-linen",
  light: "bg-linen text-ink hover:bg-linen-deep",
  ghost: "text-ink hover:opacity-70",
};

function Inner({ children, withArrow }: { children: ReactNode; withArrow?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      {children}
      {withArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </span>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "solid",
  className = "",
  withArrow = false,
}: CommonProps & { href: string }) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      <Inner withArrow={withArrow}>{children}</Inner>
    </Link>
  );
}

export function Button({
  children,
  variant = "solid",
  className = "",
  withArrow = false,
  type = "button",
  disabled,
}: CommonProps & { type?: "button" | "submit"; disabled?: boolean }) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${className} disabled:cursor-not-allowed disabled:opacity-60`}
    >
      <Inner withArrow={withArrow}>{children}</Inner>
    </button>
  );
}
