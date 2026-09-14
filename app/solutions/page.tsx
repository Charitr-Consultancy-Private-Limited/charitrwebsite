import Link from "next/link";
import { Check, Users } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { solutions, workItems } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "Solutions",
  "Explore the digital platforms, learning systems, workflow automation and reporting solutions Charitr can build.",
  "/solutions",
);

export default function SolutionsPage() {
  return (
    <>
      <PageHero eyebrow="Solutions" title="Common types of digital systems we can help build." description="Each project is planned around the users, current systems, budget and priorities of the organisation." crumbs={[{ label: "Solutions" }]} />
      <div className="solution-details">
        {solutions.map((solution, index) => {
          const relatedWork = workItems.filter((item) => item.relatedSolutions.includes(solution.title));
          return (
          <section className={`section${index % 2 ? " section--blue-grey" : " section--white"}`} id={solution.slug} key={solution.slug}>
            <div className="container solution-detail-grid">
              <div className="solution-detail__intro">
                <span className="solution-big-number">0{index + 1}</span>
                <p className="eyebrow">Solution area</p>
                <h2>{solution.title}</h2>
                <p>{solution.summary}</p>
              </div>
              <div className="solution-detail__body">
                <div><h3>Common problem</h3><p>{solution.problem}</p></div>
                <div><h3><Users size={18} /> Users</h3><ul className="tag-list">{solution.users.map((item) => <li key={item}>{item}</li>)}</ul></div>
                <div><h3>Possible features</h3><ul className="check-list compact">{solution.functionality.map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul></div>
                <div><h3>Services involved</h3><ul className="tag-list">{solution.capabilities.map((item) => <li key={item}>{item}</li>)}</ul></div>
                <div className="full-width"><h3>How it can be delivered</h3><ol className="inline-steps">{solution.approach.map((item, step) => <li key={item}><span>{step + 1}</span>{item}</li>)}</ol></div>
                {relatedWork.length > 0 && (
                  <div className="full-width solution-related-work">
                    <h3>Related work</h3>
                    <ul className="tag-list">
                      {relatedWork.map((item) => <li key={item.slug}><Link href={`/work#${item.slug}`}>{item.title}</Link></li>)}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </section>
          );
        })}
      </div>
      <CTASection title="Need a digital system for your organisation?" />
    </>
  );
}
