import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { contact } from "@/data/site";

export function CTASection({
  title = "Have a technology challenge or a product idea that needs structure?",
  text = "Tell us what you are trying to improve. We will help you frame the problem and identify a practical next step.",
  button = "Start a Conversation",
}: {
  title?: string;
  text?: string;
  button?: string;
}) {
  return (
    <section className="cta-section">
      <div className="container cta-grid">
        <div><p className="eyebrow">Let’s make progress</p><h2>{title}</h2><p>{text}</p></div>
        <div className="cta-actions">
          <Link className="button button--amber" href="/contact">{button}<ArrowRight size={18} /></Link>
          <a href={contact.phoneHref}><Phone size={17} />{contact.phone}</a>
          <a href={contact.emailHref}><Mail size={17} />{contact.email}</a>
        </div>
      </div>
    </section>
  );
}
