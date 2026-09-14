import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const route = path === "/" ? "index.html" : `${path.replace(/^\/|\/$/g, "")}/index.html`;
  return readFile(new URL(`../out/${route}`, import.meta.url), "utf8");
}

test("static export contains the finished Charitr homepage", async () => {
  const html = await render();
  assert.match(html, /We design and build digital solutions/);
  assert.match(html, /Charitr Consultancy Private Limited/);
  assert.match(html, /Contact Us/);
  assert.match(html, /charitr-logo\.webp/);
  assert.match(html, /favicon\.png/);
  assert.doesNotMatch(html, /charitr-logo\.png|favicon\.ico/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/);
});

test("static export contains an internal route with breadcrumbs", async () => {
  const html = await render("/capabilities/engineering-excellence");
  assert.match(html, /Build and improve software/);
  assert.match(html, /aria-label="Breadcrumb"/);
  assert.match(html, /Common problems/);
});

test("navigation supports an accessible active-page state", async () => {
  const headerSource = await readFile(
    new URL("../components/layout/Header.tsx", import.meta.url),
    "utf8",
  );
  const styles = await readFile(
    new URL("../app/globals.css", import.meta.url),
    "utf8",
  );

  assert.match(headerSource, /usePathname/);
  assert.match(headerSource, /aria-current=\{isActive\(item\.href\) \? "page"/);
  assert.match(styles, /a\[aria-current="page"\]/);
});

test("static export contains no website submission endpoint", async () => {
  const contactHtml = await render("/contact");
  assert.doesNotMatch(contactHtml, /<form\b|\/api\/enquiry|Send enquiry/);
  assert.match(contactHtml, /does not collect or store enquiry details/);
});

test("work pages contain factual entries and no project placeholders", async () => {
  const workHtml = await render("/work");
  const homepage = await render();

  assert.match(workHtml, /Selected Work/);
  assert.match(workHtml, /Mobile Learning Application/);
  assert.match(workHtml, /Website Design and Development/);
  assert.match(workHtml, /Digital Presence and Website Improvement/);
  assert.match(workHtml, /\+91 99112 20198/);
  assert.match(workHtml, /info@charitr\.in/);
  assert.doesNotMatch(workHtml, /placeholder|to be confirmed/i);
  assert.match(homepage, /Digital solutions built around real user needs/);
  assert.match(homepage, /Mobile Learning Application/);
  assert.match(homepage, /Website Design and Development/);
  assert.doesNotMatch(homepage, /Digital Presence and Website Improvement|placeholder/i);
  await assert.rejects(() => render("/work/platform-modernisation-placeholder"), { code: "ENOENT" });
});

test("non-project placeholders remain explicit and styled in red", async () => {
  const legalHtml = await render("/privacy-policy");
  const styles = await readFile(
    new URL("../app/globals.css", import.meta.url),
    "utf8",
  );

  assert.match(legalHtml, /PLACEHOLDER · Legal/);
  assert.match(styles, /--placeholder-red: #b42318/);
});

test("careers is not published", async () => {
  await assert.rejects(() => render("/careers"), { code: "ENOENT" });
  const homepage = await render();
  assert.doesNotMatch(homepage, /href="[^"]*\/careers\/?"/);
});
