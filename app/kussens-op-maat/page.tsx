import type { Metadata } from "next";
import ScreenPage from "@/components/shared/ScreenPage";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Kussens op maat",
  description:
    "Kussens op maat voor binnen- en buitenruimtes. Praktisch in vorm, sterk in afwerking en passend bij uw stijl. Stof tot Leven by Hatish — Rotterdam.",
};

const STEPS = [
  {
    step: "01",
    title: "Maten & vorm",
    text: "We meten precies in — bank, bankje, vensterbank of stoel — en bepalen de juiste vorm en dikte.",
    src: IMAGES.cushionsBench,
  },
  {
    step: "02",
    title: "Stof & kleur",
    text: "Kies uit linnen, velours, bouclé of outdoorweefsels. Of neem uw eigen stof mee.",
    src: IMAGES.colourSwatches,
  },
  {
    step: "03",
    title: "Vulling",
    text: "Dons, schuim of polyester — zacht en plooibaar of stevig en vormvast, u bepaalt het zitgevoel.",
    src: IMAGES.cushionsStack,
  },
  {
    step: "04",
    title: "Afwerking",
    text: "Strakke naden, nette ritsen, optioneel bies of pompons — tot op de centimeter op maat gemaakt.",
    src: IMAGES.cushionsSofa,
  },
];

export default function KussensPage() {
  return (
    <ScreenPage
      eyebrow="Kussens · op maat"
      title="Kussens op maat"
      intro="Kussens op maat voor binnen- en buitenruimtes, ontworpen voor comfort en dagelijks gebruik. Praktisch in vorm, sterk in afwerking en passend bij uw stijl."
      body="Sierkussens, zitkussens, stoelkussens of buitenkussens — het kleine maatwerk dat een ruimte afmaakt."
      crumbs={[{ label: "Home", href: "/" }, { label: "Kussens op maat" }]}
      steps={STEPS}
      cta={{ label: "Ontvang een voorstel", href: "/contact" }}
      altCta={{ label: "Bekijk Maritieme bekleding", href: "/maritieme-bekleding" }}
      highlights={["Tot op de centimeter", "Binnen & buiten", "Eigen stof mogelijk"]}
    />
  );
}
