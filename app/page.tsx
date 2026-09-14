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
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { CTASection } from "@/components/sections/CTASection";
import { LocationBlock } from "@/components/sections/LocationBlock";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { capabilities, caseStudies, outcomes, solutions, whyCharitr } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "Software Development and Digital Solutions",
  "Charitr builds software and digital solutions for SMEs, social enterprises, NGOs and education organisations.",
  "/",
);

const customerSegments = [
  { title: "SMEs", text: "Web applications and business systems that support growing teams.", icon: Store },
  { title: "Social enterprises", text: "Digital tools for managing services, teams and social programmes.", icon: Lightbulb },
  { title: "NGOs", text: "Programme systems, reporting tools and simpler workflows.", icon: HeartHandshake },
  { title: "Education organisations", text: "Learning platforms and tools for learners, educators and administrators.", icon: GraduationCap },
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Software · Design · AI · Consulting</p>
            <h1>We build software and <span>digital solutions.</span></h1>
            <p className="hero-lede">Charitr helps organisations build websites, applications and digital systems. We also provide UI/UX design, AI automation and practical technology advice.</p>
            <div className="hero-actions">
              <Link className="button" href="/contact">Contact Us <ArrowRight size={18} /></Link>
              <Link className="button button--secondary" href="/capabilities">View Our Services</Link>
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

      <section className="section section--white">
        <div className="container">
          <SectionHeader eyebrow="Who we work with" title="Digital support for different types of organisations" description="We work with organisations that need clear, usable and maintainable technology." />
          <div className="segment-grid">
            {customerSegments.map(({ title, text, icon: Icon }) => <article key={title}><Icon /><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section section--navy outcomes-section">
        <div className="container split-heading">
          <SectionHeader eyebrow="What we can improve" title="Common goals for our projects" inverse />
          <p>We start by understanding what needs to work better, then choose the right approach and technology.</p>
        </div>
        <div className="container outcome-grid">
          {outcomes.map((outcome, index) => <div key={outcome}><span>{String(index + 1).padStart(2, "0")}</span><p>{outcome}</p></div>)}
        </div>
      </section>

      <section className="section" id="capabilities">
        <div className="container">
          <SectionHeader eyebrow="Our services" title="Design, development, automation and technology support" description="Our services can be used separately or combined for a complete project." />
          <div className="capability-grid">
            {capabilities.map((capability, index) => <CapabilityCard key={capability.slug} capability={capability} index={index} />)}
          </div>
        </div>
      </section>

      <section className="section section--blue-grey">
        <div className="container process-layout">
          <div className="process-sticky">
            <SectionHeader eyebrow="How we work" title="A straightforward project process" description="We agree the problem, scope the work, build in stages and support the launch." />
            <Link className="text-link" href="/about">About Charitr <ArrowRight size={17} /></Link>
          </div>
          <ProcessTimeline />
        </div>
      </section>

      <section className="section section--white">
        <div className="container solutions-layout">
          <div>
            <SectionHeader eyebrow="Common solutions" title="Examples of systems we can help create" />
            <p className="section-intro">Each project is scoped for the organisation, its users and its existing systems.</p>
            <Link className="button button--secondary" href="/solutions">View solutions</Link>
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
          <SectionHeader eyebrow="Example work" title="Project examples will be added here" description="These cards are placeholders for approved case studies." />
          <Link className="text-link" href="/work">View work section <ArrowRight size={17} /></Link>
        </div>
        <div className="container case-grid">
          {caseStudies.map((study, index) => <CaseStudyCard key={study.slug} study={study} index={index} />)}
        </div>
      </section>

      <section className="section section--white">
        <div className="container why-layout">
          <div>
            <p className="eyebrow">Why work with us</p>
            <h2>Practical support from planning through development.</h2>
            <p>We keep the work clear, involve the right people and build systems that teams can use and maintain.</p>
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
