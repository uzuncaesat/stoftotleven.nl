"use client";

import { motion } from "framer-motion";

export type Step = { title: string; text: string };

export default function ProcessTimeline({ steps }: { steps: Step[] }) {
  return (
    <motion.ol
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.16 } } }}
      className="relative grid gap-y-12 md:grid-cols-4 md:gap-x-8"
    >
      {/* connecting thread */}
      <div aria-hidden className="absolute left-[1.35rem] top-3 hidden h-[calc(100%-1.5rem)] w-px bg-line md:left-0 md:top-[1.6rem] md:h-px md:w-full" />
      <motion.div
        aria-hidden
        variants={{ hidden: { scaleX: 0, scaleY: 0 }, show: { scaleX: 1, scaleY: 1 } }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="stitch-soft absolute left-[1.35rem] top-3 hidden h-[calc(100%-1.5rem)] w-[2px] origin-top md:left-0 md:top-[1.6rem] md:h-[2px] md:w-full md:origin-left"
      />

      {steps.map((s, i) => (
        <motion.li
          key={s.title}
          variants={{
            hidden: { opacity: 0, y: 28 },
            show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
          }}
          className="relative pl-14 md:pl-0 md:pt-12"
        >
          <span className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-none border border-forest/45 bg-linen font-display text-lg text-forest tabular-nums md:-top-[1.4rem] md:left-0">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="font-display text-[1.5rem] font-light leading-tight text-forest">{s.title}</h3>
          <p className="mt-2.5 text-[0.95rem] leading-relaxed text-taupe">{s.text}</p>
        </motion.li>
      ))}
    </motion.ol>
  );
}
