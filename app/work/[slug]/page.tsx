import { notFound } from "next/navigation";
import { CaseStudyDetail } from "@/components/sections/CaseStudyDetail";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { caseStudies } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) return {};
  return createMetadata(`${study.title} — Placeholder`, "This is a placeholder page for a future approved project example.", `/work/${study.slug}`);
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) notFound();
  return (
    <>
      <PageHero placeholder eyebrow="PLACEHOLDER · Project example" title={study.title} description="This sample page does not identify a client or claim a project result or testimonial." crumbs={[{ label: "Work", href: "/work" }, { label: study.title }]} />
      <section className="section section--white">
        <div className="container placeholder-callout"><strong>PLACEHOLDER</strong><p>All information on this page must be replaced or approved before it is presented as a real project.</p></div>
        <div className="container"><CaseStudyDetail study={study} /></div>
      </section>
      <CTASection />
    </>
  );
}
