import Image from "next/image";
import { LucideIcon } from "lucide-react";
import { RevealGroup, RevealItem } from "../ui/Reveal";

export interface AudienceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

/** Optional `image` fills the empty slot when the item count leaves a gap in the 3-column grid. */
export function AudienceGrid({ items, image }: { items: AudienceItem[]; image?: string }) {
  return (
    <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
      {items.map((item) => (
        <RevealItem key={item.title}>
          <div className="group h-full rounded-2xl border border-primary-100 bg-gradient-to-b from-white to-primary-50 p-6 transition-all duration-300 ease-out-soft hover:-translate-y-1 hover:border-primary-200 hover:shadow-[0_18px_40px_-20px_rgba(31,79,224,0.35)]">
            <span className="flex size-11 items-center justify-center rounded-xl bg-primary-100 text-primary-700 transition-colors duration-300 group-hover:bg-primary-600 group-hover:text-white">
              <item.icon className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-lg font-bold text-ink-950">{item.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-600">{item.description}</p>
          </div>
        </RevealItem>
      ))}
      {image && items.length % 3 !== 0 && (
        <RevealItem className={`hidden lg:block ${items.length % 3 === 1 ? "lg:col-span-2" : ""}`}>
          <div className="relative h-full min-h-56 overflow-hidden rounded-2xl">
            <Image src={image} alt="" fill sizes="(min-width: 1024px) 420px, 0px" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 to-transparent" aria-hidden="true" />
          </div>
        </RevealItem>
      )}
    </RevealGroup>
  );
}
