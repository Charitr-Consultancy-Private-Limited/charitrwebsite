import type { CaseStudy } from "@/types/site";

export function CaseStudyDetail({ study }: { study: CaseStudy }) {
  const sections = [
    ["Challenge", study.challenge],
    ["Approach", study.approach],
    ["Solution", study.solution],
    ["Outcome", study.outcome],
  ];

  return (
    <div className="case-detail">
      <div className="case-detail__main">
        {sections.map(([title, text]) => <section key={title}><h2>{title}</h2><p>{text}</p></section>)}
        <section><h2>Testimonial</h2><p>{study.testimonial}</p></section>
      </div>
      <aside>
        <div><h2>Client type</h2><p>{study.clientType}</p></div>
        <div><h2>Sector</h2><p>{study.sector}</p></div>
        <div><h2>Capabilities</h2><ul>{study.capabilities.map((item) => <li key={item}>{item}</li>)}</ul></div>
        <div><h2>Technologies</h2><ul>{study.technologies.map((item) => <li key={item}>{item}</li>)}</ul></div>
        <div><h2>Related solutions</h2><ul>{study.relatedSolutions.map((item) => <li key={item}>{item}</li>)}</ul></div>
      </aside>
    </div>
  );
}

