import { LegalPage } from "@/components/sections/LegalPage";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata("Privacy Policy", "Draft privacy information for visitors to the Charitr website.", "/privacy-policy");

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" description="How information associated with use of this website is intended to be handled.">
      <h2>Scope</h2><p>This draft applies to information associated with use of charitr.in. The website does not provide enquiry or recruitment submission forms.</p>
      <h2>Information we may collect</h2><p>The website may process limited technical information needed for security and operation. Information you send separately by email or provide by telephone is handled outside the website.</p>
      <h2>How information may be used</h2><p>To operate the website, prevent abuse, respond to communications received outside the website and meet applicable legal obligations. Personal information should not be sold.</p>
      <h2>Legal basis and retention</h2><p>The applicable legal basis, retention periods and cross-border processing arrangements must be confirmed during legal review.</p>
      <h2>Your choices</h2><p>Visitors can reject non-essential cookies and reopen cookie settings from the footer. Applicable rights requests may be sent to info@charitr.in.</p>
      <h2>Contact</h2><p>For privacy questions, email <a href="mailto:info@charitr.in">info@charitr.in</a> or call <a href="tel:+919911220198">+91 99112 20198</a>.</p>
    </LegalPage>
  );
}
