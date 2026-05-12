"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
import { Quote, Star } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import ScrollReveal, { Stagger, StaggerItem } from "@/components/ui/ScrollReveal";

const STATS = [
  { value: 20, suffix: "+", label: "jaar op de Kleiweg" },
  { value: 4, suffix: "", label: "ambachten onder één dak" },
  { value: 100, suffix: "%", label: "maatwerk, niets uit een doos" },
  { value: 1, suffix: "", label: "vakvrouw die alles persoonlijk doet" },
];

const TESTIMONIALS = [
  {
    quote:
      "Hatish luisterde echt naar wat we wilden. De gordijnen maken onze woonkamer compleet — alsof het altijd zo bedoeld was.",
    name: "Familie de Bruin",
    place: "Hillegersberg, Rotterdam",
  },
  {
    quote:
      "Onze oude eetkamerstoelen zijn weer als nieuw, maar dan beter. Vakmanschap dat je voelt zodra je gaat zitten.",
    name: "Marloes V.",
    place: "Kralingen, Rotterdam",
  },
  {
    quote:
      "Voor de bekleding van onze sloep dacht Hatish met ons mee tot in het kleinste detail. Waterdicht, mooi én precies onze stijl.",
    name: "Jeroen & Sanne",
    place: "Jachthaven, Rotterdam",
  },
];

const PARTNERS = ["Interieurstudio Maas", "Botenwerf Delta", "Horeca Kade 7", "Atelier Rivierzicht", "Meubelmakerij Noord", "Hotel de Kleiweg"];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

export default function ReferencesSection() {
  return (
    <section id="referenties" className="relative overflow-hidden bg-linen py-24 sm:py-28 md:py-36">
      <div aria-hidden className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-terracotta/8 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Referenties"
          title={
            <>
              Twintig jaar vertrouwen,
              <br className="hidden sm:block" /> verweven in <span className="italic text-terracotta">Rotterdam</span>.
            </>
          }
          intro="Particulieren, ondernemers, botenbouwers en horeca — wie eenmaal langskomt op de Kleiweg, komt terug. Een greep uit wat mensen ervan vinden."
          align="center"
          className="mx-auto max-w-2xl"
        />

        {/* stat counters */}
        <Stagger className="mt-16 grid grid-cols-2 gap-y-12 gap-x-8 border-y border-line py-12 md:grid-cols-4" staggerChildren={0.1}>
          {STATS.map((s) => (
            <StaggerItem key={s.label} className="text-center">
              <div className="font-display text-5xl text-terracotta sm:text-6xl">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mx-auto mt-3 max-w-[14ch] text-[0.72rem] uppercase tracking-[0.16em] text-taupe">
                {s.label}
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* testimonials */}
        <Stagger className="mt-20 grid gap-6 md:grid-cols-3" staggerChildren={0.12}>
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.name}>
              <figure className="flex h-full flex-col rounded-[1.5rem] border border-line bg-linen-deep p-8">
                <Quote className="h-7 w-7 text-terracotta/50" />
                <blockquote className="mt-5 flex-1 font-display text-[1.35rem] leading-snug text-charcoal">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-line pt-5">
                  <div className="flex items-center gap-1 text-terracotta">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="mt-2.5 text-[0.95rem] font-medium text-charcoal">{t.name}</p>
                  <p className="text-[0.82rem] text-taupe">{t.place}</p>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>

        {/* partner logo strip */}
        <div className="mt-20">
          <ScrollReveal direction="up">
            <p className="text-center text-[0.7rem] uppercase tracking-[0.28em] text-taupe">
              Vertrouwd door interieurmakers, werven & horeca
            </p>
          </ScrollReveal>
          <Stagger className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-5" staggerChildren={0.07}>
            {PARTNERS.map((p) => (
              <StaggerItem key={p}>
                <span className="font-display text-xl text-charcoal/40 transition-colors duration-300 hover:text-charcoal/70">
                  {p}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* trust badge */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="mx-auto mt-16 flex w-fit flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-full border border-line bg-linen-deep px-7 py-3 text-[0.72rem] uppercase tracking-[0.16em] text-taupe">
            <span className="text-charcoal">KvK 96116358</span>
            <span className="hidden h-3 w-px bg-line sm:block" />
            <span>Gevestigd op de Kleiweg</span>
            <span className="hidden h-3 w-px bg-line sm:block" />
            <span className="text-charcoal">Sinds 2004 · Rotterdam</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
