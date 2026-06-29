"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import Image from "next/image";
import ScrollReveal, { Stagger, StaggerItem } from "@/components/ui/ScrollReveal";

// Vervang de src-waarden met echte Instagram foto-URLs of lokale afbeeldingen in /public/instagram/
const POSTS = [
  { id: 1, src: "/instagram/post-1.jpg", alt: "Gordijnen op maat" },
  { id: 2, src: "/instagram/post-2.jpg", alt: "Gestoffeerde fauteuil" },
  { id: 3, src: "/instagram/post-3.jpg", alt: "Kussens op maat" },
  { id: 4, src: "/instagram/post-4.jpg", alt: "Maritieme bekleding" },
  { id: 5, src: "/instagram/post-5.jpg", alt: "Atelier Kleiweg" },
  { id: 6, src: "/instagram/post-6.jpg", alt: "Raamdecoratie detail" },
];

// Fallback placeholder colors when images are not yet uploaded
const PLACEHOLDER_COLORS = [
  "bg-[#E8D5C0]",
  "bg-[#C5D5C8]",
  "bg-[#D4C5B5]",
  "bg-[#B8CCBE]",
  "bg-[#DDD0C0]",
  "bg-[#C8D8CB]",
];

export default function InstagramFeed() {
  return (
    <section
      aria-label="Instagram"
      className="relative overflow-hidden bg-linen py-16 sm:py-20"
    >
      <div aria-hidden className="weave-texture pointer-events-none absolute inset-0 opacity-[0.04]" />
      <div aria-hidden className="pattern-grid pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="mb-10 flex items-center gap-4">
            <span className="section-index text-sage">03</span>
            <span className="stitch-soft h-px flex-1 opacity-50" />
            <span className="text-[0.68rem] uppercase tracking-[0.26em] text-forest/55">
              Instagram
            </span>
          </div>

          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-3xl font-light leading-tight text-forest sm:text-4xl">
                Volg ons dagelijks werk{" "}
                <span className="italic text-sage">op Instagram</span>.
              </h2>
              <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-forest/65">
                Een kijkje achter de schermen in het atelier — van eerste stofkeuze
                tot afgewerkt resultaat.
              </p>
            </div>

            <a
              href="https://instagram.com/stoftotleven.nl"
              target="_blank"
              rel="noreferrer"
              className="group flex shrink-0 items-center gap-2.5 border border-forest bg-forest px-5 py-2.5 text-[0.78rem] font-medium uppercase tracking-[0.18em] text-linen transition-all duration-300 hover:bg-transparent hover:text-forest"
            >
              <Instagram className="h-4 w-4" />
              @stoftotleven.nl
            </a>
          </div>
        </ScrollReveal>

        <div aria-hidden className="stitch-soft mt-10 h-px opacity-40" />

        {/* Grid */}
        <Stagger
          className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3"
          staggerChildren={0.07}
        >
          {POSTS.map((post, i) => (
            <StaggerItem key={post.id}>
              <motion.a
                href="https://instagram.com/stoftotleven.nl"
                target="_blank"
                rel="noreferrer"
                aria-label={`Instagram: ${post.alt}`}
                className="group relative block aspect-square overflow-hidden bg-linen-deep"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                {/* Try to load real image, fallback to colored placeholder */}
                <div
                  className={`absolute inset-0 ${PLACEHOLDER_COLORS[i]} transition-transform duration-500 group-hover:scale-105`}
                >
                  <Image
                    src={post.src}
                    alt={post.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      // Hide broken image, show placeholder color instead
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-forest/0 transition-colors duration-300 group-hover:bg-forest/25">
                  <Instagram className="h-7 w-7 translate-y-2 text-linen/0 transition-all duration-300 group-hover:translate-y-0 group-hover:text-linen/90" />
                </div>

                {/* Alt label on hover */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-forest/80 px-3 py-2 transition-transform duration-300 group-hover:translate-y-0">
                  <p className="text-[0.7rem] uppercase tracking-[0.14em] text-linen/90">
                    {post.alt}
                  </p>
                </div>
              </motion.a>
            </StaggerItem>
          ))}
        </Stagger>

        {/* CTA bottom */}
        <ScrollReveal direction="up">
          <div className="mt-8 text-center">
            <a
              href="https://instagram.com/stoftotleven.nl"
              target="_blank"
              rel="noreferrer"
              className="link-underline text-[0.78rem] uppercase tracking-[0.22em] text-forest/70 transition-colors hover:text-forest"
            >
              Bekijk alle foto&apos;s op Instagram →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
