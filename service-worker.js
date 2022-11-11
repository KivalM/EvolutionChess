const u = [
  "/ukzn_hackathon/internal/immutable/assets/fira-mono-cyrillic-ext-400-normal-3df7909e.woff2",
  "/ukzn_hackathon/internal/immutable/assets/fira-mono-greek-400-normal-a8be01ce.woff2",
  "/ukzn_hackathon/internal/immutable/assets/fira-mono-cyrillic-400-normal-c7d433fd.woff2",
  "/ukzn_hackathon/internal/immutable/assets/fira-mono-greek-ext-400-normal-9e2fe623.woff2",
  "/ukzn_hackathon/internal/immutable/assets/fira-mono-latin-ext-400-normal-6bfabd30.woff2",
  "/ukzn_hackathon/internal/immutable/assets/fira-mono-latin-400-normal-e43b3538.woff2",
  "/ukzn_hackathon/internal/immutable/assets/fira-mono-all-400-normal-1e3b098c.woff",
  "/ukzn_hackathon/internal/immutable/start-e37b5db6.js",
  "/ukzn_hackathon/internal/immutable/components/pages/_layout.svelte-52d05673.js",
  "/ukzn_hackathon/internal/immutable/assets/_layout-6d874179.css",
  "/ukzn_hackathon/internal/immutable/components/error.svelte-b0efabd8.js",
  "/ukzn_hackathon/internal/immutable/components/pages/_page.svelte-174d1d73.js",
  "/ukzn_hackathon/internal/immutable/components/pages/about/_page.svelte-065878df.js",
  "/ukzn_hackathon/internal/immutable/assets/_page-1682443b.css",
  "/ukzn_hackathon/internal/immutable/components/pages/contact/_page.svelte-c7e9839f.js",
  "/ukzn_hackathon/internal/immutable/components/pages/play/_page.svelte-ed1980da.js",
  "/ukzn_hackathon/internal/immutable/modules/pages/_page.ts-5938f197.js",
  "/ukzn_hackathon/internal/immutable/modules/pages/about/_page.ts-6cf9c774.js",
  "/ukzn_hackathon/internal/immutable/modules/pages/contact/_page.ts-2f425749.js",
  "/ukzn_hackathon/internal/immutable/modules/pages/play/_page.ts-54a31dd9.js",
  "/ukzn_hackathon/internal/immutable/chunks/singletons-7cbec54a.js",
  "/ukzn_hackathon/internal/immutable/chunks/paths-846459bd.js",
  "/ukzn_hackathon/internal/immutable/chunks/index-9311f287.js",
  "/ukzn_hackathon/internal/immutable/chunks/_page-6ab928b4.js",
  "/ukzn_hackathon/internal/immutable/chunks/_page-b83a0680.js",
  "/ukzn_hackathon/internal/immutable/chunks/environment-2d36df95.js",
  "/ukzn_hackathon/internal/immutable/chunks/_page-81147579.js",
  "/ukzn_hackathon/internal/immutable/chunks/_page-7cf4687b.js",
  "/ukzn_hackathon/internal/immutable/chunks/0-8db561c7.js",
  "/ukzn_hackathon/internal/immutable/chunks/1-b5e37086.js",
  "/ukzn_hackathon/internal/immutable/chunks/2-371ef03a.js",
  "/ukzn_hackathon/internal/immutable/chunks/3-f61651e5.js",
  "/ukzn_hackathon/internal/immutable/chunks/4-f6965460.js",
  "/ukzn_hackathon/internal/immutable/chunks/5-31345827.js"
], k = [
  "/ukzn_hackathon/favicon.png",
  "/ukzn_hackathon/icons/logo_512.png",
  "/ukzn_hackathon/icons/logo_512.xcf",
  "/ukzn_hackathon/logo_192.png",
  "/ukzn_hackathon/logo_512.png",
  "/ukzn_hackathon/manifest.json",
  "/ukzn_hackathon/robots.txt"
], c = "1668177984745", e = self, h = `cache${c}`, i = u.concat(k), m = new Set(i);
e.addEventListener("install", (a) => {
  a.waitUntil(
    caches.open(h).then((n) => n.addAll(i)).then(() => {
      e.skipWaiting();
    })
  );
});
e.addEventListener("activate", (a) => {
  a.waitUntil(
    caches.keys().then(async (n) => {
      for (const t of n)
        t !== h && await caches.delete(t);
      e.clients.claim();
    })
  );
});
async function r(a) {
  const n = await caches.open(`offline${c}`);
  try {
    const t = await fetch(a);
    return n.put(a, t.clone()), t;
  } catch (t) {
    const s = await n.match(a);
    if (s)
      return s;
    throw t;
  }
}
e.addEventListener("fetch", (a) => {
  if (a.request.method !== "GET" || a.request.headers.has("range"))
    return;
  const n = new URL(a.request.url), t = n.protocol.startsWith("http"), s = n.hostname === self.location.hostname && n.port !== self.location.port, o = n.host === self.location.host && m.has(n.pathname), l = a.request.cache === "only-if-cached" && !o;
  t && !s && !l && a.respondWith(
    (async () => o && await caches.match(a.request) || r(a.request))()
  );
});
