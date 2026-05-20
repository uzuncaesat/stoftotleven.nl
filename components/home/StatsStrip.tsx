"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import ScrollReveal, { Stagger, StaggerItem } from "@/components/ui/ScrollReveal";

const STATS = [
  { value: 20, suffix: "+", label: "jaar op de Kleiweg" },
  { value: 4, suffix: "", label: "ambachten onder één dak" },
  { value: 100, suffix: "%", label: "maatwerk, niets uit een doos" },
  { value: 1, suffix: "", label: "vakvrouw die alles persoonlijk doet" },
];

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

/**
 * Final, compact numerical strip at the foot of the homepage —
 * shown right above the footer per the brief.
 */
export default function StatsStrip() {
  return (
    <section
      aria-label="In cijfers"
      className="relative overflow-hidden bg-linen-dark py-16 text-linen sm:py-20"
    >
      <div aria-hidden className="weave-texture pointer-events-none absolute inset-0 opacity-[0.06]" />
      <div aria-hidden className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full bg-sage/15 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-straw/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <ScrollReveal direction="up">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="eyebrow text-linen/70">In cijfers</span>
              <h2 className="mt-3 font-display text-3xl leading-tight text-linen sm:text-4xl">
                Twintig jaar vakmanschap,{" "}
                <span className="italic text-sage">verweven in Rotterdam</span>.
              </h2>
            </div>
            <p className="max-w-md text-[0.95rem] leading-relaxed text-linen/65">
              Eén vakvrouw, vier ambachten en een atelier op de Kleiweg waar
              iedereen wordt ontvangen als een vertrouwd gezicht.
            </p>
          </div>
        </ScrollReveal>

        <Stagger
          className="mt-12 grid grid-cols-2 gap-y-10 gap-x-8 border-t border-linen/10 pt-12 md:grid-cols-4"
          staggerChildren={0.1}
        >
          {STATS.map((s) => (
            <StaggerItem key={s.label} className="text-left">
              <div className="font-display text-5xl text-sage sm:text-6xl">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 max-w-[18ch] text-[0.72rem] uppercase tracking-[0.16em] text-linen/60">
                {s.label}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
