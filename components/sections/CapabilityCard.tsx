import Link from "next/link";
import { ArrowUpRight, Bot, Braces, Compass, PanelsTopLeft } from "lucide-react";
import type { Capability } from "@/types/site";

const iconMap = {
  "engineering-excellence": Braces,
  "ui-ux-product-design": PanelsTopLeft,
  "ai-intelligent-automation": Bot,
  "technology-transformation-advisory": Compass,
};

export function CapabilityCard({ capability, index }: { capability: Capability; index: number }) {
  const Icon = iconMap[capability.slug as keyof typeof iconMap] ?? Braces;
  return (
    <article className={`capability-card accent-${capability.accent}`}>
      <div className="capability-card__top">
        <span className="capability-number">0{index + 1}</span>
        <Icon size={25} strokeWidth={1.7} aria-hidden="true" />
      </div>
      <p className="eyebrow">{capability.eyebrow}</p>
      <h3>{capability.title}</h3>
      <p>{capability.statement}</p>
      <Link href={`/capabilities/${capability.slug}`}>View service <ArrowUpRight size={17} /></Link>
    </article>
  );
}
