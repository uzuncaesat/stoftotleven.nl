import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-linen-deep px-6 pt-32 pb-24">
      <div aria-hidden className="weave-texture pointer-events-none absolute inset-0 opacity-30" />
      <div aria-hidden className="pattern-grid pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative max-w-xl text-center">
        <span className="eyebrow mx-auto w-fit">Pagina niet gevonden</span>
        <h1 className="mt-6 font-display text-7xl font-light text-forest sm:text-8xl">404</h1>
        <div aria-hidden className="stitch mx-auto mt-6 w-24" />
        <p className="mt-5 text-[1.05rem] leading-relaxed text-taupe">
          Deze draad loopt nergens heen. Misschien is de pagina verplaatst of bestaat ze niet meer —
          laten we je terugbrengen naar vertrouwd terrein.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink href="/" variant="solid" withArrow>
            Terug naar home
          </ButtonLink>
          <Link href="/contact" className="link-underline text-[0.78rem] uppercase tracking-[0.18em] text-charcoal">
            Of neem contact op
          </Link>
        </div>
      </div>
    </section>
  );
}
