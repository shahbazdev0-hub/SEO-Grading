import { RevealGroup, RevealItem } from "../ui/Reveal";

export interface ProcessStep {
  title: string;
  description: string;
}

/** Numbered process rows: big step number, title, description — separated by hairlines. */
export function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  return (
    <RevealGroup className="border-t border-ink-200">
      {steps.map((step, index) => (
        <RevealItem
          key={step.title}
          className="group grid grid-cols-[3.5rem_1fr] gap-x-4 gap-y-2 border-b border-ink-200 py-6 transition-colors duration-300 sm:grid-cols-[5rem_1fr] sm:py-7 lg:grid-cols-[7rem_minmax(0,0.9fr)_minmax(0,1.3fr)] lg:gap-x-8"
        >
          <span className="row-span-2 font-display text-4xl leading-none font-extrabold text-primary-100 transition-colors duration-300 group-hover:text-primary-600 sm:text-5xl lg:row-span-1">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="self-center text-lg font-bold text-ink-950 sm:text-xl lg:self-start lg:pt-1">
            {step.title}
          </h3>
          <p className="text-[15px] leading-relaxed text-ink-600 lg:pt-1.5">{step.description}</p>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
