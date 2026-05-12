"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, CONTACT } from "@/lib/site";
import Logo from "@/components/ui/Logo";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color,padding] duration-500 ease-out-expo ${
          scrolled
            ? "border-b border-line/80 bg-linen/80 py-3 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent py-5"
        }`}
      >
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
          <Logo />

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative rounded-full px-4 py-2 text-[0.78rem] uppercase tracking-[0.14em] transition-colors duration-300 ${
                      active ? "text-terracotta" : "text-charcoal/75 hover:text-charcoal"
                    }`}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-3 -bottom-0.5 h-px bg-terracotta"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={CONTACT.telHref}
              className="hidden items-center gap-2 rounded-full border border-charcoal/25 px-4 py-2 text-[0.72rem] uppercase tracking-[0.16em] text-charcoal transition-colors duration-300 hover:border-terracotta hover:text-terracotta xl:inline-flex"
            >
              <Phone className="h-3.5 w-3.5" />
              {CONTACT.tel}
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Menu openen"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/25 text-charcoal transition-colors duration-300 hover:border-terracotta hover:text-terracotta lg:hidden"
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
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 bg-linen-dark"
            >
              <div className="weave-texture absolute inset-0 opacity-[0.07]" />
              <div className="relative flex h-full flex-col px-7 pt-6">
                <div className="flex items-center justify-between">
                  <Logo tone="light" />
                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Menu sluiten"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-linen/25 text-linen transition-colors hover:border-terracotta-soft hover:text-terracotta-soft"
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
                          isActive(link.href) ? "text-terracotta-soft" : "text-linen"
                        }`}
                      >
                        <span className="mr-4 align-middle text-xs tracking-widest text-linen/40">
                          0{i + 1}
                        </span>
                        {link.label}
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
                  <a href={CONTACT.telHref} className="block text-linen">{CONTACT.tel}</a>
                  <a href={`mailto:${CONTACT.email}`} className="mt-1 block">{CONTACT.email}</a>
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
