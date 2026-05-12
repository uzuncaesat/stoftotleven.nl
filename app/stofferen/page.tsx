import type { Metadata } from "next";
import { Armchair, Sofa, Footprints, Hammer, Recycle } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import FeatureGrid from "@/components/shared/FeatureGrid";
import ProcessTimeline from "@/components/shared/ProcessTimeline";
import SplitBlock from "@/components/shared/SplitBlock";
import Gallery from "@/components/shared/Gallery";
import CTABanner from "@/components/shared/CTABanner";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Stofferen & meubelstoffering",
  description:
    "Fauteuils, banken, eetkamerstoelen en voetenbankjes ambachtelijk opnieuw stofferen. Stof tot Leven by Hatish — oog voor detail en duurzaamheid, Rotterdam.",
};

const WHAT = [
  { icon: Armchair, title: "Fauteuils & relaxstoelen", text: "Een geliefde fauteuil verdient geen afdankplek. Nieuwe vulling, strakke stof, en hij zit weer als de eerste dag." },
  { icon: Sofa, title: "Banken", text: "Van klassiek tot modern: banken opnieuw bekleed, kussens opnieuw gevuld, naden weer kaarsrecht." },
  { icon: Armchair, title: "Eetkamerstoelen", text: "Een set van zes in één lijn — zittingen en ruggen herstoffeerd in een stof die tegen dagelijks gebruik kan." },
  { icon: Footprints, title: "Voetenbankjes & poefs", text: "Klein maar fijn. Het detail dat een zithoek afmaakt, opnieuw bekleed in dezelfde of een contrasterende stof." },
  { icon: Hammer, title: "Antiek & erfstukken", text: "Stukken met geschiedenis behandel ik met respect — passend in stijl, sterk genoeg voor de toekomst." },
  { icon: Recycle, title: "Reparatie & opvulling", text: "Doorgezakte vering, versleten schuim, een losse naad: vaak is een meubel met klein werk al gered." },
];

const STEPS = [
  { title: "Adviesgesprek", text: "We kijken samen naar het meubel, je wensen en het gebruik. Ik adviseer over stof, vulling en wat haalbaar is." },
  { title: "Stoffen kiezen", text: "Met stalen in de hand kies je kleur, structuur en sterkte. Ik denk mee over wat past bij ruimte en budget." },
  { title: "Vakmanschap", text: "In het atelier wordt het meubel gestript, hersteld, opnieuw opgevuld en strak bekleed — met de hand afgewerkt." },
  { title: "Oplevering", text: "Je meubel komt terug zoals afgesproken: schoon, stevig en mooi. Klaar voor de volgende twintig jaar." },
];

export default function StofferenPage() {
  return (
    <>
      <PageHero
        eyebrow="Onze diensten — 02"
        title={<>Stofferen</>}
        intro="Van fauteuil tot eetkamerstoel — meubels met een verhaal verdienen een tweede leven. Ambachtelijk gestript, hersteld en opnieuw bekleed, met oog voor detail en duurzaamheid."
        crumbs={[{ label: "Home", href: "/" }, { label: "Stofferen" }]}
        swatch="terracotta"
        image={IMAGES.armchairYellow}
        imageLabel="Fauteuil in het atelier"
        stats={[
          { value: "Ambacht", label: "met de hand afgewerkt" },
          { value: "Duurzaam", label: "behouden boven vervangen" },
        ]}
      />

      <SplitBlock
        eyebrow="Waarom stofferen"
        title={<>Niet vervangen — herwaarderen.</>}
        swatch="straw"
        image={IMAGES.armchairDetail}
        imageLabel="Strippen & opnieuw opvullen"
      >
        <p>
          Een goed meubel is gemaakt om mee te gaan. Het frame, de constructie, het comfort —
          dat zit vaak nog prima. Wat versleten is, is de buitenkant: de stof, de vulling, een
          enkele veer. Precies dat is te herstellen.
        </p>
        <p>
          Opnieuw stofferen is daarom niet alleen mooier dan nieuw kopen, het is ook duurzamer en
          vaak persoonlijker. Je houdt het stuk dat je kent, in een stof die je zelf koos — gemaakt
          om er weer jaren tegenaan te kunnen.
        </p>
      </SplitBlock>

      <section className="relative overflow-hidden bg-linen-deep py-24 sm:py-28 md:py-32">
        <div aria-hidden className="weave-texture pointer-events-none absolute inset-0 opacity-30" />
        <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Wat kan er gestoffeerd worden"
            title={<>Bijna alles waar je op zit</>}
            intro="Fauteuils, banken, eetkamerstoelen, voetenbankjes en erfstukken — particulier en zakelijk."
            className="max-w-2xl"
          />
          <div className="mt-14">
            <FeatureGrid features={WHAT} columns={3} />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-linen py-24 sm:py-28 md:py-32">
        <div aria-hidden className="pointer-events-none absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-terracotta/8 blur-3xl" />
        <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Het proces"
            title={<>Van eerste gesprek tot oplevering</>}
            intro="Vier overzichtelijke stappen — je weet steeds waar je aan toe bent."
            className="max-w-2xl"
          />
          <div className="mt-16">
            <ProcessTimeline steps={STEPS} />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-linen-deep py-24 sm:py-28 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Galerij" title={<>Voor &amp; na</>} intro="Meubels die een tweede leven kregen — uit Rotterdamse huiskamers." className="max-w-2xl" />
          <div className="mt-14">
            <Gallery
              items={[
                { label: "Fauteuil, velours okergeel", src: IMAGES.armchairYellow, swatch: "terracotta", ratio: "aspect-[4/5]" },
                { label: "Eetkamerstoelen, set van 6", src: IMAGES.diningChairs, swatch: "sage", ratio: "aspect-[4/5]" },
                { label: "Bank, linnenmix", src: IMAGES.sofaCushioned, swatch: "straw", ratio: "aspect-[4/5]" },
                { label: "Art-decostoel, hersteld", src: IMAGES.loungeChair, swatch: "ink", ratio: "aspect-[4/5]" },
                { label: "Voetenbank, contraststof", src: IMAGES.footstool, swatch: "charcoal", ratio: "aspect-[4/5]" },
                { label: "Oorfauteuil, klassiek", src: IMAGES.sofaClassic, swatch: "straw", ratio: "aspect-[4/5]" },
              ]}
            />
          </div>
        </div>
      </section>

      <CTABanner
        title={<>Een meubel dat een tweede leven verdient?</>}
        text="Maak een afspraak voor een adviesgesprek. Neem gerust een foto mee — dan kunnen we meteen aan de slag met stof en mogelijkheden."
        primary={{ label: "Maak een afspraak", href: "/contact" }}
        secondary={{ label: "Bekijk kussens op maat", href: "/kussens-op-maat" }}
      />
    </>
  );
}
