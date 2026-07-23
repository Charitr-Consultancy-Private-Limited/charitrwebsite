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
  return createMetadata(`${study.title} — Case Study Placeholder`, "A clearly marked case-study content structure awaiting verified client-approved information.", `/work/${study.slug}`);
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) notFound();
  return (
    <>
      <PageHero eyebrow="Case study · Content placeholder" title={study.title} description="This page demonstrates the approved case-study structure. It does not claim a client identity, result or testimonial." crumbs={[{ label: "Work", href: "/work" }, { label: study.title }]} />
      <section className="section section--white">
        <div className="container placeholder-callout"><strong>Not a published client claim</strong><p>Every statement on this page must be replaced or verified before this entry is treated as live commercial evidence.</p></div>
        <div className="container"><CaseStudyDetail study={study} /></div>
      </section>
      <CTASection />
    </>
  );
}

