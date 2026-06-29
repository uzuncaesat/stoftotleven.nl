"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

const WORDS = ["Stof", "tot", "Leven"];

export default function HeroSection() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "16%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-linen"
    >
      {/* atelier surface — pattern-paper grid + woven texture, no blur blobs */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-linen-deep/40 via-linen to-linen" />
        <div className="pattern-grid absolute inset-0 opacity-70" />
        <div className="weave-texture absolute inset-0 opacity-30" />
      </div>

      {/* measuring-tape edge down the left margin */}
      <div aria-hidden className="absolute inset-y-0 left-0 hidden w-px bg-forest/15 sm:left-8 sm:block lg:left-12" />
      <div
        aria-hidden
        className="tape-edge absolute left-0 top-1/2 hidden h-9 w-px -translate-y-1/2 sm:left-8 sm:block lg:left-12"
        style={{ writingMode: "vertical-rl" }}
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pt-28 sm:px-12 sm:pt-28 lg:px-16">
        {/* catalogue index marker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mb-7 flex items-center gap-4"
        >
          <span className="section-index">01</span>
          <span className="h-px w-10 bg-forest/30" />
          <span className="text-[0.68rem] uppercase tracking-[0.26em] text-forest/55">
            Atelier · Rotterdam
          </span>
        </motion.div>

        <motion.div style={{ y: yText, opacity }}>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="eyebrow"
          >
            Ambachtelijk maatwerk · sinds 20+ jaar in Rotterdam
          </motion.span>

          <h1
            translate="no"
            className="notranslate mt-6 font-display text-[clamp(3rem,12vw,11.5rem)] font-light leading-[0.9] tracking-[-0.02em] text-forest"
          >
            {WORDS.map((w, i) => (
              <span key={w} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.5 + i * 0.12, duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
                >
                  {i === 1 ? (
                    <span className="pl-[0.12em] italic text-sage">{w}</span>
                  ) : (
                    w
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* signature running-stitch seam under the wordmark */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.05, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="stitch mt-8 max-w-xl origin-left"
          />

          <div className="mt-8 flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.7 }}
              className="max-w-md text-[1.05rem] leading-relaxed text-forest/75"
            >
              <span translate="no" className="notranslate font-script text-[1.7rem] text-forest sm:text-3xl">
                by Hatish
              </span>
              <br />
              Dochter van een kleermaker — ik ben opgegroeid tussen naald, draad en
              verhalen. Eerlijk, duurzaam textielwerk dat een ruimte écht van u
              laat voelen.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.7 }}
              className="flex flex-wrap items-center gap-5"
            >
              <Link
                href="#over-hatish"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-none bg-forest px-7 py-3.5 text-[0.74rem] uppercase tracking-[0.2em] text-linen transition-colors duration-500 ease-out-expo hover:text-forest"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 -z-0 translate-y-full bg-sage transition-transform duration-500 ease-out-expo group-hover:translate-y-0"
                />
                <span className="relative z-10 flex items-center gap-3">
                  Ontdek meer
                  <ArrowDown className="h-4 w-4 transition-transform duration-500 group-hover:translate-y-1" />
                </span>
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-[0.74rem] uppercase tracking-[0.2em] text-forest"
              >
                <span className="link-underline">Plan een afspraak</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* scroll cue + atelier coordinates */}
      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="relative mx-auto flex w-full max-w-7xl items-center justify-center gap-4 border-t border-forest/10 px-6 py-6 text-[0.64rem] uppercase tracking-[0.28em] text-forest/55 sm:justify-between sm:px-12 lg:px-16"
      >
        <span className="hidden sm:block">Kleiweg 124A · 3051 GX</span>
        <span className="flex items-center gap-3">
          Scroll
          <span className="relative block h-9 w-px overflow-hidden bg-forest/20">
            <motion.span
              className="absolute inset-x-0 top-0 h-3 bg-forest"
              animate={{ y: ["-100%", "400%"] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
        </span>
        <span className="hidden sm:block">KvK 96116358</span>
      </motion.div>
    </section>
  );
}
