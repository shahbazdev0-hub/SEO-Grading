import { Newspaper, Link2, Layers, Globe2, Wrench, Building2, type LucideIcon } from "lucide-react";
import type { ServiceKey } from "./site";

export const serviceIcons: Record<ServiceKey, LucideIcon> = {
  "guest-posting": Newspaper,
  "link-insertion-niche-edits": Link2,
  "on-page-seo": Layers,
  "off-page-seo": Globe2,
  "technical-seo": Wrench,
  "white-label-seo": Building2,
};
