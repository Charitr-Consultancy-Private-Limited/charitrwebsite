import { LegalPage } from "@/components/sections/LegalPage";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata("Cookie Policy", "Draft cookie information and preference controls for the Charitr website.", "/cookie-policy");

export default function CookiePolicyPage() {
  return (
    <LegalPage title="Cookie Policy" description="A clear explanation of essential and optional website storage.">
      <h2>What cookies and local storage do</h2><p>This website uses local browser storage to remember your cookie preferences. Any future analytics or marketing technology must remain disabled until consent is provided.</p>
      <h2>Essential</h2><p>Essential storage records your privacy choice and supports core website functions. It cannot be disabled through the preference centre.</p>
      <h2>Analytics</h2><p>Analytics is optional and currently inactive unless a privacy-respecting provider is configured. If enabled later, it must not load before consent.</p>
      <h2>Marketing</h2><p>Marketing storage is optional. No marketing platform is currently configured.</p>
      <h2>Managing preferences</h2><p>Use “Cookie settings” in the footer at any time to update your selection.</p>
      <h2>Contact</h2><p>Questions may be sent to <a href="mailto:info@charitr.in">info@charitr.in</a>.</p>
    </LegalPage>
  );
}
