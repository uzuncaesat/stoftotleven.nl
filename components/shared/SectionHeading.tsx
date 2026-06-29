import type { ReactNode } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

type Align = "left" | "center";

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "ink",
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: Align;
  tone?: "ink" | "light";
  className?: string;
}) {
  const alignCls = align === "center" ? "items-center text-center" : "items-start text-left";
  const titleColor = tone === "light" ? "text-linen" : "text-forest";
  const introColor = tone === "light" ? "text-linen/70" : "text-taupe";

  return (
    <div className={`flex flex-col ${alignCls} ${className}`}>
      <ScrollReveal direction="up">
        <span className={`eyebrow ${tone === "light" ? "text-linen/60" : ""}`}>{eyebrow}</span>
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.08}>
        <h2 className={`mt-5 font-display text-4xl font-light leading-[1.08] sm:text-5xl md:text-[3.4rem] ${titleColor}`}>
          {title}
        </h2>
      </ScrollReveal>
      {intro && (
        <ScrollReveal direction="up" delay={0.16}>
          <p className={`mt-6 max-w-prose text-[1.05rem] leading-relaxed ${introColor}`}>
            {intro}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
