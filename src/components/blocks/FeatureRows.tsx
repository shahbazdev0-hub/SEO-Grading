import { LucideIcon } from "lucide-react";
import { FeatureTabs } from "./FeatureTabs";

export interface FeatureRow {
  icon: LucideIcon;
  title: string;
  description: string;
  bullets?: string[];
}

// Server wrapper: icon components can't cross into client components, so render them here.
export function FeatureRows({ rows }: { rows: FeatureRow[] }) {
  return (
    <FeatureTabs
      rows={rows.map(({ icon: Icon, ...row }) => ({
        ...row,
        icon: <Icon className="size-5" aria-hidden="true" />,
        watermark: <Icon className="size-48" strokeWidth={1} aria-hidden="true" />,
      }))}
    />
  );
}
