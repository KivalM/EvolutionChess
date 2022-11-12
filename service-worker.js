const i = [
  "/ukzn_hackathon/internal/immutable/assets/fira-mono-cyrillic-ext-400-normal-3df7909e.woff2",
  "/ukzn_hackathon/internal/immutable/assets/fira-mono-cyrillic-400-normal-c7d433fd.woff2",
  "/ukzn_hackathon/internal/immutable/assets/fira-mono-greek-400-normal-a8be01ce.woff2",
  "/ukzn_hackathon/internal/immutable/assets/fira-mono-greek-ext-400-normal-9e2fe623.woff2",
  "/ukzn_hackathon/internal/immutable/assets/fira-mono-latin-ext-400-normal-6bfabd30.woff2",
  "/ukzn_hackathon/internal/immutable/assets/fira-mono-latin-400-normal-e43b3538.woff2",
  "/ukzn_hackathon/internal/immutable/assets/fira-mono-all-400-normal-1e3b098c.woff",
  "/ukzn_hackathon/internal/immutable/start-07b1ca21.js",
  "/ukzn_hackathon/internal/immutable/components/pages/_layout.svelte-d76c5553.js",
  "/ukzn_hackathon/internal/immutable/assets/_layout-c8fd10ac.css",
  "/ukzn_hackathon/internal/immutable/components/error.svelte-6d3dc408.js",
  "/ukzn_hackathon/internal/immutable/components/pages/_page.svelte-12a2a592.js",
  "/ukzn_hackathon/internal/immutable/assets/_page-5185e655.css",
  "/ukzn_hackathon/internal/immutable/components/pages/about/_page.svelte-794b18cb.js",
  "/ukzn_hackathon/internal/immutable/assets/_page-74238263.css",
  "/ukzn_hackathon/internal/immutable/components/pages/play/_page.svelte-7b8ba1fa.js",
  "/ukzn_hackathon/internal/immutable/components/pages/team/_page.svelte-15c0b1a1.js",
  "/ukzn_hackathon/internal/immutable/modules/pages/_page.ts-5938f197.js",
  "/ukzn_hackathon/internal/immutable/modules/pages/about/_page.ts-6cf9c774.js",
  "/ukzn_hackathon/internal/immutable/modules/pages/play/_page.ts-54a31dd9.js",
  "/ukzn_hackathon/internal/immutable/modules/pages/team/_page.ts-7908ccc3.js",
  "/ukzn_hackathon/internal/immutable/chunks/singletons-99e36496.js",
  "/ukzn_hackathon/internal/immutable/chunks/paths-846459bd.js",
  "/ukzn_hackathon/internal/immutable/chunks/index-79f2c8a6.js",
  "/ukzn_hackathon/internal/immutable/chunks/_page-6ab928b4.js",
  "/ukzn_hackathon/internal/immutable/chunks/_page-b83a0680.js",
  "/ukzn_hackathon/internal/immutable/chunks/environment-2d36df95.js",
  "/ukzn_hackathon/internal/immutable/chunks/_page-7cf4687b.js",
  "/ukzn_hackathon/internal/immutable/chunks/_page-8dbd44b8.js",
  "/ukzn_hackathon/internal/immutable/chunks/0-2066b984.js",
  "/ukzn_hackathon/internal/immutable/chunks/1-76b314df.js",
  "/ukzn_hackathon/internal/immutable/chunks/2-3f74ceda.js",
  "/ukzn_hackathon/internal/immutable/chunks/3-ab37b79d.js",
  "/ukzn_hackathon/internal/immutable/chunks/4-c295ee80.js",
  "/ukzn_hackathon/internal/immutable/chunks/5-7b518d55.js"
], l = [
  "/ukzn_hackathon/chess/B.svg",
  "/ukzn_hackathon/chess/K.svg",
  "/ukzn_hackathon/chess/N.svg",
  "/ukzn_hackathon/chess/P.svg",
  "/ukzn_hackathon/chess/Q.svg",
  "/ukzn_hackathon/chess/R.svg",
  "/ukzn_hackathon/chess/b.svg",
  "/ukzn_hackathon/chess/k.svg",
  "/ukzn_hackathon/chess/n.svg",
  "/ukzn_hackathon/chess/p.svg",
  "/ukzn_hackathon/chess/q.svg",
  "/ukzn_hackathon/chess/r.svg",
  "/ukzn_hackathon/chess1.jpg",
  "/ukzn_hackathon/chess2.jpg",
  "/ukzn_hackathon/chess3.jpg",
  "/ukzn_hackathon/chess4.jpg",
  "/ukzn_hackathon/chess5.webp",
  "/ukzn_hackathon/favicon.png",
  "/ukzn_hackathon/icons/kival.png",
  "/ukzn_hackathon/icons/logo_512.png",
  "/ukzn_hackathon/icons/logo_512.xcf",
  "/ukzn_hackathon/icons/seevan.jpg",
  "/ukzn_hackathon/logo_192.png",
  "/ukzn_hackathon/logo_512.png",
  "/ukzn_hackathon/manifest.json",
  "/ukzn_hackathon/queen.png",
  "/ukzn_hackathon/queen1.jpg",
  "/ukzn_hackathon/robots.txt",
  "/ukzn_hackathon/ukzn_hackathon/logo_512.png",
  "/ukzn_hackathon/ukzn_hackathon/queen.png"
], h = "1668250159657", e = self, o = `cache${h}`, k = i.concat(l), m = new Set(k);
e.addEventListener("install", (a) => {
  a.waitUntil(
    caches.open(o).then((n) => n.addAll(k)).then(() => {
      e.skipWaiting();
    })
  );
});
e.addEventListener("activate", (a) => {
  a.waitUntil(
    caches.keys().then(async (n) => {
      for (const t of n)
        t !== o && await caches.delete(t);
      e.clients.claim();
    })
  );
});
async function r(a) {
  const n = await caches.open(`offline${h}`);
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
  const n = new URL(a.request.url), t = n.protocol.startsWith("http"), s = n.hostname === self.location.hostname && n.port !== self.location.port, c = n.host === self.location.host && m.has(n.pathname), u = a.request.cache === "only-if-cached" && !c;
  t && !s && !u && a.respondWith(
    (async () => c && await caches.match(a.request) || r(a.request))()
  );
});
