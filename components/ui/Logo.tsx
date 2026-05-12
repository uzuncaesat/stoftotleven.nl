import Link from "next/link";

type LogoProps = {
  className?: string;
  /** "ink" for dark text on light, "light" for light text on dark */
  tone?: "ink" | "light";
  withLink?: boolean;
};

/**
 * Typographic mark for "Stof tot Leven — by Hatish".
 * A needle-and-thread glyph stitched through the wordmark.
 */
export default function Logo({ className = "", tone = "ink", withLink = true }: LogoProps) {
  const text = tone === "light" ? "text-linen" : "text-charcoal";
  const sub = tone === "light" ? "text-linen/55" : "text-taupe";

  const inner = (
    <span className={`group inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 40 40"
        className="h-7 w-7 shrink-0 text-terracotta"
        fill="none"
        aria-hidden
      >
        <path
          d="M6 30c6-2 9-9 14-14S30 6 34 8"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeDasharray="0.5 4"
          className="transition-[stroke-dasharray] duration-700 group-hover:[stroke-dasharray:2_4]"
        />
        <circle cx="34" cy="8" r="2.4" fill="currentColor" />
        <path d="M5 31l2-1 .6 2.2z" fill="currentColor" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[1.35rem] tracking-tight ${text}`}>
          Stof tot Leven
        </span>
        <span className={`mt-0.5 text-[0.6rem] uppercase tracking-[0.32em] ${sub}`}>
          by Hatish
        </span>
      </span>
    </span>
  );

  if (!withLink) return inner;
  return (
    <Link href="/" aria-label="Stof tot Leven — naar de homepage">
      {inner}
    </Link>
  );
}
