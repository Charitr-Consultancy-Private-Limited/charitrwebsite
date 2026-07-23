import { CapabilityCard } from "@/components/sections/CapabilityCard";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { capabilities } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "Capabilities",
  "Explore Charitr’s capabilities across engineering, UI/UX and product design, applied AI, automation and technology transformation.",
  "/capabilities",
);

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero eyebrow="Capabilities" title="The capabilities to design clearly, build reliably and transform practically." description="Charitr brings together the disciplines needed to move from an unclear problem or product idea to an implemented, adopted and continuously improving solution." crumbs={[{ label: "Capabilities" }]} />
      <section className="section">
        <div className="container capability-grid capability-grid--listing">
          {capabilities.map((capability, index) => <CapabilityCard key={capability.slug} capability={capability} index={index} />)}
        </div>
      </section>
      <section className="section section--white">
        <div className="container editorial-split">
          <div><p className="eyebrow">One connected team</p><h2>Choose a starting point, not a silo.</h2></div>
          <div className="prose-large"><p>An engineering challenge often contains a design problem. An AI opportunity depends on process, data and governance. A transformation roadmap only creates value when someone implements it.</p><p>Our capability model is designed around those connections.</p></div>
        </div>
      </section>
      <CTASection />
    </>
  );
}

