/*
 * 손에 든 화면에서 웹 게임을 제대로 하기 위한 공용 조각.
 * 포털과 모든 게임의 빌드 결과에 build-all이 주입한다. 게임 소스는 이것을 몰라도 된다.
 *
 * 하는 일 다섯.
 * 1. 전체 화면 — 안드로이드·데스크탑은 전체 화면 API로 주소창을 없앤다.
 * 2. 홈 화면에 추가 — 아이폰 사파리는 전체 화면 API가 없다. 설치 방법을 알려 주는 것이 유일한 답이다.
 * 3. 브라우저 제스처 억제 — 두 손가락 확대, 두 번 눌러 확대, 당겨서 새로고침, 길게 눌러 선택.
 * 4. 화면 꺼짐 방지 — 플레이 중에 화면이 잠들지 않게.
 * 5. 주소창이 접혔다 펴져도 높이가 흔들리지 않게 — 실제 보이는 높이를 CSS 변수로 준다.
 *
 * 이미 설치되어 실행 중(standalone)이면 1·2는 아무것도 하지 않는다.
 */

(() => {
  "use strict";

  const doc = document;
  const root = doc.documentElement;
  const nav = navigator;
  const DISMISS_KEY = "groovplay/install-hint-dismissed";
  const DISMISS_DAYS = 30;

  const standalone =
    (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) ||
    (window.matchMedia && window.matchMedia("(display-mode: fullscreen)").matches) ||
    nav.standalone === true;

  const isIOS = /iPad|iPhone|iPod/.test(nav.userAgent) || (nav.platform === "MacIntel" && nav.maxTouchPoints > 1);
  const touch = nav.maxTouchPoints > 0;

  // ── 5. 실제 보이는 높이 ──────────────────────────────────────
  // 모바일 주소창이 접히고 펴지면 100vh는 거짓말을 한다. dvh가 있는 브라우저는 그것으로 충분하지만,
  // 없는 곳을 위해 실제 값을 변수로 남긴다. 게임 CSS가 원하면 쓴다.
  const setViewportVars = () => {
    const vv = window.visualViewport;
    const h = vv ? vv.height : window.innerHeight;
    root.style.setProperty("--vvh", `${h}px`);
    root.style.setProperty("--vvh1", `${h / 100}px`);
  };
  setViewportVars();
  window.addEventListener("resize", setViewportVars, { passive: true });
  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", setViewportVars, { passive: true });
    window.visualViewport.addEventListener("scroll", setViewportVars, { passive: true });
  }

  // ── 3. 브라우저 제스처 억제 ──────────────────────────────────
  // 게임에서 확대·새로고침은 전부 오조작이다.
  for (const type of ["gesturestart", "gesturechange", "gestureend"]) {
    doc.addEventListener(type, (e) => e.preventDefault(), { passive: false });
  }
  let lastTouchEnd = 0;
  doc.addEventListener(
    "touchend",
    (e) => {
      const now = Date.now();
      // 두 번 빠르게 누르면 브라우저가 확대한다. 게임에서는 그냥 두 번 누른 것이다.
      if (now - lastTouchEnd < 320) e.preventDefault();
      lastTouchEnd = now;
    },
    { passive: false },
  );
  doc.addEventListener("contextmenu", (e) => {
    if (e.target instanceof HTMLElement && e.target.closest("input, textarea, [contenteditable]")) return;
    e.preventDefault();
  });

  const style = doc.createElement("style");
  style.textContent = `
    html, body { overscroll-behavior: none; touch-action: manipulation; -webkit-text-size-adjust: 100%; }
    body { -webkit-touch-callout: none; }
    .gp-fs {
      /* 펼쳐 있는 동안은 화면 아래 주요 단추를 피해 조금 위에 뜬다. 줄어들면 구석으로 내려간다. */
      position: fixed; right: calc(10px + env(safe-area-inset-right, 0px));
      bottom: calc(76px + env(safe-area-inset-bottom, 0px));
      z-index: 2147483000; display: flex; align-items: center; gap: 8px;
      min-height: 44px; padding: 8px 14px; border: 1px solid rgba(255,255,255,0.28);
      border-radius: 999px; background: rgba(10,14,22,0.72); color: #fff;
      font: 700 13px/1.2 system-ui, -apple-system, "Noto Sans KR", sans-serif;
      letter-spacing: -0.01em; cursor: pointer; backdrop-filter: blur(6px);
      -webkit-backdrop-filter: blur(6px); box-shadow: 0 6px 20px rgba(0,0,0,0.4);
      opacity: 0.82; transition: opacity 160ms ease, transform 160ms ease;
    }
    .gp-fs:hover, .gp-fs:focus-visible { opacity: 1; }
    .gp-fs:active { transform: scale(0.96); }
    /* 잠시 뒤에는 작은 손잡이로 줄어든다. 플레이를 가리지 않는다. */
    .gp-fs--small {
      padding: 0; width: 40px; min-height: 40px; justify-content: center; opacity: 0.5;
      bottom: calc(10px + env(safe-area-inset-bottom, 0px));
    }
    .gp-fs--small .gp-fs-label, .gp-fs--small .gp-fs-x { display: none; }
    .gp-fs-x {
      display: grid; place-items: center; width: 24px; height: 24px; margin: -4px -6px -4px 0;
      border: 0; border-radius: 50%; background: rgba(255,255,255,0.14); color: #fff;
      font: 700 13px/1 system-ui, sans-serif; cursor: pointer;
    }
    .gp-sheet {
      position: fixed; inset: 0; z-index: 2147483001; display: grid; place-items: end center;
      background: rgba(4,8,14,0.62); backdrop-filter: blur(2px);
      font: 400 15px/1.55 system-ui, -apple-system, "Noto Sans KR", sans-serif;
    }
    .gp-sheet-card {
      width: min(520px, 100%); margin: 0 10px calc(10px + env(safe-area-inset-bottom, 0px));
      padding: 18px 18px 16px; border-radius: 18px; background: #101822; color: #f4efe3;
      box-shadow: 0 -10px 40px rgba(0,0,0,0.5); animation: gp-rise 220ms ease-out;
    }
    @keyframes gp-rise { from { transform: translateY(16px); opacity: 0 } to { transform: none; opacity: 1 } }
    .gp-sheet-card h2 { margin: 0 0 8px; font-size: 18px; }
    .gp-sheet-card ol { margin: 0 0 14px; padding-left: 20px; }
    .gp-sheet-card li { margin: 4px 0; }
    .gp-sheet-card button {
      width: 100%; min-height: 48px; border: 0; border-radius: 12px;
      background: #d6a63f; color: #1b1206; font: 800 15px/1 system-ui, "Noto Sans KR", sans-serif; cursor: pointer;
    }
    @media (display-mode: standalone), (display-mode: fullscreen) { .gp-fs { display: none !important; } }
  `;
  doc.head.appendChild(style);

  // ── 4. 화면 꺼짐 방지 ────────────────────────────────────────
  let wakeLock = null;
  const keepAwake = async () => {
    try {
      if (!("wakeLock" in nav) || doc.visibilityState !== "visible") return;
      wakeLock = await nav.wakeLock.request("screen");
      wakeLock.addEventListener("release", () => {
        wakeLock = null;
      });
    } catch {
      /* 배터리 절약 모드 등에서는 거부된다. 게임은 그대로 돌아간다. */
    }
  };
  doc.addEventListener("visibilitychange", () => {
    if (doc.visibilityState === "visible" && wakeLock === null) void keepAwake();
  });
  void keepAwake();

  // 설치되어 실행 중이면 여기까지가 전부다.
  if (standalone) return;

  // ── 1·2. 전체 화면과 설치 안내 ───────────────────────────────
  const fsEl = root;
  const canFullscreen =
    typeof fsEl.requestFullscreen === "function" || typeof fsEl.webkitRequestFullscreen === "function";

  let installPrompt = null;
  // 전체 화면을 청했는데 브라우저가 거절한 적이 있는가.
  let fullscreenRefused = false;
  let lastError = "";
  // 안내 단추. 아래의 조기 return 보다 앞에서 선언해야 한다 — 배너를 닫아 둔
  // 사용자도 전체 화면 쪽 코드는 그대로 돌기 때문이다.
  let button = null;
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    installPrompt = e;
    if (button) button.querySelector(".gp-fs-label").textContent = "앱으로 설치";
  });

  const enterFullscreen = async () => {
    try {
      if (typeof fsEl.requestFullscreen === "function") {
        // navigationUI 를 모르는 브라우저는 인자째로 거부한다. 그때는 맨손으로 한 번 더.
        try {
          await fsEl.requestFullscreen({ navigationUI: "hide" });
        } catch {
          await fsEl.requestFullscreen();
        }
      } else if (typeof fsEl.webkitRequestFullscreen === "function") {
        fsEl.webkitRequestFullscreen();
      }
    } catch (err) {
      lastError = String((err && err.message) || err);
      return false;
    }
    // 방향 잠금은 전체 화면에 들어간 다음의 별개 시도다. 실패해도 전체 화면은 그대로다.
    try {
      await screen.orientation?.lock?.("any");
    } catch {
      /* 지원하지 않는 브라우저 */
    }
    return true;
  };

  // ── 1a. 첫 조작에 전체 화면 ──────────────────────────────────
  // 주소창이 떠 있으면 게임의 아래쪽 조작 단추가 가려진다. 브라우저는 사용자
  // 제스처 안에서만 전체 화면을 허락하므로, 게임을 처음 만지는 그 순간을 쓴다.
  // 한 번만 시도하고, 거절당해도 조용히 넘어간다 — 화면은 이미 보이는 높이에
  // 맞춰져 있으므로 전체 화면은 더 나은 쪽이지 필수는 아니다.
  const automated = nav.webdriver === true || window.__LUMEN_QA__ === true;
  if (window.__GP_KIND__ === "game" && touch && canFullscreen && !isIOS && !automated) {
    // 여러 갈래로 듣는다. 활성화(user activation)를 인정하는 이벤트가 브라우저마다
    // 다르고, 캡처 단계로 잡아야 게임이 먼저 삼켜도 놓치지 않는다.
    const TYPES = ["pointerdown", "touchend", "click", "keydown"];
    let tries = 0;
    const detach = () => {
      for (const type of TYPES) doc.removeEventListener(type, grab, true);
    };
    function grab() {
      // 한 번 거절당했다고 포기하지 않는다 — 다음 조작에서 다시 청한다.
      // 성공했거나 여러 번 거절당하면 조용히 물러난다.
      if (doc.fullscreenElement) return detach();
      if (tries >= 8) return detach();
      tries += 1;
      void enterFullscreen().then((ok) => {
        if (ok || doc.fullscreenElement) return;
        // 이 기기에서는 전체 화면 API 가 듣지 않는다. 남은 답은 설치뿐이다.
        fullscreenRefused = true;
        if (button) {
          const label = button.querySelector(".gp-fs-label");
          if (label) label.textContent = "앱으로 설치";
          button.classList.remove("gp-fs--small");
        }
      });
    }
    for (const type of TYPES) doc.addEventListener(type, grab, { capture: true, passive: true });
    doc.addEventListener("fullscreenchange", () => {
      if (doc.fullscreenElement) detach();
    });
  }

  // 여기부터는 안내 배너다. 최근에 닫았다면 띄우지 않는다.
  const dismissedAt = Number(localStorage.getItem(DISMISS_KEY) ?? 0);
  if (Date.now() - dismissedAt < DISMISS_DAYS * 86400000) return;

  const openSheet = () => {
    const sheet = doc.createElement("div");
    sheet.className = "gp-sheet";
    const steps = isIOS
      ? "<ol><li>아래 <strong>공유</strong> 단추를 누르세요.</li><li><strong>홈 화면에 추가</strong>를 고르세요.</li><li>홈 화면의 아이콘으로 실행하면 주소창 없이 전체 화면으로 열립니다.</li></ol>"
      : "<ol><li>브라우저 메뉴에서 <strong>앱 설치</strong> 또는 <strong>홈 화면에 추가</strong>를 고르세요.</li><li>홈 화면의 아이콘으로 실행하면 주소창 없이 열립니다.</li></ol>";
    sheet.innerHTML = `<div class="gp-sheet-card" role="dialog" aria-modal="true" aria-label="홈 화면에 추가"><h2>홈 화면에 추가하면 전체 화면으로 즐길 수 있어요</h2>${steps}<button type="button">알겠습니다</button></div>`;
    const close = () => sheet.remove();
    sheet.addEventListener("click", (e) => {
      if (e.target === sheet || e.target instanceof HTMLButtonElement) close();
    });
    doc.body.appendChild(sheet);
  };

  const mount = () => {
    if (button || !doc.body) return;
    // 손가락으로 하는 기기에서만 띄운다. 데스크탑에서는 주소창이 문제가 아니다.
    if (!touch) return;
    button = doc.createElement("div");
    button.className = "gp-fs";
    button.setAttribute("role", "button");
    button.setAttribute("tabindex", "0");
    const label = canFullscreen && !isIOS ? "전체 화면" : "홈 화면에 추가";
    button.innerHTML = `<span aria-hidden="true">⛶</span><span class="gp-fs-label">${label}</span><button class="gp-fs-x" type="button" aria-label="이 안내 닫기">×</button>`;
    button.addEventListener("click", async (e) => {
      if (e.target instanceof HTMLElement && e.target.classList.contains("gp-fs-x")) {
        localStorage.setItem(DISMISS_KEY, String(Date.now()));
        button.remove();
        return;
      }
      if (installPrompt) {
        installPrompt.prompt();
        installPrompt = null;
        return;
      }
      if (canFullscreen && !isIOS && !fullscreenRefused) {
        const ok = await enterFullscreen();
        if (ok) return;
        fullscreenRefused = true;
      }
      openSheet();
    });
    doc.body.appendChild(button);
    // 12초 뒤, 또는 사용자가 게임을 만지기 시작하면 손잡이로 줄인다.
    const shrink = () => button && button.classList.add("gp-fs--small");
    setTimeout(shrink, 7000);
    doc.addEventListener("pointerdown", (e) => {
      if (e.target instanceof HTMLElement && e.target.closest(".gp-fs")) return;
      shrink();
    }, { once: true, passive: true });
  };

  doc.addEventListener("fullscreenchange", () => {
    if (doc.fullscreenElement && button) button.style.display = "none";
    else if (button) button.style.display = "";
  });

  /*
   * 전체 화면이 왜 안 되는지는 기기마다 다르고, 손에 든 기기에서만 재현된다.
   * `?fsdebug` 를 붙여 열면 판단에 쓴 값과 마지막 실패 이유를 그대로 보여 준다.
   * 이것이 없으면 원격에서는 추측밖에 할 수 없다.
   */
  if (/(^|[?&])fsdebug($|[=&])/.test(location.search)) {
    const panel = doc.createElement("pre");
    panel.style.cssText =
      "position:fixed;left:8px;top:8px;z-index:2147483002;margin:0;padding:10px 12px;max-width:calc(100vw - 16px);" +
      "border-radius:10px;background:rgba(6,10,18,0.92);color:#d8ffd8;font:600 12px/1.5 ui-monospace,monospace;white-space:pre-wrap";
    const draw = () => {
      panel.textContent = [
        `kind        ${String(window.__GP_KIND__)}`,
        `touchPoints ${nav.maxTouchPoints}`,
        `canFS       ${canFullscreen}`,
        `iOS         ${isIOS}`,
        `standalone  ${standalone}`,
        `webdriver   ${nav.webdriver === true}`,
        `fullscreen  ${!!doc.fullscreenElement}`,
        `refused     ${fullscreenRefused}`,
        `lastError   ${lastError || "-"}`,
        `viewport    ${window.innerWidth}x${window.innerHeight} / vvh ${root.style.getPropertyValue("--vvh") || "-"}`,
      ].join("\n");
    };
    draw();
    setInterval(draw, 500);
    const put = () => doc.body && doc.body.appendChild(panel);
    if (doc.readyState === "loading") doc.addEventListener("DOMContentLoaded", put);
    else put();
  }

  if (doc.readyState === "loading") doc.addEventListener("DOMContentLoaded", mount);
  else mount();
})();
