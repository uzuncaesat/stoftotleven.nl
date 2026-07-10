import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  className?: string;
  /** "ink" for dark text on light, "light" for light text on dark */
  tone?: "ink" | "light";
  withLink?: boolean;
  size?: "sm" | "md" | "lg";
};

/**
 * Brand mark for "Stof tot Leven — by Hatish".
 * Uses logo-mark.jpg (the square monogram cropped from the official
 * logo) so it fills the box exactly, with the wordmark set in live
 * text beside it. `translate="no"` + `notranslate` lock the brand
 * name against automatic translators (Google Translate, browsers).
 */
export default function Logo({
  className = "",
  tone = "ink",
  withLink = true,
  size = "md",
}: LogoProps) {
  const dim = size === "sm" ? 40 : size === "lg" ? 64 : 52;
  const box =
    size === "sm" ? "h-10 w-10" : size === "lg" ? "h-16 w-16" : "h-[52px] w-[52px]";
  const tint =
    tone === "light"
      ? "ring-1 ring-linen/20"
      : "ring-1 ring-forest/15";

  const inner = (
    <span
      translate="no"
      lang="nl"
      className={`notranslate group inline-flex shrink-0 items-center gap-3 ${className}`}
      aria-label="Stof tot Leven by Hatish — Hillegersberg"
    >
      <span
        className={`relative ${box} shrink-0 overflow-hidden rounded-none ${tint}`}
      >
        <Image
          src="/logo-mark.jpg"
          alt=""
          width={dim * 2}
          height={dim * 2}
          priority
          className="h-full w-full object-cover"
        />
      </span>
      <span className="flex flex-col leading-none" translate="no">
        <span
          className={`whitespace-nowrap font-display text-[1.05rem] tracking-tight sm:text-[1.22rem] ${
            tone === "light" ? "text-linen" : "text-forest"
          }`}
        >
          Stof tot Leven
        </span>
        <span
          className={`mt-1 hidden whitespace-nowrap text-[0.52rem] uppercase tracking-[0.28em] min-[400px]:block ${
            tone === "light" ? "text-linen/60" : "text-forest/55"
          }`}
        >
          by Hatish · Hillegersberg
        </span>
      </span>
    </span>
  );

  if (!withLink) return inner;
  return (
    <Link
      href="/"
      aria-label="Stof tot Leven — naar de homepage"
      className="-m-1 shrink-0 rounded-none p-1 transition-opacity hover:opacity-90"
    >
      {inner}
    </Link>
  );
}
