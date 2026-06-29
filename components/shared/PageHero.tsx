import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import ScrollReveal, { Stagger, StaggerItem } from "@/components/ui/ScrollReveal";
import MediaPanel from "@/components/shared/MediaPanel";

type Crumb = { label: string; href?: string };

export default function PageHero({
  eyebrow,
  title,
  intro,
  crumbs,
  swatch = "straw",
  image,
  imageLabel = "Beeld volgt",
  stats,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  crumbs: Crumb[];
  swatch?: "terracotta" | "straw" | "charcoal" | "sage" | "ink";
  image?: string;
  imageLabel?: string;
  stats?: { value: string; label: string }[];
}) {
  return (
    <header className="relative overflow-hidden bg-linen-deep pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div aria-hidden className="weave-texture pointer-events-none absolute inset-0 opacity-40" />
      <div aria-hidden className="pattern-grid pointer-events-none absolute inset-0 opacity-50" />
      <div aria-hidden className="stitch-soft absolute inset-x-0 bottom-0 h-px" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-6 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-20 lg:px-12">
        <div>
          <ScrollReveal direction="up">
            <nav aria-label="Kruimelpad" className="flex flex-wrap items-center gap-1.5 text-[0.7rem] uppercase tracking-[0.18em] text-taupe">
              {crumbs.map((c, i) => (
                <span key={c.label} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight className="h-3 w-3 text-line" />}
                  {c.href ? (
                    <Link href={c.href} className="link-underline hover:text-charcoal">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-charcoal">{c.label}</span>
                  )}
                </span>
              ))}
            </nav>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.06}>
            <span className="eyebrow mt-8">{eyebrow}</span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.12}>
            <h1 className="mt-5 font-display text-[2.7rem] font-light leading-[1.04] text-forest sm:text-6xl md:text-[4.4rem]">
              {title}
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="mt-7 max-w-prose text-[1.08rem] leading-relaxed text-taupe">{intro}</p>
          </ScrollReveal>

          {stats && (
            <Stagger className="mt-12 flex flex-wrap gap-x-12 gap-y-8" staggerChildren={0.1}>
              {stats.map((s) => (
                <StaggerItem key={s.label}>
                  <div>
                    <div className="font-display text-4xl text-forest">{s.value}</div>
                    <div className="mt-1 text-[0.7rem] uppercase tracking-[0.2em] text-taupe">{s.label}</div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          )}
        </div>

        <ScrollReveal direction="left" delay={0.15}>
          <div className="relative">
            <MediaPanel
              src={image}
              swatch={swatch}
              ratio="aspect-[4/5]"
              label={imageLabel}
              caption={image ? imageLabel : undefined}
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="shadow-[0_40px_80px_-40px_rgba(43,41,37,0.4)]"
            />
            <div aria-hidden className="tape-edge absolute -bottom-6 -left-6 h-24 w-24 border border-forest/20 bg-linen sm:h-28 sm:w-28" />
          </div>
        </ScrollReveal>
      </div>
    </header>
  );
}
