import type { Metadata } from "next";
import ScreenPage from "@/components/shared/ScreenPage";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Maritieme bekleding op maat",
  description:
    "Maatwerk voor bootinterieurs en maritieme kussens, van herstel tot vernieuwing. Verzorgd, duurzaam en functioneel — Stof tot Leven by Hatish, Rotterdam.",
};

const STEPS = [
  {
    step: "01",
    title: "Aan boord opmeten",
    text: "We komen langs aan de kade of op de werf en meten elke kuip, bank en hoek precies in.",
    src: IMAGES.boatHarbour,
  },
  {
    step: "02",
    title: "Marinetextiel kiezen",
    text: "Waterdichte, uv-stabiele stoffen die zout, zon en spatwater verdragen — en mooi blijven.",
    src: IMAGES.fabricRolls,
  },
  {
    step: "03",
    title: "Maken in het atelier",
    text: "Strakke naden, weerbestendige ritsen en een pasvorm die klopt — gemaakt om jaren mee te gaan.",
    src: IMAGES.sewingHands,
  },
  {
    step: "04",
    title: "Plaatsen aan boord",
    text: "Kuipkussens, salonbekleding en stuurstoelen weer netjes op hun plek — klaar voor het volgende seizoen.",
    src: IMAGES.boatInterior,
  },
];

export default function MaritiemePage() {
  return (
    <ScreenPage
      eyebrow="Maritieme bekleding · op maat"
      title="Maritieme bekleding"
      intro="Maatwerk voor bootinterieurs en maritieme kussens, van herstel tot vernieuwing. Ideaal voor wie een verzorgde, duurzame en functionele oplossing zoekt aan boord."
      body="Binnenkwaliteit, gemaakt voor buiten — afgewerkt zoals u dat van een atelier verwacht."
      crumbs={[{ label: "Home", href: "/" }, { label: "Maritieme bekleding" }]}
      steps={STEPS}
      cta={{ label: "Vraag een offerte aan", href: "/contact" }}
      altCta={{ label: "Voor zakelijke partners", href: "/zakelijke-partners" }}
      highlights={["Waterdicht", "Uv-bestendig", "Op maat", "Aan boord opmeten"]}
    />
  );
}
