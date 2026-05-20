"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, CalendarCheck } from "lucide-react";
import { NAV_LINKS, CONTACT } from "@/lib/site";
import Logo from "@/components/ui/Logo";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color,padding] duration-400 ease-out-expo ${
          scrolled
            ? "border-b border-forest/10 bg-linen/95 py-2.5 shadow-[0_8px_24px_-18px_rgba(45,74,62,0.45)] backdrop-blur"
            : "border-b border-forest/5 bg-linen/90 py-3 backdrop-blur"
        }`}
      >
        <nav className="mx-auto flex w-full max-w-[88rem] items-center justify-between gap-4 px-5 sm:px-7 lg:px-10 xl:px-12">
          <Logo size="sm" />

          <ul className="hidden items-center gap-0.5 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative inline-flex items-center whitespace-nowrap rounded-full px-3 py-2 text-[0.72rem] font-medium uppercase tracking-[0.12em] transition-colors duration-300 xl:px-3.5 xl:text-[0.76rem] xl:tracking-[0.14em] ${
                      active
                        ? "text-forest"
                        : "text-forest/65 hover:text-forest"
                    }`}
                  >
                    <span translate="no" className="notranslate">
                      {link.label}
                    </span>
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-3 -bottom-[3px] h-[2px] rounded-full bg-forest"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden items-center gap-2 whitespace-nowrap rounded-full bg-forest px-4 py-2.5 text-[0.7rem] font-medium uppercase tracking-[0.14em] text-linen transition-colors duration-300 hover:bg-forest-soft xl:inline-flex"
            >
              <CalendarCheck className="h-3.5 w-3.5" />
              Plan een afspraak
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label="Menu openen"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-forest/25 text-forest transition-colors duration-300 hover:border-forest hover:bg-forest hover:text-linen lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[70] lg:hidden"
          >
            <motion.div
              initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
              animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
              exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 bg-linen-dark"
            >
              <div className="weave-texture absolute inset-0 opacity-[0.07]" />
              <div className="relative flex h-full flex-col px-7 pt-6">
                <div className="flex items-center justify-between">
                  <Logo tone="light" size="sm" />
                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Menu sluiten"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-linen/25 text-linen transition-colors hover:border-sage hover:text-sage"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <ul className="mt-12 flex flex-1 flex-col justify-center gap-1">
                  {NAV_LINKS.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        href={link.href}
                        className={`block border-b border-linen/10 py-4 font-display text-3xl sm:text-4xl ${
                          isActive(link.href) ? "text-sage" : "text-linen"
                        }`}
                      >
                        <span className="mr-4 align-middle text-xs tracking-widest text-linen/40">
                          0{i + 1}
                        </span>
                        <span translate="no" className="notranslate">
                          {link.label}
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="border-t border-linen/10 py-7 text-sm text-linen/60"
                >
                  <Link
                    href="/contact"
                    className="mb-4 inline-flex items-center gap-2 rounded-full bg-sage px-5 py-2.5 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-linen-dark"
                  >
                    <CalendarCheck className="h-3.5 w-3.5" />
                    Plan een afspraak
                  </Link>
                  <a href={`mailto:${CONTACT.email}`} className="block">{CONTACT.email}</a>
                  <p className="mt-1">{CONTACT.address}, {CONTACT.postal}</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
