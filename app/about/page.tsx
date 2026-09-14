import { Compass, Handshake, Scale, Shapes } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { LocationBlock } from "@/components/sections/LocationBlock";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "About",
  "Learn about Charitr Consultancy Private Limited, our purpose, principles and presence in Delhi, Chennai and Kochi.",
  "/about",
);

const principles = [
  ["Understand the need first", "We learn about the organisation, its users and the work that needs to improve.", Compass],
  ["Keep software maintainable", "We make design and technical choices that are suitable for long-term use.", Shapes],
  ["Communicate clearly", "We share decisions, progress, questions and trade-offs throughout the project.", Handshake],
  ["Use technology responsibly", "We consider security, accessibility, privacy and human oversight.", Scale],
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Charitr" title="A software and digital solutions company." description="Charitr Consultancy Private Limited helps organisations plan, design, build and improve websites, applications and business systems." crumbs={[{ label: "About" }]} />
      <section className="section section--white">
        <div className="container editorial-split">
          <div><p className="eyebrow">Who we are</p><h2>Technology support for organisations of different sizes.</h2></div>
          <div className="prose-large">
            <p>Charitr works with SMEs, social enterprises, NGOs and education organisations in India and internationally.</p>
            <p>Our work includes software development, UI/UX design, AI automation and technology consulting. We can support a complete project or help with a specific part of it.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container mission-grid">
          <article><p className="eyebrow">Mission</p><h2>Help organisations use software and digital tools to work better and serve their users.</h2></article>
          <article><p className="eyebrow">Vision</p><h2>Useful technology that is clear, dependable and easy to maintain.</h2></article>
        </div>
      </section>
      <section className="section section--navy name-section">
        <div className="container">
          <p className="name-word">charitr</p>
          <div><p className="eyebrow">The meaning of our name</p><h2>A name connected to character and responsible work.</h2><p>Charitr draws from the Sanskrit concept of character. It reflects our aim to work responsibly, communicate honestly and build technology that is useful over time.</p></div>
        </div>
      </section>
      <section className="section section--white">
        <div className="container">
          <SectionHeader eyebrow="How we work" title="Simple principles for every project" />
          <div className="principle-grid">
            {principles.map(([title, text, Icon]) => <article key={String(title)}><Icon /><h3>{String(title)}</h3><p>{String(text)}</p></article>)}
          </div>
        </div>
      </section>
      <section className="section section--blue-grey">
        <div className="container leadership-layout">
          <div><SectionHeader eyebrow="Leadership" title="Leadership details will be added here" description="Names, roles, biographies and photographs will be added after they are approved." /></div>
          <div className="leadership-placeholder"><span>PLACEHOLDER · Leadership profiles</span><div /><div /></div>
        </div>
      </section>
      <section className="section section--white">
        <div className="container"><SectionHeader eyebrow="Our presence" title="Delhi · Chennai · Kochi" description="Registered in Delhi, with a working presence in Chennai and Kochi." /><LocationBlock /></div>
      </section>
      <CTASection title="Need help with a software or digital project?" />
    </>
  );
}
