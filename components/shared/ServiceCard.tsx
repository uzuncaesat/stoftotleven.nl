"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/site";

export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  const reduce = useReducedMotion();
  const Icon = service.icon;
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: reduce ? 0 : 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
      }}
      className="group relative"
    >
      <Link
        href={service.href}
        className="relative flex h-full flex-col overflow-hidden rounded-none border border-line bg-linen transition-[transform,box-shadow,border-color] duration-500 ease-out-expo hover:-translate-y-1.5 hover:border-forest/40 hover:shadow-[0_30px_60px_-28px_rgba(45,74,62,0.35)]"
      >
        <div className="relative aspect-[3/2] overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-[1.3s] ease-out-expo group-hover:scale-[1.06]"
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-forest/60 via-forest/10 to-transparent" />
          <div aria-hidden className="absolute inset-0 bg-forest/0 transition-colors duration-500 group-hover:bg-forest/15" />
          <span className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-none bg-linen/90 text-forest backdrop-blur-sm transition-transform duration-500 ease-out-expo group-hover:scale-105">
            <Icon className="h-5 w-5" strokeWidth={1.4} />
          </span>
          <span className="absolute bottom-3 right-5 font-display text-3xl text-linen/85 tabular-nums">{num}</span>
        </div>

        <div className="flex flex-1 flex-col p-7">
          <h3 className="font-display text-[1.6rem] font-light leading-tight text-forest">{service.title}</h3>
          <p className="mt-2.5 flex-1 text-[0.92rem] leading-relaxed text-taupe">{service.blurb}</p>
          <span aria-hidden className="stitch-soft mt-6 h-px w-full" />
          <span className="mt-5 inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.2em] text-forest">
            Ontdek
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
