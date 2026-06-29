import type { LucideIcon } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/ui/ScrollReveal";

export type Feature = { icon?: LucideIcon; title: string; text: string };

export default function FeatureGrid({
  features,
  columns = 3,
  tone = "ink",
}: {
  features: Feature[];
  columns?: 2 | 3 | 4;
  tone?: "ink" | "light";
}) {
  const cols =
    columns === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";
  const card = tone === "light" ? "border-linen/10 bg-linen/[0.04]" : "border-line bg-linen";
  const titleC = tone === "light" ? "text-linen" : "text-charcoal";
  const textC = tone === "light" ? "text-linen/60" : "text-taupe";

  return (
    <Stagger className={`grid gap-5 ${cols}`} staggerChildren={0.1}>
      {features.map((f) => {
        const Icon = f.icon;
        return (
          <StaggerItem key={f.title}>
            <div className={`group h-full rounded-none border ${card} p-7 transition-[transform,border-color] duration-500 ease-out-expo hover:-translate-y-1 hover:border-sage/60`}>
              {Icon && (
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-none border border-line bg-linen-deep text-forest">
                  <Icon className="h-5 w-5" strokeWidth={1.4} />
                </span>
              )}
              <h3 className={`font-display text-[1.4rem] leading-tight ${titleC}`}>{f.title}</h3>
              <p className={`mt-2.5 text-[0.95rem] leading-relaxed ${textC}`}>{f.text}</p>
            </div>
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}
