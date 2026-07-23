import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Check,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Network,
  Sparkles,
  Store,
} from "lucide-react";
import { CapabilityCard } from "@/components/sections/CapabilityCard";
import { CareerBlock } from "@/components/sections/CareerBlock";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { CTASection } from "@/components/sections/CTASection";
import { LocationBlock } from "@/components/sections/LocationBlock";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { capabilities, caseStudies, outcomes, solutions, whyCharitr } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "Digital Product, Engineering and Technology Transformation",
  "Charitr designs, builds and transforms reliable digital products for SMEs, social enterprises, NGOs and education organisations.",
  "/",
);

const customerSegments = [
  { title: "SMEs", text: "Practical platforms and operational systems that support sustainable growth.", icon: Store },
  { title: "Social enterprises", text: "Technology that balances commercial discipline with measurable social value.", icon: Lightbulb },
  { title: "NGOs", text: "Usable programme platforms, reporting workflows and decision support.", icon: HeartHandshake },
  { title: "Education organisations", text: "Learning experiences and systems designed for learners, educators and teams.", icon: GraduationCap },
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Digital products · Engineering · Transformation</p>
            <h1>We design, build and transform <span>digital products.</span></h1>
            <p className="hero-lede">Charitr combines engineering excellence, user experience design and artificial intelligence to help SMEs, social enterprises, NGOs and education organisations build reliable platforms, improve operations and make better decisions.</p>
            <div className="hero-actions">
              <Link className="button" href="/contact">Discuss Your Requirement <ArrowRight size={18} /></Link>
              <Link className="button button--secondary" href="/capabilities">Explore Our Capabilities</Link>
            </div>
            <div className="hero-footnote">
              <span><Check size={16} /> From strategy to implementation</span>
              <span><Check size={16} /> India and international clients</span>
            </div>
          </div>
          <div className="system-visual" role="img" aria-label="A structured product system connecting user experience, engineering, data and artificial intelligence">
            <div className="system-visual__bar">
              <span /><span /><span />
              <small>product.system / overview</small>
            </div>
            <div className="system-visual__canvas">
              <div className="system-node system-node--core"><Network /><strong>Reliable product</strong><small>Built around the organisation</small></div>
              <div className="system-node system-node--one"><Building2 /><span>Operations</span></div>
              <div className="system-node system-node--two"><Sparkles /><span>Applied AI</span></div>
              <div className="system-node system-node--three"><GraduationCap /><span>User experience</span></div>
              <div className="system-node system-node--four"><Store /><span>Engineering</span></div>
              <span className="system-line system-line--one" />
              <span className="system-line system-line--two" />
              <span className="system-line system-line--three" />
              <span className="system-line system-line--four" />
            </div>
            <div className="system-visual__footer"><span>Strategy</span><i /><span>Design</span><i /><span>Build</span><i /><span>Improve</span></div>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <SectionHeader eyebrow="Who we work with" title="Technology for organisations creating business and social value" description="We bring product, engineering and transformation thinking to organisations where technology needs to be useful, maintainable and adopted." />
          <div className="segment-grid">
            {customerSegments.map(({ title, text, icon: Icon }) => <article key={title}><Icon /><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section section--navy outcomes-section">
        <div className="container split-heading">
          <SectionHeader eyebrow="Practical outcomes" title="What this means for your organisation" inverse />
          <p>Every engagement begins with the change your organisation needs—not with a preferred tool or pre-packaged answer.</p>
        </div>
        <div className="container outcome-grid">
          {outcomes.map((outcome, index) => <div key={outcome}><span>{String(index + 1).padStart(2, "0")}</span><p>{outcome}</p></div>)}
        </div>
      </section>

      <section className="section" id="capabilities">
        <div className="container">
          <SectionHeader eyebrow="Core capabilities" title="The disciplines needed to move from idea to dependable delivery" description="Specialists work together across product thinking, design, engineering, AI and implementation." />
          <div className="capability-grid">
            {capabilities.map((capability, index) => <CapabilityCard key={capability.slug} capability={capability} index={index} />)}
          </div>
        </div>
      </section>

      <section className="section section--blue-grey">
        <div className="container process-layout">
          <div className="process-sticky">
            <SectionHeader eyebrow="How Charitr works" title="From problem to practical progress" description="A clear, collaborative path from understanding the context to building capability for continuous improvement." />
            <Link className="text-link" href="/about">How we think and work <ArrowRight size={17} /></Link>
          </div>
          <ProcessTimeline />
        </div>
      </section>

      <section className="section section--white">
        <div className="container solutions-layout">
          <div>
            <SectionHeader eyebrow="Solution areas" title="Connected capabilities, shaped around a real operational need" />
            <p className="section-intro">These are repeatable solution areas—not pre-packaged products. Each is designed for the users, environment and outcomes involved.</p>
            <Link className="button button--secondary" href="/solutions">Explore solutions</Link>
          </div>
          <div className="solution-list">
            {solutions.map((solution, index) => (
              <Link href={`/solutions#${solution.slug}`} className="home-solution-row" key={solution.slug}>
                <span>0{index + 1}</span><div><h3>{solution.title}</h3><p>{solution.summary}</p></div><ArrowRight />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section work-section">
        <div className="container section-heading-row">
          <SectionHeader eyebrow="Selected work" title="How product and technology work can create practical change" description="Case-study structures are ready for verified, client-approved content." />
          <Link className="text-link" href="/work">View all work <ArrowRight size={17} /></Link>
        </div>
        <div className="container case-grid">
          {caseStudies.map((study, index) => <CaseStudyCard key={study.slug} study={study} index={index} />)}
        </div>
      </section>

      <section className="section section--white">
        <div className="container why-layout">
          <div>
            <p className="eyebrow">Why Charitr</p>
            <h2>Technology decisions grounded in people, operations and long-term value.</h2>
            <p>We bring the discipline of product engineering together with the context and care needed for adoption.</p>
          </div>
          <div className="why-grid">
            {whyCharitr.map((item, index) => <div key={item}><span>0{index + 1}</span><p>{item}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section presence-section">
        <div className="container presence-grid">
          <div>
            <SectionHeader eyebrow="Our presence" title="Close enough to understand. Structured to collaborate." description="Charitr has its registered office in Delhi, with a delivery presence in Chennai and Kochi." />
            <LocationBlock />
          </div>
          <CareerBlock />
        </div>
      </section>

      <CTASection />
    </>
  );
}

