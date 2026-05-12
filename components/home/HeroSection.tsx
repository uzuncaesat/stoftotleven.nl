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
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "32%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);

  return (
    <section ref={ref} className="relative flex min-h-[100svh] flex-col overflow-hidden bg-linen">
      {/* layered atmosphere */}
      <motion.div style={{ y: yBg }} aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(120%_85%_at_50%_-10%,rgba(201,181,153,0.45),transparent_55%)]" />
        <div className="absolute -left-32 top-1/3 h-[34rem] w-[34rem] rounded-full bg-terracotta/12 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-straw/40 blur-[120px]" />
        <div className="weave-texture absolute inset-0 opacity-40" />
      </motion.div>

      {/* drawn fabric threads */}
      <svg
        aria-hidden
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full text-terracotta/35"
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

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pt-28 sm:px-8 lg:px-12">
        <motion.div style={{ y: yText, opacity }}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="eyebrow"
          >
            Ambachtelijk maatwerk · sinds 20+ jaar op de Kleiweg
          </motion.span>

          <h1 className="mt-6 font-display text-[clamp(3.4rem,12vw,11rem)] leading-[0.92] text-charcoal">
            {WORDS.map((w, i) => (
              <span key={w} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.5 + i * 0.12, duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
                >
                  {i === 1 ? (
                    <span className="italic text-terracotta">{w}</span>
                  ) : (
                    w
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <div className="mt-6 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.7 }}
              className="max-w-md text-[1.05rem] leading-relaxed text-taupe"
            >
              <span className="font-script text-3xl text-charcoal">by Hatish</span>
              <br />
              Van gordijn tot fauteuil, van sierkussen tot bootbekleding — jouw wensen
              vertaald naar iets tastbaars, iets moois, iets echts.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.7 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="#diensten"
                className="group inline-flex items-center gap-3 rounded-full bg-charcoal px-7 py-3.5 text-[0.78rem] uppercase tracking-[0.18em] text-linen transition-colors duration-500 hover:bg-terracotta"
              >
                Ontdek meer
                <ArrowDown className="h-4 w-4 transition-transform duration-500 group-hover:translate-y-1" />
              </Link>
              <Link
                href="/contact"
                className="link-underline text-[0.78rem] uppercase tracking-[0.18em] text-charcoal"
              >
                Maak een afspraak
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
        className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-6 pb-8 text-[0.65rem] uppercase tracking-[0.3em] text-taupe sm:px-8 lg:px-12"
      >
        <span className="hidden sm:block">Rotterdam · Kleiweg 124A</span>
        <span className="flex items-center gap-3">
          Scroll
          <span className="relative block h-10 w-px overflow-hidden bg-line">
            <motion.span
              className="absolute inset-x-0 top-0 h-3 bg-terracotta"
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
