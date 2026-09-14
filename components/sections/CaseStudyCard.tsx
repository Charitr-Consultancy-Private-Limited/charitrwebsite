import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/types/site";

export function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <article className="case-card case-card--placeholder">
      <div className={`case-visual case-visual--placeholder case-visual--${index + 1}`} aria-hidden="true">
        <span className="case-visual__label">PLACEHOLDER · Project image</span>
        <div className="case-visual__grid" />
      </div>
      <div className="case-card__content">
        <span className="placeholder-badge">PLACEHOLDER</span>
        <p className="case-meta">{study.clientType} · {study.sector}</p>
        <h3>{study.title}</h3>
        <p>{study.challenge}</p>
        <Link href={`/work/${study.slug}`}>View placeholder page <ArrowUpRight size={17} /></Link>
      </div>
    </article>
  );
}
