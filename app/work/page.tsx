import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { WorkItemCard } from "@/components/sections/WorkItemCard";
import { workItems } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "Selected Work",
  "Mobile learning applications, websites and digital experience work designed and developed by Charitr.",
  "/work",
);

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Selected Work"
        description={[
          "We are building Charitr around practical technology delivery — designing and developing digital solutions that are clear, useful and maintainable.",
          "Our work so far includes digital learning applications and websites developed for organisations with specific communication, learning and user-experience needs.",
          "As Charitr grows, this section will include more detailed project stories and outcomes.",
        ]}
        crumbs={[{ label: "Work" }]}
      />
      <section className="section section--white">
        <div className="container work-list">
          {workItems.map((item, index) => <WorkItemCard key={item.slug} item={item} index={index} />)}
        </div>
      </section>
      <CTASection
        title="Our work is growing"
        text="Charitr is an evolving technology company, and our portfolio will continue to grow across software engineering, experience design, artificial intelligence and digital transformation. We prefer to show real work rather than publish speculative case studies or unsupported results."
        button="Discuss Your Requirement"
      />
    </>
  );
}
