"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import MediaPanel from "@/components/shared/MediaPanel";
import { ButtonLink } from "@/components/ui/Button";
import { IMAGES } from "@/lib/images";

export default function AboutHatish() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], ["8%", reduce ? "8%" : "-8%"]);

  return (
    <section id="over-hatish" className="relative overflow-hidden bg-linen py-24 sm:py-28 md:py-36">
      <div aria-hidden className="pointer-events-none absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-straw/30 blur-3xl" />

      <div ref={ref} className="mx-auto grid w-full max-w-7xl gap-14 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 lg:px-12">
        {/* image side — slides in from left */}
        <ScrollReveal direction="right">
          <div className="relative">
            <motion.div style={{ y: yImg }}>
              <MediaPanel
                video="/videos/hatish-atelier.mp4"
                poster={IMAGES.atelierPortrait}
                alt="Hatish aan het werk in haar atelier op de Kleiweg"
                swatch="terracotta"
                ratio="aspect-[4/3] sm:aspect-[4/5]"
                caption="In het atelier — Kleiweg, Rotterdam"
                className="shadow-[0_40px_80px_-40px_rgba(43,41,37,0.45)]"
              />
            </motion.div>
            <div aria-hidden className="absolute -bottom-7 -right-7 hidden rotate-[-4deg] rounded-2xl border border-line bg-linen px-6 py-5 shadow-lg sm:block">
              <p className="font-script text-3xl text-terracotta">Liefs, Hatish</p>
            </div>
            <div aria-hidden className="absolute -left-5 -top-5 h-20 w-20 rounded-2xl border border-line bg-linen-deep" />
          </div>
        </ScrollReveal>

        {/* story side — slides in from right */}
        <div>
          <ScrollReveal direction="left">
            <span className="eyebrow">Over Hatish</span>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={0.08}>
            <h2 className="mt-5 font-display text-4xl leading-[1.1] text-charcoal sm:text-5xl md:text-[3.4rem]">
              Dochter van een kleermaker — opgegroeid tussen{" "}
              <span className="italic text-terracotta">naald, draad en verhalen</span>.
            </h2>
          </ScrollReveal>

          <div className="mt-7 space-y-5 text-[1.05rem] leading-relaxed text-taupe">
            <ScrollReveal direction="left" delay={0.14}>
              <p>
                Ik ben <span className="text-charcoal">Hatice Göktaş Uzunca</span> — voor iedereen
                gewoon <span className="text-charcoal">Hatish</span>. Al meer dan twintig jaar ben ik
                actief op de Kleiweg in Rotterdam. Het vak heb ik niet geleerd, ik ben erin
                opgegroeid: bij mijn vader, de kleermaker, tussen stoffen, een tikkende naaimachine
                en het geduld dat handwerk vraagt.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.2}>
              <p>
                Bij Stof tot Leven gaat het niet alleen om stofferen of gordijnen. Het gaat om
                aandacht. Om luisteren. Om voelen wat een ruimte — en de mens erin — nodig heeft.
                Daarom word je hier niet als klant ontvangen, maar als bekende.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.26}>
              <p className="border-l-2 border-terracotta/60 pl-5 font-display text-2xl italic leading-snug text-charcoal">
                &ldquo;Mijn werk is wensen vertalen naar iets tastbaars, iets moois, iets echts.&rdquo;
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up" delay={0.3}>
            <div className="mt-10">
              <ButtonLink href="/contact" variant="outline" withArrow>
                Kom langs op de Kleiweg
              </ButtonLink>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
