"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export type ProcessStep = {
  /** Step number e.g. "01" */
  step: string;
  /** Short headline e.g. "Adviesgesprek" */
  title: string;
  /** One-sentence description of the step (mock data for now) */
  text: string;
  /** Image URL (Unsplash mock for now; swap with real photos later) */
  src: string;
};

type Props = {
  steps: ProcessStep[];
  /** Auto-advance interval (ms). Set to 0 to disable. */
  interval?: number;
  /** Aspect ratio of the image area (TailwindCSS class). */
  ratio?: string;
  /** Optional caption shown above the slider. */
  eyebrow?: string;
  tone?: "light" | "dark";
};

/**
 * Single image area with auto-sliding mock photos that walk through the
 * "how we work" process step by step. Photographs cross-fade, while the
 * step number/title/text crossfade in sync underneath.
 *
 * Mock images are placeholders — the user will provide real photos later.
 */
export default function ProcessSlider({
  steps,
  interval = 4200,
  ratio = "aspect-[16/10]",
  eyebrow = "Zo werkt het — stap voor stap",
  tone = "light",
}: Props) {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !interval || steps.length < 2) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % steps.length);
    }, interval);
    return () => window.clearInterval(id);
  }, [interval, steps.length, reduce]);

  const current = steps[active];
  const isDark = tone === "dark";

  return (
    <div
      className={`relative overflow-hidden rounded-[1.75rem] border ${
        isDark ? "border-linen/10 bg-forest/40" : "border-line bg-linen-deep"
      }`}
    >
      {/* Image area with cross-fade */}
      <div className={`relative ${ratio} w-full overflow-hidden`}>
        <AnimatePresence mode="sync">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={current.src}
              alt={current.title}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
              priority={active === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/85 via-forest/10 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Step badge — top-left */}
        <div className="pointer-events-none absolute left-5 top-5 flex items-center gap-2 rounded-full bg-linen/95 px-3.5 py-1.5 text-[0.7rem] uppercase tracking-[0.18em] text-forest backdrop-blur sm:left-7 sm:top-7">
          <span className="font-display text-base leading-none text-forest">
            {current.step}
          </span>
          <span className="h-3 w-px bg-forest/30" />
          <span>{eyebrow}</span>
        </div>

        {/* Step content — bottom */}
        <div className="absolute inset-x-0 bottom-0 p-5 text-linen sm:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="font-display text-3xl leading-tight text-linen sm:text-4xl">
                {current.title}
              </h3>
              <p className="mt-2 max-w-xl text-[0.95rem] leading-relaxed text-linen/80">
                {current.text}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Step pills + progress */}
      <div className={`flex flex-wrap items-center gap-2 px-5 py-4 sm:px-7 ${
        isDark ? "bg-forest/60" : "bg-linen"
      }`}>
        {steps.map((s, i) => {
          const isActive = i === active;
          return (
            <button
              key={s.step}
              onClick={() => setActive(i)}
              aria-label={`Stap ${s.step} — ${s.title}`}
              className={`group relative flex flex-1 min-w-[7rem] items-center gap-2 overflow-hidden rounded-full px-3 py-1.5 text-left text-[0.7rem] uppercase tracking-[0.14em] transition-colors duration-300 ${
                isActive
                  ? isDark
                    ? "bg-sage/90 text-forest"
                    : "bg-forest text-linen"
                  : isDark
                    ? "bg-linen/5 text-linen/65 hover:bg-linen/10"
                    : "bg-linen-deep text-forest/60 hover:bg-line/60"
              }`}
            >
              <span className="font-display text-[0.95rem] leading-none">
                {s.step}
              </span>
              <span className="truncate text-[0.72rem] normal-case tracking-normal">
                {s.title}
              </span>
              {isActive && !reduce && (
                <motion.span
                  aria-hidden
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: interval / 1000, ease: "linear" }}
                  style={{ originX: 0 }}
                  className={`absolute inset-x-0 bottom-0 h-[2px] ${
                    isDark ? "bg-forest/70" : "bg-sage/80"
                  }`}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
