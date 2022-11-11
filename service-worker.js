const u = [
  "/ukzn_hackathon/internal/immutable/assets/fira-mono-cyrillic-ext-400-normal-3df7909e.woff2",
  "/ukzn_hackathon/internal/immutable/assets/fira-mono-cyrillic-400-normal-c7d433fd.woff2",
  "/ukzn_hackathon/internal/immutable/assets/fira-mono-greek-ext-400-normal-9e2fe623.woff2",
  "/ukzn_hackathon/internal/immutable/assets/fira-mono-greek-400-normal-a8be01ce.woff2",
  "/ukzn_hackathon/internal/immutable/assets/fira-mono-latin-ext-400-normal-6bfabd30.woff2",
  "/ukzn_hackathon/internal/immutable/assets/fira-mono-latin-400-normal-e43b3538.woff2",
  "/ukzn_hackathon/internal/immutable/assets/fira-mono-all-400-normal-1e3b098c.woff",
  "/ukzn_hackathon/internal/immutable/start-f2899174.js",
  "/ukzn_hackathon/internal/immutable/components/pages/_layout.svelte-f3e9a6ae.js",
  "/ukzn_hackathon/internal/immutable/assets/_layout-7e21bec6.css",
  "/ukzn_hackathon/internal/immutable/components/error.svelte-b93850b5.js",
  "/ukzn_hackathon/internal/immutable/components/pages/_page.svelte-fc78a8c7.js",
  "/ukzn_hackathon/internal/immutable/components/pages/about/_page.svelte-dbf99118.js",
  "/ukzn_hackathon/internal/immutable/assets/_page-c53deec7.css",
  "/ukzn_hackathon/internal/immutable/components/pages/contact/_page.svelte-186c786f.js",
  "/ukzn_hackathon/internal/immutable/components/pages/play/_page.svelte-285b4fee.js",
  "/ukzn_hackathon/internal/immutable/modules/pages/_page.ts-5938f197.js",
  "/ukzn_hackathon/internal/immutable/modules/pages/about/_page.ts-6cf9c774.js",
  "/ukzn_hackathon/internal/immutable/modules/pages/contact/_page.ts-2f425749.js",
  "/ukzn_hackathon/internal/immutable/modules/pages/play/_page.ts-54a31dd9.js",
  "/ukzn_hackathon/internal/immutable/chunks/singletons-9e9d8c06.js",
  "/ukzn_hackathon/internal/immutable/chunks/paths-846459bd.js",
  "/ukzn_hackathon/internal/immutable/chunks/index-1905b792.js",
  "/ukzn_hackathon/internal/immutable/chunks/_page-6ab928b4.js",
  "/ukzn_hackathon/internal/immutable/chunks/_page-b83a0680.js",
  "/ukzn_hackathon/internal/immutable/chunks/environment-2d36df95.js",
  "/ukzn_hackathon/internal/immutable/chunks/_page-81147579.js",
  "/ukzn_hackathon/internal/immutable/chunks/_page-7cf4687b.js",
  "/ukzn_hackathon/internal/immutable/chunks/0-32d420b9.js",
  "/ukzn_hackathon/internal/immutable/chunks/1-4c5f3a02.js",
  "/ukzn_hackathon/internal/immutable/chunks/2-17255536.js",
  "/ukzn_hackathon/internal/immutable/chunks/3-54b37dfa.js",
  "/ukzn_hackathon/internal/immutable/chunks/4-2d8c31ae.js",
  "/ukzn_hackathon/internal/immutable/chunks/5-5246e552.js"
], k = [
  "/ukzn_hackathon/favicon.png",
  "/ukzn_hackathon/icons/kival.png",
  "/ukzn_hackathon/icons/logo_512.png",
  "/ukzn_hackathon/icons/logo_512.xcf",
  "/ukzn_hackathon/icons/seevan.jpg",
  "/ukzn_hackathon/logo_192.png",
  "/ukzn_hackathon/logo_512.png",
  "/ukzn_hackathon/manifest.json",
  "/ukzn_hackathon/robots.txt"
], o = "1668193324750", e = self, h = `cache${o}`, i = u.concat(k), m = new Set(i);
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
  const n = await caches.open(`offline${o}`);
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
  const n = new URL(a.request.url), t = n.protocol.startsWith("http"), s = n.hostname === self.location.hostname && n.port !== self.location.port, c = n.host === self.location.host && m.has(n.pathname), l = a.request.cache === "only-if-cached" && !c;
  t && !s && !l && a.respondWith(
    (async () => c && await caches.match(a.request) || r(a.request))()
  );
});
