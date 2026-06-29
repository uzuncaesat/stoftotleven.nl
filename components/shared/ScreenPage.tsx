"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import ProcessSlider, { type ProcessStep } from "@/components/shared/ProcessSlider";

type Crumb = { label: string; href?: string };

type Props = {
  eyebrow: string;
  /** Locked-language brand title (Dutch). Keep short — one or two words. */
  title: ReactNode;
  /** Lead paragraph. */
  intro: ReactNode;
  /** Optional secondary paragraph for added context. */
  body?: ReactNode;
  /** Breadcrumb trail. */
  crumbs: Crumb[];
  /** Process steps shown in the auto-slider on the right. */
  steps: ProcessStep[];
  /** Call-to-action button label + href. */
  cta: { label: string; href: string };
  /** Secondary link (optional). */
  altCta?: { label: string; href: string };
  /** Extra labels (e.g. "Op maat · Inmeten · Montage"). */
  highlights?: string[];
};

/**
 * Single-screen page template — title, body and a single auto-sliding
 * image area fit within one viewport. Used by every sub-page so the
 * user does not need to scroll to grasp a service.
 */
export default function ScreenPage({
  eyebrow,
  title,
  intro,
  body,
  crumbs,
  steps,
  cta,
  altCta,
  highlights,
}: Props) {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-linen pt-24 sm:pt-28">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-linen-deep/40 via-linen to-linen" />
        <div className="weave-texture absolute inset-0 opacity-25" />
        <div className="pattern-grid absolute inset-0 opacity-50" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-10 px-6 py-8 sm:px-8 lg:grid-cols-[1fr_1.15fr] lg:gap-14 lg:px-12 lg:py-10">
        {/* LEFT: text */}
        <div className="flex flex-col">
          <motion.nav
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            aria-label="Kruimelpad"
            className="flex flex-wrap items-center gap-1.5 text-[0.68rem] uppercase tracking-[0.18em] text-forest/60"
          >
            {crumbs.map((c, i) => (
              <span key={c.label} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="h-3 w-3 text-forest/30" />}
                {c.href ? (
                  <Link href={c.href} className="link-underline hover:text-forest">
                    <span translate="no" className="notranslate">{c.label}</span>
                  </Link>
                ) : (
                  <span className="text-forest" translate="no">
                    {c.label}
                  </span>
                )}
              </span>
            ))}
          </motion.nav>

          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.6 }}
            className="eyebrow mt-7"
          >
            {eyebrow}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 font-display text-[clamp(2.4rem,5.4vw,4.4rem)] font-light leading-[1.02] text-forest"
          >
            <span translate="no" className="notranslate">
              {title}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.7 }}
            className="mt-5 max-w-prose text-[1.04rem] leading-relaxed text-forest/80"
          >
            {intro}
          </motion.p>

          {body && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24, duration: 0.7 }}
              className="mt-3 max-w-prose text-[0.98rem] leading-relaxed text-taupe"
            >
              {body}
            </motion.p>
          )}

          {highlights && (
            <motion.ul
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {highlights.map((h) => (
                <li
                  key={h}
                  className="inline-flex items-center gap-2 rounded-none border border-forest/15 bg-linen-deep/70 px-3.5 py-1.5 text-[0.72rem] uppercase tracking-[0.14em] text-forest/75"
                >
                  <span aria-hidden className="h-1.5 w-1.5 bg-sage" />
                  {h}
                </li>
              ))}
            </motion.ul>
          )}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.36, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Link
              href={cta.href}
              className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-none bg-forest px-6 py-3 text-[0.74rem] font-medium uppercase tracking-[0.18em] text-linen transition-colors duration-500 ease-out-expo hover:text-forest"
            >
              <span aria-hidden className="absolute inset-0 translate-y-full bg-sage transition-transform duration-500 ease-out-expo group-hover:translate-y-0" />
              <span className="relative z-10 flex items-center gap-2.5">
                {cta.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
            {altCta && (
              <Link
                href={altCta.href}
                className="link-underline text-[0.76rem] uppercase tracking-[0.16em] text-forest/70 hover:text-forest"
              >
                {altCta.label}
              </Link>
            )}
          </motion.div>
        </div>

        {/* RIGHT: slider */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <ProcessSlider steps={steps} />
        </motion.div>
      </div>
    </section>
  );
}
