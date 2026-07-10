"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const FACTS = [
  { value: "20+", label: "jaar vakmanschap" },
  { value: "4", label: "disciplines onder één dak" },
  { value: "100%", label: "gemaakt in eigen atelier" },
  { value: "1", label: "aanspreekpunt, van advies tot plaatsing" },
];

export default function FactRow() {
  return (
    <section aria-label="In het kort" className="border-y border-line bg-linen">
      <ScrollReveal direction="up">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-2 divide-x divide-line lg:grid-cols-4">
          {FACTS.map((f) => (
            <div key={f.label} className="px-6 py-10 first:pl-6 sm:px-8 lg:px-10 lg:py-12">
              <div className="text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">
                {f.value}
              </div>
              <div className="mt-2 max-w-[20ch] text-[0.78rem] leading-snug text-taupe">
                {f.label}
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
