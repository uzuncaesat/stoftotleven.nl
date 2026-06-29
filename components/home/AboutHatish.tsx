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
      <div aria-hidden className="pattern-grid pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto mb-14 flex w-full max-w-7xl items-center gap-4 px-6 sm:px-8 lg:px-12">
        <span className="section-index">02</span>
        <span className="stitch-soft h-px flex-1" />
        <span className="text-[0.68rem] uppercase tracking-[0.26em] text-forest/55" translate="no">
          Over <span className="notranslate">Hatish</span>
        </span>
      </div>

      <div ref={ref} className="relative mx-auto grid w-full max-w-7xl gap-14 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 lg:px-12">
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
            <div aria-hidden className="absolute -bottom-7 -right-7 hidden rotate-[-3deg] border border-forest/20 bg-linen px-6 py-5 shadow-[0_24px_50px_-30px_rgba(45,74,62,0.5)] sm:block">
              <p className="font-script text-3xl text-forest" translate="no">
                Liefs, <span className="notranslate">Hatish</span>
              </p>
            </div>
            <div aria-hidden className="tape-edge absolute -left-5 -top-5 h-20 w-20 border border-forest/20 bg-linen-deep" />
          </div>
        </ScrollReveal>

        {/* story side */}
        <div>
          <ScrollReveal direction="left" delay={0.08}>
            <h2 className="font-display text-4xl font-light leading-[1.08] text-forest sm:text-5xl md:text-[3.4rem]">
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
              <p className="border-l-2 border-dashed border-sage pl-5 font-display text-2xl italic leading-snug text-forest">
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
