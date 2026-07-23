import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the finished Charitr homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /We design, build and transform/);
  assert.match(html, /Charitr Consultancy Private Limited/);
  assert.match(html, /Discuss Your Requirement/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/);
});

test("server-renders an internal route with breadcrumbs", async () => {
  const response = await render("/capabilities/engineering-excellence");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Build reliable digital products/);
  assert.match(html, /aria-label="Breadcrumb"/);
  assert.match(html, /Problems addressed/);
});

