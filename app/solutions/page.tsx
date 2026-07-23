import { Check, Users } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { solutions } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "Solutions",
  "Explore digital platforms, learning solutions, workflow automation, data and decision-support solutions shaped around real organisational needs.",
  "/solutions",
);

export default function SolutionsPage() {
  return (
    <>
      <PageHero eyebrow="Solution areas" title="Technology solutions shaped around an operational need—not a product catalogue." description="Each solution brings together the right combination of product design, engineering, AI and transformation support. Scope and implementation are adapted to your users, systems and priorities." crumbs={[{ label: "Solutions" }]} />
      <div className="solution-details">
        {solutions.map((solution, index) => (
          <section className={`section${index % 2 ? " section--blue-grey" : " section--white"}`} id={solution.slug} key={solution.slug}>
            <div className="container solution-detail-grid">
              <div className="solution-detail__intro">
                <span className="solution-big-number">0{index + 1}</span>
                <p className="eyebrow">Solution area</p>
                <h2>{solution.title}</h2>
                <p>{solution.summary}</p>
              </div>
              <div className="solution-detail__body">
                <div><h3>Business problem</h3><p>{solution.problem}</p></div>
                <div><h3><Users size={18} /> Intended users</h3><ul className="tag-list">{solution.users.map((item) => <li key={item}>{item}</li>)}</ul></div>
                <div><h3>Typical functionality</h3><ul className="check-list compact">{solution.functionality.map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul></div>
                <div><h3>Core capabilities</h3><ul className="tag-list">{solution.capabilities.map((item) => <li key={item}>{item}</li>)}</ul></div>
                <div className="full-width"><h3>Implementation approach</h3><ol className="inline-steps">{solution.approach.map((item, step) => <li key={item}><span>{step + 1}</span>{item}</li>)}</ol></div>
                <div className="full-width placeholder-note"><strong>Related work:</strong> Verified case studies will be connected here when client-approved content is available.</div>
              </div>
            </div>
          </section>
        ))}
      </div>
      <CTASection title="Which operational need should technology solve next?" />
    </>
  );
}

