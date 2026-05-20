"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

const WORDS = ["Stof", "tot", "Leven"];

export default function HeroSection() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "12%"]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-linen"
    >
      {/* layered atmosphere */}
      <motion.div style={{ y: yBg }} aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(120%_85%_at_50%_-10%,rgba(168,182,158,0.45),transparent_55%)]" />
        <div className="absolute -left-32 top-1/3 h-[34rem] w-[34rem] rounded-full bg-forest/10 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-straw/40 blur-[120px]" />
        <div className="weave-texture absolute inset-0 opacity-40" />
      </motion.div>

      {/* drawn fabric threads */}
      <svg
        aria-hidden
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full text-forest/25"
        fill="none"
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.path
            key={i}
            d={`M-100 ${120 + i * 140} C 300 ${40 + i * 150}, 700 ${260 + i * 120}, 1100 ${120 + i * 130} S 1540 ${60 + i * 150}, 1640 ${180 + i * 120}`}
            stroke="currentColor"
            strokeWidth={i % 2 ? 1 : 1.6}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.4, delay: 0.6 + i * 0.18, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
      </svg>

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pt-24 sm:px-8 sm:pt-28 lg:px-12">
        <motion.div style={{ y: yText, opacity }}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="eyebrow"
          >
            Ambachtelijk maatwerk · sinds 20+ jaar in Rotterdam
          </motion.span>

          <h1
            translate="no"
            className="notranslate mt-5 font-display text-[clamp(2.8rem,11vw,11rem)] leading-[0.92] text-forest sm:mt-6"
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
                    <span className="italic text-sage">{w}</span>
                  ) : (
                    w
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.7 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="#over-hatish"
                className="group inline-flex items-center gap-3 rounded-full bg-forest px-7 py-3.5 text-[0.78rem] uppercase tracking-[0.18em] text-linen transition-colors duration-500 hover:bg-forest-soft"
              >
                Ontdek meer
                <ArrowDown className="h-4 w-4 transition-transform duration-500 group-hover:translate-y-1" />
              </Link>
              <Link
                href="/contact"
                className="link-underline text-[0.78rem] uppercase tracking-[0.18em] text-forest"
              >
                Plan een afspraak
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="relative mx-auto flex w-full max-w-7xl items-center justify-center px-6 pb-8 text-[0.65rem] uppercase tracking-[0.3em] text-forest/55 sm:justify-between sm:px-8 lg:px-12"
      >
        <span className="hidden sm:block">Rotterdam · Kleiweg 124A</span>
        <span className="flex items-center gap-3">
          Scroll
          <span className="relative block h-10 w-px overflow-hidden bg-forest/20">
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
