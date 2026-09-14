import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  placeholder = false,
}: {
  eyebrow: string;
  title: string;
  description: string | readonly string[];
  crumbs: Crumb[];
  placeholder?: boolean;
}) {
  return (
    <section className="page-hero">
      <div className="container">
        <Breadcrumbs items={crumbs} />
        <div className="page-hero__content">
          <p className={placeholder ? "placeholder-hero-label" : "eyebrow"}>{eyebrow}</p>
          <h1>{title}</h1>
          <div className="page-hero__description">
            {typeof description === "string"
              ? <p>{description}</p>
              : description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </div>
    </section>
  );
}
