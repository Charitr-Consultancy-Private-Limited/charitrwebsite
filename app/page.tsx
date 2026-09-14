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
import { CTASection } from "@/components/sections/CTASection";
import { LocationBlock } from "@/components/sections/LocationBlock";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { WorkItemCard } from "@/components/sections/WorkItemCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { capabilities, outcomes, solutions, whyCharitr, workItems } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "Software Development and Digital Solutions",
  "Charitr builds software and digital solutions for SMEs, social enterprises, NGOs and education organisations.",
  "/",
);

const customerSegments = [
  { title: "SMEs", text: "Digital products and systems that support growing teams.", icon: Store },
  { title: "Social enterprises", text: "Technology that supports services, operations and social value.", icon: Lightbulb },
  { title: "NGOs", text: "Programme platforms, reporting tools and simpler workflows.", icon: HeartHandshake },
  { title: "Education and learning", text: "Learning experiences for learners, educators and administrators.", icon: GraduationCap },
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Software · Design · AI · Consulting</p>
            <h1>We design and build digital solutions <span>that work.</span></h1>
            <p className="hero-lede">Charitr combines engineering excellence, user experience design and artificial intelligence to help organisations build reliable digital products, improve operations and make better decisions.</p>
            <div className="hero-actions">
              <Link className="button" href="/contact">Discuss Your Requirement <ArrowRight size={18} /></Link>
              <Link className="button button--secondary" href="/capabilities">Explore Our Capabilities</Link>
            </div>
            <div className="hero-footnote">
              <span><Check size={16} /> Planning, design and development</span>
              <span><Check size={16} /> Based in India</span>
            </div>
          </div>
          <div className="system-visual" role="img" aria-label="A digital solution connecting software, users, business needs and automation">
            <div className="system-visual__bar">
              <span /><span /><span />
              <small>software.project</small>
            </div>
            <div className="system-visual__canvas">
              <div className="system-node system-node--core"><Network /><strong>Digital solution</strong><small>Built for users and teams</small></div>
              <div className="system-node system-node--one"><Building2 /><span>Business needs</span></div>
              <div className="system-node system-node--two"><Sparkles /><span>Automation</span></div>
              <div className="system-node system-node--three"><GraduationCap /><span>User experience</span></div>
              <div className="system-node system-node--four"><Store /><span>Software</span></div>
              <span className="system-line system-line--one" />
              <span className="system-line system-line--two" />
              <span className="system-line system-line--three" />
              <span className="system-line system-line--four" />
            </div>
            <div className="system-visual__footer"><span>Plan</span><i /><span>Design</span><i /><span>Build</span><i /><span>Support</span></div>
          </div>
        </div>
      </section>

      <section className="section section--white audience-section">
        <div className="container">
          <SectionHeader eyebrow="Who we work with" title="Technology for organisations creating business and social value" description="Focused digital support for organisations that need clear, useful and maintainable technology." />
          <div className="segment-grid">
            {customerSegments.map(({ title, text, icon: Icon }) => <article key={title}><Icon /><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section section--navy outcomes-section">
        <div className="container split-heading">
          <SectionHeader eyebrow="Practical outcomes" title="What this means for your organisation" inverse />
          <p>We begin with the change your organisation needs, then apply the capabilities that can help deliver it.</p>
        </div>
        <div className="container outcome-grid">
          {outcomes.map((outcome, index) => <div key={outcome}><span>{String(index + 1).padStart(2, "0")}</span><p>{outcome}</p></div>)}
        </div>
      </section>

      <section className="section" id="capabilities">
        <div className="container">
          <SectionHeader eyebrow="Core capabilities" title="What Charitr does" description="Engineering, design, AI and transformation support brought together around the needs of the work." />
          <div className="capability-grid">
            {capabilities.map((capability, index) => <CapabilityCard key={capability.slug} capability={capability} index={index} />)}
          </div>
        </div>
      </section>

      <section className="section section--blue-grey">
        <div className="container process-layout">
          <div className="process-sticky">
            <SectionHeader eyebrow="How Charitr works" title="From problem to practical progress" description="A connected process from understanding the context through implementation, adoption and improvement." />
            <Link className="text-link" href="/about">How we think and work <ArrowRight size={17} /></Link>
          </div>
          <ProcessTimeline />
        </div>
      </section>

      <section className="section section--white">
        <div className="container solutions-layout">
          <div>
            <SectionHeader eyebrow="Solutions" title="What Charitr helps create" />
            <p className="section-intro"><strong>Capabilities</strong> describe what Charitr does. <strong>Solutions</strong> describe the products, platforms and systems those capabilities can help create.</p>
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
          <SectionHeader eyebrow="Selected work" title="Digital solutions built around real user needs" description="Our work so far includes mobile learning applications and websites designed to make information, services and learning easier to access." />
          <Link className="text-link" href="/work">View Our Work <ArrowRight size={17} /></Link>
        </div>
        <div className="container work-card-grid">
          {workItems.slice(0, 2).map((item, index) => <WorkItemCard compact key={item.slug} item={item} index={index} />)}
        </div>
      </section>

      <section className="section section--white">
        <div className="container why-layout">
          <div>
            <p className="eyebrow">Why Charitr</p>
            <h2>Technology work grounded in practical needs.</h2>
            <p>We connect strategy, design and engineering so that decisions can be carried through into usable solutions.</p>
          </div>
          <div className="why-grid">
            {whyCharitr.map((item, index) => <div key={item}><span>0{index + 1}</span><p>{item}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section presence-section">
        <div className="container">
          <SectionHeader eyebrow="Where we work" title="Delhi · Chennai · Kochi" description="Charitr has its registered office in Delhi and a working presence in Chennai and Kochi." />
          <LocationBlock />
        </div>
      </section>

      <CTASection />
    </>
  );
}
