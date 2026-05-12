import Image from "next/image";
import type { ReactNode } from "react";

type Swatch = { from: string; to: string };

const SWATCHES: Record<string, Swatch> = {
  terracotta: { from: "rgb(178 92 67 / 0.92)", to: "rgb(200 137 122 / 0.85)" },
  straw: { from: "rgb(201 181 153 / 0.95)", to: "rgb(222 211 192 / 0.9)" },
  charcoal: { from: "rgb(43 41 37 / 0.96)", to: "rgb(72 66 58 / 0.92)" },
  sage: { from: "rgb(132 142 118 / 0.9)", to: "rgb(168 172 150 / 0.85)" },
  ink: { from: "rgb(28 26 23 / 0.97)", to: "rgb(54 48 42 / 0.9)" },
};

export type SwatchName = keyof typeof SWATCHES;

/**
 * Framed media block. With `src` it renders an optimised photograph behind a
 * subtle editorial overlay; without `src` it falls back to a styled fabric-
 * swatch placeholder. Used everywhere a photo lives (or will live).
 */
export default function MediaPanel({
  src,
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
  const dark =
    swatch === "charcoal" || swatch === "ink" || swatch === "terracotta" || swatch === "sage";

  if (src) {
    return (
      <div
        className={`group/media relative ${ratio} w-full overflow-hidden rounded-[1.75rem] ${className}`}
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
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent" />
        <div aria-hidden className="weave-texture absolute inset-0 opacity-15 mix-blend-overlay" />
        {framed && <div aria-hidden className="absolute inset-3 rounded-[1.35rem] border border-white/20" />}
        {(caption || children) && (
          <div className="absolute inset-0 flex items-end p-6 text-white/90">
            {children ?? (
              <span className="inline-flex items-center gap-2.5 text-[0.62rem] uppercase tracking-[0.24em]">
                <span className="h-px w-6 bg-current" />
                {caption}
              </span>
            )}
          </div>
        )}
      </div>
    );
  }

  // — placeholder fallback (no photo yet)
  return (
    <div className={`relative ${ratio} w-full overflow-hidden rounded-[1.75rem] ${className}`}>
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(135deg, ${s.from}, ${s.to})` }}
      />
      <div className="weave-texture absolute inset-0 opacity-50 mix-blend-overlay" />
      <div className="absolute -left-1/4 -top-1/4 h-2/3 w-2/3 rounded-full bg-white/15 blur-3xl" />
      {framed && <div className="absolute inset-3 rounded-[1.35rem] border border-dashed border-white/35" />}
      <div className={`absolute inset-0 flex items-end p-6 ${dark ? "text-white/70" : "text-charcoal/55"}`}>
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
