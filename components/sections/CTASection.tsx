import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { contact } from "@/data/site";

export function CTASection({
  title = "Need help with a software or digital project?",
  text = "Tell us what you need. We can discuss the scope, suitable options and next steps.",
  button = "Contact Us",
}: {
  title?: string;
  text?: string;
  button?: string;
}) {
  return (
    <section className="cta-section">
      <div className="container cta-grid">
        <div><p className="eyebrow">Get in touch</p><h2>{title}</h2><p>{text}</p></div>
        <div className="cta-actions">
          <Link className="button button--amber" href="/contact">{button}<ArrowRight size={18} /></Link>
          <a href={contact.phoneHref}><Phone size={17} />{contact.phone}</a>
          <a href={contact.emailHref}><Mail size={17} />{contact.email}</a>
        </div>
      </div>
    </section>
  );
}
