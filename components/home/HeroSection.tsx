"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

/**
 * Business hero — quiet, typographic, photo-ready.
 * The right column is a reserved slot for the professional photography
 * that is on its way; until then it holds a calm neutral panel.
 */
export default function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] flex-col bg-linen">
      <div className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-12 px-6 pt-28 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-12">
        {/* Copy column */}
        <div className="py-10 lg:py-0">
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.15, duration: 0.7, ease: EASE }}
            className="text-[0.72rem] font-medium uppercase tracking-[0.24em] text-taupe"
          >
            Atelier voor maatwerk textiel — Rotterdam
          </motion.p>

          <motion.h1
            {...fadeUp}
            transition={{ delay: 0.28, duration: 0.8, ease: EASE }}
            className="mt-6 max-w-[16ch] text-[clamp(2.5rem,5.2vw,4.6rem)] font-semibold leading-[1.04] tracking-[-0.025em] text-ink"
          >
            Maatwerk in textiel voor interieur, exterieur en maritiem.
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ delay: 0.42, duration: 0.8, ease: EASE }}
            className="mt-6 max-w-md text-[1.02rem] leading-relaxed text-taupe"
          >
            Raamdecoratie, stoffering, kussens en scheepsbekleding — ontworpen,
            gemaakt en geplaatst vanuit ons atelier aan de Kleiweg. Al twintig
            jaar de uitvoeringspartner voor particulier en zakelijk Rotterdam.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ delay: 0.56, duration: 0.8, ease: EASE }}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-ink px-7 py-3.5 text-[0.74rem] font-medium uppercase tracking-[0.18em] text-linen transition-colors duration-300 hover:bg-forest-soft"
            >
              Plan een kennismaking
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/zakelijke-partners"
              className="link-underline text-[0.74rem] font-medium uppercase tracking-[0.18em] text-ink"
            >
              Voor zakelijke partners
            </Link>
          </motion.div>
        </div>

        {/* Photo slot — professional photography lands here */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: EASE }}
          className="relative hidden aspect-[4/5] max-h-[72vh] w-full overflow-hidden bg-linen-deep lg:block"
        >
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-6 py-4 text-[0.62rem] uppercase tracking-[0.22em] text-taupe">
            <span>Atelier — Kleiweg 124A</span>
            <span>Rotterdam</span>
          </div>
        </motion.div>
      </div>

      {/* Corporate baseline strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="border-t border-line"
      >
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-2 px-6 py-5 text-[0.66rem] uppercase tracking-[0.22em] text-taupe sm:justify-between sm:px-8 lg:px-12">
          <span>Kleiweg 124A · 3051 GX Rotterdam</span>
          <span className="hidden md:block">Raamdecoratie · Stofferen · Kussens · Maritiem</span>
          <span>KvK 96116358</span>
        </div>
      </motion.div>
    </section>
  );
}
