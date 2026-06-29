import type { ReactNode } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import MediaPanel from "@/components/shared/MediaPanel";

export default function SplitBlock({
  eyebrow,
  title,
  children,
  swatch = "straw",
  image,
  imageLabel = "Beeld volgt",
  flip = false,
  tone = "linen",
}: {
  eyebrow?: string;
  title: ReactNode;
  children: ReactNode;
  swatch?: "terracotta" | "straw" | "charcoal" | "sage" | "ink";
  image?: string;
  imageLabel?: string;
  flip?: boolean;
  tone?: "linen" | "deep" | "dark";
}) {
  const bg = tone === "deep" ? "bg-linen-deep" : tone === "dark" ? "bg-linen-dark text-linen" : "bg-linen";
  const titleC = tone === "dark" ? "text-linen" : "text-forest";
  const bodyC = tone === "dark" ? "text-linen/65" : "text-taupe";

  return (
    <section className={`relative overflow-hidden py-24 sm:py-28 md:py-32 ${bg}`}>
      <div className={`mx-auto grid w-full max-w-7xl items-center gap-12 px-6 sm:px-8 lg:gap-20 lg:px-12 ${flip ? "lg:grid-cols-[1.1fr_0.9fr]" : "lg:grid-cols-[0.9fr_1.1fr]"}`}>
        <ScrollReveal direction={flip ? "left" : "right"} className={flip ? "lg:order-2" : ""}>
          <div className="relative">
            <MediaPanel src={image} swatch={swatch} ratio="aspect-[4/5]" label={imageLabel} caption={image ? imageLabel : undefined} className="shadow-[0_40px_80px_-44px_rgba(45,74,62,0.4)]" />
            <div aria-hidden className={`tape-edge absolute -bottom-5 ${flip ? "-left-5" : "-right-5"} h-20 w-20 border ${tone === "dark" ? "border-linen/15 bg-linen-dark" : "border-forest/20 bg-linen-deep"}`} />
          </div>
        </ScrollReveal>

        <div className={flip ? "lg:order-1" : ""}>
          {eyebrow && (
            <ScrollReveal direction="up">
              <span className={`eyebrow ${tone === "dark" ? "text-linen/55" : ""}`}>{eyebrow}</span>
            </ScrollReveal>
          )}
          <ScrollReveal direction="up" delay={0.08}>
            <h2 className={`mt-5 font-display text-4xl font-light leading-[1.1] sm:text-5xl ${titleC}`}>{title}</h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.14}>
            <div className={`mt-6 space-y-5 text-[1.05rem] leading-relaxed ${bodyC}`}>{children}</div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
