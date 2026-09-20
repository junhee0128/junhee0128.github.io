/* GROOVPLAY 런타임 v1 — 생성물. platform/runtime/src 에서. 손으로 고치지 않는다. */
(() => {
  "use strict";
  const __tokens = {"version":2,"font":{"family":"\"Pretendard\", ui-sans-serif, system-ui, \"Apple SD Gothic Neo\", \"Noto Sans KR\", sans-serif","size":{"xs":13,"sm":14,"md":15,"lg":18,"xl":22,"2xl":28,"3xl":36},"lineHeight":{"tight":1.15,"base":1.5},"weight":{"regular":400,"medium":500,"bold":700,"black":800}},"space":{"1":4,"2":8,"3":12,"4":16,"5":24,"6":32,"7":48},"radius":{"sm":6,"md":10,"lg":14,"xl":18,"pill":999},"touch":{"min":44,"comfortable":48},"motion":{"fast":120,"base":200,"slow":320,"ease":"cubic-bezier(.22, .61, .36, 1)"},"z":{"shell":1000,"overlay":1100,"toast":1200},"color":{"bg":"#0b0d12","panel":"#151922","panel2":"#1c2130","edge":"#262d3a","ink":"#eef1f6","ink2":"#b4bccb","ink3":"#9aa4b5","ok":"#56cd8c","warn":"#e9b657","bad":"#e8636e","accentFallback":"#f0a63c","onAccent":"#0b0d12"},"wordmark":{"text":"GROOVPLAY","letterSpacing":"0.22em"},"window":{"width":{"compact":0,"medium":600,"expanded":840,"large":1200,"xlarge":1600},"height":{"compact":0,"medium":480,"expanded":900},"aspect":{"tall":0,"square":0.85,"standard":1.2,"wide":1.9,"ultra":2.5}},"render":{"dprMax":2,"pixelsMax":5184000,"minScale":0.5},"gate":{"floor":[320,300],"rotateMaxShortSide":560}};
  const __tokensCss = "/* 생성물 — tokens/v2.json 에서. 손으로 고치지 않는다. */\n:root {\n  --gp-font-family: \"Pretendard\", ui-sans-serif, system-ui, \"Apple SD Gothic Neo\", \"Noto Sans KR\", sans-serif;\n  --gp-font-size-xs: max(13px, calc(13px * var(--gp-ui-scale, 1)));\n  --gp-font-size-sm: max(13px, calc(14px * var(--gp-ui-scale, 1)));\n  --gp-font-size-md: max(13px, calc(15px * var(--gp-ui-scale, 1)));\n  --gp-font-size-lg: max(13px, calc(18px * var(--gp-ui-scale, 1)));\n  --gp-font-size-xl: max(13px, calc(22px * var(--gp-ui-scale, 1)));\n  --gp-font-size-2xl: max(13px, calc(28px * var(--gp-ui-scale, 1)));\n  --gp-font-size-3xl: max(13px, calc(36px * var(--gp-ui-scale, 1)));\n  --gp-font-lineHeight-tight: 1.15;\n  --gp-font-lineHeight-base: 1.5;\n  --gp-font-weight-regular: 400;\n  --gp-font-weight-medium: 500;\n  --gp-font-weight-bold: 700;\n  --gp-font-weight-black: 800;\n  --gp-space-1: calc(4px * var(--gp-ui-scale, 1));\n  --gp-space-2: calc(8px * var(--gp-ui-scale, 1));\n  --gp-space-3: calc(12px * var(--gp-ui-scale, 1));\n  --gp-space-4: calc(16px * var(--gp-ui-scale, 1));\n  --gp-space-5: calc(24px * var(--gp-ui-scale, 1));\n  --gp-space-6: calc(32px * var(--gp-ui-scale, 1));\n  --gp-space-7: calc(48px * var(--gp-ui-scale, 1));\n  --gp-radius-sm: calc(6px * var(--gp-ui-scale, 1));\n  --gp-radius-md: calc(10px * var(--gp-ui-scale, 1));\n  --gp-radius-lg: calc(14px * var(--gp-ui-scale, 1));\n  --gp-radius-xl: calc(18px * var(--gp-ui-scale, 1));\n  --gp-radius-pill: calc(999px * var(--gp-ui-scale, 1));\n  --gp-touch-min: calc(44px * var(--gp-ui-scale, 1));\n  --gp-touch-comfortable: calc(48px * var(--gp-ui-scale, 1));\n  --gp-motion-fast: 120ms;\n  --gp-motion-base: 200ms;\n  --gp-motion-slow: 320ms;\n  --gp-motion-ease: cubic-bezier(.22, .61, .36, 1);\n  --gp-z-shell: 1000;\n  --gp-z-overlay: 1100;\n  --gp-z-toast: 1200;\n  --gp-color-bg: #0b0d12;\n  --gp-color-panel: #151922;\n  --gp-color-panel2: #1c2130;\n  --gp-color-edge: #262d3a;\n  --gp-color-ink: #eef1f6;\n  --gp-color-ink2: #b4bccb;\n  --gp-color-ink3: #9aa4b5;\n  --gp-color-ok: #56cd8c;\n  --gp-color-warn: #e9b657;\n  --gp-color-bad: #e8636e;\n  --gp-color-accentFallback: #f0a63c;\n  --gp-color-onAccent: #0b0d12;\n  --gp-wordmark-text: GROOVPLAY;\n  --gp-wordmark-letterSpacing: 0.22em;\n  --gp-window-width-compact: 0;\n  --gp-window-width-medium: 600;\n  --gp-window-width-expanded: 840;\n  --gp-window-width-large: 1200;\n  --gp-window-width-xlarge: 1600;\n  --gp-window-height-compact: 0;\n  --gp-window-height-medium: 480;\n  --gp-window-height-expanded: 900;\n  --gp-window-aspect-tall: 0;\n  --gp-window-aspect-square: 0.85;\n  --gp-window-aspect-standard: 1.2;\n  --gp-window-aspect-wide: 1.9;\n  --gp-window-aspect-ultra: 2.5;\n  --gp-render-dprMax: 2;\n  --gp-render-pixelsMax: 5184000;\n  --gp-render-minScale: 0.5;\n  --gp-gate-floor-0: 320;\n  --gp-gate-floor-1: 300;\n  --gp-gate-rotateMaxShortSide: 560;\n}\n";
// ── events ──
// 아주 작은 이벤트 버스. 런타임 안의 모듈들이 서로를 직접 부르지 않고 이것으로 말한다.

function createEvents() {
  const map = new Map();
  return {
    on(evt, fn) {
      if (!map.has(evt)) map.set(evt, new Set());
      map.get(evt).add(fn);
      return () => map.get(evt)?.delete(fn);
    },
    off(evt, fn) { map.get(evt)?.delete(fn); },
    emit(evt, detail) {
      for (const fn of [...(map.get(evt) ?? [])]) {
        try { fn(detail); } catch (e) { console.error(`groovplay: "${evt}" 리스너 오류`, e); }
      }
    },
  };
}


// ── screens ──
// 화면 등록부. 검사기와 복귀 버튼이 이것으로 게임 안을 이동한다.
//
// 게임은 화면마다 이름과 "들어가는 함수" 를 등록한다. title·settings·pause·results 는 계약의 필수 화면이다.
// settings 는 셸이 기본으로 등록하므로 게임이 따로 만들지 않아도 된다(만들면 게임 것이 이긴다).

function createScreens(emit) {
  const map = new Map();
  let current = null;
  // 캔버스에 그린 UI 는 DOM 이 없어 검사기가 터치 목표·안전영역을 못 본다. 게임이 지금 화면의
  // 탭 대상을 CSS px 사각형으로 돌려주는 함수를 등록하면 검사기가 그것을 잰다.
  let targetsFn = null;

  return {
    register(id, enter) {
      if (typeof id !== "string" || !id) throw new Error("screens.register: id 는 문자열");
      if (typeof enter !== "function") throw new Error(`screens.register("${id}"): enter 는 함수`);
      map.set(id, enter);
    },
    unregister(id) { map.delete(id); },
    list() { return [...map.keys()]; },
    has(id) { return map.has(id); },
    get current() { return current; },
    /** 캔버스 UI 의 탭 대상 제공자. () => [{ x, y, w, h, label }] (CSS px, 뷰포트 기준). */
    provideTargets(fn) { if (typeof fn !== "function") throw new Error("screens.provideTargets: 함수"); targetsFn = fn; },
    targets() { return targetsFn ? (targetsFn() ?? []) : []; },
    async goto(id) {
      const enter = map.get(id);
      if (!enter) throw new Error(`screens.goto: 등록되지 않은 화면 "${id}" (있는 것: ${[...map.keys()].join(", ") || "없음"})`);
      const prev = current;
      current = id;
      emit("screen", { id, prev });
      await enter({ prev });
    },
  };
}


// ── storage ──
// 저장소. 키는 groovplay/<game>/<scope>/v<n>. 게임은 scope 만 쓴다.
//
// 셋이 같은 오리진에 배포되므로 네임스페이스는 정리가 아니라 충돌 방지다. 버전은 스키마 버전이고,
// 올릴 때 migrate 를 주면 옛 키를 읽어 변환하고 지운다. 저장이 안 되는 환경(비공개 탭, 용량 초과,
// 회수된 WKWebView)은 available=false 로 드러나고 셸이 한 번 알린다 — 조용히 잃지 않는다.

function createStorage({ prefix, gameId, backend }) {
  // backend: { getItem, setItem, removeItem } — 브라우저는 localStorage, 네이티브 셸은 자기 것.
  let available = true;
  try {
    const probe = `${prefix}/__probe__`;
    backend.setItem(probe, "1");
    backend.removeItem(probe);
  } catch { available = false; }

  const key = (scope, version, id = gameId) => `${prefix}/${id}/${scope}/v${version}`;
  const read = (k) => {
    try { const raw = backend.getItem(k); return raw == null ? null : JSON.parse(raw); } catch { return null; }
  };
  const write = (k, value) => {
    try { backend.setItem(k, JSON.stringify(value)); return true; } catch { available = false; return false; }
  };

  /**
   * scope 하나를 다루는 핸들. version 을 올리면 migrate(old, oldVersion) 로 옛 값을 옮긴다.
   * legacy 는 플랫폼 이전에 게임이 쓰던 날것 키들 — 처음 한 번 읽어 현재 키로 옮기고 지운다.
   * 값이 JSON 이면 파싱해 넣고, 아니면 문자열 그대로 넣는다(게임이 스스로 직렬화하던 경우).
   */
  function scope(name, { version = 1, migrate = null, shared = false, legacy = [] } = {}) {
    if (!/^[a-z0-9][a-z0-9._-]*$/i.test(name)) throw new Error(`storage.scope: 이름은 영숫자·._- 만 ("${name}")`);
    const id = shared ? "_shared" : gameId;
    const k = key(name, version, id);
    return {
      key: k,
      /** Read the exact slot by default; explicit legacy:true checks configured legacy keys only if missing. No migration, writes, deletion or raw-byte exposure. */
      inspect({ legacy: inspectLegacy = false } = {}) {
        let raw;
        try {
          raw = backend.getItem(k);
          if (raw == null && inspectLegacy === true) {
            for (const legacyKey of legacy) {
              raw = backend.getItem(legacyKey);
              if (raw != null) break;
            }
          }
        } catch { return { status: "unavailable" }; }
        if (raw == null) return { status: "missing" };
        try { return { status: "ok", value: JSON.parse(raw) }; }
        catch { return { status: "corrupt" }; }
      },
      get() {
        const cur = read(k);
        if (cur !== null) return cur;
        // 옛 버전이 있으면 옮긴다. 가장 최근 것 하나만.
        for (let v = version - 1; v >= 1; v--) {
          const old = read(key(name, v, id));
          if (old === null) continue;
          const next = migrate ? migrate(old, v) : old;
          if (next !== undefined && write(k, next)) { try { backend.removeItem(key(name, v, id)); } catch { /* 지우기 실패는 치명적이지 않다 */ } }
          return next ?? null;
        }
        for (const lk of legacy) {
          let raw; try { raw = backend.getItem(lk); } catch { raw = null; }
          if (raw == null) continue;
          let val; try { val = JSON.parse(raw); } catch { val = raw; }
          if (write(k, val)) { try { backend.removeItem(lk); } catch { /* 없어도 된다 */ } }
          return val;
        }
        return null;
      },
      set(value) { return write(k, value); },
      remove() { try { backend.removeItem(k); } catch { /* 없어도 된다 */ } },
    };
  }

  /**
   * 플랫폼 이전에 IndexedDB 에 두던 것을 처음 한 번 옮기고 그 DB 를 지운다. keys 의 각 키가 같은 이름의
   * 스코프(버전 1)가 된다. 이미 스코프에 값이 있으면 덮지 않는다(지우기가 막혔던 경우의 재부팅).
   * 옮긴 키의 수를 돌려준다. IndexedDB 가 없는 환경은 0.
   */
  async function importIndexedDb({ db, store, keys, version = 1 }) {
    const idb = globalThis.indexedDB;
    if (!idb || !available) return 0;
    let fresh = false;
    const conn = await new Promise((res, rej) => {
      const r = idb.open(db);
      r.onupgradeneeded = () => { fresh = true; };
      r.onsuccess = () => res(r.result);
      r.onerror = () => rej(r.error ?? new Error("indexedDB open failed"));
      r.onblocked = () => rej(new Error("indexedDB open blocked"));
    });
    let moved = 0;
    try {
      if (!fresh && conn.objectStoreNames.contains(store)) {
        const os = conn.transaction(store, "readonly").objectStore(store);
        for (const key of keys) {
          const value = await new Promise((res, rej) => { const r = os.get(key); r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); });
          if (value === undefined) continue;
          const sc = scope(key, { version });
          if (sc.get() !== null) continue;
          if (sc.set(value)) moved++;
        }
      }
    } finally { conn.close(); }
    await new Promise((res) => { const r = idb.deleteDatabase(db); r.onsuccess = r.onerror = r.onblocked = () => res(); });
    return moved;
  }

  return {
    get available() { return available; },
    scope,
    importIndexedDb,
    /** 짧은 길: 버전 1, 마이그레이션 없음. */
    get: (name) => scope(name).get(),
    set: (name, value) => scope(name).set(value),
    remove: (name) => scope(name).remove(),
    key,
  };
}


// ── settings ──
// 게임 간 공유 설정. 한 게임에서 소리를 끄면 전부 꺼진다.
//
// 저장은 _shared 스코프라 게임 id 와 무관하다. 모션 줄이기의 초깃값은 OS 설정을 따른다.

const SETTINGS_DEFAULTS = Object.freeze({
  sound: true,
  music: true,
  motion: "full",     // "full" | "reduced"
  language: "ko",
  haptics: true,
  // 게임을 전체 화면으로 여는가(주소창을 감춘다). 포털 로비의 토글과 게임 설정의 줄이 이 값 하나를 같이 본다.
  // 초깃값은 기기를 따른다 — 아래 createSettings 의 touch. iOS 사파리처럼 API 가 없는 곳에서는 어디에도 줄이 서지 않는다.
  fullscreen: true,
});

/**
 * `touch` — 손에 든 화면인가. 전체 화면의 초깃값이다. 손에 든 화면은 주소창이 설계한 그림의 8~12%를 먹으므로 켜고,
 * PC 는 끈다(창을 나란히 쓰는 사람의 첫 클릭을 전체 화면으로 가로채지 않는다). 한 번 고르면 고른 값이 이긴다.
 */
function createSettings({ storage, emit, prefersReducedMotion = false, touch = true }) {
  const store = storage.scope("settings", { version: 1, shared: true });
  const state = { ...SETTINGS_DEFAULTS, ...(prefersReducedMotion ? { motion: "reduced" } : {}), ...(touch ? {} : { fullscreen: false }), ...(store.get() ?? {}) };

  return {
    keys: Object.keys(SETTINGS_DEFAULTS),
    get(key) {
      if (!(key in SETTINGS_DEFAULTS)) throw new Error(`settings.get: 모르는 설정 "${key}"`);
      return state[key];
    },
    set(key, value) {
      if (!(key in SETTINGS_DEFAULTS)) throw new Error(`settings.set: 모르는 설정 "${key}"`);
      if (state[key] === value) return;
      state[key] = value;
      store.set(state);
      emit("settings", { key, value, all: { ...state } });
    },
    all() { return { ...state }; },
    get reducedMotion() { return state.motion === "reduced"; },
  };
}


// ── lifecycle ──
// 수명주기. gameplayStart/Stop 은 게임이 부르고, pause/resume/back 은 플랫폼이 낸다.
//
// 이 이벤트가 셸의 복귀 버튼(플레이 중엔 숨김), 뒤로가기(플레이 중엔 일시정지), 화면 꺼짐 방지의
// 이음매다. 네이티브 셸이 오면 pause/resume/back 의 출처만 바뀌고 게임은 그대로다.

function createLifecycle({ win, doc, events, host }) {
  let inGameplay = false;
  let wakeLock = null;

  const acquireWakeLock = async () => {
    if (!win.navigator?.wakeLock || wakeLock) return;
    try { wakeLock = await win.navigator.wakeLock.request("screen"); wakeLock.addEventListener?.("release", () => { wakeLock = null; }); }
    catch { wakeLock = null; /* 권한·저전력 모드 — 실패해도 게임은 돈다 */ }
  };
  const releaseWakeLock = () => { try { wakeLock?.release(); } catch { /* 이미 풀림 */ } wakeLock = null; };

  const pause = (why) => events.emit("pause", { why });
  const resume = (why) => { events.emit("resume", { why }); if (inGameplay) acquireWakeLock(); };

  if (doc) {
    doc.addEventListener("visibilitychange", () => (doc.visibilityState === "hidden" ? pause("hidden") : resume("visible")));
    win.addEventListener("pagehide", () => pause("pagehide"));
    win.addEventListener("blur", () => { if (inGameplay) pause("blur"); });
    // 뒤로가기: 플레이 중이면 나가지 않고 게임에 "back" 을 준다(보통 일시정지). 밖에서는 브라우저가 알아서 간다.
    win.addEventListener("popstate", () => {
      if (!inGameplay) return;
      events.emit("back", {});
      try { win.history.pushState({ gp: "gameplay" }, ""); } catch { /* 히스토리 조작 불가 환경 */ }
    });
    win.addEventListener("keydown", (e) => { if (e.key === "Escape" && inGameplay) events.emit("back", { key: true }); });
  }

  return {
    on: events.on,
    off: events.off,
    get inGameplay() { return inGameplay; },
    gameplayStart() {
      if (inGameplay) return;
      inGameplay = true;
      try { win.history?.pushState({ gp: "gameplay" }, ""); } catch { /* 무시 */ }
      acquireWakeLock();
      events.emit("gameplayStart", {});
    },
    gameplayStop() {
      if (!inGameplay) return;
      inGameplay = false;
      releaseWakeLock();
      events.emit("gameplayStop", {});
    },
    /** 게임이 직접 부를 수 있는 것 — 예: 자기 메뉴를 열 때. */
    pause: () => pause("game"),
    resume: () => resume("game"),
  };
}


// ── audio ──
// 소리의 잠금 해제. 브라우저는 첫 사용자 제스처 전에 소리를 못 내므로, 그 제스처를 플랫폼이 받아
// 게임에 알린다. 게임은 onUnlocked 안에서 자기 AudioContext 를 만들거나, 공용 context() 를 쓴다.

function createAudio({ win, doc, events, settings }) {
  let unlocked = false;
  let ctx = null;

  const context = () => {
    if (ctx) return ctx;
    const AC = win.AudioContext || win.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
    return ctx;
  };

  const unlock = () => {
    if (unlocked) return;
    unlocked = true;
    // 제스처 콜스택 안에서 resume 해야 iOS 가 풀어 준다.
    try { context()?.resume?.(); } catch { /* 없어도 된다 */ }
    events.emit("audioUnlocked", {});
  };

  if (doc) {
    for (const type of ["pointerdown", "touchend", "keydown"]) doc.addEventListener(type, unlock, { once: false, passive: true });
    // 백그라운드에서 돌아오면 컨텍스트가 멈춰 있을 수 있다.
    doc.addEventListener("visibilitychange", () => { if (doc.visibilityState === "visible" && ctx?.state === "suspended") ctx.resume().catch(() => {}); });
  }

  return {
    get unlocked() { return unlocked; },
    onUnlocked(fn) { if (unlocked) fn(); return events.on("audioUnlocked", fn); },
    context,
    /** 설정을 반영한 실효 볼륨. 게임은 이 값을 곱한다. */
    get soundOn() { return settings.get("sound"); },
    get musicOn() { return settings.get("music"); },
  };
}


// ── host ──
// 실행 환경 — 브라우저 · 설치된 PWA · 네이티브 셸(미래). 전체화면·복귀·설치 안내·제스처 억제·
// 보이는 높이가 여기 산다. 게임은 host.kind 를 보고 분기하지 않는다; host 가 알아서 한다.

function createHost({ win, doc, game, storage, events, settings }) {
  const mm = (q) => !!win.matchMedia?.(q)?.matches;
  const standalone = mm("(display-mode: standalone)") || mm("(display-mode: fullscreen)") || win.navigator?.standalone === true;
  const ua = win.navigator?.userAgent ?? "";
  const isIOS = /iPad|iPhone|iPod/.test(ua) || (win.navigator?.platform === "MacIntel" && (win.navigator?.maxTouchPoints ?? 0) > 1);
  const touch = (win.navigator?.maxTouchPoints ?? 0) > 0;
  const kind = win.__GP_NATIVE__ ? "native" : standalone ? "standalone" : "browser";

  // ── 보이는 높이 ── 주소창이 접혔다 펴져도 100vh 는 거짓말을 한다. 실제 값을 변수로 준다.
  const setViewportVars = () => {
    const vv = win.visualViewport;
    const h = vv ? vv.height : win.innerHeight;
    doc?.documentElement.style.setProperty("--vvh", `${h}px`);
    doc?.documentElement.style.setProperty("--vvh1", `${h / 100}px`);
  };
  if (doc) {
    setViewportVars();
    win.addEventListener("resize", setViewportVars, { passive: true });
    win.visualViewport?.addEventListener("resize", setViewportVars, { passive: true });
    win.visualViewport?.addEventListener("scroll", setViewportVars, { passive: true });

    // ── 제스처 억제 ── 게임에서 확대·새로고침·선택·긴 누름 메뉴는 전부 오조작이다.
    for (const t of ["gesturestart", "gesturechange", "gestureend"]) doc.addEventListener(t, (e) => e.preventDefault(), { passive: false });
    let lastTouchEnd = 0;
    doc.addEventListener("touchend", (e) => {
      const now = Date.now();
      if (now - lastTouchEnd < 320 && e.cancelable) e.preventDefault();
      lastTouchEnd = now;
    }, { passive: false });
    doc.addEventListener("contextmenu", (e) => { if (touch) e.preventDefault(); });
    doc.addEventListener("wheel", (e) => { if (e.ctrlKey) e.preventDefault(); }, { passive: false });
  }

  // ── 전체화면 ──
  //
  // 주소창은 손에 든 화면의 8~12%를 먹는다. 게임은 그 높이까지 쓰라고 그려져 있으므로, 브라우저에서는
  // 전체화면으로 들어가야 설계한 그림이 나온다. 설치형(홈 화면에 추가)은 이미 전체다.
  //
  // **한 번 실패했다고 포기하지 않는다.** 이전에는 첫 pointerdown 에서 한 번 시도하고 듣기를 끊었다 —
  // 그 한 번이 거절되면(제스처가 소모됐거나, 문서가 아직 활성이 아니거나, 브라우저가 그 이벤트에는 권한을
  // 주지 않거나) 그 페이지에서는 영영 전체화면이 되지 않았다. 이제 들어갈 때까지 조작마다 다시 시도하고,
  // 밖에서 나가지면(브라우저가 회전할 때 풀기도 한다) 다음 조작에 다시 들어간다.
  //
  // 회전 자체로는 들어갈 수 없다 — 전체화면은 제스처를 요구하고 orientationchange 는 제스처가 아니다.
  // 그래서 "가로로 돌리면 다음 한 번의 터치에" 가 이 플랫폼이 약속할 수 있는 전부다.
  //
  // 들어갈지 말지는 **취향 하나**가 정한다(settings 의 fullscreen). 포털 로비의 토글이 그것을 고르고, 게임 설정의 줄도
  // 같은 값을 바꾼다. 켜져 있으면 기기와 상관없이 게임의 첫 조작에 들어가고, 꺼져 있으면 요청하지 않는다.
  // 페이지를 넘어가면 전체 화면은 풀리므로(브라우저 규칙) 포털이 대신 들어가 줄 수는 없다 — 게임이 첫 조작에 들어간다.
  //
  // 밖으로 나가졌을 때: 손에 든 화면은 회전하면 브라우저가 풀기도 하니 다음 조작에 다시 들어간다. PC 에서 나가는 길은
  // Esc 이고 그것은 사람이 일부러 나간 것이라 다시 조르지 않는다. 다음 판(다시 들어온 게임)에서 다시 들어간다.
  //
  // iOS 사파리에는 이 API 가 없다. 그 자리는 설치 안내가 대신한다(아래).
  const fullscreenAvailable = () => kind === "browser" && !!doc?.documentElement?.requestFullscreen;
  const fullscreenActive = () => !!doc?.fullscreenElement;
  const fullscreen = async () => {
    if (!fullscreenAvailable()) return false;
    if (fullscreenActive()) return true;
    try { await doc.documentElement.requestFullscreen({ navigationUI: "hide" }); return true; } catch { return false; }
  };
  const exitFullscreen = async () => {
    if (!fullscreenActive()) return;
    try { await doc.exitFullscreen?.(); } catch { /* 이미 나갔다 */ }
  };

  // 포털 자신은 전체 화면으로 들어가지 않는다. 포털의 토글은 "게임을 어떻게 열까" 이고, 들어가 봐야 게임으로 넘어가는 순간 풀린다.
  const wanted = () => fullscreenAvailable() && settings?.get("fullscreen") !== false;
  if (doc && game.kind !== "portal") {
    // 브라우저마다 어느 제스처에 권한을 주는지 다르다. 셋 다 듣되 성공하면 바로 끊는다.
    const GESTURES = ["pointerdown", "pointerup", "click"];
    const arm = () => { for (const e of GESTURES) doc.addEventListener(e, attempt, { capture: true, passive: true }); };
    const disarm = () => { for (const e of GESTURES) doc.removeEventListener(e, attempt, true); };
    function attempt() {
      if (!wanted()) { disarm(); return; }
      void fullscreen().then((ok) => { if (ok) disarm(); });
    }
    if (wanted()) arm();
    doc.addEventListener("fullscreenchange", () => {
      if (fullscreenActive()) disarm();
      else if (touch && wanted()) arm();
    });

    // 게임 설정의 「전체 화면」 줄. 켜는 클릭 자체가 제스처라 그 자리에서 들어간다. 끄면 조르기도 멈춘다.
    events?.on?.("settings", ({ key, value }) => {
      if (key !== "fullscreen") return;
      if (value) void fullscreen().then((ok) => { if (!ok) arm(); });
      else { disarm(); void exitFullscreen(); }
    });
  }


  // ── 방향 ──
  //
  // 게임이 game.json 에 orientation 을 선언하면(landscape | portrait) 두 길로 맞춘다.
  //   설치형: 매니페스트의 orientation 을 OS 가 지킨다. 여기서 할 일이 없다.
  //   브라우저: screen.orientation.lock() 이다. 표준이 **전체 화면일 것**을 요구하므로 전체 화면에 들어간 직후에만
  //            부를 수 있다. iOS 사파리에는 lock 자체가 없다.
  //
  // 잠글 수 없을 때(사파리, 전체 화면을 끈 사람, 잠금을 거절하는 브라우저) 남는 길은 회전 안내뿐이다. 셸이 그린다.
  // 안내는 **돌릴 수 있는 화면에서만** 뜬다 — 짧은 변이 폰 급일 때. 태블릿·PC 의 창은 돌리는 것이 아니라
  // 그 비율대로 살아야 한다. 검사기는 모든 셀을 터치로 흉내 내므로 미디어 질의로는 이것을 가릴 수 없다.
  const ROTATE_PROMPT_MAX_SHORT_SIDE = 560;
  const wantOrientation = () => (game.orientation === "landscape" || game.orientation === "portrait" ? game.orientation : null);
  const viewportOrientation = () => (win.innerWidth < win.innerHeight ? "portrait" : "landscape");
  const rotatable = () => Math.min(win.innerWidth, win.innerHeight) <= ROTATE_PROMPT_MAX_SHORT_SIDE;
  /** 지금 방향이 어긋나 있고, 돌려서 고칠 수 있는 화면인가. 셸의 안내와 검사기가 같이 본다. */
  const rotateNeeded = () => {
    const want = wantOrientation();
    return !!want && viewportOrientation() !== want && rotatable();
  };
  const lockOrientation = async () => {
    const want = wantOrientation();
    if (!want || !win.screen?.orientation?.lock) return false;
    try { await win.screen.orientation.lock(want); return true; } catch { return false; }
  };
  if (doc && game.kind !== "portal") {
    const tell = () => events.emit("orientation", { want: wantOrientation(), now: viewportOrientation(), rotateNeeded: rotateNeeded() });
    win.addEventListener("resize", tell, { passive: true });
    win.screen?.orientation?.addEventListener?.("change", tell);
    doc.addEventListener("fullscreenchange", () => { if (fullscreenActive()) void lockOrientation().then(tell); else tell(); });
  }

  // ── 설치 안내 ── iOS 사파리는 전체화면 API 가 없다. 홈 화면에 추가하는 법을 알려 주는 것이 답이다.
  const hintStore = storage.scope("install-hint", { version: 1, shared: true });
  const installHintDue = () => {
    // 전체화면 API 가 있는 브라우저는 스스로 해결한다. 안내는 그 길이 없는 곳(iOS 사파리)의 몫이다.
    if (kind !== "browser" || !isIOS || fullscreenAvailable()) return false;
    const seen = hintStore.get();
    return !seen || Date.now() - seen > 30 * 86400000;
  };
  const dismissInstallHint = () => hintStore.set(Date.now());

  // ── 복귀 ── 포털로 가는 유일한 길. 나중에 네이티브 셸이 오면 여기만 바뀐다.
  const goHome = () => {
    events.emit("home", {});
    const url = new win.URL(game.home ?? "../../../", win.location.href);
    win.location.assign(url.href);
  };

  return {
    kind, isIOS, touch, standalone, goHome, installHintDue, dismissInstallHint,
    fullscreen, exitFullscreen, lockOrientation,
    /** 이 게임이 선 방향(선언하지 않았으면 null). */
    get orientation() { return wantOrientation(); },
    /** 지금 돌려 달라고 해야 하는가. 셸의 안내가 이것을 따르고, 검사기가 이것을 물어본다. */
    get rotateNeeded() { return rotateNeeded(); },
    /** 이 환경에 전체화면 API 가 있는가(iOS 사파리는 없다). 설정이 줄을 보일지 정한다. */
    get fullscreenAvailable() { return fullscreenAvailable(); },
    get fullscreenActive() { return fullscreenActive(); },
  };
}


// ── capture ──
// 골든 캡처용 동결. 시간과 난수는 검사기가 밖에서 멈추지만, 셰이더 시간 유니폼이나 자체 타이머처럼
// 검사기가 못 멈추는 것은 게임이 "freeze" 이벤트를 받아 멈춘다. 셸도 자기 애니메이션을 멈춘다.

function createCapture({ events }) {
  let frozen = false;
  return {
    get frozen() { return frozen; },
    freeze() { if (frozen) return; frozen = true; events.emit("freeze", {}); },
    onFreeze(fn) { if (frozen) fn(); return events.on("freeze", fn); },
  };
}


// ── shell ──
// 셸 — 모든 게임이 같은 문으로 들어오고 같은 손잡이로 나간다.
//
// 1. 복귀 버튼: 플레이 중이 아닐 때 왼쪽 위 안전영역 안. 이 자리(56×56)는 플랫폼이 예약한다.
// 2. 표준 로딩 화면: 워드마크가 여기 산다. shell.loading(0..1), loading(null) 로 닫는다.
// 3. 표준 설정 패널: 공유 설정을 그린다. 게임은 addSettingsSection 으로 자기 것을 더한다.
// 4. 토스트: 저장 불가 고지 같은 한 줄.
//
// 셸의 DOM 도 계약을 지켜야 한다 — 터치 44, 글자 13, 대비 4.5, 안전영역, 921×333 에서도 스크롤 없음.

/** 고정 복귀 버튼이 안전영역 모서리에서 떨어진 거리(px). 화면 모델(view)이 이 자리를 안전 사각형에서 뺀다. */
const HOME_BUTTON_OFFSET = 8;

function createShell({ win, doc, tokens, tokensCss, game, events, lifecycle, screens, settings, storage, host, capture }) {
  const T = tokens;
  const accent = /^#[0-9a-f]{6}$/i.test(game.accent ?? "") ? game.accent : T.color.accentFallback;
  // getter 는 여기서 정의한다. Object.assign 은 getter 를 값으로 복사해 버려, 나중에 넣으면 생성 시점의 값으로 굳는다.
  let viewRef = null;
  let root, home, loading, bar, loadingTitle, panelScrim, panelBody, toastEl, toastTimer, fsSwitch, rotateEl, rotateTitle, rotateNote;
  const api = {
    ready: false,
    get settingsOpen() { return api.ready && !!panelScrim && !panelScrim.hidden; },
    /** 화면 모델을 잇는다(v2). 그 뒤로 안내는 view 의 게이트를 따른다. 문서가 없는 곳(단위 시험)에서도 부를 수 있다. */
    attachView(v) { viewRef = v; events.on("view", syncRotate); syncRotate(); },
  };
  if (!doc) return api;

  const css = `
${tokensCss}
:root { --gp-accent: ${accent}; }
#gp-shell, #gp-shell * { box-sizing: border-box; }
#gp-shell { display: contents; font-family: var(--gp-font-family); color: var(--gp-color-ink); font-size: var(--gp-font-size-md); line-height: var(--gp-font-lineHeight-base); }
#gp-shell button { font: inherit; color: inherit; border: 0; background: none; padding: 0; cursor: pointer; min-width: var(--gp-touch-min); min-height: var(--gp-touch-min); }
#gp-shell [hidden] { display: none !important; }

.gp-home { pointer-events: auto; position: fixed; z-index: var(--gp-z-shell); top: calc(env(safe-area-inset-top, 0px) + ${HOME_BUTTON_OFFSET}px); left: calc(env(safe-area-inset-left, 0px) + ${HOME_BUTTON_OFFSET}px);
  width: var(--gp-touch-comfortable); height: var(--gp-touch-comfortable); border-radius: var(--gp-radius-md);
  background: rgba(11,13,18,.72); border: 1px solid rgba(255,255,255,.14); display: grid; place-items: center;
  backdrop-filter: blur(10px); transition: opacity var(--gp-motion-base) var(--gp-motion-ease); }
.gp-home svg { width: 20px; height: 20px; }

.gp-exit { pointer-events: auto; width: 100%; display: flex; flex-direction: column; align-items: flex-start; gap: 2px; margin-top: var(--gp-space-2);
  padding: var(--gp-space-3); border-radius: var(--gp-radius-md); border: 1px solid var(--gp-color-edge); background: var(--gp-color-panel2); text-align: left; }
.gp-exit small { color: var(--gp-color-ink3); font-size: var(--gp-font-size-xs); }

/* 회전 안내 — 방향을 선언한 게임이 어긋난 방향으로 열렸을 때. 잠글 수 있는 브라우저에서는 첫 조작에 사라진다. */
.gp-rotate { pointer-events: auto; position: fixed; inset: 0; z-index: var(--gp-z-overlay); background: var(--gp-color-bg);
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: var(--gp-space-3); text-align: center;
  padding: calc(env(safe-area-inset-top, 0px) + 16px) calc(env(safe-area-inset-right, 0px) + 16px) calc(env(safe-area-inset-bottom, 0px) + 16px) calc(env(safe-area-inset-left, 0px) + 16px); }
.gp-rotate svg { width: 56px; height: 56px; color: var(--gp-accent); }
.gp-rotate strong { font-size: var(--gp-font-size-lg); font-weight: var(--gp-font-weight-bold); color: var(--gp-color-ink); }
.gp-rotate span { font-size: var(--gp-font-size-md); color: var(--gp-color-ink2); }

.gp-loading { pointer-events: auto; position: fixed; inset: 0; z-index: var(--gp-z-shell); background: var(--gp-color-bg); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: var(--gp-space-4);
  padding: env(safe-area-inset-top, 0px) env(safe-area-inset-right, 0px) env(safe-area-inset-bottom, 0px) env(safe-area-inset-left, 0px); }
.gp-wordmark { font-size: var(--gp-font-size-lg); font-weight: var(--gp-font-weight-black); letter-spacing: var(--gp-wordmark-letterSpacing); color: var(--gp-color-ink); }
.gp-loading-title { font-size: var(--gp-font-size-xl); font-weight: var(--gp-font-weight-bold); color: var(--gp-accent); }
.gp-bar { width: min(60vw, 280px); height: 6px; border-radius: 3px; background: var(--gp-color-panel2); overflow: hidden; }
.gp-bar i { display: block; height: 100%; width: 0; background: var(--gp-accent); transition: width var(--gp-motion-fast) linear; }
.gp-loading-note { font-size: var(--gp-font-size-xs); color: var(--gp-color-ink3); }

.gp-scrim { pointer-events: auto; position: fixed; inset: 0; background: rgba(4,6,10,.7); z-index: var(--gp-z-overlay); display: flex; align-items: center; justify-content: center;
  padding: calc(env(safe-area-inset-top, 0px) + 12px) calc(env(safe-area-inset-right, 0px) + 12px) calc(env(safe-area-inset-bottom, 0px) + 12px) calc(env(safe-area-inset-left, 0px) + 12px); }
.gp-panel { width: min(100%, 420px); max-height: 100%; overflow-y: auto; -webkit-overflow-scrolling: touch; background: var(--gp-color-panel); border: 1px solid var(--gp-color-edge); border-radius: var(--gp-radius-xl); padding: var(--gp-space-4); display: flex; flex-direction: column; gap: var(--gp-space-2); }
.gp-panel-head { display: flex; align-items: center; gap: var(--gp-space-2); }
.gp-panel-head h2 { margin: 0; font-size: var(--gp-font-size-lg); flex: 1; }
.gp-close { width: var(--gp-touch-min); height: var(--gp-touch-min); border-radius: var(--gp-radius-md); color: var(--gp-color-ink2); font-size: 22px; line-height: 1; }
.gp-row { display: flex; align-items: center; gap: var(--gp-space-3); min-height: var(--gp-touch-comfortable); }
.gp-row .gp-label { flex: 1; font-size: var(--gp-font-size-md); }
.gp-row .gp-sub { display: block; font-size: var(--gp-font-size-xs); color: var(--gp-color-ink3); }
.gp-switch { width: 58px; height: 34px; border-radius: 999px; background: var(--gp-color-panel2); border: 1px solid var(--gp-color-edge); position: relative; transition: background var(--gp-motion-base); flex: none; min-width: 58px; min-height: 44px; padding: 5px 0; }
.gp-switch::after { content: ""; position: absolute; top: 50%; left: 4px; width: 26px; height: 26px; border-radius: 50%; background: var(--gp-color-ink2); transform: translateY(-50%); transition: transform var(--gp-motion-base) var(--gp-motion-ease), background var(--gp-motion-base); }
.gp-switch[aria-checked="true"] { background: var(--gp-accent); }
.gp-switch[aria-checked="true"]::after { transform: translate(24px, -50%); background: var(--gp-color-onAccent); }
.gp-select { min-height: var(--gp-touch-min); padding: 0 var(--gp-space-3); border-radius: var(--gp-radius-md); background: var(--gp-color-panel2); color: var(--gp-color-ink); border: 1px solid var(--gp-color-edge); font: inherit; }
.gp-section { border-top: 1px solid var(--gp-color-edge); padding-top: var(--gp-space-2); margin-top: var(--gp-space-1); }
.gp-section h3 { margin: 0 0 var(--gp-space-1); font-size: var(--gp-font-size-xs); letter-spacing: .1em; color: var(--gp-color-ink3); text-transform: uppercase; }

.gp-toast { pointer-events: none; position: fixed; left: 50%; bottom: calc(env(safe-area-inset-bottom, 0px) + 16px); transform: translateX(-50%); z-index: var(--gp-z-toast);
  background: var(--gp-color-panel); border: 1px solid var(--gp-color-edge); border-radius: var(--gp-radius-md); padding: var(--gp-space-2) var(--gp-space-4); font-size: var(--gp-font-size-sm); color: var(--gp-color-ink); max-width: calc(100% - 32px); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

.gp-hint { pointer-events: auto; position: absolute; left: 12px; right: 12px; bottom: calc(env(safe-area-inset-bottom, 0px) + 12px); background: var(--gp-color-panel); border: 1px solid var(--gp-color-edge); border-radius: var(--gp-radius-lg); padding: var(--gp-space-3) var(--gp-space-4); display: flex; gap: var(--gp-space-3); align-items: center; font-size: var(--gp-font-size-sm); }
.gp-hint span { flex: 1; }
.gp-hint button { color: var(--gp-accent); font-weight: var(--gp-font-weight-bold); padding: 0 var(--gp-space-2); }

@media (prefers-reduced-motion: reduce) { #gp-shell *, #gp-shell *::after { transition: none !important; } }
html[data-gp-motion="reduced"] #gp-shell *, html[data-gp-motion="reduced"] #gp-shell *::after { transition: none !important; }
`;

  const h = (tag, cls, text) => { const n = doc.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; };
  const L = { // 셸의 글은 두 언어. 게임 텍스트는 게임 것이다.
    ko: { home: "포털로", loading: "불러오는 중", settings: "설정", sound: "효과음", music: "음악", motion: "모션 줄이기", motionSub: "흔들림·전환 효과를 줄인다", haptics: "진동", fullscreen: "전체 화면", fullscreenSub: "주소창을 감추고 화면을 다 쓴다", fullscreenGames: "게임을 전체 화면으로", fullscreenGamesSub: "게임에 들어가 처음 누를 때 주소창을 감춘다", language: "언어", close: "닫기", exit: "포털로 나가기", exitSub: "게임을 그만두고 목록으로 돌아간다", rotate: "화면을 돌려 주세요", rotateLand: "이 게임은 가로로 즐깁니다", rotatePort: "이 게임은 세로로 즐깁니다", enlarge: "창을 넓혀 주세요", needAtLeast: "이 게임은 {w}×{h} 이상에서 즐깁니다", noSave: "이 브라우저에서는 진행이 저장되지 않습니다", install: "홈 화면에 추가하면 전체 화면으로 즐길 수 있어요", installHow: "공유 → 홈 화면에 추가", dismiss: "알겠어요" },
    en: { home: "Portal", loading: "Loading", settings: "Settings", sound: "Sound", music: "Music", motion: "Reduce motion", motionSub: "Fewer shakes and transitions", haptics: "Haptics", fullscreen: "Fullscreen", fullscreenSub: "Hides the address bar and uses the whole screen", fullscreenGames: "Open games full screen", fullscreenGamesSub: "Hides the address bar at your first tap in a game", language: "Language", close: "Close", exit: "Leave for the portal", exitSub: "Quit the game and go back to the list", rotate: "Please rotate your screen", rotateLand: "This game is played in landscape", rotatePort: "This game is played in portrait", enlarge: "Please make the window larger", needAtLeast: "This game needs at least {w}×{h}", noSave: "Progress will not be saved in this browser", install: "Add to Home Screen to play full screen", installHow: "Share → Add to Home Screen", dismiss: "Got it" },
  };
  const t = (k) => (L[settings.get("language")] ?? L.ko)[k];

  const sections = [];

  function mount() {
    const style = h("style"); style.id = "gp-shell-style"; style.textContent = css;
    doc.head.append(style);
    // 뿌리는 상자가 없다(display: contents). 화면 전체를 덮는 상자가 있으면 pointer-events 를 강제로 켜는 도구가
    // 그것을 "가림" 으로 재고, 게임의 elementFromPoint 도 헷갈린다. 셸의 조각은 각자 뷰포트에 고정된다.
    root = h("div"); root.id = "gp-shell";

    home = h("button", "gp-home");
    home.setAttribute("aria-label", t("home"));
    home.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg>';
    home.addEventListener("click", () => host.goHome());
    // 나가는 길이 둘이면 플레이어는 어느 것이 게임의 뒤로인지 모른다. 게임이 자기 UI 에 갖췄다고 선언하면
    // (game.json 의 exit: "self") 셸은 고정 버튼을 그리지 않는다. 그래도 나가는 길은 남는다 —
    // 설정 패널의 「포털로 나가기」와 시스템 뒤로가 그것이다.
    if (game.kind === "portal" || game.exit === "self") home.hidden = true;

    loading = h("div", "gp-loading"); loading.hidden = true;
    loading.append(h("div", "gp-wordmark", T.wordmark.text));
    loadingTitle = h("div", "gp-loading-title", game.title ?? "");
    bar = h("div", "gp-bar"); bar.append(h("i"));
    loading.append(loadingTitle, bar, h("div", "gp-loading-note", t("loading")));

    panelScrim = h("div", "gp-scrim"); panelScrim.hidden = true;
    panelScrim.addEventListener("click", (e) => { if (e.target === panelScrim) api.closeSettings(); });
    const panel = h("div", "gp-panel"); panel.setAttribute("role", "dialog"); panel.setAttribute("aria-modal", "true");
    const head = h("div", "gp-panel-head");
    const title = h("h2", null, t("settings"));
    const close = h("button", "gp-close", "×"); close.setAttribute("aria-label", t("close"));
    close.addEventListener("click", () => api.closeSettings());
    head.append(title, close);
    panelBody = h("div");
    panel.append(head, panelBody);
    panelScrim.append(panel);

    toastEl = h("div", "gp-toast"); toastEl.hidden = true;

    rotateEl = h("div", "gp-rotate"); rotateEl.hidden = true;
    rotateEl.setAttribute("data-gp-rotate", ""); rotateEl.setAttribute("role", "alertdialog"); rotateEl.setAttribute("aria-live", "polite");
    rotateEl.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="7" width="18" height="10" rx="2"/><path d="M8 3.5A9 9 0 0 1 12 2.6"/><path d="M12 21.4a9 9 0 0 1-4-1"/></svg>';
    rotateTitle = h("strong", null, t("rotate"));
    rotateNote = h("span", null, host.orientation === "portrait" ? t("rotatePort") : t("rotateLand"));
    rotateEl.append(rotateTitle, rotateNote);

    root.append(home, loading, panelScrim, toastEl, rotateEl);
    doc.body.append(root);
    doc.documentElement.dataset.gpMotion = settings.get("motion");
    api.ready = true;

    syncRotate();
    events.on("orientation", syncRotate);
    if (!storage.available) api.toast(t("noSave"), 4000);
    if (host.installHintDue()) showInstallHint();
    // 밖에서 전체화면이 바뀌면(스와이프로 나가기, 게임의 요청) 스위치가 거짓말하지 않게 맞춘다.
    // 포털의 스위치는 취향을 보이므로, 로비의 토글이 바꾸면 그것을 따른다.
    if (game.kind === "portal") events.on("settings", ({ key }) => { if (key === "fullscreen") fsSwitch?.setAttribute("aria-checked", String(settings.get("fullscreen"))); });
    else doc.addEventListener("fullscreenchange", () => fsSwitch?.setAttribute("aria-checked", String(host.fullscreenActive)));
  }

  function renderSettings() {
    panelBody.replaceChildren();
    const row = (label, control, sub) => {
      const r = h("div", "gp-row");
      const l = h("div", "gp-label", label); if (sub) l.append(h("span", "gp-sub", sub));
      r.append(l, control); panelBody.append(r);
    };
    const toggle = (key, on) => {
      const b = h("button", "gp-switch"); b.setAttribute("role", "switch"); b.setAttribute("aria-checked", String(on)); b.setAttribute("aria-label", t(key));
      b.addEventListener("click", () => { const next = b.getAttribute("aria-checked") !== "true"; b.setAttribute("aria-checked", String(next)); settings.set(key, key === "motion" ? (next ? "reduced" : "full") : next); if (key === "motion") doc.documentElement.dataset.gpMotion = next ? "reduced" : "full"; });
      return b;
    };
    row(t("sound"), toggle("sound", settings.get("sound")));
    row(t("music"), toggle("music", settings.get("music")));
    row(t("motion"), toggle("motion", settings.get("motion") === "reduced"), t("motionSub"));
    row(t("haptics"), toggle("haptics", settings.get("haptics")));
    // 전체화면 줄은 API 가 있는 환경에만 선다(iOS 사파리에는 없다 — 그 자리는 설치 안내가 대신한다).
    //
    // 이 줄만 기본 toggle 을 쓰지 않는다. 스위치가 보여야 하는 것은 저장된 취향이 아니라 **지금 전체화면인가**이고,
    // 누르면 기억과 적용을 함께 해야 하기 때문이다. 취향만 바꾸면(이미 같은 값이면 이벤트가 안 나므로) 한 번 눌러서는
    // 아무 일도 일어나지 않는다 — 스스로 나갔다가 되돌아오려는 사람이 정확히 그 경우다.
    //
    // 포털에서는 뜻이 다르다. 포털은 전체 화면이 되지 않고, 이 줄은 **게임을 전체 화면으로 여는가**라는 취향 자체다.
    if (host.fullscreenAvailable && game.kind === "portal") {
      fsSwitch = h("button", "gp-switch"); fsSwitch.setAttribute("role", "switch");
      fsSwitch.setAttribute("aria-checked", String(settings.get("fullscreen"))); fsSwitch.setAttribute("aria-label", t("fullscreenGames"));
      fsSwitch.addEventListener("click", () => settings.set("fullscreen", !settings.get("fullscreen")));
      row(t("fullscreenGames"), fsSwitch, t("fullscreenGamesSub"));
    } else if (host.fullscreenAvailable) {
      fsSwitch = h("button", "gp-switch"); fsSwitch.setAttribute("role", "switch");
      fsSwitch.setAttribute("aria-checked", String(host.fullscreenActive)); fsSwitch.setAttribute("aria-label", t("fullscreen"));
      fsSwitch.addEventListener("click", () => {
        const next = !host.fullscreenActive;
        fsSwitch.setAttribute("aria-checked", String(next));
        settings.set("fullscreen", next);
        if (next) void host.fullscreen(); else void host.exitFullscreen();
      });
      row(t("fullscreen"), fsSwitch, t("fullscreenSub"));
    }
    const sel = h("select", "gp-select"); sel.setAttribute("aria-label", t("language"));
    for (const [v, name] of [["ko", "한국어"], ["en", "English"]]) { const o = h("option", null, name); o.value = v; if (settings.get("language") === v) o.selected = true; sel.append(o); }
    sel.addEventListener("change", () => { settings.set("language", sel.value); renderSettings(); });
    row(t("language"), sel);
    for (const s of sections) {
      const sec = h("div", "gp-section"); sec.append(h("h3", null, s.title));
      const body = h("div"); s.render(body); sec.append(body); panelBody.append(sec);
    }
    // 나가는 길. 게임마다 자기 UI 가 어떻든, 여기로 오면 언제나 포털로 돌아갈 수 있다.
    if (game.kind !== "portal") {
      const exit = h("button", "gp-exit");
      exit.append(h("span", null, t("exit")), h("small", null, t("exitSub")));
      exit.addEventListener("click", () => host.goHome());
      panelBody.append(exit);
    }
  }

  /**
   * 회전 안내는 host 가 정한다 — 선언한 방향과 어긋나고, 돌려서 고칠 수 있는 화면일 때.
   * 안내가 덮는 동안 게임은 멈춘다. 보이지 않는 화면에서 시간이 흐르면 플레이어는 돌리고 나서 이미 진 판을 본다.
   */
  function syncRotate() {
    if (!rotateEl) return;
    // v2 는 화면 모델의 게이트(하한·방향·최소 크기)를, v1 은 예전의 방향 판정을 따른다. 안내 요소는 하나다.
    const reason = viewRef ? viewRef.gate : host.rotateNeeded ? "rotate" : null;
    if (viewRef) {
      rotateEl.dataset.gpGate = reason ?? "";
      if (reason) gateText(reason);
    }
    const need = !!reason;
    if (need === !rotateEl.hidden) return;
    rotateEl.hidden = !need;
    if (lifecycle.inGameplay) { if (need) lifecycle.pause(); else lifecycle.resume(); }
  }

  /** 이유별 문구. 방향이면 돌려 달라고, 크기면 넓혀 달라고 — 얼마나 넓혀야 하는지 숫자로. */
  function gateText(reason) {
    if (reason === "rotate") {
      rotateTitle.textContent = t("rotate");
      rotateNote.textContent = game.orientation === "portrait" ? t("rotatePort") : t("rotateLand");
      return;
    }
    const [w, h] = reason === "min" ? game.minViewport : tokens.gate.floor;
    rotateTitle.textContent = t("enlarge");
    rotateNote.textContent = t("needAtLeast").replace("{w}", w).replace("{h}", h);
  }

  function showInstallHint() {
    const hint = h("div", "gp-hint");
    const txt = h("span"); txt.append(doc.createTextNode(t("install")), h("br"), h("small", null, t("installHow")));
    const ok = h("button", null, t("dismiss"));
    ok.addEventListener("click", () => { host.dismissInstallHint(); hint.remove(); });
    hint.append(txt, ok); root.append(hint);
  }

  Object.assign(api, {
    loading(progress) {
      if (!api.ready) return;
      if (progress === null || progress === undefined || progress === false) { loading.hidden = true; return; }
      loading.hidden = false;
      bar.firstChild.style.width = `${Math.round(Math.max(0, Math.min(1, +progress || 0)) * 100)}%`;
    },
    openSettings() { if (!api.ready) return; renderSettings(); panelScrim.hidden = false; },
    closeSettings() { if (!api.ready) return; panelScrim.hidden = true; events.emit("settingsClosed", {}); },
    addSettingsSection(title, render) { sections.push({ title, render }); },
    toast(msg, ms = 2500) {
      if (!api.ready) return;
      toastEl.textContent = msg; toastEl.hidden = false;
      clearTimeout(toastTimer); toastTimer = setTimeout(() => { toastEl.hidden = true; }, ms);
    },
    setHomeVisible(v) { if (api.ready && game.kind !== "portal") home.hidden = !v; },
    /** 셸이 지금 차지하는 사각형(CSS px). 캔버스에 UI 를 그리는 게임은 여기를 피해 배치한다. */
    reserved() {
      const out = [];
      for (const el of [home]) {
        if (!el || el.hidden) continue;
        const r = el.getBoundingClientRect();
        if (r.width > 0 && r.height > 0) out.push({ x: r.left, y: r.top, w: r.width, h: r.height, label: el.className });
      }
      return out;
    },
  });

  // 플레이 중엔 복귀 버튼을 숨긴다. 뒤로가기는 lifecycle 이 "back" 으로 돌린다.
  events.on("gameplayStart", () => api.setHomeVisible(false));
  events.on("gameplayStop", () => api.setHomeVisible(true));
  // 다른 화면으로 가면 설정 패널은 닫힌다.
  events.on("screen", ({ id }) => { if (id !== "settings" && api.settingsOpen) api.closeSettings(); });
  events.on("settings", ({ key, value }) => {
    if (key === "language" && api.ready) {
      home.setAttribute("aria-label", t("home"));
      if (rotateTitle) { rotateTitle.textContent = t("rotate"); rotateNote.textContent = host.orientation === "portrait" ? t("rotatePort") : t("rotateLand"); }
    }
    if (key === "motion") doc.documentElement.dataset.gpMotion = value;
  });
  capture.onFreeze(() => { if (api.ready) { toastEl.hidden = true; } });

  // 기본 settings 화면. 게임이 자기 것을 등록하면 그것이 이긴다(나중에 등록한 것이 덮어쓴다).
  screens.register("settings", () => api.openSettings());

  if (doc.readyState === "loading") doc.addEventListener("DOMContentLoaded", mount); else mount();
  return api;
}


// ── classify ──
// 창 크기 등급. 토큰 v2 의 window 표 하나로 폭·높이 등급과 종횡비 구간을 정한다.
// 런타임(view)과 검사기가 같이 쓴다 — 둘이 다른 표를 보면 게임이 본 등급과 검사가 잰 등급이 갈라진다.

/** 표(하한들)에서 값이 속한 등급. 표는 0 에서 시작하는 오름차순이다(tokens.test.mjs 가 지킨다). */
const bandOf = (table, x) => {
  let name = null;
  for (const [k, lo] of Object.entries(table)) if (!k.startsWith("$") && x >= lo) name = k;
  return name;
};

/** { width, height, aspect } — 예: { width: "expanded", height: "compact", aspect: "wide" } (가로 폰). */
function classify(w, h, tokens) {
  if (!(w > 0) || !(h > 0)) throw new Error(`classify: 크기는 양수여야 한다 (${w}×${h}) — 숨겨진 창이나 아직 배치되지 않은 요소에서 재지 않는다`);
  const t = tokens.window;
  return { width: bandOf(t.width, w), height: bandOf(t.height, h), aspect: bandOf(t.aspect, w / h) };
}


// ── view ──
// 화면 모델 — 계약 v2 의 바탕. 플랫폼이 화면을 계산하고 게임은 받는다.
//
// 좌표는 네 겹이다: 뷰포트(보이는 영역) → 안전 사각형(노치·홈 바·셸의 자리를 뺀 것) → 게임 사각형(스케일 정책,
// N4) → 렌더 버퍼(N5). 여기서는 앞의 둘과 밀도·등급·방향을 낸다.
//
// 게임은 window.innerWidth·devicePixelRatio·100vh 를 직접 읽지 않는다(검사 source/view-bypass). 모바일 주소창·가상
// 키보드·브라우저 확대·모니터 이동·접힘은 브라우저마다 다르게 드러나고, 그것을 여섯 게임이 각자 처리하면 여섯 가지
// 버그가 나온다. 여기서 한 번 흡수한다.
//
// 변화는 프레임당 한 번으로 합친다 — 창을 끄는 동안 이벤트가 쏟아지지 않는다. 이벤트는 무엇이 바뀌었는지 싣는다.
// v2 게임(game.platform >= 2)에서만 만든다. v1 게임의 groovplay.view 는 null 이다.


/**
 * 순수 계산. viewport·insets 는 CSS px. homeButton 이 참이면 셸의 고정 복귀 버튼 자리를 뺀다 —
 * 세로·정사각에서는 위 띠, 가로에서는 왼쪽 띠(높이가 귀한 가로 폰에서 위를 버리지 않는다).
 * 버튼이 잠시 숨어도(플레이 중) 자리는 그대로 뺀다. 플레이를 시작할 때 레이아웃이 뛰면 안 된다.
 */
function computeView({ viewport, dpr, insets, tokens, homeButton = false, scale = null, renderLimit = null, orientation: want = null, minViewport = null }) {
  const { w, h } = viewport;
  const classes = classify(w, h, tokens);
  const orientation = classes.aspect === "square" ? "square" : w > h ? "landscape" : "portrait";
  let { top, right, bottom, left } = insets;
  if (homeButton) {
    const band = HOME_BUTTON_OFFSET + tokens.touch.comfortable + HOME_BUTTON_OFFSET;
    if (orientation === "landscape") left += band; else top += band;
  }
  // UI 배율(D4) — 짧은 변 기준. 폰이 설계의 기준이라 1 아래로는 내리지 않는다(내리면 13px 바닥이 깨진다).
  // 큰 창에서 UI 가 멀어 보이는 것만 푼다. 월드 배율은 이것을 모른다(N4 의 게임 사각형이 정한다).
  const uiScale = Math.min(UI_SCALE_MAX, Math.max(1, Math.min(w, h) / UI_SCALE_REF));
  const safe = { x: left, y: top, w: Math.max(0, w - left - right), h: Math.max(0, h - top - bottom) };
  const { stage, worldScale } = computeStage(safe, scale);
  // 렌더 배율(D5) — 밀도만으로 자르면 4K 200% 창이 830만 픽셀이 된다. 무대 × 배율² 이 상한을 넘지 않게 한 번 더 자른다.
  // 게임이 스스로 낮춘 값(D6)은 하한 minScale 아래로 내려가지 않고, 플랫폼 값 위로는 못 올린다.
  const R = tokens.render;
  let renderScale = Math.min(dpr, R.dprMax, Math.sqrt(R.pixelsMax / Math.max(1, stage.w * stage.h)));
  if (renderLimit !== null) renderScale = Math.min(renderScale, Math.max(R.minScale, renderLimit));
  // 렌더러는 백버퍼를 round(크기 × 배율)로 잡는다(PixiJS 가 그렇다). 두 변이 함께 올라가면 곱이 상한을 넘는다 —
  // 플랫폼이 준 값을 그대로 쓴 게임이 플랫폼 검사에 걸리지 않게, 반올림해도 상한 안인 값으로 조금 내린다.
  const fits = (s) => Math.round(stage.w * s) * Math.round(stage.h * s) <= R.pixelsMax;
  for (let i = 0; i < 16 && !fits(renderScale); i++) renderScale *= 0.9995;
  const gate = computeGate({ w, h }, { orientation: want, minViewport }, tokens);
  return { viewport: { w, h }, dpr, uiScale, renderScale, insets: { ...insets }, safe, stage, worldScale, classes, orientation, gate };
}

/**
 * 게임 사각형(무대)과 월드 배율. 안전 사각형 안에서 정책대로 놓는다(N4).
 *   fit    기준 비율 그대로 맞추고 남는 곳은 띠. 월드 배율 = 기준이 딱 들어가는 배율
 *   expand 종횡비 상하한 안에서는 창을 다 쓰고, 넘으면 띠. 기준은 늘 무대 안에 들어간다(남는 쪽으로 세계를 더 보인다)
 *   fill   상하한 안에서 무대를 채우고, 기준이 무대를 덮는다(넘치는 곳은 잘린다)
 * 무대는 정수 픽셀로 반올림하고, 월드 배율은 반올림 전의 정확한 크기로 구한다 — 반올림한 값으로 구하면 fit 에서 두 축의 배율이 어긋난다.
 */
function computeStage(safe, scale) {
  if (!scale) return { stage: { ...safe }, worldScale: 1 };
  const [rw, rh] = scale.reference;
  const [lo, hi] = scale.mode === "fit" ? [rw / rh, rw / rh] : scale.aspect;
  const a = safe.w / safe.h;
  const wE = a > hi ? safe.h * hi : safe.w;
  const hE = a < lo ? safe.w / lo : safe.h;
  const w = Math.round(wE), h = Math.round(hE);
  const sx = wE / rw, sy = hE / rh;
  return {
    stage: { x: safe.x + Math.round((safe.w - w) / 2), y: safe.y + Math.round((safe.h - h) / 2), w, h },
    worldScale: scale.mode === "fill" ? Math.max(sx, sy) : Math.min(sx, sy),
  };
}

/**
 * 뷰 게이트(N7) — 이 창에서 게임이 설 수 없으면 그 이유 하나, 아니면 null.
 *   floor   플랫폼 하한(D3) 아래 — 모든 게임
 *   rotate  선언한 방향과 어긋났고 돌릴 수 있는 화면(짧은 변 상한 이하)
 *   min     게임이 선언한 최소 크기보다 작다
 * 우선순위는 하한 > 방향 > 최소 크기다. 돌리면 풀리는 것을 "넓혀 주세요" 라고 하지 않는다 — 돌린 뒤에도 작으면 그때 말한다.
 */
function computeGate({ w, h }, game, tokens) {
  const G = tokens.gate;
  if (w < G.floor[0] || h < G.floor[1]) return "floor";
  const want = game.orientation === "landscape" || game.orientation === "portrait" ? game.orientation : null;
  if (want && (w < h ? "portrait" : "landscape") !== want && Math.min(w, h) <= G.rotateMaxShortSide) return "rotate";
  const m = game.minViewport;
  if (m && (w < m[0] || h < m[1])) return "min";
  return null;
}

const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);
/** UI 배율의 기준 짧은 변과 상한(D4). */
const UI_SCALE_REF = 800;
const UI_SCALE_MAX = 1.5;

/** 안전영역을 env() 탐침으로 잰다. 문서가 아직 없으면 0. */
function probeInsets(doc, win) {
  if (!doc?.body) return { top: 0, right: 0, bottom: 0, left: 0 };
  let el = doc.getElementById("gp-inset-probe");
  if (!el) {
    el = doc.createElement("div");
    el.id = "gp-inset-probe";
    el.setAttribute("aria-hidden", "true");
    el.style.cssText = "position:fixed;left:0;top:0;width:0;height:0;visibility:hidden;pointer-events:none;"
      + "padding:env(safe-area-inset-top,0px) env(safe-area-inset-right,0px) env(safe-area-inset-bottom,0px) env(safe-area-inset-left,0px)";
    doc.body.append(el);
  }
  const s = win.getComputedStyle(el);
  return { top: parseFloat(s.paddingTop) || 0, right: parseFloat(s.paddingRight) || 0, bottom: parseFloat(s.paddingBottom) || 0, left: parseFloat(s.paddingLeft) || 0 };
}

function createView({ win, doc, events, tokens, game, measureInsets = () => probeInsets(doc, win) }) {
  const homeButton = game.kind !== "portal" && game.exit !== "self";
  let renderLimit = null;
  // 보이는 영역은 visualViewport 로 못박는다. 주소창이 접히는 도중에는 layout viewport 와 어긋나는데, 게임이 쓸 수 있는 것은 보이는 쪽이다.
  const read = () => {
    const vv = win.visualViewport;
    return computeView({
      viewport: { w: Math.round(vv ? vv.width : win.innerWidth), h: Math.round(vv ? vv.height : win.innerHeight) },
      dpr: win.devicePixelRatio || 1,
      insets: measureInsets(),
      tokens,
      homeButton,
      scale: game.scale ?? null,
      renderLimit,
      orientation: game.orientation ?? null,
      minViewport: game.minViewport ?? null,
    });
  };

  let current = read();
  let pending = false;

  const expose = (v) => {
    const de = doc?.documentElement;
    if (!de) return;
    const set = (k, px) => de.style.setProperty(k, `${px}px`);
    set("--gp-vw", v.viewport.w); set("--gp-vh", v.viewport.h);
    de.style.setProperty("--gp-ui-scale", String(v.uiScale));
    set("--gp-safe-top", v.safe.y); set("--gp-safe-left", v.safe.x);
    set("--gp-safe-right", v.viewport.w - v.safe.x - v.safe.w); set("--gp-safe-bottom", v.viewport.h - v.safe.y - v.safe.h);
    de.dataset.gpW = v.classes.width; de.dataset.gpH = v.classes.height; de.dataset.gpAspect = v.classes.aspect;
    de.dataset.gpOrientation = v.orientation;
  };

  // ── 무대와 레터박스(D8) ── 게임은 무대 안에 그린다. 무대 밖은 레터박스가 칠하고, 띠를 누른 입력은 게임의 문서 리스너까지
  // 가지 않는다(버블링을 멈춘다 — 캡처 단계의 플랫폼 리스너, 예컨대 전체 화면 제스처는 그대로 본다). 셸의 조각은 그 위층이다.
  // 게임의 모듈 스크립트는 셸이 붙는 시점(DOMContentLoaded)보다 먼저 돈다. 그래서 무대는 게임이 처음 찾는 순간 붙인다.
  let stageEl = null, letterboxEl = null;
  const SWALLOW = ["click", "dblclick", "pointerdown", "pointerup", "pointermove", "mousedown", "mouseup", "touchstart", "touchend", "touchmove", "contextmenu", "wheel"];
  const place = () => {
    if (!stageEl) return;
    const s = current.stage, st = stageEl.style;
    st.left = `${s.x}px`; st.top = `${s.y}px`; st.width = `${s.w}px`; st.height = `${s.h}px`;
  };
  const mountStage = () => {
    if (!doc) return null;
    if (!stageEl) {
      letterboxEl = doc.createElement("div");
      letterboxEl.id = "gp-letterbox";
      letterboxEl.setAttribute("aria-hidden", "true");
      letterboxEl.style.cssText = "position:fixed;inset:0;z-index:0;background:var(--gp-letterbox,var(--gp-color-bg,#0b0d12))";
      for (const t of SWALLOW) letterboxEl.addEventListener(t, (e) => e.stopPropagation(), { passive: true });
      stageEl = doc.createElement("div");
      stageEl.id = "gp-stage";
      // 무대는 CSS 컨테이너다 — 게임의 CSS 는 뷰포트 단위(vh) 대신 무대 기준 단위(cqw·cqh)와 @container gp-stage 를 쓴다.
      stageEl.style.cssText = "position:fixed;z-index:1;overflow:hidden;container-type:size;container-name:gp-stage";
    }
    if (!stageEl.isConnected && doc.body) doc.body.prepend(letterboxEl, stageEl);
    place();
    return stageEl;
  };
  if (doc) { if (doc.readyState === "loading") doc.addEventListener("DOMContentLoaded", mountStage); else mountStage(); }

  const flush = () => {
    pending = false;
    const next = read();
    const changed = Object.keys(next).filter((k) => !same(next[k], current[k]));
    if (!changed.length) return;
    current = next;
    expose(current);
    place();
    if (changed.includes("dpr")) armDpr();
    events.emit("view", { view: current, changed });
  };
  const schedule = () => {
    if (pending) return;
    pending = true;
    (win.requestAnimationFrame ?? ((f) => setTimeout(f, 16)))(flush);
  };

  // 밀도 변화는 resize 로 오지 않을 수 있다(창을 다른 모니터로 옮길 때). 지금 밀도에 대한 질의가 바뀌면 안다.
  let dprQuery = null;
  function armDpr() {
    dprQuery?.removeEventListener?.("change", schedule);
    dprQuery = win.matchMedia?.(`(resolution: ${current.dpr}dppx)`) ?? null;
    dprQuery?.addEventListener?.("change", schedule);
  }
  armDpr();
  // 질의의 change 를 내지 않는 환경이 있다(실측: 헤드리스 크롬은 밀도가 바뀌어도 change 도 resize 도 내지 않는다).
  // 0.5초마다 숫자 하나를 읽어 놓친 것을 잡는다. 문서가 숨어 있으면 읽지 않는다. 검사기의 멈춘 시계에서는 돌지 않는다.
  win.setInterval?.(() => { if (doc?.visibilityState !== "hidden" && (win.devicePixelRatio || 1) !== current.dpr) schedule(); }, 500);

  win.addEventListener?.("resize", schedule, { passive: true });
  win.visualViewport?.addEventListener?.("resize", schedule, { passive: true });
  win.addEventListener?.("orientationchange", schedule, { passive: true });
  if (typeof win.ResizeObserver === "function" && doc?.documentElement) new win.ResizeObserver(schedule).observe(doc.documentElement);
  doc?.addEventListener?.("fullscreenchange", schedule);
  // 탐침은 body 가 있어야 선다. 문서가 준비되면 한 번 다시 잰다(인셋이 그때 처음 보인다).
  if (doc && doc.readyState === "loading") doc.addEventListener("DOMContentLoaded", () => { schedule(); });
  expose(current);

  return {
    get viewport() { return current.viewport; },
    get dpr() { return current.dpr; },
    /** UI 배율 — 글자·간격·터치 크기에 곱한다. 월드(게임 장면)에는 곱하지 않는다. */
    get uiScale() { return current.uiScale; },
    /** 캔버스 HUD 의 크기(px) → 지금 배율을 곱한 값. */
    ui: (px) => px * current.uiScale,
    /** 캔버스 HUD 의 글자 크기(px) → 배율을 곱하고, 바닥(토큰 xs)보다 작으면 바닥. */
    text: (px) => Math.max(tokens.font.size.xs, px * current.uiScale),
    get insets() { return current.insets; },
    get safe() { return current.safe; },
    /** 게임 사각형 — 스케일 정책이 안전 사각형 안에 놓은 무대(CSS px). */
    get stage() { return current.stage; },
    /** 월드 배율 — 기준 해상도(scale.reference)의 1 단위가 무대에서 몇 CSS px 인가. 정책이 없으면 1. */
    get worldScale() { return current.worldScale; },
    /** 렌더 배율 — 캔버스 백버퍼 = 무대 × 이 값. 밀도 상한과 픽셀 총량 상한을 둘 다 지킨다. */
    get renderScale() { return current.renderScale; },
    /**
     * 무대를 그릴 캔버스의 백버퍼 크기(물리 픽셀). 게임은 캔버스를 이 크기로 만든다.
     * 내림이다 — 반올림하면 두 변이 함께 올라가 곱이 상한을 넘는다(실측: 4K 200% 에서 3036×1708 = 518만 5488).
     */
    get backbuffer() { return { w: Math.floor(current.stage.w * current.renderScale), h: Math.floor(current.stage.h * current.renderScale) }; },
    /** 게임이 렌더 배율을 낮춘다(프레임이 무거울 때). null 이면 푼다. 하한이 있고 플랫폼 값 위로는 못 올린다. */
    limitRenderScale: (x) => { renderLimit = x === null || x === undefined ? null : Number(x); schedule(); },
    /** 무대 요소(#gp-stage). 게임은 여기에 그린다. 처음 찾는 순간 문서에 붙는다. */
    get stageElement() { return mountStage(); },
    get classes() { return current.classes; },
    get orientation() { return current.orientation; },
    /** 게이트 — 이 창에서 게임이 설 수 없으면 이유("floor" | "rotate" | "min"), 아니면 null. 셸이 안내를 덮고 게임을 멈춘다. */
    get gate() { return current.gate; },
    /** 지금의 전부. */
    get current() { return current; },
    /** 다음 프레임에 다시 잰다. 게임이 부를 일은 드물다 — 자기 레이아웃이 바뀐 뒤 셸이 부른다. */
    schedule,
    /** view 이벤트를 듣는다. 끊는 함수를 돌려준다. */
    on: (fn) => events.on("view", fn),
  };
}


// ── input ──
// 입력 모델 — 계약 v2. 기기가 아니라 능력으로 보고, 마지막에 쓴 입력을 따라간다.
//
// "PC 라서 마우스" 는 틀린다. 터치 노트북, 키보드를 붙인 태블릿, 컨트롤러를 꽂은 PC 가 있다. 능력은 미디어 질의
// (pointer·hover)로 보고, 키보드·게임패드는 만난 뒤에야 안다. 마지막 입력이 바뀌면 이벤트를 낸다 — 게임은 조작 안내
// (버튼 모양, 단축키 표시)를 바꾼다. 콘솔 게임이 패드와 키보드 사이에서 하는 그대로다.

const MODIFIERS = new Set(["Shift", "Control", "Alt", "Meta", "CapsLock", "Fn"]);

function createInput({ win, events }) {
  const mq = (q) => !!win.matchMedia?.(q)?.matches;
  const caps = {
    pointer: mq("(pointer: fine)") ? "fine" : mq("(pointer: coarse)") ? "coarse" : "none",
    hover: mq("(hover: hover)"),
    keyboard: false,
    gamepad: false,
  };
  let last = caps.pointer === "coarse" ? "touch" : caps.pointer === "fine" ? "mouse" : null;
  const use = (kind) => {
    if (kind === last) return;
    const prev = last;
    last = kind;
    events.emit("input", { last, prev });
  };
  win.addEventListener?.("pointerdown", (e) => use(e.pointerType === "touch" ? "touch" : "mouse"), { capture: true, passive: true });
  // 수식 키만 누른 것은 입력 전환이 아니다 — 트랙패드 확대(Ctrl)나 단축키 준비가 안내를 뒤집으면 안 된다.
  win.addEventListener?.("keydown", (e) => { caps.keyboard = true; if (!MODIFIERS.has(e.key)) use("keyboard"); }, { capture: true, passive: true });
  win.addEventListener?.("gamepadconnected", () => { caps.gamepad = true; use("gamepad"); });

  return {
    /** 능력. keyboard·gamepad 는 만난 뒤에 참이 된다. */
    get capabilities() { return { ...caps }; },
    /** 마지막에 쓴 입력 — "touch" | "mouse" | "keyboard" | "gamepad". */
    get last() { return last; },
    /** 마지막 입력이 바뀌면. 끊는 함수를 돌려준다. */
    on: (fn) => events.on("input", fn),
  };
}


// ── index ──
// window.groovplay 를 조립한다. 이 파일이 번들의 끝이다.
//
// 게임 정보는 Vite 플러그인이 이 스크립트보다 먼저 window.__GP_GAME__ 으로 넣는다.
// 없으면(검사기 픽스처, 포털 등) 기본값으로 서되, id 가 없으면 저장 키를 만들 수 없으므로 멈춘다.


function createGroovplay({ win, doc, tokens, tokensCss, game, storagePrefix, backend }) {
  if (!game?.id) throw new Error("groovplay: window.__GP_GAME__.id 가 없다 — Vite 플러그인이 넣어 준다");
  const events = createEvents();
  const storage = createStorage({ prefix: storagePrefix, gameId: game.id, backend });
  const settings = createSettings({ storage, emit: events.emit, prefersReducedMotion: !!win.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches, touch: (win.navigator?.maxTouchPoints ?? 0) > 0 });
  const screens = createScreens(events.emit);
  const host = createHost({ win, doc, game, storage, events, settings });
  const lifecycle = createLifecycle({ win, doc, events, host });
  const audio = createAudio({ win, doc, events, settings });
  const capture = createCapture({ events });
  const shell = createShell({ win, doc, tokens, tokensCss, game, events, lifecycle, screens, settings, storage, host, capture });
  // 화면 모델은 계약 v2 의 것이다. v1 게임에서는 만들지 않는다 — v1 은 동결이고, 탐침 요소 하나라도 v1 페이지에 더하지 않는다.
  const view = game.platform >= 2 ? createView({ win, doc, events, tokens, game }) : null;
  const input = game.platform >= 2 ? createInput({ win, events }) : null;
  if (view) shell.attachView(view);

  return Object.freeze({
    version: 1,
    game: Object.freeze({ ...game }),
    tokens,
    events,
    on: events.on,
    off: events.off,
    screens,
    storage,
    settings,
    lifecycle,
    audio,
    host,
    view,
    input,
    capture,
    shell,
    rng: () => Math.random(),
  });
}


  const game = window.__GP_GAME__ || null;
  window.groovplay = createGroovplay({
    win: window, doc: document, tokens: __tokens, tokensCss: __tokensCss, game,
    storagePrefix: "groovplay",
    backend: (() => { try { return window.localStorage; } catch { return { getItem() { return null; }, setItem() { throw new Error("no storage"); }, removeItem() {} }; } })(),
  });
})();
