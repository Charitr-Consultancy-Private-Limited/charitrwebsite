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
      <PageHero placeholder eyebrow="PLACEHOLDER · Legal" title={title} description={description} crumbs={[{ label: title }]} />
      <section className="section section--white">
        <article className="container legal-copy">
          <div className="legal-review"><strong>PLACEHOLDER · Legal draft</strong><span>This page requires review by qualified legal counsel before public use.</span></div>
          {children}
        </article>
      </section>
    </>
  );
}
