import { CapabilityCard } from "@/components/sections/CapabilityCard";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { capabilities } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "Services",
  "Explore Charitr’s software development, UI/UX design, AI automation and technology consulting services.",
  "/capabilities",
);

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Software, design, automation and technology support." description="Choose the service you need, or combine several services for a larger project." crumbs={[{ label: "Services" }]} />
      <section className="section">
        <div className="container capability-grid capability-grid--listing">
          {capabilities.map((capability, index) => <CapabilityCard key={capability.slug} capability={capability} index={index} />)}
        </div>
      </section>
      <section className="section section--white">
        <div className="container editorial-split">
          <div><p className="eyebrow">Combined services</p><h2>Use one service or bring several together.</h2></div>
          <div className="prose-large"><p>A development project may also need design. Automation may need changes to data and processes. Technology advice may need implementation support.</p><p>We can organise the work around the needs of the project.</p></div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
