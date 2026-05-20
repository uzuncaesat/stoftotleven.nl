import type { Metadata } from "next";
import ScreenPage from "@/components/shared/ScreenPage";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Raamdecoratie op maat",
  description:
    "Raamdecoratie op maat die rust, sfeer en functionaliteit samenbrengt. Stof tot Leven by Hatish — van stofkeuze tot plaatsing, Rotterdam.",
};

const STEPS = [
  {
    step: "01",
    title: "Inmeting bij u thuis",
    text: "We meten elk raam precies in en kijken naar lichtval, hoogte en de sfeer van de ruimte.",
    src: IMAGES.windowSeat,
  },
  {
    step: "02",
    title: "Stofkeuze & advies",
    text: "Linnen, velours, vitrage of verduisterend — we kiezen samen wat past bij interieur en gebruik.",
    src: IMAGES.fabricSamples,
  },
  {
    step: "03",
    title: "Maken in het atelier",
    text: "Elk gordijn wordt op maat gemaakt: plooien, zoom en val handmatig afgewerkt.",
    src: IMAGES.sewingHands,
  },
  {
    step: "04",
    title: "Afwerking & plaatsing",
    text: "Rails, roedes en bediening — wij hangen het op alsof het er altijd al hing.",
    src: IMAGES.curtainsLight,
  },
];

export default function RaamdecoratiePage() {
  return (
    <ScreenPage
      eyebrow="Raamdecoratie · op maat"
      title="Raamdecoratie"
      intro="Raamdecoratie op maat die rust, sfeer en functionaliteit samenbrengt. Wij begeleiden u van stofkeuze en inmeting tot afwerking en plaatsing."
      body="Een goed gekozen gordijn doet meer dan een raam afdekken: het dempt geluid, stuurt het daglicht en geeft een kamer karakter."
      crumbs={[{ label: "Home", href: "/" }, { label: "Raamdecoratie" }]}
      steps={STEPS}
      cta={{ label: "Plan een gordijnadvies", href: "/contact" }}
      altCta={{ label: "Bekijk Stofferen", href: "/stofferen" }}
      highlights={["Op maat", "Inmeten", "Stofkeuze", "Montage"]}
    />
  );
}
