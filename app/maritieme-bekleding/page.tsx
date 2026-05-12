import type { Metadata } from "next";
import { Sailboat, Ship, UtensilsCrossed, Building2, Droplets, Sun, ShieldCheck } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import FeatureGrid from "@/components/shared/FeatureGrid";
import SplitBlock from "@/components/shared/SplitBlock";
import Gallery from "@/components/shared/Gallery";
import CTABanner from "@/components/shared/CTABanner";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Maritieme bekleding op maat",
  description:
    "Bekleding op maat voor boten, jachten, horeca en bedrijfsruimten. Waterdicht, uv-bestendig en duurzaam. Stof tot Leven by Hatish — Rotterdam.",
};

const FOR = [
  { icon: Sailboat, title: "Boten & sloepen", text: "Zitbanken, kuipkussens, stuurstoelen en biminitops — bekleed in stoffen die zon, zout en spatwater aankunnen." },
  { icon: Ship, title: "Jachten", text: "Van salon tot zonnedek: interieur- en exterieurbekleding die het comfort van thuis combineert met de eisen van het water." },
  { icon: UtensilsCrossed, title: "Horeca", text: "Bankjes, stoelen en terraskussens die er strak uit blijven zien — dag in, dag uit, ook in weer en wind." },
  { icon: Building2, title: "Bedrijfsruimten", text: "Wachtruimtes, lobby's, vergaderzalen: maatwerkbekleding die representatief is en tegen intensief gebruik kan." },
];

const PROPS = [
  { icon: Droplets, title: "Waterdicht", text: "Weefsels en naden die vocht buitenhouden — sneldrogend, schimmelwerend en bestand tegen regen en spatwater." },
  { icon: Sun, title: "Uv-bestendig", text: "Kleurvaste, uv-gestabiliseerde stoffen die niet verschieten in fel zonlicht. Jaar na jaar dezelfde tint." },
  { icon: ShieldCheck, title: "Duurzaam & sterk", text: "Slijtvaste materialen en stevige afwerking, gemaakt om jarenlang intensief gebruik te doorstaan." },
];

export default function MaritiemePage() {
  return (
    <>
      <PageHero
        eyebrow="Onze diensten — 04"
        title={<>Maritieme bekleding</>}
        intro="Van boten tot horeca, van jachtinterieur tot bedrijfsruimte — bekleding op maat die tegen de elementen kan. Waterdicht, uv-bestendig en duurzaam, met dezelfde aandacht als binnen."
        crumbs={[{ label: "Home", href: "/" }, { label: "Maritieme bekleding" }]}
        swatch="ink"
        image={IMAGES.boatInterior}
        imageLabel="Bootkussens & kuipbekleding"
        stats={[
          { value: "Waterdicht", label: "& sneldrogend" },
          { value: "Uv-stabiel", label: "kleurvast in de zon" },
        ]}
      />

      <SplitBlock
        eyebrow="De uitdaging"
        title={<>Binnenkwaliteit, gemaakt voor buiten.</>}
        swatch="charcoal"
        image={IMAGES.fabricRolls}
        imageLabel="Weerbestendige stoffen"
      >
        <p>
          Op het water gelden andere regels. Zout, zon, vocht en intensief gebruik vragen om
          stoffen en afwerkingen die daar tegen kunnen — zonder dat het er industrieel uitziet.
          Dat is precies de combinatie waar maritieme bekleding om draait.
        </p>
        <p>
          Ik werk met gespecialiseerde outdoor- en marinetextielen: kleurvast, waterafstotend,
          schimmelwerend en sterk. Maar dan afgewerkt zoals je dat van een atelier verwacht —
          strakke naden, nette ritsen, een pasvorm die klopt.
        </p>
      </SplitBlock>

      <section className="relative overflow-hidden bg-linen-deep py-24 sm:py-28 md:py-32">
        <div aria-hidden className="weave-texture pointer-events-none absolute inset-0 opacity-30" />
        <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Voor wie"
            title={<>Boten, jachten, horeca &amp; bedrijven</>}
            intro="Particuliere bootbezitters, werven, restaurants en ondernemers — overal waar bekleding meer moet kunnen verdragen."
            className="max-w-2xl"
          />
          <div className="mt-14">
            <FeatureGrid features={FOR} columns={4} />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-linen-dark py-24 text-linen sm:py-28 md:py-32">
        <div aria-hidden className="weave-texture pointer-events-none absolute inset-0 opacity-[0.06]" />
        <div aria-hidden className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-terracotta/20 blur-3xl" />
        <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Eigenschappen"
            title={<>Gemaakt om de elementen te trotseren</>}
            intro="Drie eigenschappen die maritiem maatwerk onderscheiden van gewone bekleding."
            tone="light"
            className="max-w-2xl"
          />
          <div className="mt-14">
            <FeatureGrid features={PROPS} columns={3} tone="light" />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-linen py-24 sm:py-28 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Projecten" title={<>Een greep uit het werk</>} intro="Projecten op het water en in de horeca." className="max-w-2xl" />
          <div className="mt-14">
            <Gallery
              items={[
                { label: "Sloep, kuipkussens", src: IMAGES.sailboat, swatch: "ink", ratio: "aspect-[4/5]" },
                { label: "Jachtsalon, herbekleed", src: IMAGES.yachtDeck, swatch: "charcoal", ratio: "aspect-[4/5]" },
                { label: "Terrasbankje horeca", src: IMAGES.cushionsBench, swatch: "terracotta", ratio: "aspect-[4/5]" },
                { label: "Stuurstoel, marinevinyl", src: IMAGES.boatCushions, swatch: "sage", ratio: "aspect-[4/5]" },
                { label: "Biminitop & zonnescherm", src: IMAGES.boatHarbour, swatch: "straw", ratio: "aspect-[4/5]" },
              ]}
            />
          </div>
        </div>
      </section>

      <CTABanner
        title={<>Een project op of bij het water?</>}
        text="Neem contact op voor een vrijblijvend gesprek. Ik kom graag kijken — aan de kade, op de werf of in je zaak — en denk mee over stof, vorm en afwerking."
        primary={{ label: "Neem contact op", href: "/contact" }}
        secondary={{ label: "Voor zakelijke partners", href: "/zakelijke-partners" }}
      />
    </>
  );
}
