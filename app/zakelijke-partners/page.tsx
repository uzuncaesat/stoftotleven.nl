import type { Metadata } from "next";
import ScreenPage from "@/components/shared/ScreenPage";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Zakelijke partners",
  description:
    "Voor architecten, interieurontwerpers, stylisten, aannemers en hospitality-ondernemers — een betrouwbare uitvoeringspartner achter de schermen. White-label.",
};

const STEPS = [
  {
    step: "01",
    title: "Kennismaking",
    text: "We bespreken uw werkwijze, type projecten en wat u van een uitvoeringspartner verwacht.",
    src: IMAGES.interiorStudio,
  },
  {
    step: "02",
    title: "Offerte & planning",
    text: "Per project een heldere offerte: omvang, materiaal, planning en prijs — geen verrassingen achteraf.",
    src: IMAGES.fabricStacks,
  },
  {
    step: "03",
    title: "Uitvoering — white-label",
    text: "Inmeten, maken en monteren. U blijft het gezicht naar de klant, wij zorgen voor de uitvoering.",
    src: IMAGES.sewingHands,
  },
  {
    step: "04",
    title: "Oplevering & nazorg",
    text: "Netjes opgeleverd, op tijd. Ook na afronding blijven we bereikbaar voor de details.",
    src: IMAGES.interiorBright,
  },
];

export default function ZakelijkePartnersPage() {
  return (
    <ScreenPage
      eyebrow="Zakelijke partners · white-label"
      title="Zakelijke partners"
      intro="Voor architecten, interieurontwerpers, stylisten, aannemers en hospitality-ondernemers die een betrouwbare uitvoeringspartner zoeken achter de schermen. Wij werken white-label: u blijft het gezicht naar de klant, wij zorgen dat het werk op niveau wordt uitgevoerd."
      body="Van maatwerktextiel tot praktische ondersteuning bij inmeten, planning en oplevering — we denken mee in details, deadlines en budget."
      crumbs={[{ label: "Home", href: "/" }, { label: "Zakelijke partners" }]}
      steps={STEPS}
      cta={{ label: "Plan een zakelijk gesprek", href: "/contact" }}
      altCta={{ label: "Bespreek een samenwerking", href: "/contact" }}
      highlights={["White-label", "Maatwerk", "Eén aanspreekpunt", "Op tijd opgeleverd"]}
    />
  );
}
