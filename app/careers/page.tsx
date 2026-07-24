import { Check, Mail, MapPin, Phone } from "lucide-react";
import { RecruitmentPanel } from "@/components/contact/RecruitmentPanel";
import { PageHero } from "@/components/sections/PageHero";
import { careerOpening } from "@/data/careers";
import { contact } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata(
  careerOpening.title,
  `Join Charitr in Chennai as ${careerOpening.title}. Explore the responsibilities, technical skills and application process.`,
  "/careers",
);

const values = ["Ownership", "Accountability", "Structured problem-solving", "Clear communication", "Willingness to learn", "Respect for users", "Engineering quality", "Good design", "Responsible use of data and AI"];

export default function CareersPage() {
  return (
    <>
      <PageHero eyebrow="Careers" title="Build technology that creates practical impact" description={`We are hiring an ${careerOpening.title} in ${careerOpening.location}.`} crumbs={[{ label: "Careers" }]} />
      <section className="section section--white">
        <div className="container editorial-split">
          <div><p className="eyebrow">Work with us</p><h2>Solve real operational and product challenges using technology.</h2></div>
          <div className="prose-large"><p>Our team helps SMEs, NGOs, social enterprises and education organisations turn complex needs into clear, usable and maintainable solutions.</p><p>We value people who can move between careful thinking and practical delivery.</p></div>
        </div>
      </section>
      <section className="section">
        <a
          className="container opportunity opportunity--link"
          href="#engineering-manager-job-description"
          aria-label={`Read the full job description for ${careerOpening.title}`}
        >
          <div className="opportunity__header">
            <p className="eyebrow">Current opportunity</p>
            <h2>{careerOpening.title}</h2>
            <span className="opportunity__cta" aria-hidden="true">View full job description <span>↓</span></span>
          </div>
          <div className="opportunity__facts">
            <div><strong>{careerOpening.openings}</strong><span>opening</span></div>
            <div><strong>{careerOpening.employmentModel}</strong><span>employment model</span></div>
            <div><strong>{careerOpening.location}</strong><span>work location</span></div>
          </div>
        </a>
      </section>
      <section className="section section--white" id="engineering-manager-job-description">
        <div className="container job-description">
          <div className="job-description__intro">
            <p className="eyebrow">Role summary</p>
            <h2>A hands-on technical leadership role.</h2>
            <div className="prose-large">
              {careerOpening.summary.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
          <div className="job-description__body">
            <div className="section-header">
              <p className="eyebrow">Key responsibilities</p>
              <h2>What you will own</h2>
              <p>Open each area to review the responsibilities in detail.</p>
            </div>
            <div className="responsibility-list">
              {careerOpening.responsibilities.map((area, index) => (
                <details key={area.title} open={index === 0}>
                  <summary><span>{String(index + 1).padStart(2, "0")}</span><strong>{area.title}</strong></summary>
                  <ul>{area.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section section--blue-grey">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Experience and capability</p>
            <h2>Technical skills for the role</h2>
          </div>
          <div className="job-requirements-grid">
            <section>
              <h3>Required technical skills</h3>
              <ul className="job-list">{careerOpening.requiredSkills.map((skill) => <li key={skill}><Check size={17} />{skill}</li>)}</ul>
            </section>
            <section>
              <h3>Preferred skills</h3>
              <ul className="job-list">{careerOpening.preferredSkills.map((skill) => <li key={skill}><Check size={17} />{skill}</li>)}</ul>
            </section>
          </div>
          <div className="success-measures">
            <div>
              <p className="eyebrow">Key success measures</p>
              <h2>What good looks like</h2>
            </div>
            <ol>{careerOpening.successMeasures.map((measure, index) => <li key={measure}><span>{String(index + 1).padStart(2, "0")}</span>{measure}</li>)}</ol>
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
              <span><MapPin />{careerOpening.location}</span>
            </div>
            <div className="equal-opportunity"><strong>Equal opportunity</strong><p>Charitr is committed to a respectful, inclusive hiring process. Employment decisions are based on role requirements, capability and potential without discrimination prohibited by applicable law.</p></div>
          </div>
          <RecruitmentPanel roleTitle={careerOpening.title} />
        </div>
      </section>
    </>
  );
}
