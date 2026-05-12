import type { Metadata } from "next";
import { Sun, Layers, Ruler, Wrench, PencilRuler, Sparkles } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import FeatureGrid from "@/components/shared/FeatureGrid";
import Gallery from "@/components/shared/Gallery";
import SplitBlock from "@/components/shared/SplitBlock";
import CTABanner from "@/components/shared/CTABanner";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Raamdecoratie op maat",
  description:
    "Gordijnen, vitrages, vouwgordijnen, inbetweens en rolluiken op maat. Stof tot Leven by Hatish — raamdecoratie met oog voor licht en val, Rotterdam.",
};

const TYPES = [
  { icon: Layers, title: "Gordijnen", text: "Van zware overgordijnen tot luchtige vallen — geplooid, gerimpeld of strak, in elke stof die je voor ogen hebt." },
  { icon: Sun, title: "Vitrages & inbetweens", text: "Filtert het licht, houdt de blik buiten en laat de ruimte ademen. Subtiel, maar bepalend voor de sfeer." },
  { icon: PencilRuler, title: "Vouwgordijnen", text: "Strakke, vlakke panelen die in nette plooien omhoog komen. Ideaal voor kleinere ramen en moderne interieurs." },
  { icon: Sparkles, title: "Inbetweens op maat", text: "De gulden middenweg tussen vitrage en gordijn — transparant van karakter, met de body van een gordijn." },
  { icon: Wrench, title: "Rolluiken & rails", text: "Van bediening tot bevestiging: rails, roedes en rolsystemen die passen bij het raam én bij het werk." },
  { icon: Ruler, title: "Inmeten & montage", text: "Ik kom langs, meet alles zelf in en hang het ook zelf op. Eén aanspreekpunt, van eerste maat tot laatste haak." },
];

export default function RaamdecoratiePage() {
  return (
    <>
      <PageHero
        eyebrow="Onze diensten — 01"
        title={<>Raamdecoratie</>}
        intro="Van gordijnen tot inbetweens: raamdecoratie bepaalt het licht, de akoestiek en het gevoel van een ruimte. Bij Stof tot Leven kies je je stof, ik regel de rest — inmeten, maken én monteren."
        crumbs={[{ label: "Home", href: "/" }, { label: "Raamdecoratie" }]}
        swatch="straw"
        image={IMAGES.curtainsLight}
        imageLabel="Gordijnen, inbetweens & vitrages"
        stats={[
          { value: "Op maat", label: "tot op de centimeter" },
          { value: "Incl.", label: "inmeten & montage" },
        ]}
      />

      <SplitBlock
        eyebrow="Wat het doet"
        title={<>Het raam is de lijst — de stof maakt het schilderij.</>}
        swatch="terracotta"
        image={IMAGES.fabricSamples}
        imageLabel="Stofstalen aan het raam"
        flip
      >
        <p>
          Een goed gekozen gordijn doet meer dan een raam afdekken. Het dempt geluid, houdt warmte
          binnen, stuurt het daglicht en geeft een kamer rust of juist drama. Daarom begint elk
          project met kijken: hoe valt het licht, wat is de hoogte, welke sfeer wil je?
        </p>
        <p>
          Daarna kiezen we samen de stof — van linnen en velours tot verduisterende of juist
          lichtdoorlatende weefsels. Ik maak alles op maat, monteer de rails en roedes en hang het
          op alsof het er altijd al hing.
        </p>
      </SplitBlock>

      <section className="relative overflow-hidden bg-linen-deep py-24 sm:py-28 md:py-32">
        <div aria-hidden className="weave-texture pointer-events-none absolute inset-0 opacity-30" />
        <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Mogelijkheden"
            title={<>Alles voor het raam, onder één dak</>}
            intro="Gordijnen, vitrages, vouwgordijnen, inbetweens en rolluiken — afgewerkt met aandacht voor val, plooi en bediening."
            className="max-w-2xl"
          />
          <div className="mt-14">
            <FeatureGrid features={TYPES} columns={3} />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-linen py-24 sm:py-28 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Galerij"
            title={<>Een greep uit het werk</>}
            intro="Een greep uit projecten in Rotterdamse woon- en bedrijfsruimten."
            className="max-w-2xl"
          />
          <div className="mt-14">
            <Gallery
              items={[
                { label: "Linnen overgordijnen", src: IMAGES.curtainsLiving, swatch: "straw", ratio: "aspect-[4/5]" },
                { label: "Vouwgordijn keuken", src: IMAGES.curtainsCozy, swatch: "terracotta", ratio: "aspect-[4/5]" },
                { label: "Inbetweens woonkamer", src: IMAGES.windowSeat, swatch: "sage", ratio: "aspect-[4/5]" },
                { label: "Verduisterend slaapkamer", src: IMAGES.curtainsBedroom, swatch: "charcoal", ratio: "aspect-[4/5]" },
                { label: "Vitrage erker", src: IMAGES.interiorBright, swatch: "straw", ratio: "aspect-[4/5]" },
                { label: "Velours, geplooid", src: IMAGES.curtainsLight, swatch: "ink", ratio: "aspect-[4/5]" },
              ]}
            />
          </div>
        </div>
      </section>

      <CTABanner
        title={<>Klaar voor nieuwe ramen?</>}
        text="Vraag vrijblijvend een offerte aan of plan een inmeetafspraak op locatie. Ik denk graag met je mee over stof, kleur en val."
        primary={{ label: "Vraag een offerte aan", href: "/contact" }}
        secondary={{ label: "Bekijk andere diensten", href: "/stofferen" }}
      />
    </>
  );
}
