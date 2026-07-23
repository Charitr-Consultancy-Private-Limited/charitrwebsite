import { LegalPage } from "@/components/sections/LegalPage";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata("Privacy Policy", "Draft privacy information for Charitr website visitors and form users.", "/privacy-policy");

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" description="How information submitted through this website is intended to be handled.">
      <h2>Scope</h2><p>This draft applies to information collected through charitr.in, including contact and recruitment forms.</p>
      <h2>Information we may collect</h2><p>Contact details, organisation details, requirement information, recruitment information and technical information needed for security and website operation.</p>
      <h2>How information may be used</h2><p>To respond to enquiries, evaluate applications, operate the website, prevent abuse and meet applicable legal obligations. Personal information should not be sold.</p>
      <h2>Form delivery</h2><p>When configured, form submissions are sent to Charitr through a contracted transactional email provider. The website does not write form submissions to its own database. Email systems may retain messages and delivery records according to Charitr’s and the provider’s retention settings.</p>
      <h2>Legal basis and retention</h2><p>The applicable legal basis, retention periods and cross-border processing arrangements must be confirmed during legal review.</p>
      <h2>Your choices</h2><p>Visitors can reject non-essential cookies and reopen cookie settings from the footer. Applicable rights requests may be sent to info@charitr.in.</p>
      <h2>Contact</h2><p>For privacy questions, email <a href="mailto:info@charitr.in">info@charitr.in</a> or call <a href="tel:+919911220198">+91 99112 20198</a>.</p>
    </LegalPage>
  );
}
