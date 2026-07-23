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
  ["Purpose before tools", "We begin with the organisation, its users and the change required.", Compass],
  ["Build for endurance", "Architecture, design and delivery decisions should make the product easier to sustain.", Shapes],
  ["Work in the open", "Clear decisions, visible progress and honest trade-offs create better outcomes.", Handshake],
  ["Use technology responsibly", "Security, accessibility, privacy and human oversight are design requirements.", Scale],
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Charitr" title="Technology work shaped by purpose, context and long-term value." description="Charitr Consultancy Private Limited is a technology consulting and digital product company helping organisations design, build and improve technology-enabled products and operations." crumbs={[{ label: "About" }]} />
      <section className="section section--white">
        <div className="container editorial-split">
          <div><p className="eyebrow">Who we are</p><h2>A practical partner from first decision to continuous improvement.</h2></div>
          <div className="prose-large">
            <p>Charitr works with SMEs, social enterprises, NGOs and education organisations in India and internationally.</p>
            <p>We connect product strategy, user experience, engineering, applied AI and transformation delivery so that technology decisions translate into usable, maintainable systems.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container mission-grid">
          <article><p className="eyebrow">Mission</p><h2>Help organisations create dependable digital products and technology-enabled operations that deliver practical value.</h2></article>
          <article><p className="eyebrow">Vision</p><h2>Technology that strengthens organisations, serves people well and improves with purpose.</h2></article>
        </div>
      </section>
      <section className="section section--navy name-section">
        <div className="container">
          <p className="name-word">charitr</p>
          <div><p className="eyebrow">The meaning of our name</p><h2>Character expressed through responsible transformation.</h2><p>Charitr draws from the Sanskrit concept of character, reflecting the company’s commitment to responsible, purposeful and enduring transformation. The name guides how we work; the technology proposition remains at the centre of what we do.</p></div>
        </div>
      </section>
      <section className="section section--white">
        <div className="container">
          <SectionHeader eyebrow="Operating principles" title="A clear standard for how we approach the work" />
          <div className="principle-grid">
            {principles.map(([title, text, Icon]) => <article key={String(title)}><Icon /><h3>{String(title)}</h3><p>{String(text)}</p></article>)}
          </div>
        </div>
      </section>
      <section className="section section--blue-grey">
        <div className="container leadership-layout">
          <div><SectionHeader eyebrow="Leadership" title="Leadership profiles will be added after verification" description="Names, roles, biographies and portraits are intentionally not invented. This section is ready for approved information." /></div>
          <div className="leadership-placeholder"><span>Verified leadership content required</span><div /><div /></div>
        </div>
      </section>
      <section className="section section--white">
        <div className="container"><SectionHeader eyebrow="Our presence" title="Delhi · Chennai · Kochi" description="Registered in Delhi, with a working presence in Chennai and Kochi." /><LocationBlock /></div>
      </section>
      <CTASection title="Looking for a technology partner who can connect decisions to delivery?" />
    </>
  );
}

