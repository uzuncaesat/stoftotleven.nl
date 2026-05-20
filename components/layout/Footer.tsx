import Link from "next/link";
import { Phone, Smartphone, Mail, Instagram, MapPin } from "lucide-react";
import { NAV_LINKS, CONTACT } from "@/lib/site";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-linen-dark text-linen">
      <div aria-hidden className="weave-texture pointer-events-none absolute inset-0 opacity-[0.06]" />
      <div aria-hidden className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-sage/15 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-14 py-20 md:grid-cols-[1.3fr_1fr_1.2fr] md:py-24">
          <div>
            <Logo tone="light" />
            <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-linen/70">
              Maatwerk in raamdecoratie, stofferen, kussens en maritieme bekleding.
              Twintig jaar ambacht op de Kleiweg in Rotterdam — waar u niet als
              klant, maar als bekende wordt ontvangen.
            </p>
            <p className="mt-7 font-script text-3xl text-sage" translate="no">
              Liefs, <span className="notranslate">Hatish</span>
            </p>
          </div>

          <nav aria-label="Footer navigatie">
            <h3 className="text-[0.7rem] uppercase tracking-[0.28em] text-linen/50">Navigatie</h3>
            <ul className="mt-5 space-y-3">
              <li>
                <Link href="/" className="text-[0.95rem] text-linen/80 transition-colors hover:text-sage">
                  Home
                </Link>
              </li>
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[0.95rem] text-linen/80 transition-colors hover:text-sage"
                  >
                    <span translate="no" className="notranslate">{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-[0.7rem] uppercase tracking-[0.28em] text-linen/50">Contact</h3>
            <address className="mt-5 space-y-3.5 text-[0.95rem] not-italic text-linen/80">
              <p className="font-medium text-linen" translate="no">
                <span className="notranslate">{CONTACT.company}</span>
              </p>
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                <span>{CONTACT.address}<br />{CONTACT.postal}</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-sage" />
                <a href={CONTACT.telHref} className="hover:text-sage">{CONTACT.tel}</a>
              </p>
              <p className="flex items-center gap-3">
                <Smartphone className="h-4 w-4 shrink-0 text-sage" />
                <a href={CONTACT.mobileHref} className="hover:text-sage">{CONTACT.mobile}</a>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-sage" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-sage">{CONTACT.email}</a>
              </p>
              <p className="flex items-center gap-3">
                <Instagram className="h-4 w-4 shrink-0 text-sage" />
                <a
                  href={CONTACT.instagramHref}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-sage"
                >
                  {CONTACT.instagram}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-linen/10 py-7 text-[0.75rem] text-linen/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year}{" "}
            <span translate="no" className="notranslate">
              {CONTACT.brand}
            </span>{" "}
            — KvK {CONTACT.kvk}
          </p>
          <p>Ambachtelijk maatwerk · Rotterdam</p>
        </div>
      </div>
    </footer>
  );
}
