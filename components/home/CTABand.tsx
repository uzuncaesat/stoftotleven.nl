"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CONTACT } from "@/lib/site";

export default function CTABand() {
  return (
    <section aria-label="Samenwerken" className="relative bg-linen-dark py-24 text-linen sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <ScrollReveal direction="up">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.24em] text-linen/50">
            Samenwerken
          </p>
          <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.06] tracking-[-0.025em] text-linen sm:text-6xl">
            Een project in gedachten? Wij denken graag mee.
          </h2>
          <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-linen/65">
            Voor particulieren én zakelijke opdrachtgevers — van één raam tot de
            volledige aankleding van een pand of schip. Reactie doorgaans binnen
            één werkdag.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 bg-linen px-7 py-3.5 text-[0.74rem] font-medium uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:bg-linen-deep"
            >
              Plan een kennismaking
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/zakelijke-partners"
              className="link-underline text-[0.74rem] font-medium uppercase tracking-[0.18em] text-linen/80 [background-image:linear-gradient(rgb(255_255_255/0.8),rgb(255_255_255/0.8))]"
            >
              Voor zakelijke partners
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-3 border-t border-linen/15 pt-7 text-[0.8rem] text-linen/55">
            <a href={CONTACT.telHref} className="transition-colors hover:text-linen">
              {CONTACT.tel}
            </a>
            <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-linen">
              {CONTACT.email}
            </a>
            <span>
              {CONTACT.address}, {CONTACT.postal}
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
