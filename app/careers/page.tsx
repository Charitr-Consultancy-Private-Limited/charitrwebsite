import { Check, Mail, MapPin, Phone } from "lucide-react";
import { RecruitmentForm } from "@/components/forms/RecruitmentForm";
import { PageHero } from "@/components/sections/PageHero";
import { contact } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  "Careers",
  "Build technology that creates practical impact. Explore Charitr’s current full-time opportunity in Chennai.",
  "/careers",
);

const values = ["Ownership", "Accountability", "Structured problem-solving", "Clear communication", "Willingness to learn", "Respect for users", "Engineering quality", "Good design", "Responsible use of data and AI"];

export default function CareersPage() {
  return (
    <>
      <PageHero eyebrow="Careers" title="Build technology that creates practical impact" description="At Charitr, we work at the intersection of engineering, design, artificial intelligence, business operations, learning and social impact." crumbs={[{ label: "Careers" }]} />
      <section className="section section--white">
        <div className="container editorial-split">
          <div><p className="eyebrow">Work with us</p><h2>Solve real operational and product challenges using technology.</h2></div>
          <div className="prose-large"><p>Our team helps SMEs, NGOs, social enterprises and education organisations turn complex needs into clear, usable and maintainable solutions.</p><p>We value people who can move between careful thinking and practical delivery.</p></div>
        </div>
      </section>
      <section className="section">
        <div className="container opportunity">
          <div className="opportunity__header"><p className="eyebrow">Current opportunity</p><h2>Full-time role — title to be confirmed</h2><span className="placeholder-badge">Job title placeholder</span></div>
          <div className="opportunity__facts">
            <div><strong>One</strong><span>opening</span></div>
            <div><strong>Full-time</strong><span>employment model</span></div>
            <div><strong>Chennai</strong><span>work location</span></div>
          </div>
        </div>
      </section>
      <section className="section section--navy">
        <div className="container values-layout">
          <div><p className="eyebrow">What Charitr values</p><h2 className="inverse-heading">Good work starts with how we think, communicate and take responsibility.</h2></div>
          <ul>{values.map((value) => <li key={value}><Check size={17} />{value}</li>)}</ul>
        </div>
      </section>
      <section className="section section--white">
        <div className="container application-layout">
          <div>
            <p className="eyebrow">Application process</p>
            <h2>Tell us what you have worked on and why this role interests you.</h2>
            <p>Please include your updated résumé, current location, relevant experience, current and expected compensation, notice period and a short note explaining your interest.</p>
            <div className="contact-lines">
              <a href={contact.phoneHref}><Phone />{contact.phone}</a>
              <a href={contact.emailHref}><Mail />{contact.email}</a>
              <span><MapPin />Chennai</span>
            </div>
            <div className="equal-opportunity"><strong>Equal opportunity</strong><p>Charitr is committed to a respectful, inclusive hiring process. Employment decisions are based on role requirements, capability and potential without discrimination prohibited by applicable law.</p></div>
          </div>
          <RecruitmentForm />
        </div>
      </section>
    </>
  );
}

