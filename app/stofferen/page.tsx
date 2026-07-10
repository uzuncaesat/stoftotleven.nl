import type { Metadata } from "next";
import ScreenPage from "@/components/shared/ScreenPage";

export const metadata: Metadata = {
  title: "Stofferen",
  description:
    "Stoffeerwerk op maat voor meubels die het waard zijn om te behouden. Comfort, karakter en uitstraling die past bij uw interieur — Stof tot Leven by Hatish, Rotterdam.",
};

const STEPS = [
  {
    step: "01",
    title: "Adviesgesprek",
    text: "We bekijken het meubel samen, bespreken uw wensen en wat haalbaar is qua stof, vulling en constructie.",
    src: "/photos/stofferen/1.jpg",
  },
  {
    step: "02",
    title: "Stoffen kiezen",
    text: "Met stalen in de hand kiezen we kleur, structuur en sterkte — passend bij de ruimte en het gebruik.",
    src: "/photos/stofferen/4.jpg",
  },
  {
    step: "03",
    title: "Vakmanschap in het atelier",
    text: "Het meubel wordt gestript, hersteld, opnieuw opgevuld en strak bekleed — met de hand afgewerkt.",
    src: "/photos/stofferen/3.jpg",
  },
  {
    step: "04",
    title: "Oplevering",
    text: "Uw meubel komt terug zoals afgesproken: schoon, stevig en klaar voor de volgende twintig jaar.",
    src: "/photos/stofferen/5.jpg",
  },
];

export default function StofferenPage() {
  return (
    <ScreenPage
      eyebrow="Stofferen · maatwerk"
      title="Stofferen"
      intro="Stoffeerwerk op maat voor meubels die het waard zijn om te behouden. Uw bestaande stukken krijgen opnieuw comfort, karakter en een uitstraling die past bij uw interieur."
      body="Niet vervangen, maar herwaarderen — een goed meubel is gemaakt om mee te gaan."
      crumbs={[{ label: "Home", href: "/" }, { label: "Stofferen" }]}
      steps={STEPS}
      cta={{ label: "Bespreek uw stoffeerproject", href: "/contact" }}
      altCta={{ label: "Bekijk Kussens op maat", href: "/kussens-op-maat" }}
      highlights={["Ambachtelijk", "Duurzaam", "Op maat", "Inclusief halen & brengen"]}
    />
  );
}
