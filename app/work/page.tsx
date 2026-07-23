import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { caseStudies } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "Work and Case Studies",
  "Explore the structure prepared for Charitr’s verified digital product, design, engineering, AI and transformation work.",
  "/work",
);

export default function WorkPage() {
  return (
    <>
      <PageHero eyebrow="Work" title="Practical technology work, presented with evidence." description="This section is structured for client-approved case studies. Names, results, testimonials and statistics are intentionally withheld until verified." crumbs={[{ label: "Work" }]} />
      <section className="section">
        <div className="container placeholder-callout"><strong>Editorial status</strong><p>All entries below are clearly marked content placeholders. Replace them with verified project narratives, approved visual assets and evidence before launch.</p></div>
        <div className="container case-grid case-grid--listing">
          {caseStudies.map((study, index) => <CaseStudyCard key={study.slug} study={study} index={index} />)}
        </div>
      </section>
      <CTASection title="Have a project challenge you would like us to understand?" />
    </>
  );
}

