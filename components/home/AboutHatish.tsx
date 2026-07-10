"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import MediaPanel from "@/components/shared/MediaPanel";
import { ButtonLink } from "@/components/ui/Button";
import { IMAGES } from "@/lib/images";

export default function AboutHatish() {
  return (
    <section id="over-hatish" className="relative bg-linen py-24 sm:py-28 md:py-32">
      <div className="mx-auto grid w-full max-w-7xl gap-14 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 lg:px-12">
        {/* media side — real atelier footage */}
        <ScrollReveal direction="right">
          <MediaPanel
            video="/videos/hatish-atelier.mp4"
            poster={IMAGES.atelierPortrait}
            alt="Hatish aan het werk in haar atelier op de Kleiweg"
            swatch="sage"
            ratio="aspect-[4/3] sm:aspect-[4/5]"
            caption="In het atelier — Kleiweg, Rotterdam"
            className="shadow-[0_32px_64px_-48px_rgba(20,21,22,0.4)]"
          />
        </ScrollReveal>

        {/* story side */}
        <div>
          <ScrollReveal direction="left" delay={0.08}>
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.24em] text-taupe">
              Over Hatish
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-[1.12] tracking-[-0.02em] text-ink sm:text-4xl md:text-[2.75rem]">
              Twintig jaar vakmanschap in maatwerk textiel.
            </h2>
          </ScrollReveal>

          <div className="mt-7 space-y-5 text-[1.02rem] leading-relaxed text-taupe">
            <ScrollReveal direction="left" delay={0.14}>
              <p>
                <span className="notranslate font-medium text-ink" translate="no">
                  Hatice Göktaş Uzunca
                </span>{" "}
                — <span className="notranslate" translate="no">Hatish</span> —
                leidt het atelier aan de Kleiweg in Rotterdam. Opgegroeid in het
                vak als dochter van een kleermaker, werkt zij al meer dan twintig
                jaar aan raamdecoratie, stoffering en maatwerkbekleding voor
                woningen, bedrijven en schepen.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.2}>
              <p>
                Elk project — van een enkel gordijn tot de volledige aankleding
                van een horecazaak — wordt persoonlijk opgemeten, in eigen
                atelier gemaakt en vakkundig geplaatst. Eén aanspreekpunt, van
                eerste advies tot oplevering.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.26}>
              <p className="border-l border-ink/20 pl-5 text-[1.05rem] font-medium leading-relaxed text-ink">
                &ldquo;Mijn werk is wensen vertalen naar duurzame, tastbare
                oplossingen — precies passend bij de ruimte en het gebruik.&rdquo;
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up" delay={0.3}>
            <div className="mt-10">
              <ButtonLink href="/contact" variant="outline" withArrow>
                Maak kennis met het atelier
              </ButtonLink>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
