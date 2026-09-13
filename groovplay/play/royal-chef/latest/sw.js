/*
 * 포털과 그 아래 모든 게임을 덮는 하나의 서비스 워커.
 *
 * 목적은 두 가지다.
 * 1. 설치 가능한 앱이 되는 것 — 안드로이드 크롬은 매니페스트와 함께 이것을 본다.
 * 2. 다시 들어올 때 빨라지는 것.
 *
 * 규칙은 단순하게 둔다. 문서는 네트워크 먼저(새 빌드를 놓치지 않기 위해), 해시가 붙은 자산은
 * 캐시 먼저. 큰 음악·영상은 캐시하지 않는다 — 저장 용량을 게임 하나가 다 쓰면 안 된다.
 * 배포할 때마다 VERSION이 바뀌고 옛 캐시는 버린다.
 */

const VERSION = "groovplay-20260911153153";
const MAX_CACHED_BYTES = 2 * 1024 * 1024;
const SKIP = /\.(ogg|m4a|mp3|wav|mp4|webm)$/i;

self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((key) => key !== VERSION).map((key) => caches.delete(key)));
      await self.clients.claim();
    })(),
  );
});

async function cachePut(request, response) {
  if (!response.ok || response.type === "opaque") return;
  const length = Number(response.headers.get("content-length") ?? 0);
  if (length > MAX_CACHED_BYTES) return;
  const cache = await caches.open(VERSION);
  await cache.put(request, response);
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (SKIP.test(url.pathname)) return;

  if (request.mode === "navigate") {
    // 문서는 언제나 새것을 먼저 본다. 오프라인일 때만 캐시가 답한다.
    event.respondWith(
      (async () => {
        try {
          const fresh = await fetch(request);
          void cachePut(request, fresh.clone());
          return fresh;
        } catch {
          const hit = await caches.match(request);
          return hit ?? Response.error();
        }
      })(),
    );
    return;
  }

  event.respondWith(
    (async () => {
      const hit = await caches.match(request);
      if (hit) return hit;
      const fresh = await fetch(request);
      void cachePut(request, fresh.clone());
      return fresh;
    })(),
  );
});
