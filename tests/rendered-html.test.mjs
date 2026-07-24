import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const route = path === "/" ? "index.html" : `${path.replace(/^\/|\/$/g, "")}/index.html`;
  return readFile(new URL(`../out/${route}`, import.meta.url), "utf8");
}

test("static export contains the finished Charitr homepage", async () => {
  const html = await render();
  assert.match(html, /We design, build and transform/);
  assert.match(html, /Charitr Consultancy Private Limited/);
  assert.match(html, /Discuss Your Requirement/);
  assert.match(html, /charitr-logo\.webp/);
  assert.match(html, /favicon\.png/);
  assert.doesNotMatch(html, /charitr-logo\.png|favicon\.ico/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/);
});

test("static export contains an internal route with breadcrumbs", async () => {
  const html = await render("/capabilities/engineering-excellence");
  assert.match(html, /Build reliable digital products/);
  assert.match(html, /aria-label="Breadcrumb"/);
  assert.match(html, /Problems addressed/);
});

test("static export contains no website submission endpoint", async () => {
  const contactHtml = await render("/contact");
  const careersHtml = await render("/careers");
  assert.doesNotMatch(contactHtml, /<form\b|\/api\/enquiry|Send enquiry/);
  assert.doesNotMatch(careersHtml, /<form\b|\/api\/enquiry|Submit application/);
  assert.match(contactHtml, /does not collect, store or transmit enquiry details/);
  assert.match(careersHtml, /does not upload, collect or store application details/);
});
