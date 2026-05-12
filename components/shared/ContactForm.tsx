"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Loader2, Send } from "lucide-react";
import { SUBJECT_OPTIONS, WEEKDAYS, DAYPARTS } from "@/lib/site";
import { Button } from "@/components/ui/Button";

type FormValues = {
  naam: string;
  email: string;
  onderwerp: string;
  voorkeursdag: string;
  dagdeel: string;
  bericht: string;
};

const fieldBase =
  "peer w-full rounded-xl border border-line bg-linen/60 px-4 pt-6 pb-2 text-[0.95rem] text-charcoal outline-none transition-colors duration-300 placeholder-transparent focus:border-terracotta/60 focus:bg-linen";
const labelBase =
  "pointer-events-none absolute left-4 top-2 text-[0.65rem] uppercase tracking-[0.18em] text-taupe transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-[0.85rem] peer-placeholder-shown:tracking-normal peer-placeholder-shown:normal-case peer-focus:top-2 peer-focus:text-[0.65rem] peer-focus:uppercase peer-focus:tracking-[0.18em]";
const selectBase =
  "w-full appearance-none rounded-xl border border-line bg-linen/60 px-4 pt-6 pb-2 text-[0.95rem] text-charcoal outline-none transition-colors duration-300 focus:border-terracotta/60 focus:bg-linen";
const selectLabel = "pointer-events-none absolute left-4 top-2 text-[0.65rem] uppercase tracking-[0.18em] text-taupe";
const errCls = "mt-1.5 block text-[0.72rem] text-terracotta";

export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: { onderwerp: "", voorkeursdag: "", dagdeel: "" },
  });

  async function onSubmit(_data: FormValues) {
    // Simulated submission — wire to an API route / email service in production.
    await new Promise((r) => setTimeout(r, 1100));
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 6000);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative" noValidate>
      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center rounded-2xl bg-linen/95 text-center backdrop-blur-sm"
          >
            <motion.span
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 16 }}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-terracotta text-linen"
            >
              <Check className="h-7 w-7" />
            </motion.span>
            <p className="mt-5 font-display text-2xl text-charcoal">Dank je wel — bericht verstuurd.</p>
            <p className="mt-2 text-sm text-taupe">Ik neem zo snel mogelijk persoonlijk contact met je op.</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`grid gap-5 ${compact ? "sm:grid-cols-2" : "md:grid-cols-2"}`}>
        <div className="relative">
          <input id="naam" placeholder="Naam" className={fieldBase} {...register("naam", { required: "Vul je naam in." })} />
          <label htmlFor="naam" className={labelBase}>Naam</label>
          {errors.naam && <span className={errCls}>{errors.naam.message}</span>}
        </div>
        <div className="relative">
          <input
            id="email"
            type="email"
            placeholder="E-mail"
            className={fieldBase}
            {...register("email", {
              required: "Vul je e-mailadres in.",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Ongeldig e-mailadres." },
            })}
          />
          <label htmlFor="email" className={labelBase}>E-mail</label>
          {errors.email && <span className={errCls}>{errors.email.message}</span>}
        </div>

        <div className="relative">
          <select id="onderwerp" className={selectBase} {...register("onderwerp", { required: "Kies een onderwerp." })}>
            <option value="" disabled hidden></option>
            {SUBJECT_OPTIONS.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
          <label htmlFor="onderwerp" className={selectLabel}>Onderwerp</label>
          <span aria-hidden className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-taupe">▾</span>
          {errors.onderwerp && <span className={errCls}>{errors.onderwerp.message}</span>}
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="relative">
            <select id="voorkeursdag" className={selectBase} {...register("voorkeursdag")}>
              <option value="">Geen voorkeur</option>
              {WEEKDAYS.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
            <label htmlFor="voorkeursdag" className={selectLabel}>Voorkeursdag</label>
            <span aria-hidden className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-taupe">▾</span>
          </div>
          <div className="relative">
            <select id="dagdeel" className={selectBase} {...register("dagdeel")}>
              <option value="">Geen voorkeur</option>
              {DAYPARTS.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
            <label htmlFor="dagdeel" className={selectLabel}>Dagdeel</label>
            <span aria-hidden className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-taupe">▾</span>
          </div>
        </div>

        <div className="relative md:col-span-2">
          <textarea
            id="bericht"
            rows={compact ? 4 : 5}
            placeholder="Bericht"
            className={`${fieldBase} resize-none`}
            {...register("bericht", { required: "Schrijf hier je bericht.", minLength: { value: 10, message: "Iets te kort — vertel wat meer." } })}
          />
          <label htmlFor="bericht" className={labelBase}>Bericht</label>
          {errors.bericht && <span className={errCls}>{errors.bericht.message}</span>}
        </div>
      </div>

      <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[0.72rem] leading-relaxed text-taupe">
          Je gegevens worden alleen gebruikt om jouw vraag te beantwoorden.
        </p>
        <Button type="submit" variant="solid" disabled={isSubmitting} className="shrink-0">
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Versturen…
            </>
          ) : (
            <>
              Verzenden <Send className="h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
