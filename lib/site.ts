import type { LucideIcon } from "lucide-react";
import { Blinds, Armchair, Sofa, Sailboat } from "lucide-react";
import { IMAGES } from "@/lib/images";

export const NAV_LINKS = [
  { label: "Raamdecoratie", href: "/raamdecoratie" },
  { label: "Stofferen", href: "/stofferen" },
  { label: "Kussens op maat", href: "/kussens-op-maat" },
  { label: "Maritieme bekleding", href: "/maritieme-bekleding" },
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
    blurb: "Van gordijnen tot inbetweens — sfeer en stijl in elke ruimte.",
    description:
      "Gordijnen, vitrages, vouwgordijnen, inbetweens en rolluiken, gemaakt en gemonteerd met oog voor licht, val en verhouding.",
    image: IMAGES.curtainsCozy,
  },
  {
    icon: Armchair,
    title: "Stofferen",
    href: "/stofferen",
    blurb: "Van fauteuil tot eetkamerstoel — oog voor detail en duurzaamheid.",
    description:
      "Fauteuils, banken, eetkamerstoelen en voetenbankjes terug in topconditie. Ambachtelijk gestoffeerd, gemaakt om te blijven.",
    image: IMAGES.armchairYellow,
  },
  {
    icon: Sofa,
    title: "Kussens op maat",
    href: "/kussens-op-maat",
    blurb: "Sierkussens, zitkussens of buitenkussens — in jouw stijl.",
    description:
      "Sierkussens, zitkussens, stoelkussens en buitenkussens. Jouw stof, jouw vulling, jouw maat — tot op de centimeter.",
    image: IMAGES.cushionsSofa,
  },
  {
    icon: Sailboat,
    title: "Maritieme bekleding",
    href: "/maritieme-bekleding",
    blurb: "Van boten tot horeca — unieke oplossingen op maat.",
    description:
      "Bekleding voor boten, jachten, horeca en bedrijfsruimten. Waterdicht, uv-bestendig en duurzaam — gemaakt voor de elementen.",
    image: IMAGES.boatInterior,
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

export const WEEKDAYS = [
  "Maandag",
  "Dinsdag",
  "Woensdag",
  "Donderdag",
  "Vrijdag",
  "Zaterdag",
  "Zondag",
] as const;

export const DAYPARTS = ["Ochtend", "Middag", "Avond"] as const;
