import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/types/site";

export function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <article className="case-card">
      <div className={`case-visual case-visual--${index + 1}`} aria-hidden="true">
        <span className="case-visual__label">Verified project visual to be added</span>
        <div className="case-visual__grid" />
      </div>
      <div className="case-card__content">
        <span className="placeholder-badge">Content placeholder</span>
        <p className="case-meta">{study.clientType} · {study.sector}</p>
        <h3>{study.title}</h3>
        <p>{study.challenge}</p>
        <Link href={`/work/${study.slug}`}>View case-study structure <ArrowUpRight size={17} /></Link>
      </div>
    </article>
  );
}

