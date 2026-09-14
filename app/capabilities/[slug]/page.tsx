import Link from "next/link";
import { ArrowRight, Check, Users } from "lucide-react";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { capabilities, solutions, workItems } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return capabilities.map((capability) => ({ slug: capability.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const capability = capabilities.find((item) => item.slug === slug);
  if (!capability) return {};
  return createMetadata(capability.title, capability.statement, `/capabilities/${capability.slug}`);
}

export default async function CapabilityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const capability = capabilities.find((item) => item.slug === slug);
  if (!capability) notFound();
  const relatedSolutions = solutions.filter((solution) => capability.relatedSolutions.includes(solution.title));
  const relatedWork = workItems.filter((item) => item.relatedCapabilities.includes(capability.title));

  return (
    <>
      <PageHero eyebrow={capability.eyebrow} title={capability.statement} description={capability.overview} crumbs={[{ label: "Services", href: "/capabilities" }, { label: capability.title }]} />
      <section className="section section--white">
        <div className="container capability-detail-grid">
          <div><p className="eyebrow">What we can help with</p><h2>Common problems</h2><ul className="check-list">{capability.problems.map((item) => <li key={item}><Check size={17} />{item}</li>)}</ul></div>
          <div className="services-panel"><p className="eyebrow">Services</p><h2>What we provide</h2><ul>{capability.services.map((item) => <li key={item}>{item}</li>)}</ul></div>
        </div>
      </section>
      <section className="section">
        <div className="container customer-example-grid">
          <div><Users size={28} /><p className="eyebrow">Who this is for</p><h2>Organisations that need practical technology support.</h2><ul>{capability.customers.map((item) => <li key={item}>{item}</li>)}</ul></div>
          <div className="example-panel"><span>Example</span><p>{capability.example}</p></div>
        </div>
      </section>
      <section className="section section--navy">
        <div className="container"><p className="eyebrow">How we work</p><h2 className="inverse-heading">A clear process from review to delivery.</h2><ol className="approach-steps">{capability.approach.map((item, index) => <li key={item}><span>0{index + 1}</span><p>{item}</p></li>)}</ol></div>
      </section>
      <section className="section section--white">
        <div className="container related-grid">
          <div><p className="eyebrow">Related solutions</p><h2>Where this service can be used</h2>{relatedSolutions.map((item) => <Link key={item.slug} href={`/solutions#${item.slug}`}>{item.title}<ArrowRight size={17} /></Link>)}</div>
          <div><p className="eyebrow">Related work</p><h2>Project examples</h2>{relatedWork.length ? relatedWork.map((item) => <Link key={item.slug} href={`/work#${item.slug}`}>{item.title}<ArrowRight size={17} /></Link>) : <p>No related completed work is listed at this time.</p>}</div>
        </div>
      </section>
      <CTASection title={`Need help with ${capability.title.toLowerCase()}?`} />
    </>
  );
}
