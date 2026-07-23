import Link from "next/link";
import { ArrowRight, Check, Users } from "lucide-react";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { capabilities, caseStudies, solutions } from "@/data/site";
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
  const relatedWork = caseStudies.filter((study) => study.capabilities.includes(capability.title));

  return (
    <>
      <PageHero eyebrow={capability.eyebrow} title={capability.statement} description={capability.overview} crumbs={[{ label: "Capabilities", href: "/capabilities" }, { label: capability.title }]} />
      <section className="section section--white">
        <div className="container capability-detail-grid">
          <div><p className="eyebrow">Problems addressed</p><h2>Where this capability creates value</h2><ul className="check-list">{capability.problems.map((item) => <li key={item}><Check size={17} />{item}</li>)}</ul></div>
          <div className="services-panel"><p className="eyebrow">Services delivered</p><h2>What we can deliver</h2><ul>{capability.services.map((item) => <li key={item}>{item}</li>)}</ul></div>
        </div>
      </section>
      <section className="section">
        <div className="container customer-example-grid">
          <div><Users size={28} /><p className="eyebrow">Intended customers</p><h2>Designed for organisations that need progress without unnecessary complexity.</h2><ul>{capability.customers.map((item) => <li key={item}>{item}</li>)}</ul></div>
          <div className="example-panel"><span>Practical example</span><p>{capability.example}</p></div>
        </div>
      </section>
      <section className="section section--navy">
        <div className="container"><p className="eyebrow">Delivery approach</p><h2 className="inverse-heading">A structured path from context to capability.</h2><ol className="approach-steps">{capability.approach.map((item, index) => <li key={item}><span>0{index + 1}</span><p>{item}</p></li>)}</ol></div>
      </section>
      <section className="section section--white">
        <div className="container related-grid">
          <div><p className="eyebrow">Related solutions</p><h2>Put this capability to work</h2>{relatedSolutions.map((item) => <Link key={item.slug} href={`/solutions#${item.slug}`}>{item.title}<ArrowRight size={17} /></Link>)}</div>
          <div><p className="eyebrow">Related work</p><h2>Case-study structures</h2>{relatedWork.length ? relatedWork.map((item) => <Link key={item.slug} href={`/work/${item.slug}`}>{item.title}<span>Placeholder</span></Link>) : <p>Verified related work will be added after approval.</p>}</div>
        </div>
      </section>
      <CTASection title={`Need support with ${capability.title.toLowerCase()}?`} />
    </>
  );
}

