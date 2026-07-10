"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ScrollReveal, { Stagger, StaggerItem } from "@/components/ui/ScrollReveal";
import { SERVICES } from "@/lib/site";

// The four crafts — Zakelijke partners has its own CTA band lower on the page.
const DIENSTEN = SERVICES.slice(0, 4);

export default function DienstenSection() {
  return (
    <section aria-label="Diensten" className="relative bg-linen py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <ScrollReveal direction="up">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.24em] text-taupe">
            Diensten
          </p>
          <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-[-0.025em] text-ink sm:text-5xl">
              Vier disciplines, één atelier.
            </h2>
            <p className="max-w-md text-[1.02rem] leading-relaxed text-taupe lg:pb-1.5">
              Van raamdecoratie tot scheepsbekleding — elk project wordt
              opgemeten, gemaakt en geplaatst vanuit ons eigen atelier.
            </p>
          </div>
        </ScrollReveal>

        <Stagger
          className="mt-14 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-4"
          staggerChildren={0.08}
        >
          {DIENSTEN.map((s, i) => (
            <StaggerItem key={s.href}>
              <Link href={s.href} className="group block">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-linen-deep">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[0.68rem] font-medium tabular-nums text-taupe/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-1.5 text-lg font-semibold tracking-[-0.01em] text-ink">
                      <span translate="no" className="notranslate">{s.title}</span>
                    </h3>
                    <p className="mt-1.5 text-[0.9rem] leading-relaxed text-taupe">
                      {s.blurb}
                    </p>
                  </div>
                  <span className="mt-7 shrink-0 text-ink/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-ink">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
