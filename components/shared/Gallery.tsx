import { Stagger, StaggerItem } from "@/components/ui/ScrollReveal";
import MediaPanel, { type SwatchName } from "@/components/shared/MediaPanel";

export type GalleryItem = {
  label: string;
  src?: string;
  swatch?: SwatchName;
  /** Tailwind aspect-ratio class for this tile, e.g. "aspect-[4/5]" */
  ratio?: string;
  /** Tailwind column-span class for this tile, e.g. "sm:col-span-2" */
  span?: string;
};

export default function Gallery({ items }: { items: GalleryItem[] }) {
  return (
    <Stagger className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3" staggerChildren={0.1}>
      {items.map((it) => (
        <StaggerItem key={it.label} className={it.span ?? ""}>
          <MediaPanel
            src={it.src}
            label={it.label}
            caption={it.src ? it.label : undefined}
            swatch={it.swatch ?? "straw"}
            ratio={it.ratio ?? "aspect-square"}
            sizes="(max-width: 768px) 50vw, 33vw"
            className="transition-transform duration-500 ease-out-expo hover:-translate-y-1"
          />
        </StaggerItem>
      ))}
    </Stagger>
  );
}
