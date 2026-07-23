import { ArrowRight } from "lucide-react";
import type { Solution } from "@/types/site";

export function SolutionCard({ solution, index }: { solution: Solution; index: number }) {
  return (
    <article className="solution-row" id={solution.slug}>
      <div className="solution-index">0{index + 1}</div>
      <div>
        <h3>{solution.title}</h3>
        <p>{solution.summary}</p>
      </div>
      <a href={`/solutions#${solution.slug}`} aria-label={`Read about ${solution.title}`}><ArrowRight /></a>
    </article>
  );
}

