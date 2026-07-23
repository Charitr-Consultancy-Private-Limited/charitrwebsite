import { LegalPage } from "@/components/sections/LegalPage";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata("Terms of Use", "Draft terms governing access to and use of the Charitr website.", "/terms-of-use");

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" description="Draft terms for accessing and using charitr.in.">
      <h2>Website information</h2><p>Content is provided for general information about Charitr’s capabilities and does not create a consulting, employment or contractual relationship.</p>
      <h2>No professional reliance</h2><p>Visitors should obtain appropriate advice before acting on information presented on this website.</p>
      <h2>Intellectual property</h2><p>Ownership, permitted use and third-party rights language must be confirmed during legal review.</p>
      <h2>External links</h2><p>Charitr is not responsible for the content or availability of third-party websites linked from this site.</p>
      <h2>Liability and governing law</h2><p>Limitations of liability, governing law and jurisdiction must be completed by qualified legal counsel.</p>
      <h2>Contact</h2><p>Questions may be sent to <a href="mailto:info@charitr.in">info@charitr.in</a>.</p>
    </LegalPage>
  );
}
