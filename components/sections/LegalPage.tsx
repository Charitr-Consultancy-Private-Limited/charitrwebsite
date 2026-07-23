import { PageHero } from "@/components/sections/PageHero";

export function LegalPage({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} description={description} crumbs={[{ label: title }]} />
      <section className="section section--white">
        <article className="container legal-copy">
          <div className="legal-review">Draft placeholder — requires review by qualified legal counsel before public launch.</div>
          {children}
        </article>
      </section>
    </>
  );
}

