import Image from "next/image";
import type { ReactNode } from "react";

type Swatch = { from: string; to: string };

// Brand-aligned fabric swatches — teal / sage / cream only.
const SWATCHES: Record<string, Swatch> = {
  terracotta: { from: "rgb(145 162 161 / 0.92)", to: "rgb(176 189 188 / 0.85)" }, // legacy alias → sage
  straw: { from: "rgb(233 217 195 / 0.96)", to: "rgb(214 197 174 / 0.92)" },
  charcoal: { from: "rgb(47 76 72 / 0.96)", to: "rgb(75 109 104 / 0.9)" },
  sage: { from: "rgb(145 162 161 / 0.92)", to: "rgb(176 189 188 / 0.85)" },
  ink: { from: "rgb(38 60 57 / 0.97)", to: "rgb(62 92 87 / 0.9)" },
};

export type SwatchName = keyof typeof SWATCHES;

/**
 * Framed media block. With `video` it renders a muted, looping background clip;
 * with `src` it renders an optimised photograph behind a subtle editorial
 * overlay; without either it falls back to a styled fabric-swatch placeholder.
 * Sharp corners and a stitched inner frame keep the tailor's-atelier language.
 */
export default function MediaPanel({
  src,
  video,
  poster,
  alt,
  label = "Beeld volgt",
  caption,
  swatch = "straw",
  ratio = "aspect-[4/5]",
  className = "",
  framed = true,
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 50vw",
  children,
}: {
  src?: string;
  video?: string;
  poster?: string;
  alt?: string;
  label?: string;
  caption?: ReactNode;
  swatch?: SwatchName;
  ratio?: string;
  className?: string;
  framed?: boolean;
  priority?: boolean;
  sizes?: string;
  children?: ReactNode;
}) {
  const s = SWATCHES[swatch] ?? SWATCHES.straw;
  const dark = swatch === "charcoal" || swatch === "ink";

  const captionEl = (tone: string) =>
    (caption || children) && (
      <div className={`absolute inset-0 flex items-end p-6 ${tone}`}>
        {children ?? (
          <span className="inline-flex items-center gap-2.5 text-[0.62rem] uppercase tracking-[0.24em]">
            <span className="h-px w-6 bg-current" />
            {caption}
          </span>
        )}
      </div>
    );

  if (video) {
    return (
      <div
        className={`group/media relative ${ratio} w-full overflow-hidden rounded-none ${className}`}
        style={{ background: `linear-gradient(135deg, ${s.from}, ${s.to})` }}
      >
        <video
          src={video}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out-expo group-hover/media:scale-[1.04]"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-forest/55 via-forest/10 to-transparent" />
        <div aria-hidden className="weave-texture absolute inset-0 opacity-15 mix-blend-overlay" />
        {framed && <div aria-hidden className="absolute inset-3 border border-white/25" />}
        {captionEl("text-white/90")}
      </div>
    );
  }

  if (src) {
    return (
      <div
        className={`group/media relative ${ratio} w-full overflow-hidden rounded-none ${className}`}
        style={{ background: `linear-gradient(135deg, ${s.from}, ${s.to})` }}
      >
        <Image
          src={src}
          alt={alt ?? (typeof caption === "string" ? caption : label)}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-[1.2s] ease-out-expo group-hover/media:scale-[1.04]"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-forest/55 via-forest/10 to-transparent" />
        <div aria-hidden className="weave-texture absolute inset-0 opacity-15 mix-blend-overlay" />
        {framed && <div aria-hidden className="absolute inset-3 border border-white/25" />}
        {captionEl("text-white/90")}
      </div>
    );
  }

  // — placeholder fallback (no photo yet)
  return (
    <div className={`relative ${ratio} w-full overflow-hidden rounded-none ${className}`}>
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(135deg, ${s.from}, ${s.to})` }}
      />
      <div className="weave-texture absolute inset-0 opacity-50 mix-blend-overlay" />
      <div className="pattern-grid-light absolute inset-0 opacity-40" />
      {framed && <div className="absolute inset-3 border border-dashed border-white/40" />}
      <div className={`absolute inset-0 flex items-end p-6 ${dark ? "text-white/70" : "text-forest/55"}`}>
        {children ?? (
          <span className="inline-flex items-center gap-2.5 text-[0.62rem] uppercase tracking-[0.28em]">
            <span className="h-px w-6 bg-current" />
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
