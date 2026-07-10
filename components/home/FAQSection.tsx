"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import ScrollReveal, { Stagger, StaggerItem } from "@/components/ui/ScrollReveal";

const FAQS = [
  {
    q: "Kom ik langs zonder afspraak?",
    a: "Wij werken op afspraak zodat wij u rustig en persoonlijk kunnen ontvangen. Bel, app of mail ons en we plannen een moment dat u schikt.",
  },
  {
    q: "Hoe werkt een offerte aanvraag?",
    a: "U neemt contact op met een omschrijving of foto's van uw wens. Wij komen dan bij u thuis voor een inmeting en adviesgesprek. Daarna ontvangt u een heldere offerte — vrijblijvend en zonder verplichtingen.",
  },
  {
    q: "Welke stoffen gebruiken jullie?",
    a: "Wij werken met een breed assortiment — van duurzame meubelstoffen en buitenstoffen tot luxe gordijnstoffen. Tijdens het adviesgesprek nemen we staalboeken mee zodat u kunt voelen en vergelijken.",
  },
  {
    q: "Hoe lang duurt een opdracht gemiddeld?",
    a: "Dat hangt af van het type werk en de stof die beschikbaar is. Gordijnen en kussens zijn vaak binnen één tot twee weken klaar. Voor groot stoffeerwerk houden we rekening met twee tot vier weken. We communiceren altijd een realistische planning.",
  },
  {
    q: "Kunnen jullie ook buiten Rotterdam werken?",
    a: "In principe werken wij in de regio Rotterdam en omgeving. Bij grotere projecten of zakelijke opdrachten denken wij graag mee over de mogelijkheden. Neem contact op voor overleg.",
  },
  {
    q: "Wat is het verschil met een keten of webshop?",
    a: "Bij Stof tot Leven spreken we met Hatish zelf — geen callcenter, geen tussenpersoon. Alles wordt op maat gemaakt in het atelier op de Kleiweg. U betaalt voor vakmanschap en persoonlijke aandacht, niet voor een logo.",
  },
  {
    q: "Nemen jullie ook old-for-new opdrachten aan?",
    a: "Zeker. Het herstofferen van een geliefd meubel is duurzamer dan nieuw kopen en geeft het stuk een tweede leven met uw eigen stofkeuze. Breng het mee of stuur een foto — wij kijken graag wat er mogelijk is.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <StaggerItem>
      <div className="border-b border-line last:border-b-0">
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="group flex w-full items-start justify-between gap-6 py-5 text-left"
        >
          <div className="flex items-start gap-4">
            <span className="mt-0.5 shrink-0 text-[0.78rem] font-medium tabular-nums text-taupe/70">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-[0.98rem] font-medium leading-snug text-ink transition-opacity duration-200 group-hover:opacity-70">
              {q}
            </span>
          </div>
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            className="mt-0.5 shrink-0 text-ink/50 transition-colors duration-200 group-hover:text-ink"
          >
            <Plus className="h-5 w-5" />
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <p className="pb-5 pl-9 pr-8 text-[0.93rem] leading-relaxed text-forest/70">
                {a}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </StaggerItem>
  );
}

export default function FAQSection() {
  return (
    <section
      aria-label="Veelgestelde vragen"
      className="relative bg-linen-deep py-20 sm:py-24"
    >
      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <ScrollReveal direction="up">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.24em] text-taupe">
            Veelgestelde vragen
          </p>
          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-3xl font-semibold leading-[1.12] tracking-[-0.02em] text-ink sm:text-4xl">
              Antwoord op de meest gestelde vragen.
            </h2>
            <a
              href="/contact"
              className="shrink-0 text-[0.74rem] font-medium uppercase tracking-[0.18em] text-taupe underline underline-offset-4 transition-colors hover:text-ink"
            >
              Stel uw vraag →
            </a>
          </div>
        </ScrollReveal>

        <div aria-hidden className="mt-10 h-px bg-line" />

        <div className="mt-4 lg:grid lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          {/* Left decorative block — only on large screens */}
          <div className="hidden lg:block">
            <ScrollReveal direction="left" delay={0.1}>
              <div className="sticky top-28 space-y-6">
                <p className="text-[0.95rem] leading-relaxed text-taupe">
                  Staat uw vraag er niet tussen? Neem contact op via het
                  formulier of bel ons direct — u krijgt doorgaans binnen één
                  werkdag antwoord.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-ink/25 px-5 py-2.5 text-[0.74rem] font-medium uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-linen"
                >
                  Contact opnemen
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — accordion */}
          <Stagger className="mt-2" staggerChildren={0.06}>
            {FAQS.map((faq, i) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} />
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
