import type { ReactNode } from "react";

type Tone = "linen" | "deep" | "dark";

const toneCls: Record<Tone, string> = {
  linen: "bg-linen text-charcoal",
  deep: "bg-linen-deep text-charcoal",
  dark: "bg-linen-dark text-linen",
};

/**
 * Standard full-bleed section shell: consistent vertical rhythm,
 * optional anchor id, tone background. Content reveals are handled
 * by ScrollReveal inside.
 */
export default function AnimatedSection({
  children,
  id,
  tone = "linen",
  className = "",
  innerClassName = "",
  fullBleed = false,
}: {
  children: ReactNode;
  id?: string;
  tone?: Tone;
  className?: string;
  innerClassName?: string;
  fullBleed?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden py-24 sm:py-28 md:py-36 ${toneCls[tone]} ${className}`}
    >
      <div className={fullBleed ? innerClassName : `mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 ${innerClassName}`}>
        {children}
      </div>
    </section>
  );
}
