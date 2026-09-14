# Charitr Consultancy corporate website

Production-oriented static corporate website for Charitr Consultancy Private Limited, built with Next.js App Router, TypeScript, React, custom CSS and Lucide icons.

## Website architecture

- Home: positioning, audiences, outcomes, capabilities, process, solutions, work, differentiators and locations.
- About: overview, mission, vision, name meaning, principles, leadership placeholder and locations.
- Capabilities: listing plus reusable detail pages for Engineering, UI/UX, AI and Technology Transformation.
- Solutions: four repeatable solution areas with problems, users, functionality, capabilities and implementation approach.
- Work: case-study listing and reusable detail template.
- Contact: direct email and telephone contact information.
- Legal: Privacy Policy, Cookie Policy and Terms of Use draft placeholders.
- Platform: custom 404, sitemap, robots, structured data and page-specific metadata.

## Content and component model

Editable company, capability, solution and case-study content lives in `data/site.ts` and is strongly typed from `types/site.ts`. Components are grouped by layout, sections, contact panels, privacy and UI. The site has no server runtime or database.

## Local development

Requirements: Node.js 22.13+ and pnpm.

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

Validation:

```bash
pnpm lint
pnpm build
pnpm test
```

## Environment

- `NEXT_PUBLIC_ANALYTICS_ID`: optional analytics property identifier.
- `NEXT_PUBLIC_ANALYTICS_SCRIPT_URL`: optional privacy-respecting analytics script URL.

Analytics does not load before consent and remains inactive without configuration. The website has no enquiry or recruitment submission endpoint and does not collect, store or transmit visitor-entered form data. Contact and job applications are handled through direct email or telephone links.

## Deployment

The site is a static Next.js export. A normal production build writes the site
to `out/`:

```bash
pnpm build
```

The GitHub Pages build uses the repository subpath:

```bash
pnpm build:pages
```

Pushing to `main` triggers `.github/workflows/pages.yml`, which publishes the
preview at `https://anupnathaniel.github.io/charitrwebsite/`.

## Launch checklist / TODO

- Replace all `CONTENT PLACEHOLDER` case studies with verified, client-approved information.
- Add approved client names, outcomes, technologies, testimonials and project visuals only when permission is documented.
- Add verified leadership names, roles, biographies and portraits.
- Obtain legal review of the Privacy Policy, Cookie Policy and Terms of Use.
- Confirm the registered-office postal address if it should be published.
- Add a final approved logo asset if Charitr has an existing brand master.
- Configure privacy-respecting analytics only if required.
- Complete accessibility and cross-device browser QA with real content.

## Generated sharing asset

`public/og.png` is the branded 1200 × 630 social card. It was generated for this site using the exact headline and then visually checked for text accuracy.
