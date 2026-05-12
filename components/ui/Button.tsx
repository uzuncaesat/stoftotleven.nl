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

const base =
  "group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full px-7 py-3.5 text-[0.78rem] font-medium uppercase tracking-[0.18em] transition-colors duration-500 ease-out-expo";

const variants: Record<Variant, string> = {
  solid:
    "bg-charcoal text-linen hover:text-linen [--fill:theme(colors.terracotta)]",
  outline:
    "border border-charcoal/35 text-charcoal hover:text-linen [--fill:theme(colors.charcoal)]",
  light:
    "bg-linen text-charcoal hover:text-charcoal [--fill:theme(colors.terracotta-soft)]",
  ghost:
    "text-charcoal hover:text-terracotta tracking-[0.18em]",
};

function Inner({ children, withArrow, variant }: { children: ReactNode; withArrow?: boolean; variant: Variant }) {
  return (
    <>
      {variant !== "ghost" && (
        <span
          aria-hidden
          className="absolute inset-0 -z-0 translate-y-full bg-[var(--fill)] transition-transform duration-500 ease-out-expo group-hover:translate-y-0"
        />
      )}
      <span className="relative z-10 flex items-center gap-2.5">
        {children}
        {withArrow && (
          <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-1" />
        )}
      </span>
    </>
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
      <Inner variant={variant} withArrow={withArrow}>
        {children}
      </Inner>
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
      <Inner variant={variant} withArrow={withArrow}>
        {children}
      </Inner>
    </button>
  );
}
