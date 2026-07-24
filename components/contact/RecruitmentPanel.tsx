import { Mail } from "lucide-react";
import { contact } from "@/data/site";

type RecruitmentPanelProps = {
  roleTitle: string;
};

export function RecruitmentPanel({ roleTitle }: RecruitmentPanelProps) {
  const applicationHref = `${contact.emailHref}?subject=${encodeURIComponent(`Application – ${roleTitle}`)}`;

  return (
    <aside className="direct-contact-panel" aria-labelledby="application-email-title">
      <p className="eyebrow">Apply by email</p>
      <h2 id="application-email-title">Send your application directly</h2>
      <p>Please include the following in your email:</p>
      <ul className="application-email-list">
        <li>Your updated résumé</li>
        <li>Current location and relevant experience</li>
        <li>Current and expected compensation</li>
        <li>Notice period and a short note about your interest</li>
      </ul>
      <a className="button" href={applicationHref}>
        <Mail size={18} /> Email your application
      </a>
      <p className="direct-contact-note">
        This website does not upload, collect or store application details.
      </p>
    </aside>
  );
}
