import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { ServiceSummary } from "@/lib/site";
import { serviceIcons } from "@/lib/serviceIcons";

/** Photo-topped service card. `dark` renders the navy variant used to break up the grid rhythm. */
export function ServiceCard({
  service,
  index,
  dark = false,
}: {
  service: ServiceSummary;
  index: number;
  dark?: boolean;
}) {
  const Icon = serviceIcons[service.key];

  return (
    <Link
      href={service.href}
      className={`group flex h-full flex-col overflow-hidden rounded-xl border transition-all duration-300 ease-out-soft hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(10,22,49,0.45)] ${
        dark ? "border-ink-950 bg-ink-950" : "border-ink-200 bg-white hover:border-ink-300"
      }`}
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-ink-100">
        <Image
          src={service.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out-soft group-hover:scale-[1.04]"
        />
        <span className="absolute bottom-3 left-3 flex size-10 items-center justify-center rounded-lg bg-white text-primary-600 shadow-md">
          <Icon className="size-5" aria-hidden="true" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className={`text-xl font-bold ${dark ? "text-white" : "text-ink-950"}`}>{service.title}</h3>
          <span className={`pt-1.5 font-mono text-xs ${dark ? "text-primary-300" : "text-primary-600"}`}>
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <p className={`mt-3 flex-1 text-[15px] leading-relaxed ${dark ? "text-ink-300" : "text-ink-600"}`}>
          {service.shortDescription}
        </p>
        <span
          className={`mt-6 inline-flex w-fit items-center gap-1.5 border-b-2 pb-0.5 text-sm font-semibold ${
            dark ? "border-primary-400 text-white" : "border-primary-600 text-ink-950"
          }`}
        >
          Learn more
          <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
