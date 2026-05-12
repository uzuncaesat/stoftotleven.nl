"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import ServiceCard from "@/components/shared/ServiceCard";
import { SERVICES } from "@/lib/site";

export default function ServicesSection() {
  return (
    <section id="diensten" className="relative overflow-hidden bg-linen-deep py-24 sm:py-28 md:py-36">
      <div aria-hidden className="weave-texture pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Onze diensten"
            title={
              <>
                Vier ambachten,
                <br className="hidden sm:block" /> één <span className="italic text-terracotta">vakvrouw</span>.
              </>
            }
            className="max-w-xl"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-sm text-[0.95rem] leading-relaxed text-taupe"
          >
            Elk project begint met een gesprek aan tafel en eindigt met iets dat past — bij je
            ruimte, je smaak en je manier van leven. Kies een ambacht om verder te kijken.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } } }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.href} service={service} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
