import type { ReactNode } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ButtonLink } from "@/components/ui/Button";

export default function CTABanner({
  title,
  text,
  primary,
  secondary,
}: {
  title: ReactNode;
  text: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="relative overflow-hidden bg-linen-dark py-20 text-linen sm:py-24">
      <div aria-hidden className="weave-texture pointer-events-none absolute inset-0 opacity-[0.07]" />
      <div aria-hidden className="pattern-grid-light pointer-events-none absolute inset-0 opacity-50" />
      <div aria-hidden className="stitch-light absolute inset-x-0 top-0 h-px opacity-60" />
      <div aria-hidden className="stitch-light absolute inset-x-0 bottom-0 h-px opacity-60" />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center px-6 text-center sm:px-8">
        <ScrollReveal direction="up">
          <span className="font-script text-3xl text-sage" translate="no">Liefs, Hatish</span>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.08}>
          <h2 className="mt-3 font-display text-4xl font-light leading-[1.1] text-linen sm:text-5xl md:text-[3.6rem]">
            {title}
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.14}>
          <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-linen/65">{text}</p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.2}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <ButtonLink href={primary.href} variant="light" withArrow>
              {primary.label}
            </ButtonLink>
            {secondary && (
              <ButtonLink href={secondary.href} variant="ghost" className="text-linen hover:text-terracotta-soft">
                {secondary.label}
              </ButtonLink>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
