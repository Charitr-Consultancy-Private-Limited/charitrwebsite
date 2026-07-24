import { Mail, MapPin, Phone } from "lucide-react";
import { ContactPanel } from "@/components/contact/ContactPanel";
import { PageHero } from "@/components/sections/PageHero";
import { contact } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "Contact",
  "Discuss a digital product, engineering, UI/UX, AI, automation or technology transformation requirement with Charitr.",
  "/contact",
);

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Start with the challenge you are trying to solve." description="Email or call us with a brief outline of the product, process or technology decision in front of you. We will respond with a practical next step." crumbs={[{ label: "Contact" }]} />
      <section className="section section--white">
        <div className="container contact-layout">
          <aside>
            <p className="eyebrow">Contact Charitr</p>
            <h2>Discuss your requirement</h2>
            <p>We work with organisations in India and internationally from our presence in Delhi, Chennai and Kochi.</p>
            <div className="contact-lines contact-lines--large">
              <a href={contact.phoneHref}><Phone /><span><small>Phone</small>{contact.phone}</span></a>
              <a href={contact.emailHref}><Mail /><span><small>Email</small>{contact.email}</span></a>
              <span><MapPin /><span><small>Presence</small>Delhi · Chennai · Kochi</span></span>
            </div>
            <div className="response-note"><strong>What happens next?</strong><p>After you contact us directly, we review the requirement, identify any essential questions and arrange a focused conversation with the right person.</p></div>
          </aside>
          <ContactPanel />
        </div>
      </section>
    </>
  );
}
