import type { Metadata } from "next";
import { Sofa, Sun, Armchair, Trees, Palette, Scaling, Feather } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import FeatureGrid from "@/components/shared/FeatureGrid";
import SplitBlock from "@/components/shared/SplitBlock";
import Gallery from "@/components/shared/Gallery";
import { Stagger, StaggerItem } from "@/components/ui/ScrollReveal";
import CTABanner from "@/components/shared/CTABanner";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Kussens op maat",
  description:
    "Sierkussens, zitkussens, stoelkussens en buitenkussens op maat. Jouw stof, jouw vulling, jouw maat. Stof tot Leven by Hatish — Rotterdam.",
};

const CATEGORIES = [
  { icon: Sofa, title: "Sierkussens", text: "De makkelijkste manier om een interieur op te frissen. In de stof, maat en vulling die jij wilt — met of zonder bies, rits of pompons." },
  { icon: Armchair, title: "Zitkussens", text: "Voor bankje, vensterbank of eethoek. Stevig genoeg om op te zitten, zacht genoeg om op te blijven." },
  { icon: Sun, title: "Stoelkussens", text: "Pasvorm op jouw stoelen — eetkamerstoelen, tuinstoelen, krukken. Met linten of antislip, precies op maat." },
  { icon: Trees, title: "Buitenkussens", text: "In weerbestendige, uv-stabiele stoffen die kleur houden en regen verdragen. Voor loungeset, tuinbank of boot." },
];

const PERSONALISE = [
  { icon: Palette, title: "Jouw stof", text: "Kies uit linnen, velours, bouclé, outdoorweefsels of breng je eigen stof mee — ik werk er met plezier mee." },
  { icon: Scaling, title: "Jouw maat", text: "Standaardmaten bestaan niet hier. Elk kussen wordt op de centimeter gemaakt, passend bij meubel of plek." },
  { icon: Feather, title: "Jouw vulling", text: "Dons, veren, schuim of polyester — zacht en plooibaar of stevig en vormvast. Jij bepaalt het zitgevoel." },
];

export default function KussensPage() {
  return (
    <>
      <PageHero
        eyebrow="Onze diensten — 03"
        title={<>Kussens op maat</>}
        intro="Sierkussens, zitkussens, stoelkussens of buitenkussens — het kleine maatwerk dat een ruimte afmaakt. Jouw stijl, jouw stof, jouw vulling, tot op de centimeter."
        crumbs={[{ label: "Home", href: "/" }, { label: "Kussens op maat" }]}
        swatch="sage"
        image={IMAGES.cushionsStack}
        imageLabel="Sierkussens, gestapeld"
        stats={[
          { value: "1 cm", label: "nauwkeurigheid op maat" },
          { value: "∞", label: "stof- en vullingcombinaties" },
        ]}
      />

      <SplitBlock
        eyebrow="Het idee"
        title={<>Klein gebaar, groot verschil.</>}
        swatch="straw"
        image={IMAGES.colourSwatches}
        imageLabel="Stofstalen & kleurkaarten"
        flip
      >
        <p>
          Een nieuwe set kussens verandert een kamer sneller dan je denkt. Andere kleur, andere
          structuur, een onverwacht detail — en de bank, de leesstoel of het terras voelt meteen
          fris. Het is de meest toegankelijke vorm van maatwerk die er is.
        </p>
        <p>
          En omdat alles op maat gaat, hoef je geen concessies te doen aan vorm of vulling. Een
          lange vensterbank, een ronde kruk, een hoekbank met een rare maat — het kan allemaal,
          precies passend.
        </p>
      </SplitBlock>

      <section className="relative overflow-hidden bg-linen-deep py-24 sm:py-28 md:py-32">
        <div aria-hidden className="weave-texture pointer-events-none absolute inset-0 opacity-30" />
        <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Categorieën"
            title={<>Voor binnen én buiten</>}
            intro="Sier-, zit-, stoel- en buitenkussens — particulier en voor de horeca."
            className="max-w-2xl"
          />
          <div className="mt-14">
            <FeatureGrid features={CATEGORIES} columns={4} />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-linen py-24 sm:py-28 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
            <SectionHeading
              eyebrow="Personaliseren"
              title={<>Jouw stijl, jouw stof, <span className="italic text-terracotta">jouw vulling</span>.</>}
              intro="Drie keuzes maken jouw kussen echt van jou. Geen voorraad, geen compromis."
            />
            <Stagger className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1" staggerChildren={0.12}>
              {PERSONALISE.map((p) => {
                const Icon = p.icon;
                return (
                  <StaggerItem key={p.title}>
                    <div className="flex h-full items-start gap-5 rounded-2xl border border-line bg-linen-deep p-6">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line bg-linen text-terracotta">
                        <Icon className="h-5 w-5" strokeWidth={1.4} />
                      </span>
                      <div>
                        <h3 className="font-display text-[1.4rem] leading-tight text-charcoal">{p.title}</h3>
                        <p className="mt-2 text-[0.95rem] leading-relaxed text-taupe">{p.text}</p>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-linen-deep py-24 sm:py-28 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Galerij" title={<>Stof tot inspiratie</>} intro="Kussens uit projecten in en rond Rotterdam." className="max-w-2xl" />
          <div className="mt-14">
            <Gallery
              items={[
                { label: "Sierkussens, velours + bouclé", src: IMAGES.cushionsSofa, swatch: "terracotta", ratio: "aspect-[4/5]" },
                { label: "Vensterbankkussen op maat", src: IMAGES.cushionsBench, swatch: "straw", ratio: "aspect-[4/5]" },
                { label: "Buitenkussens loungeset", src: IMAGES.cushionsOutdoor, swatch: "sage", ratio: "aspect-[4/5]" },
                { label: "Eetkamerstoelkussens", src: IMAGES.cushionsBright, swatch: "ink", ratio: "aspect-[4/5]" },
                { label: "Bootkussens, weerbestendig", src: IMAGES.boatCushions, swatch: "charcoal", ratio: "aspect-[4/5]" },
              ]}
            />
          </div>
        </div>
      </section>

      <CTABanner
        title={<>Klaar voor kussens die kloppen?</>}
        text="Vraag een offerte aan of kom langs met de maten van je meubel of plek. Stalen liggen klaar — we maken er samen iets moois van."
        primary={{ label: "Vraag een offerte aan", href: "/contact" }}
        secondary={{ label: "Bekijk maritieme bekleding", href: "/maritieme-bekleding" }}
      />
    </>
  );
}
