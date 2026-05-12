import type { Metadata } from "next";
import { Mail, Handshake, Gem, Clock4, Workflow, FileText, MessagesSquare, Truck } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import FeatureGrid from "@/components/shared/FeatureGrid";
import ProcessTimeline from "@/components/shared/ProcessTimeline";
import SplitBlock from "@/components/shared/SplitBlock";
import { Stagger, StaggerItem } from "@/components/ui/ScrollReveal";
import { ButtonLink } from "@/components/ui/Button";
import CTABanner from "@/components/shared/CTABanner";
import { CONTACT } from "@/lib/site";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Zakelijke partners",
  description:
    "Werken met Stof tot Leven als zakelijke partner: maatwerk, betrouwbaarheid en 20+ jaar ervaring. Voor interieurarchitecten, aannemers, werven en horeca in Rotterdam.",
};

const ADVANTAGES = [
  { icon: Gem, title: "Maatwerk zonder compromis", text: "Geen standaardpakketten — alles wordt gemaakt naar de eisen van het project, het materiaal en de eindklant." },
  { icon: Clock4, title: "20+ jaar ervaring", text: "Twee decennia vakmanschap op de Kleiweg. Je werkt met iemand die weet wat wel en niet werkt, en dat eerlijk zegt." },
  { icon: Handshake, title: "Betrouwbaar & bereikbaar", text: "Eén vast aanspreekpunt, heldere afspraken, realistische planningen. Wat ik beloof, lever ik." },
  { icon: Workflow, title: "Soepel in samenwerking", text: "Gewend om mee te draaien in trajecten van interieurarchitecten, aannemers, werven en horeca-inrichters." },
];

const PROCESS = [
  { title: "Kennismaking", text: "We bespreken jullie werkwijze, het type projecten en wat je van een partner verwacht. Vrijblijvend." },
  { title: "Offerte & afspraken", text: "Per project een heldere offerte: omvang, materiaal, planning en prijs. Geen verrassingen achteraf." },
  { title: "Uitvoering", text: "Inmeten, maken en — waar gewenst — monteren. Korte lijnen, tussentijds afstemmen waar nodig." },
  { title: "Oplevering & nazorg", text: "Netjes opgeleverd, op tijd. En mocht er iets zijn: ik blijf bereikbaar, ook na afronding." },
];

const PARTNERS = ["Interieurarchitecten", "Aannemers & bouwbedrijven", "Botenbouwers & werven", "Horeca-inrichters", "Hotels & B&B's", "Vastgoedbeheerders", "Meubelmakers", "Stylisten"];

export default function ZakelijkePartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Samenwerken"
        title={<>Zakelijke partners</>}
        intro="Interieurarchitect, aannemer, botenbouwer of horeca-ondernemer? Werk samen met Stof tot Leven voor het maatwerk in stof — betrouwbaar, ervaren en altijd bereikbaar."
        crumbs={[{ label: "Home", href: "/" }, { label: "Zakelijke partners" }]}
        swatch="charcoal"
        image={IMAGES.interiorStudio}
        imageLabel="Samenwerking op locatie"
        stats={[
          { value: "20+", label: "jaar ervaring" },
          { value: "1", label: "vast aanspreekpunt" },
          { value: "B2B", label: "trajecten op maat" },
        ]}
      />

      <SplitBlock
        eyebrow="Werken met Stof tot Leven"
        title={<>De stofspecialist achter jouw project.</>}
        swatch="straw"
        image={IMAGES.fabricStacks}
        imageLabel="Atelier & stoffenbibliotheek"
        flip
      >
        <p>
          Veel mooie projecten vragen om dat ene onderdeel: de gordijnen die het licht temmen,
          de bekleding die een ruimte afmaakt, de kussens die het geheel laten kloppen. Daar kom
          ik in beeld — als vaste partner voor het maatwerk in stof.
        </p>
        <p>
          Je werkt rechtstreeks met de vakvrouw die het ook maakt. Dat betekent korte lijnen,
          eerlijk advies over wat haalbaar is, en de zekerheid dat het werk klopt als het wordt
          opgeleverd. Particulier of grootschalig: dezelfde aandacht.
        </p>
      </SplitBlock>

      <section className="relative overflow-hidden bg-linen-deep py-24 sm:py-28 md:py-32">
        <div aria-hidden className="weave-texture pointer-events-none absolute inset-0 opacity-30" />
        <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Voordelen"
            title={<>Waarom partners terugkomen</>}
            intro="Maatwerk, betrouwbaarheid en ervaring — de basis van elke goede samenwerking."
            className="max-w-2xl"
          />
          <div className="mt-14">
            <FeatureGrid features={ADVANTAGES} columns={4} />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-linen py-24 sm:py-28 md:py-32">
        <div aria-hidden className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-terracotta/8 blur-3xl" />
        <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Hoe het werkt"
            title={<>Een samenwerking in vier stappen</>}
            intro="Van eerste kennismaking tot oplevering en nazorg — overzichtelijk en zonder ruis."
            className="max-w-2xl"
          />
          <div className="mt-16">
            <ProcessTimeline steps={PROCESS} />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-linen-deep py-24 sm:py-28 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Voor wie"
            title={<>Met wie ik graag samenwerk</>}
            intro="Een greep uit de partners waarmee Stof tot Leven optrekt — staat jouw vakgebied er niet bij? Neem gerust contact op."
            align="center"
            className="mx-auto max-w-2xl"
          />
          <Stagger className="mt-14 flex flex-wrap items-center justify-center gap-3" staggerChildren={0.06}>
            {PARTNERS.map((p) => (
              <StaggerItem key={p}>
                <span className="inline-flex items-center rounded-full border border-line bg-linen px-5 py-2.5 text-[0.85rem] text-charcoal transition-colors duration-300 hover:border-terracotta/50 hover:text-terracotta">
                  {p}
                </span>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mx-auto mt-14 flex max-w-2xl flex-col items-center gap-5 rounded-[1.75rem] border border-line bg-linen p-8 text-center sm:p-10">
            <div className="flex items-center gap-3">
              {[FileText, MessagesSquare, Truck].map((Icon, i) => (
                <span key={i} className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-linen-deep text-terracotta">
                  <Icon className="h-5 w-5" strokeWidth={1.4} />
                </span>
              ))}
            </div>
            <p className="font-display text-2xl text-charcoal">Liever direct overleggen over een project?</p>
            <p className="max-w-md text-[0.95rem] leading-relaxed text-taupe">
              Mail of bel — dan plannen we een kennismaking in. Vertel wat je nodig hebt, dan kijk ik
              hoe Stof tot Leven kan aanhaken.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <ButtonLink href={`mailto:${CONTACT.email}`} variant="solid">
                <Mail className="h-4 w-4" /> {CONTACT.email}
              </ButtonLink>
              <ButtonLink href="/contact" variant="ghost">
                Of via het contactformulier
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title={<>Laten we samenwerken.</>}
        text="Word zakelijk partner van Stof tot Leven en weet het maatwerk in stof in goede handen — bij elk project, groot of klein."
        primary={{ label: "Neem contact op", href: "/contact" }}
        secondary={{ label: "Bekijk alle diensten", href: "/raamdecoratie" }}
      />
    </>
  );
}
