"use client";

import { Phone, Smartphone, Mail, Instagram, MapPin, Clock } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ContactForm from "@/components/shared/ContactForm";
import { CONTACT } from "@/lib/site";

const INFO = [
  { icon: MapPin, label: "Atelier", value: `${CONTACT.address}, ${CONTACT.postal}` },
  { icon: Phone, label: "Telefoon", value: CONTACT.tel, href: CONTACT.telHref },
  { icon: Smartphone, label: "Mobiel", value: CONTACT.mobile, href: CONTACT.mobileHref },
  { icon: Mail, label: "E-mail", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: Instagram, label: "Instagram", value: CONTACT.instagram, href: CONTACT.instagramHref },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-linen-dark py-24 text-linen sm:py-28 md:py-36">
      <div aria-hidden className="weave-texture pointer-events-none absolute inset-0 opacity-[0.06]" />
      <div aria-hidden className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-terracotta/20 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-6 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12">
        {/* info side */}
        <div>
          <ScrollReveal direction="up">
            <span className="eyebrow text-linen/55">Neem contact op</span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.08}>
            <h2 className="mt-5 font-display text-4xl leading-[1.1] text-linen sm:text-5xl md:text-[3.4rem]">
              Even bijpraten over jouw{" "}
              <span className="italic text-terracotta-soft">project</span>?
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.14}>
            <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-linen/65">
              Een nieuwe gordijn, een fauteuil die een tweede leven verdient, kussens of bekleding
              voor je boot — vertel het me. Ik denk graag met je mee, zonder verplichtingen.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="mt-10 space-y-4">
              {INFO.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <span className="group flex items-center gap-4 rounded-2xl border border-linen/10 bg-linen/[0.04] px-5 py-4 transition-colors duration-300 hover:border-terracotta-soft/40 hover:bg-linen/[0.07]">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-terracotta/15 text-terracotta-soft">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-[0.65rem] uppercase tracking-[0.22em] text-linen/40">{label}</span>
                      <span className="block text-[0.98rem] text-linen group-hover:text-terracotta-soft">{value}</span>
                    </span>
                  </span>
                );
                return href ? (
                  <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block">
                    {content}
                  </a>
                ) : (
                  <div key={label}>{content}</div>
                );
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.26}>
            <div className="mt-8 flex items-start gap-3 text-[0.85rem] text-linen/55">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-terracotta-soft" />
              <p>
                Langskomen kan op afspraak — zo neem ik echt de tijd voor je. Bel, mail of vul het
                formulier in en je hoort snel van me.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* form side */}
        <ScrollReveal direction="left" delay={0.15}>
          <div className="rounded-[1.75rem] border border-linen/10 bg-linen p-7 text-charcoal shadow-[0_40px_80px_-40px_rgba(0,0,0,0.5)] sm:p-9">
            <h3 className="font-display text-2xl text-charcoal">Stuur een bericht</h3>
            <p className="mt-1.5 text-[0.85rem] text-taupe">Ik reageer doorgaans binnen één werkdag.</p>
            <div className="mt-7">
              <ContactForm />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
