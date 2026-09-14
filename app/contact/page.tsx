import { Mail, MapPin, Phone } from "lucide-react";
import { ContactPanel } from "@/components/contact/ContactPanel";
import { PageHero } from "@/components/sections/PageHero";
import { contact } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "Contact",
  "Contact Charitr about software development, UI/UX design, AI automation or technology consulting.",
  "/contact",
);

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Tell us what you need help with." description="Email or call us with a short outline of your software, website or technology requirement." crumbs={[{ label: "Contact" }]} />
      <section className="section section--white">
        <div className="container contact-layout">
          <aside>
            <p className="eyebrow">Contact Charitr</p>
            <h2>Contact our team</h2>
            <p>We work with organisations in India and other countries from Delhi, Chennai and Kochi.</p>
            <div className="contact-lines contact-lines--large">
              <a href={contact.phoneHref}><Phone /><span><small>Phone</small>{contact.phone}</span></a>
              <a href={contact.emailHref}><Mail /><span><small>Email</small>{contact.email}</span></a>
              <span><MapPin /><span><small>Presence</small>Delhi · Chennai · Kochi</span></span>
            </div>
            <div className="response-note"><strong>What happens next?</strong><p>We will review your message, ask any important questions and arrange a call if needed.</p></div>
          </aside>
          <ContactPanel />
        </div>
      </section>
    </>
  );
}
