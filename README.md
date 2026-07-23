# Charitr Consultancy corporate website

Production-oriented corporate website for Charitr Consultancy Private Limited, built with Next.js App Router, TypeScript, React, Tailwind CSS, Lucide icons and the vinext/Cloudflare runtime.

## Website architecture

- Home: positioning, audiences, outcomes, capabilities, process, solutions, work, differentiators, locations and careers.
- About: overview, mission, vision, name meaning, principles, leadership placeholder and locations.
- Capabilities: listing plus reusable detail pages for Engineering, UI/UX, AI and Technology Transformation.
- Solutions: four repeatable solution areas with problems, users, functionality, capabilities and implementation approach.
- Work: case-study listing and reusable detail template.
- Careers: current Chennai opportunity, values, process and recruitment form.
- Contact: direct contact information and structured enquiry form.
- Legal: Privacy Policy, Cookie Policy and Terms of Use draft placeholders.
- Platform: custom 404, sitemap, robots, structured data and page-specific metadata.

## Content and component model

Editable company, capability, solution and case-study content lives in `data/site.ts` and is strongly typed from `types/site.ts`. Components are grouped by layout, sections, forms, privacy and UI. This separation is designed to support a future headless CMS without changing the visual components.

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

Copy `.env.example` to `.env.local`. No secrets belong in source control.

- `FORM_DELIVERY_ENDPOINT`: reserved for an approved CRM, email or serverless form-delivery endpoint.
- `NEXT_PUBLIC_ANALYTICS_ID`: optional analytics property identifier.
- `NEXT_PUBLIC_ANALYTICS_SCRIPT_URL`: optional privacy-respecting analytics script URL.

Analytics does not load before consent and remains inactive without configuration. The current form route performs server-side validation and spam-field checks, but intentionally does not transmit personal information until a verified delivery integration is configured.

## Deployment

The project is configured for OpenAI Sites through `.openai/hosting.json` and produces Cloudflare Worker-compatible ESM output through vinext. Run a successful production build before saving and deploying a version.

For another Cloudflare-compatible environment, configure the same environment variables in the hosting dashboard and run `pnpm build`.

## Launch checklist / TODO

- Replace all `CONTENT PLACEHOLDER` case studies with verified, client-approved information.
- Add approved client names, outcomes, technologies, testimonials and project visuals only when permission is documented.
- Add verified leadership names, roles, biographies and portraits.
- Confirm the Chennai job title, responsibilities, requirements and compensation language.
- Connect and test an approved enquiry delivery endpoint.
- Configure secure résumé upload/storage or remove upload before launch.
- Obtain legal review of the Privacy Policy, Cookie Policy, Terms of Use and recruitment/privacy wording.
- Confirm the registered-office postal address if it should be published.
- Add a final approved logo asset if Charitr has an existing brand master.
- Configure privacy-respecting analytics only if required.
- Complete accessibility and cross-device browser QA with real content.

## Generated sharing asset

`public/og.png` is the branded 1200 × 630 social card. It was generated for this site using the exact headline and then visually checked for text accuracy.

