import { Mail, Phone } from "lucide-react";
import { contact } from "@/data/site";

export function ContactPanel() {
  return (
    <aside className="direct-contact-panel" aria-labelledby="direct-contact-title">
      <p className="eyebrow">Direct contact</p>
      <h2 id="direct-contact-title">Email or call Charitr</h2>
      <p>
        Share the challenge, desired outcome and preferred timeframe. We will
        review it and respond with a practical next step.
      </p>
      <div className="direct-contact-actions">
        <a className="button" href={contact.emailHref}>
          <Mail size={18} /> Email {contact.email}
        </a>
        <a className="button button--secondary" href={contact.phoneHref}>
          <Phone size={18} /> Call {contact.phone}
        </a>
      </div>
      <p className="direct-contact-note">
        This website does not collect, store or transmit enquiry details.
      </p>
    </aside>
  );
}
