import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Smartphone,
  Mail,
  Instagram,
  MapPin,
  Building2,
  Clock,
} from "lucide-react";
import ContactForm from "@/components/shared/ContactForm";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op voor advies, een prijsaanvraag of het plannen van een afspraak. Stof tot Leven by Hatish — Kleiweg 124A, Rotterdam.",
};

const DETAILS = [
  {
    icon: Building2,
    label: "Bedrijf",
    primary: CONTACT.company,
    secondary: `KvK ${CONTACT.kvk}`,
  },
  {
    icon: MapPin,
    label: "Atelier",
    primary: CONTACT.address,
    secondary: CONTACT.postal,
  },
  {
    icon: Phone,
    label: "Telefoon",
    primary: CONTACT.tel,
    href: CONTACT.telHref,
  },
  {
    icon: Smartphone,
    label: "Mobiel",
    primary: CONTACT.mobile,
    href: CONTACT.mobileHref,
  },
  {
    icon: Mail,
    label: "E-mail",
    primary: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: Instagram,
    label: "Instagram",
    primary: CONTACT.instagram,
    href: CONTACT.instagramHref,
  },
];

export default function ContactPage() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-linen pt-24 sm:pt-28">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-linen-deep/40 via-linen to-linen" />
        <div className="weave-texture absolute inset-0 opacity-25" />
        <div className="pattern-grid absolute inset-0 opacity-50" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-start gap-10 px-6 py-8 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-14 lg:px-12 lg:py-10">
        {/* LEFT — intro + details */}
        <div>
          <div className="mb-6 flex items-center gap-4">
            <span className="section-index">07</span>
            <span className="stitch-soft h-px w-12" />
            <span className="text-[0.68rem] uppercase tracking-[0.26em] text-forest/55">Contact</span>
          </div>
          <h1 className="mt-2 font-display text-[clamp(2.4rem,5vw,4rem)] font-light leading-[1.04] text-forest">
            Even <span className="italic text-sage">kennismaken</span>?
          </h1>
          <p className="mt-5 max-w-prose text-[1.04rem] leading-relaxed text-forest/80">
            Neem contact op voor advies, een prijsaanvraag of het plannen van een
            afspraak. We denken graag met u mee — vanaf de eerste vraag tot de
            juiste oplossing.
          </p>

          <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {DETAILS.map(({ icon: Icon, label, primary, secondary, href }) => {
              const content = (
                <span className="flex items-start gap-3 rounded-none border border-line bg-linen-deep/70 px-4 py-3 transition-colors duration-300 hover:border-forest/40 hover:bg-linen-deep">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-none bg-linen text-forest">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.62rem] uppercase tracking-[0.22em] text-forest/55">
                      {label}
                    </span>
                    <span className="block truncate text-[0.95rem] text-forest">
                      {primary}
                    </span>
                    {secondary && (
                      <span className="block truncate text-[0.78rem] text-taupe">
                        {secondary}
                      </span>
                    )}
                  </span>
                </span>
              );
              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={label}>{content}</div>
              );
            })}
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-none border border-dashed border-forest/25 bg-sage/10 px-4 py-3 text-[0.82rem] leading-relaxed text-forest/80">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-forest" />
            <p>
              Langskomen kan op afspraak — zo nemen we echt de tijd voor u. Of
              gebruik het formulier hiernaast en voeg gerust foto&apos;s of
              tekeningen toe.
            </p>
          </div>
        </div>

        {/* RIGHT — form */}
        <div className="relative">
          <div className="relative rounded-none border border-line bg-linen p-6 shadow-[0_30px_70px_-50px_rgba(45,74,62,0.5)] before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-[repeating-linear-gradient(to_right,rgb(47_76_72/0.55)_0_9px,transparent_9px_17px)] sm:p-8">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <h2 className="font-display text-2xl font-light text-forest sm:text-3xl">
                  Stuur een bericht
                </h2>
                <p className="mt-1 text-[0.85rem] text-taupe">
                  Reactie doorgaans binnen één werkdag.
                </p>
              </div>
              <Link
                href={`mailto:${CONTACT.email}`}
                className="link-underline text-[0.72rem] uppercase tracking-[0.16em] text-forest/70"
              >
                {CONTACT.email}
              </Link>
            </div>

            <div className="mt-6">
              <ContactForm compact />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
