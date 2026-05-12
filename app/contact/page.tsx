import type { Metadata } from "next";
import { Phone, Smartphone, Mail, Instagram, MapPin, Building2, CalendarClock } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ContactForm from "@/components/shared/ContactForm";
import { CONTACT } from "@/lib/site";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met Stof tot Leven by Hatish — Kleiweg 124A, Rotterdam. Bel, mail of vul het formulier in voor een offerte, advies of afspraak.",
};

const DETAILS = [
  { icon: Building2, label: "Bedrijf", lines: [CONTACT.company, `KvK ${CONTACT.kvk}`] },
  { icon: MapPin, label: "Atelier", lines: [CONTACT.address, CONTACT.postal] },
  { icon: Phone, label: "Telefoon", lines: [CONTACT.tel], href: CONTACT.telHref },
  { icon: Smartphone, label: "Mobiel", lines: [CONTACT.mobile], href: CONTACT.mobileHref },
  { icon: Mail, label: "E-mail", lines: [CONTACT.email], href: `mailto:${CONTACT.email}` },
  { icon: Instagram, label: "Instagram", lines: [CONTACT.instagram], href: CONTACT.instagramHref },
];

const HOURS = [
  { day: "Maandag", time: "Op afspraak" },
  { day: "Dinsdag", time: "10:00 – 17:00" },
  { day: "Woensdag", time: "10:00 – 17:00" },
  { day: "Donderdag", time: "10:00 – 17:00" },
  { day: "Vrijdag", time: "10:00 – 17:00" },
  { day: "Zaterdag", time: "10:00 – 16:00" },
  { day: "Zondag", time: "Gesloten" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Even <span className="italic text-terracotta">kennismaken</span>?</>}
        intro="Een offerte aanvragen, advies vragen of een afspraak maken — bel, mail of laat hieronder een bericht achter. Bij Stof tot Leven word je geen klant, maar een bekende."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        swatch="terracotta"
        image={IMAGES.sewingHands}
        imageLabel="Welkom op de Kleiweg"
        stats={[
          { value: "1 werkdag", label: "gemiddelde reactietijd" },
          { value: "Op afspraak", label: "zo neem ik echt de tijd" },
        ]}
      />

      {/* Form + details */}
      <section className="relative overflow-hidden bg-linen py-24 sm:py-28 md:py-32">
        <div aria-hidden className="pointer-events-none absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-straw/30 blur-3xl" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-6 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:px-12">
          <div>
            <ScrollReveal direction="up">
              <span className="eyebrow">Stuur een bericht</span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.08}>
              <h2 className="mt-5 font-display text-4xl leading-[1.1] text-charcoal sm:text-5xl">
                Vertel me over je vraag of project
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.14}>
              <p className="mt-5 max-w-prose text-[1.05rem] leading-relaxed text-taupe">
                Hoe meer je vertelt, hoe gerichter ik kan reageren. Geef gerust een voorkeursdag
                en dagdeel op — dan stem ik het contact daarop af.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <div className="mt-10 rounded-[1.75rem] border border-line bg-linen-deep p-7 sm:p-9">
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>

          <div className="space-y-8">
            <ScrollReveal direction="left">
              <div className="rounded-[1.75rem] border border-line bg-linen-deep p-7 sm:p-8">
                <h3 className="font-display text-2xl text-charcoal">Contactgegevens</h3>
                <dl className="mt-6 space-y-4">
                  {DETAILS.map(({ icon: Icon, label, lines, href }) => (
                    <div key={label} className="flex items-start gap-4">
                      <dt className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-linen text-terracotta">
                        <Icon className="h-4 w-4" />
                        <span className="sr-only">{label}</span>
                      </dt>
                      <dd className="pt-1">
                        <span className="block text-[0.62rem] uppercase tracking-[0.22em] text-taupe">{label}</span>
                        {href ? (
                          <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="link-underline text-[0.98rem] text-charcoal">
                            {lines[0]}
                          </a>
                        ) : (
                          lines.map((l) => (
                            <span key={l} className="block text-[0.98rem] text-charcoal">{l}</span>
                          ))
                        )}
                        {href && lines.slice(1).map((l) => (
                          <span key={l} className="block text-[0.85rem] text-taupe">{l}</span>
                        ))}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.1}>
              <div className="rounded-[1.75rem] border border-line bg-linen-deep p-7 sm:p-8">
                <div className="flex items-center gap-3">
                  <CalendarClock className="h-5 w-5 text-terracotta" />
                  <h3 className="font-display text-2xl text-charcoal">Openingstijden</h3>
                </div>
                <ul className="mt-5 divide-y divide-line text-[0.95rem]">
                  {HOURS.map((h) => (
                    <li key={h.day} className="flex items-center justify-between py-2.5">
                      <span className="text-charcoal">{h.day}</span>
                      <span className={h.time === "Gesloten" ? "text-taupe" : "text-terracotta"}>{h.time}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-[0.82rem] leading-relaxed text-taupe">
                  Langskomen het liefst op afspraak — zo neem ik rustig de tijd voor je. Bellen of
                  mailen kan altijd.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="relative bg-linen-deep">
        <div className="mx-auto w-full max-w-7xl px-6 pt-4 sm:px-8 lg:px-12">
          <ScrollReveal direction="up">
            <div className="flex flex-col gap-2 pb-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="eyebrow">Routebeschrijving</span>
                <h2 className="mt-4 font-display text-3xl text-charcoal sm:text-4xl">Kleiweg 124A, Rotterdam</h2>
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Kleiweg+124A,+3051+GX+Rotterdam"
                target="_blank"
                rel="noreferrer"
                className="link-underline text-[0.78rem] uppercase tracking-[0.18em] text-charcoal"
              >
                Open in Google Maps →
              </a>
            </div>
          </ScrollReveal>
        </div>
        <div className="relative h-[420px] w-full overflow-hidden border-y border-line sm:h-[520px]">
          <iframe
            title="Locatie Stof tot Leven — Kleiweg 124A, Rotterdam"
            src={CONTACT.mapsEmbed}
            className="absolute inset-0 h-full w-full grayscale-[0.25] contrast-[1.05]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>

      {/* Closing note */}
      <section className="relative overflow-hidden bg-linen py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-8">
          <ScrollReveal direction="up">
            <p className="font-display text-[1.7rem] leading-snug text-charcoal sm:text-[2rem]">
              &ldquo;Mijn werk is wensen vertalen naar iets tastbaars, iets moois, iets echts.
              Daar begint elk gesprek mee.&rdquo;
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <p className="mt-5 font-script text-3xl text-terracotta">Liefs, Hatish</p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
