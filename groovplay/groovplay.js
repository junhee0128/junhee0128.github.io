/* GROOVPLAY 런타임 v1 — 생성물. platform/runtime/src 에서. 손으로 고치지 않는다. */
(() => {
  "use strict";
  const __tokens = {"version":1,"font":{"family":"\"Pretendard\", ui-sans-serif, system-ui, \"Apple SD Gothic Neo\", \"Noto Sans KR\", sans-serif","size":{"xs":13,"sm":14,"md":15,"lg":18,"xl":22,"2xl":28,"3xl":36},"lineHeight":{"tight":1.15,"base":1.5},"weight":{"regular":400,"medium":500,"bold":700,"black":800}},"space":{"1":4,"2":8,"3":12,"4":16,"5":24,"6":32,"7":48},"radius":{"sm":6,"md":10,"lg":14,"xl":18,"pill":999},"touch":{"min":44,"comfortable":48},"motion":{"fast":120,"base":200,"slow":320,"ease":"cubic-bezier(.22, .61, .36, 1)"},"z":{"shell":1000,"overlay":1100,"toast":1200},"color":{"bg":"#0b0d12","panel":"#151922","panel2":"#1c2130","edge":"#262d3a","ink":"#eef1f6","ink2":"#b4bccb","ink3":"#9aa4b5","ok":"#56cd8c","warn":"#e9b657","bad":"#e8636e","accentFallback":"#f0a63c","onAccent":"#0b0d12"},"wordmark":{"text":"GROOVPLAY","letterSpacing":"0.22em"}};
  const __tokensCss = "/* 생성물 — tokens/v1.json 에서. 손으로 고치지 않는다. */\n:root {\n  --gp-font-family: \"Pretendard\", ui-sans-serif, system-ui, \"Apple SD Gothic Neo\", \"Noto Sans KR\", sans-serif;\n  --gp-font-size-xs: 13px;\n  --gp-font-size-sm: 14px;\n  --gp-font-size-md: 15px;\n  --gp-font-size-lg: 18px;\n  --gp-font-size-xl: 22px;\n  --gp-font-size-2xl: 28px;\n  --gp-font-size-3xl: 36px;\n  --gp-font-lineHeight-tight: 1.15;\n  --gp-font-lineHeight-base: 1.5;\n  --gp-font-weight-regular: 400;\n  --gp-font-weight-medium: 500;\n  --gp-font-weight-bold: 700;\n  --gp-font-weight-black: 800;\n  --gp-space-1: 4px;\n  --gp-space-2: 8px;\n  --gp-space-3: 12px;\n  --gp-space-4: 16px;\n  --gp-space-5: 24px;\n  --gp-space-6: 32px;\n  --gp-space-7: 48px;\n  --gp-radius-sm: 6px;\n  --gp-radius-md: 10px;\n  --gp-radius-lg: 14px;\n  --gp-radius-xl: 18px;\n  --gp-radius-pill: 999px;\n  --gp-touch-min: 44px;\n  --gp-touch-comfortable: 48px;\n  --gp-motion-fast: 120ms;\n  --gp-motion-base: 200ms;\n  --gp-motion-slow: 320ms;\n  --gp-motion-ease: cubic-bezier(.22, .61, .36, 1);\n  --gp-z-shell: 1000;\n  --gp-z-overlay: 1100;\n  --gp-z-toast: 1200;\n  --gp-color-bg: #0b0d12;\n  --gp-color-panel: #151922;\n  --gp-color-panel2: #1c2130;\n  --gp-color-edge: #262d3a;\n  --gp-color-ink: #eef1f6;\n  --gp-color-ink2: #b4bccb;\n  --gp-color-ink3: #9aa4b5;\n  --gp-color-ok: #56cd8c;\n  --gp-color-warn: #e9b657;\n  --gp-color-bad: #e8636e;\n  --gp-color-accentFallback: #f0a63c;\n  --gp-color-onAccent: #0b0d12;\n  --gp-wordmark-text: GROOVPLAY;\n  --gp-wordmark-letterSpacing: 0.22em;\n}\n";
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

  /** scope 하나를 다루는 핸들. version 을 올리면 migrate(old, oldVersion) 로 옛 값을 옮긴다. */
  function scope(name, { version = 1, migrate = null, shared = false } = {}) {
    if (!/^[a-z0-9][a-z0-9._-]*$/i.test(name)) throw new Error(`storage.scope: 이름은 영숫자·._- 만 ("${name}")`);
    const id = shared ? "_shared" : gameId;
    const k = key(name, version, id);
    return {
      key: k,
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
        return null;
      },
      set(value) { return write(k, value); },
      remove() { try { backend.removeItem(k); } catch { /* 없어도 된다 */ } },
    };
  }

  return {
    get available() { return available; },
    scope,
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
});

function createSettings({ storage, emit, prefersReducedMotion = false }) {
  const store = storage.scope("settings", { version: 1, shared: true });
  const state = { ...SETTINGS_DEFAULTS, ...(prefersReducedMotion ? { motion: "reduced" } : {}), ...(store.get() ?? {}) };

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

function createHost({ win, doc, game, storage, events }) {
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

  // ── 전체화면 ── 안드로이드·데스크탑은 API 가 있다. 첫 조작에 한 번 시도한다. 설치형은 이미 전체다.
  const fullscreen = async () => {
    if (kind !== "browser" || !doc?.documentElement.requestFullscreen) return false;
    try { await doc.documentElement.requestFullscreen({ navigationUI: "hide" }); return true; } catch { return false; }
  };
  if (doc && game.kind !== "portal" && kind === "browser" && touch) {
    const once = () => { doc.removeEventListener("pointerdown", once); fullscreen(); };
    doc.addEventListener("pointerdown", once);
  }

  // ── 설치 안내 ── iOS 사파리는 전체화면 API 가 없다. 홈 화면에 추가하는 법을 알려 주는 것이 답이다.
  const hintStore = storage.scope("install-hint", { version: 1, shared: true });
  const installHintDue = () => {
    if (kind !== "browser" || !isIOS) return false;
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

  return { kind, isIOS, touch, standalone, fullscreen, goHome, installHintDue, dismissInstallHint };
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

function createShell({ win, doc, tokens, tokensCss, game, events, lifecycle, screens, settings, storage, host, capture }) {
  const T = tokens;
  const accent = /^#[0-9a-f]{6}$/i.test(game.accent ?? "") ? game.accent : T.color.accentFallback;
  // getter 는 여기서 정의한다. Object.assign 은 getter 를 값으로 복사해 버려, 나중에 넣으면 생성 시점의 값으로 굳는다.
  let root, home, loading, bar, loadingTitle, panelScrim, panelBody, toastEl, toastTimer;
  const api = {
    ready: false,
    get settingsOpen() { return api.ready && !!panelScrim && !panelScrim.hidden; },
  };
  if (!doc) return api;

  const css = `
${tokensCss}
:root { --gp-accent: ${accent}; }
#gp-shell, #gp-shell * { box-sizing: border-box; }
#gp-shell { position: fixed; inset: 0; pointer-events: none; z-index: var(--gp-z-shell); font-family: var(--gp-font-family); color: var(--gp-color-ink); font-size: var(--gp-font-size-md); line-height: var(--gp-font-lineHeight-base); }
#gp-shell button { font: inherit; color: inherit; border: 0; background: none; padding: 0; cursor: pointer; min-width: var(--gp-touch-min); min-height: var(--gp-touch-min); }
#gp-shell [hidden] { display: none !important; }

.gp-home { pointer-events: auto; position: absolute; top: calc(env(safe-area-inset-top, 0px) + 8px); left: calc(env(safe-area-inset-left, 0px) + 8px);
  width: var(--gp-touch-comfortable); height: var(--gp-touch-comfortable); border-radius: var(--gp-radius-md);
  background: rgba(11,13,18,.72); border: 1px solid rgba(255,255,255,.14); display: grid; place-items: center;
  backdrop-filter: blur(10px); transition: opacity var(--gp-motion-base) var(--gp-motion-ease); }
.gp-home svg { width: 20px; height: 20px; }

.gp-loading { pointer-events: auto; position: absolute; inset: 0; background: var(--gp-color-bg); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: var(--gp-space-4);
  padding: env(safe-area-inset-top, 0px) env(safe-area-inset-right, 0px) env(safe-area-inset-bottom, 0px) env(safe-area-inset-left, 0px); }
.gp-wordmark { font-size: var(--gp-font-size-lg); font-weight: var(--gp-font-weight-black); letter-spacing: var(--gp-wordmark-letterSpacing); color: var(--gp-color-ink); }
.gp-loading-title { font-size: var(--gp-font-size-xl); font-weight: var(--gp-font-weight-bold); color: var(--gp-accent); }
.gp-bar { width: min(60vw, 280px); height: 6px; border-radius: 3px; background: var(--gp-color-panel2); overflow: hidden; }
.gp-bar i { display: block; height: 100%; width: 0; background: var(--gp-accent); transition: width var(--gp-motion-fast) linear; }
.gp-loading-note { font-size: var(--gp-font-size-xs); color: var(--gp-color-ink3); }

.gp-scrim { pointer-events: auto; position: absolute; inset: 0; background: rgba(4,6,10,.7); z-index: var(--gp-z-overlay); display: flex; align-items: center; justify-content: center;
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

.gp-toast { pointer-events: none; position: absolute; left: 50%; bottom: calc(env(safe-area-inset-bottom, 0px) + 16px); transform: translateX(-50%); z-index: var(--gp-z-toast);
  background: var(--gp-color-panel); border: 1px solid var(--gp-color-edge); border-radius: var(--gp-radius-md); padding: var(--gp-space-2) var(--gp-space-4); font-size: var(--gp-font-size-sm); color: var(--gp-color-ink); max-width: calc(100% - 32px); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

.gp-hint { pointer-events: auto; position: absolute; left: 12px; right: 12px; bottom: calc(env(safe-area-inset-bottom, 0px) + 12px); background: var(--gp-color-panel); border: 1px solid var(--gp-color-edge); border-radius: var(--gp-radius-lg); padding: var(--gp-space-3) var(--gp-space-4); display: flex; gap: var(--gp-space-3); align-items: center; font-size: var(--gp-font-size-sm); }
.gp-hint span { flex: 1; }
.gp-hint button { color: var(--gp-accent); font-weight: var(--gp-font-weight-bold); padding: 0 var(--gp-space-2); }

@media (prefers-reduced-motion: reduce) { #gp-shell *, #gp-shell *::after { transition: none !important; } }
html[data-gp-motion="reduced"] #gp-shell *, html[data-gp-motion="reduced"] #gp-shell *::after { transition: none !important; }
`;

  const h = (tag, cls, text) => { const n = doc.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; };
  const L = { // 셸의 글은 두 언어. 게임 텍스트는 게임 것이다.
    ko: { home: "포털로", loading: "불러오는 중", settings: "설정", sound: "효과음", music: "음악", motion: "모션 줄이기", motionSub: "흔들림·전환 효과를 줄인다", haptics: "진동", language: "언어", close: "닫기", noSave: "이 브라우저에서는 진행이 저장되지 않습니다", install: "홈 화면에 추가하면 전체 화면으로 즐길 수 있어요", installHow: "공유 → 홈 화면에 추가", dismiss: "알겠어요" },
    en: { home: "Portal", loading: "Loading", settings: "Settings", sound: "Sound", music: "Music", motion: "Reduce motion", motionSub: "Fewer shakes and transitions", haptics: "Haptics", language: "Language", close: "Close", noSave: "Progress will not be saved in this browser", install: "Add to Home Screen to play full screen", installHow: "Share → Add to Home Screen", dismiss: "Got it" },
  };
  const t = (k) => (L[settings.get("language")] ?? L.ko)[k];

  const sections = [];

  function mount() {
    const style = h("style"); style.id = "gp-shell-style"; style.textContent = css;
    doc.head.append(style);
    root = h("div"); root.id = "gp-shell";

    home = h("button", "gp-home");
    home.setAttribute("aria-label", t("home"));
    home.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg>';
    home.addEventListener("click", () => host.goHome());
    if (game.kind === "portal") home.hidden = true;

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

    root.append(home, loading, panelScrim, toastEl);
    doc.body.append(root);
    doc.documentElement.dataset.gpMotion = settings.get("motion");
    api.ready = true;

    if (!storage.available) api.toast(t("noSave"), 4000);
    if (host.installHintDue()) showInstallHint();
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
    const sel = h("select", "gp-select"); sel.setAttribute("aria-label", t("language"));
    for (const [v, name] of [["ko", "한국어"], ["en", "English"]]) { const o = h("option", null, name); o.value = v; if (settings.get("language") === v) o.selected = true; sel.append(o); }
    sel.addEventListener("change", () => { settings.set("language", sel.value); renderSettings(); });
    row(t("language"), sel);
    for (const s of sections) {
      const sec = h("div", "gp-section"); sec.append(h("h3", null, s.title));
      const body = h("div"); s.render(body); sec.append(body); panelBody.append(sec);
    }
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
  });

  // 플레이 중엔 복귀 버튼을 숨긴다. 뒤로가기는 lifecycle 이 "back" 으로 돌린다.
  events.on("gameplayStart", () => api.setHomeVisible(false));
  events.on("gameplayStop", () => api.setHomeVisible(true));
  // 다른 화면으로 가면 설정 패널은 닫힌다.
  events.on("screen", ({ id }) => { if (id !== "settings" && api.settingsOpen) api.closeSettings(); });
  events.on("settings", ({ key, value }) => { if (key === "language" && api.ready) { home.setAttribute("aria-label", t("home")); } if (key === "motion") doc.documentElement.dataset.gpMotion = value; });
  capture.onFreeze(() => { if (api.ready) { toastEl.hidden = true; } });

  // 기본 settings 화면. 게임이 자기 것을 등록하면 그것이 이긴다(나중에 등록한 것이 덮어쓴다).
  screens.register("settings", () => api.openSettings());

  if (doc.readyState === "loading") doc.addEventListener("DOMContentLoaded", mount); else mount();
  return api;
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
  const settings = createSettings({ storage, emit: events.emit, prefersReducedMotion: !!win.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches });
  const screens = createScreens(events.emit);
  const host = createHost({ win, doc, game, storage, events });
  const lifecycle = createLifecycle({ win, doc, events, host });
  const audio = createAudio({ win, doc, events, settings });
  const capture = createCapture({ events });
  const shell = createShell({ win, doc, tokens, tokensCss, game, events, lifecycle, screens, settings, storage, host, capture });

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
