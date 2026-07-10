"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal, { Stagger, StaggerItem } from "@/components/ui/ScrollReveal";

const GRID = [
  {
    src: "/photos/raamdecoratie/1.jpg",
    label: "Houten jaloezieën",
    meta: "Raamdecoratie",
  },
  {
    src: "/photos/stofferen/6.jpg",
    label: "Herstoffering eetkamerstoel",
    meta: "Stofferen",
  },
  {
    src: "/photos/raamdecoratie/3.jpg",
    label: "Bediening & afwerking",
    meta: "Detail",
  },
];

export default function ProjectenSection() {
  return (
    <section aria-label="Recent werk" className="relative bg-linen py-24 sm:py-32">
      {/* Section head */}
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <ScrollReveal direction="up">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.24em] text-taupe">
            Recent werk
          </p>
          <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-[-0.025em] text-ink sm:text-5xl">
              Gemaakt in ons atelier, geplaatst bij onze klanten.
            </h2>
            <Link
              href="/contact"
              className="link-underline shrink-0 text-[0.74rem] font-medium uppercase tracking-[0.18em] text-ink lg:pb-2"
            >
              Bespreek uw project →
            </Link>
          </div>
        </ScrollReveal>
      </div>

      {/* Full-bleed feature image */}
      <ScrollReveal direction="up">
        <div className="relative mt-14 h-[52vh] w-full overflow-hidden sm:h-[68vh]">
          <Image
            src="/photos/raamdecoratie/6.jpg"
            alt="Gordijnen op maat met uitzicht op het water — project in Rotterdam"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/40 to-transparent"
          />
          <div className="absolute inset-x-0 bottom-0">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 text-[0.66rem] uppercase tracking-[0.22em] text-white/85 sm:px-8 lg:px-12">
              <span>Wandvullende gordijnen — woonhuis aan het water</span>
              <span className="hidden sm:block">Rotterdam</span>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* 3-up grid */}
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <Stagger
          className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3"
          staggerChildren={0.08}
        >
          {GRID.map((p) => (
            <StaggerItem key={p.src}>
              <figure className="group">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-linen-deep">
                  <Image
                    src={p.src}
                    alt={p.label}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
                  />
                </div>
                <figcaption className="mt-4 flex items-baseline justify-between gap-4">
                  <span className="text-[0.92rem] font-medium text-ink">{p.label}</span>
                  <span className="shrink-0 text-[0.66rem] uppercase tracking-[0.18em] text-taupe">
                    {p.meta}
                  </span>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
