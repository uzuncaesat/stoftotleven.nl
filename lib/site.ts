import type { LucideIcon } from "lucide-react";
import { Blinds, Armchair, Sofa, Sailboat, Handshake } from "lucide-react";
import { IMAGES } from "@/lib/images";

export const NAV_LINKS = [
  { label: "Raamdecoratie", href: "/raamdecoratie" },
  { label: "Stofferen", href: "/stofferen" },
  { label: "Kussens op maat", href: "/kussens-op-maat" },
  { label: "Maritieme bekleding op maat", href: "/maritieme-bekleding" },
  { label: "Zakelijke partners", href: "/zakelijke-partners" },
  { label: "Contact", href: "/contact" },
] as const;

export type Service = {
  icon: LucideIcon;
  title: string;
  href: string;
  blurb: string;
  description: string;
  image: string;
};

export const SERVICES: Service[] = [
  {
    icon: Blinds,
    title: "Raamdecoratie",
    href: "/raamdecoratie",
    blurb: "Rust, sfeer en functionaliteit bij het raam.",
    description:
      "Raamdecoratie op maat die rust, sfeer en functionaliteit samenbrengt. Wij begeleiden u van stofkeuze en inmeting tot afwerking en plaatsing.",
    image: IMAGES.curtainsCozy,
  },
  {
    icon: Armchair,
    title: "Stofferen",
    href: "/stofferen",
    blurb: "Meubels die het waard zijn om te behouden.",
    description:
      "Stoffeerwerk op maat voor meubels die het waard zijn om te behouden. Zo krijgt een bestaand meubel opnieuw comfort, karakter en een uitstraling die past bij uw interieur.",
    image: IMAGES.armchairYellow,
  },
  {
    icon: Sofa,
    title: "Kussens op maat",
    href: "/kussens-op-maat",
    blurb: "Comfort en dagelijks gebruik, binnen én buiten.",
    description:
      "Kussens op maat voor binnen- en buitenruimtes, ontworpen voor comfort en dagelijks gebruik. Praktisch in vorm, sterk in afwerking en passend bij uw stijl.",
    image: IMAGES.cushionsSofa,
  },
  {
    icon: Sailboat,
    title: "Maritieme bekleding op maat",
    href: "/maritieme-bekleding",
    blurb: "Van herstel tot vernieuwing aan boord.",
    description:
      "Maatwerk voor bootinterieurs en maritieme kussens, van herstel tot vernieuwing. Ideaal voor wie een verzorgde, duurzame en functionele oplossing zoekt aan boord.",
    image: IMAGES.boatInterior,
  },
  {
    icon: Handshake,
    title: "Zakelijke partners",
    href: "/zakelijke-partners",
    blurb: "Een betrouwbare uitvoeringspartner — white-label.",
    description:
      "Voor architecten, interieurontwerpers, stylisten, aannemers en hospitality-ondernemers die een betrouwbare uitvoeringspartner zoeken achter de schermen.",
    image: IMAGES.interiorStudio,
  },
];

export const CONTACT = {
  company: "Hatish interieur & exterieur",
  brand: "Stof tot Leven",
  person: "Hatice Göktaş Uzunca",
  address: "Kleiweg 124A",
  postal: "3051 GX Rotterdam",
  kvk: "96116358",
  tel: "010 237 22 48",
  telHref: "tel:+31102372248",
  mobile: "06 21 965 236",
  mobileHref: "tel:+31621965236",
  email: "info@stoftotleven.nl",
  instagram: "@stoftotleven.nl",
  instagramHref: "https://instagram.com/stoftotleven.nl",
  mapsEmbed:
    "https://www.google.com/maps?q=Kleiweg+124A,+3051+GX+Rotterdam&output=embed",
} as const;

export const SUBJECT_OPTIONS = [
  "Offerte aanvraag",
  "Adviesverzoek",
  "Compliment / Klacht",
  "Afspraak maken",
] as const;
