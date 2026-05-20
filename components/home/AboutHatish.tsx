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
      <div aria-hidden className="pointer-events-none absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-sage/25 blur-3xl" />

      <div ref={ref} className="mx-auto grid w-full max-w-7xl gap-14 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 lg:px-12">
        {/* image side */}
        <ScrollReveal direction="right">
          <div className="relative">
            <motion.div style={{ y: yImg }}>
              <MediaPanel
                video="/videos/hatish-atelier.mp4"
                poster={IMAGES.atelierPortrait}
                alt="Hatish aan het werk in haar atelier op de Kleiweg"
                swatch="sage"
                ratio="aspect-[4/3] sm:aspect-[4/5]"
                caption="In het atelier — Kleiweg, Rotterdam"
                className="shadow-[0_40px_80px_-40px_rgba(45,74,62,0.45)]"
              />
            </motion.div>
            <div aria-hidden className="absolute -bottom-7 -right-7 hidden rotate-[-4deg] rounded-2xl border border-line bg-linen px-6 py-5 shadow-lg sm:block">
              <p className="font-script text-3xl text-forest" translate="no">
                Liefs, <span className="notranslate">Hatish</span>
              </p>
            </div>
            <div aria-hidden className="absolute -left-5 -top-5 h-20 w-20 rounded-2xl border border-line bg-linen-deep" />
          </div>
        </ScrollReveal>

        {/* story side */}
        <div>
          <ScrollReveal direction="left">
            <span className="eyebrow" translate="no">
              Over <span className="notranslate">Hatish</span>
            </span>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={0.08}>
            <h2 className="mt-5 font-display text-4xl leading-[1.1] text-forest sm:text-5xl md:text-[3.4rem]">
              Dochter van een kleermaker — opgegroeid tussen{" "}
              <span className="italic text-sage">naald, draad en verhalen</span>.
            </h2>
          </ScrollReveal>

          <div className="mt-7 space-y-5 text-[1.05rem] leading-relaxed text-forest/75">
            <ScrollReveal direction="left" delay={0.14}>
              <p>
                Ik ben{" "}
                <span className="notranslate text-forest" translate="no">
                  Hatice Göktaş Uzunca
                </span>{" "}
                — voor iedereen hier gewoon{" "}
                <span className="notranslate text-forest" translate="no">
                  Hatish
                </span>
                . Al meer dan twintig jaar werk ik aan de Kleiweg in Rotterdam,
                omringd door stoffen, het zachte gezoem van de naaimachine en het
                geduld dat handwerk vraagt.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.2}>
              <p>
                Bij{" "}
                <span className="notranslate text-forest" translate="no">
                  Stof tot Leven
                </span>{" "}
                gaat het nooit alleen om gordijnen of stoffering. Het gaat om
                aandacht. Om luisteren. Om aanvoelen wat een ruimte — en de mens
                erin — écht nodig heeft. Daarom bent u hier geen &ldquo;klant&rdquo;,
                maar een vertrouwd gezicht.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.26}>
              <p className="border-l-2 border-sage/60 pl-5 font-display text-2xl italic leading-snug text-forest">
                &ldquo;Mijn werk is wensen vertalen naar iets tastbaars: eerlijke,
                duurzame textiele oplossingen die een ruimte warm, comfortabel en
                echt van uzelf laten voelen.&rdquo;
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
