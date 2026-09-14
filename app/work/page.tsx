import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { caseStudies } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "Work and Case Studies",
  "Project examples will be published here after the details are approved.",
  "/work",
);

export default function WorkPage() {
  return (
    <>
      <PageHero placeholder eyebrow="PLACEHOLDER · Work" title="Project examples will be added here." description="Client names, results, testimonials and statistics will only be published after they are checked and approved." crumbs={[{ label: "Work" }]} />
      <section className="section">
        <div className="container placeholder-callout"><strong>PLACEHOLDER</strong><p>The entries below are sample layouts. They must be replaced with approved project information and images.</p></div>
        <div className="container case-grid case-grid--listing">
          {caseStudies.map((study, index) => <CaseStudyCard key={study.slug} study={study} index={index} />)}
        </div>
      </section>
      <CTASection title="Would you like to discuss a project?" />
    </>
  );
}
