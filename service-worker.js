const c = [
  "/EvolutionChess/internal/immutable/assets/lightbulb-78379501.png",
  "/EvolutionChess/internal/immutable/assets/fira-mono-cyrillic-ext-400-normal-3df7909e.woff2",
  "/EvolutionChess/internal/immutable/assets/fira-mono-cyrillic-400-normal-c7d433fd.woff2",
  "/EvolutionChess/internal/immutable/assets/fira-mono-greek-ext-400-normal-9e2fe623.woff2",
  "/EvolutionChess/internal/immutable/assets/fira-mono-greek-400-normal-a8be01ce.woff2",
  "/EvolutionChess/internal/immutable/assets/fira-mono-latin-ext-400-normal-6bfabd30.woff2",
  "/EvolutionChess/internal/immutable/assets/fira-mono-latin-400-normal-e43b3538.woff2",
  "/EvolutionChess/internal/immutable/assets/fira-mono-all-400-normal-1e3b098c.woff",
  "/EvolutionChess/internal/immutable/start-2d399866.js",
  "/EvolutionChess/internal/immutable/components/pages/_layout.svelte-74155302.js",
  "/EvolutionChess/internal/immutable/assets/_layout-02a70440.css",
  "/EvolutionChess/internal/immutable/components/error.svelte-e6a92e0a.js",
  "/EvolutionChess/internal/immutable/components/pages/_page.svelte-85101ec1.js",
  "/EvolutionChess/internal/immutable/assets/_page-02001312.css",
  "/EvolutionChess/internal/immutable/components/pages/about/_page.svelte-5730b3e8.js",
  "/EvolutionChess/internal/immutable/assets/_page-138f108b.css",
  "/EvolutionChess/internal/immutable/components/pages/play/_page.svelte-41f95eb3.js",
  "/EvolutionChess/internal/immutable/components/pages/team/_page.svelte-35f2a8a1.js",
  "/EvolutionChess/internal/immutable/assets/_page-40a719e3.css",
  "/EvolutionChess/internal/immutable/modules/pages/_page.ts-5938f197.js",
  "/EvolutionChess/internal/immutable/modules/pages/about/_page.ts-6cf9c774.js",
  "/EvolutionChess/internal/immutable/modules/pages/play/_page.ts-54a31dd9.js",
  "/EvolutionChess/internal/immutable/modules/pages/team/_page.ts-7908ccc3.js",
  "/EvolutionChess/internal/immutable/chunks/singletons-b41d14bc.js",
  "/EvolutionChess/internal/immutable/chunks/paths-846459bd.js",
  "/EvolutionChess/internal/immutable/chunks/index-f7f915e0.js",
  "/EvolutionChess/internal/immutable/chunks/_page-6ab928b4.js",
  "/EvolutionChess/internal/immutable/chunks/_page-b83a0680.js",
  "/EvolutionChess/internal/immutable/chunks/environment-2d36df95.js",
  "/EvolutionChess/internal/immutable/chunks/_page-7cf4687b.js",
  "/EvolutionChess/internal/immutable/chunks/_page-8dbd44b8.js",
  "/EvolutionChess/internal/immutable/chunks/0-9f2438a2.js",
  "/EvolutionChess/internal/immutable/chunks/1-50514ac9.js",
  "/EvolutionChess/internal/immutable/chunks/2-a5843996.js",
  "/EvolutionChess/internal/immutable/chunks/3-c68ad0ab.js",
  "/EvolutionChess/internal/immutable/chunks/4-ef75c3a1.js",
  "/EvolutionChess/internal/immutable/chunks/5-c90bdfdd.js"
], m = [
  "/EvolutionChess/chess/B.svg",
  "/EvolutionChess/chess/K.svg",
  "/EvolutionChess/chess/N.svg",
  "/EvolutionChess/chess/P.svg",
  "/EvolutionChess/chess/Q.svg",
  "/EvolutionChess/chess/R.svg",
  "/EvolutionChess/chess/b.svg",
  "/EvolutionChess/chess/k.svg",
  "/EvolutionChess/chess/n.svg",
  "/EvolutionChess/chess/p.svg",
  "/EvolutionChess/chess/q.svg",
  "/EvolutionChess/chess/r.svg",
  "/EvolutionChess/chess1.jpg",
  "/EvolutionChess/chess2.jpg",
  "/EvolutionChess/chess3.jpg",
  "/EvolutionChess/chess4.jpg",
  "/EvolutionChess/chess5.webp",
  "/EvolutionChess/chess6.jpg",
  "/EvolutionChess/chess7 copy.jpg",
  "/EvolutionChess/chess7.jpg",
  "/EvolutionChess/chess8.jpg",
  "/EvolutionChess/favicon.png",
  "/EvolutionChess/icons/EvoChess1.png",
  "/EvolutionChess/icons/EvoChess2.png",
  "/EvolutionChess/icons/EvoChess3.png",
  "/EvolutionChess/icons/EvoChess4.png",
  "/EvolutionChess/icons/EvoChess5 copy.png",
  "/EvolutionChess/icons/EvoChess5.png",
  "/EvolutionChess/icons/kival.png",
  "/EvolutionChess/icons/logo_512.png",
  "/EvolutionChess/icons/logo_512.xcf",
  "/EvolutionChess/icons/seevan.jpg",
  "/EvolutionChess/logo_192.png",
  "/EvolutionChess/logo_512.png",
  "/EvolutionChess/manifest.json",
  "/EvolutionChess/queen.png",
  "/EvolutionChess/queen1.jpg",
  "/EvolutionChess/queen2.jpg",
  "/EvolutionChess/robots.txt",
  "/EvolutionChess/ukzn_hackathon/chess7.jpg",
  "/EvolutionChess/ukzn_hackathon/chess8.jpg",
  "/EvolutionChess/ukzn_hackathon/logo_512.png",
  "/EvolutionChess/ukzn_hackathon/queen.png"
], a = "1721828320631", o = self, l = `cache${a}`, h = c.concat(m), v = new Set(h);
o.addEventListener("install", (s) => {
  s.waitUntil(
    caches.open(l).then((e) => e.addAll(h)).then(() => {
      o.skipWaiting();
    })
  );
});
o.addEventListener("activate", (s) => {
  s.waitUntil(
    caches.keys().then(async (e) => {
      for (const n of e)
        n !== l && await caches.delete(n);
      o.clients.claim();
    })
  );
});
async function r(s) {
  const e = await caches.open(`offline${a}`);
  try {
    const n = await fetch(s);
    return e.put(s, n.clone()), n;
  } catch (n) {
    const t = await e.match(s);
    if (t)
      return t;
    throw n;
  }
}
o.addEventListener("fetch", (s) => {
  if (s.request.method !== "GET" || s.request.headers.has("range"))
    return;
  const e = new URL(s.request.url), n = e.protocol.startsWith("http"), t = e.hostname === self.location.hostname && e.port !== self.location.port, i = e.host === self.location.host && v.has(e.pathname), u = s.request.cache === "only-if-cached" && !i;
  n && !t && !u && s.respondWith(
    (async () => i && await caches.match(s.request) || r(s.request))()
  );
});
