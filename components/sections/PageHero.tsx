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
  description: string;
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
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
}
