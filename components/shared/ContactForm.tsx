"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, Check, Loader2, Paperclip, Send, X } from "lucide-react";
import { SUBJECT_OPTIONS } from "@/lib/site";
import { Button } from "@/components/ui/Button";

type FormValues = {
  naam: string;
  email: string;
  onderwerp: string;
  bericht: string;
  /** Honeypot — must stay empty. Hidden from real users. */
  website?: string;
};

const fieldBase =
  "peer w-full border border-line bg-linen/60 px-4 pt-6 pb-2 text-[0.95rem] text-forest outline-none transition-colors duration-300 placeholder-transparent focus:border-forest/60 focus:bg-linen";
const labelBase =
  "pointer-events-none absolute left-4 top-2 text-[0.65rem] uppercase tracking-[0.18em] text-forest/55 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-[0.85rem] peer-placeholder-shown:tracking-normal peer-placeholder-shown:normal-case peer-focus:top-2 peer-focus:text-[0.65rem] peer-focus:uppercase peer-focus:tracking-[0.18em]";
const selectBase =
  "w-full appearance-none border border-line bg-linen/60 px-4 pt-6 pb-2 text-[0.95rem] text-forest outline-none transition-colors duration-300 focus:border-forest/60 focus:bg-linen";
const selectLabel =
  "pointer-events-none absolute left-4 top-2 text-[0.65rem] uppercase tracking-[0.18em] text-forest/55";
const errCls = "mt-1.5 block text-[0.72rem] text-terracotta";

const MAX_FILE_MB = 4;
const MAX_TOTAL_MB = 4;
const MAX_FILES = 5;

export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: { onderwerp: "", website: "" },
  });

  function handleFiles(list: FileList | null) {
    if (!list) return;
    const next = [...files];
    let err: string | null = null;

    Array.from(list).forEach((f) => {
      if (next.length >= MAX_FILES) {
        err = `Maximaal ${MAX_FILES} bijlagen.`;
        return;
      }
      if (f.size > MAX_FILE_MB * 1024 * 1024) {
        err = `Bestanden tot ${MAX_FILE_MB} MB per stuk.`;
        return;
      }
      next.push(f);
    });

    const total = next.reduce((s, f) => s + f.size, 0);
    if (total > MAX_TOTAL_MB * 1024 * 1024) {
      err = `Gezamenlijk te groot — max ${MAX_TOTAL_MB} MB.`;
    }

    setFiles(next);
    setFileError(err);
    if (inputRef.current) inputRef.current.value = "";
  }

  function removeFile(i: number) {
    setFiles(files.filter((_, idx) => idx !== i));
    setFileError(null);
  }

  async function onSubmit(data: FormValues) {
    setSubmitError(null);

    const total = files.reduce((s, f) => s + f.size, 0);
    if (total > MAX_TOTAL_MB * 1024 * 1024) {
      setFileError(`Gezamenlijk te groot — max ${MAX_TOTAL_MB} MB.`);
      return;
    }

    const fd = new FormData();
    fd.append("naam", data.naam);
    fd.append("email", data.email);
    fd.append("onderwerp", data.onderwerp);
    fd.append("bericht", data.bericht);
    fd.append("website", data.website || "");
    files.forEach((f) => fd.append("bijlagen", f, f.name));

    try {
      const res = await fetch("/api/contact", { method: "POST", body: fd });
      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };

      if (!res.ok || !json.ok) {
        setSubmitError(
          json.error ||
            "Er ging iets mis bij het versturen. Probeer het later opnieuw of bel ons direct.",
        );
        return;
      }

      setSent(true);
      reset();
      setFiles([]);
      setTimeout(() => setSent(false), 6000);
    } catch {
      setSubmitError(
        "Verbinding mislukt. Controleer uw internet of bel ons direct op 010 237 22 48.",
      );
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative" noValidate>
      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-linen/95 text-center backdrop-blur-sm"
          >
            <motion.span
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 16 }}
              className="flex h-16 w-16 items-center justify-center bg-forest text-linen"
            >
              <Check className="h-7 w-7" />
            </motion.span>
            <p className="mt-5 font-display text-2xl text-forest">
              Dank u wel — bericht verstuurd.
            </p>
            <p className="mt-2 text-sm text-taupe">
              Ik neem zo snel mogelijk persoonlijk contact met u op.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Honeypot — hidden from real users, parsed server-side */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden
        {...register("website")}
      />

      <div className={`grid gap-5 ${compact ? "sm:grid-cols-2" : "md:grid-cols-2"}`}>
        <div className="relative">
          <input
            id="naam"
            placeholder="Naam"
            className={fieldBase}
            {...register("naam", { required: "Vul uw naam in." })}
          />
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
              required: "Vul uw e-mailadres in.",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Ongeldig e-mailadres." },
            })}
          />
          <label htmlFor="email" className={labelBase}>E-mail</label>
          {errors.email && <span className={errCls}>{errors.email.message}</span>}
        </div>

        <div className="relative md:col-span-2">
          <select
            id="onderwerp"
            className={selectBase}
            {...register("onderwerp", { required: "Kies een onderwerp." })}
          >
            <option value="" disabled hidden></option>
            {SUBJECT_OPTIONS.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
          <label htmlFor="onderwerp" className={selectLabel}>Onderwerp</label>
          <span
            aria-hidden
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-forest/55"
          >
            ▾
          </span>
          {errors.onderwerp && <span className={errCls}>{errors.onderwerp.message}</span>}
        </div>

        <div className="relative md:col-span-2">
          <textarea
            id="bericht"
            rows={compact ? 4 : 5}
            placeholder="Bericht"
            className={`${fieldBase} resize-none`}
            {...register("bericht", {
              required: "Schrijf hier uw bericht.",
              minLength: { value: 10, message: "Iets te kort — vertel wat meer." },
            })}
          />
          <label htmlFor="bericht" className={labelBase}>Bericht</label>
          {errors.bericht && <span className={errCls}>{errors.bericht.message}</span>}
        </div>

        {/* File upload */}
        <div className="md:col-span-2">
          <label
            htmlFor="bijlagen"
            className="group flex cursor-pointer flex-col items-center justify-center gap-2 border border-dashed border-forest/30 bg-linen-deep/50 px-4 py-6 text-center transition-colors duration-300 hover:border-forest/60 hover:bg-linen-deep"
          >
            <span className="flex h-11 w-11 items-center justify-center bg-linen text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-linen">
              <Paperclip className="h-5 w-5" />
            </span>
            <span className="text-[0.85rem] font-medium text-forest">
              Voeg foto&apos;s of documenten toe
            </span>
            <span className="text-[0.72rem] text-taupe">
              PDF / JPG / PNG / DOCX — tot {MAX_FILE_MB} MB per bestand, max {MAX_TOTAL_MB} MB totaal, {MAX_FILES} bestanden.
            </span>
            <input
              id="bijlagen"
              ref={inputRef}
              type="file"
              multiple
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.heic,.webp"
              className="sr-only"
              onChange={(e) => handleFiles(e.target.files)}
            />
          </label>

          {fileError && <span className={errCls}>{fileError}</span>}

          {files.length > 0 && (
            <ul className="mt-3 space-y-2">
              {files.map((f, i) => (
                <li
                  key={`${f.name}-${i}`}
                  className="flex items-center justify-between gap-3 border border-line bg-linen/70 px-3 py-2 text-[0.85rem] text-forest"
                >
                  <span className="flex items-center gap-2 truncate">
                    <Paperclip className="h-3.5 w-3.5 shrink-0 text-forest/60" />
                    <span className="truncate">{f.name}</span>
                    <span className="shrink-0 text-[0.72rem] text-taupe">
                      {(f.size / 1024 / 1024).toFixed(2)} MB
                    </span>
                  </span>
                  <button
                    type="button"
                    onClick={() => removeFile(i)}
                    aria-label={`${f.name} verwijderen`}
                    className="p-1 text-taupe transition-colors hover:bg-line/40 hover:text-forest"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {submitError && (
        <div className="mt-5 flex items-start gap-2 border border-terracotta/40 bg-terracotta/10 px-4 py-3 text-[0.85rem] text-forest">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-terracotta" />
          <span>{submitError}</span>
        </div>
      )}

      <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[0.72rem] leading-relaxed text-taupe">
          Uw gegevens worden alleen gebruikt om uw vraag te beantwoorden.
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
