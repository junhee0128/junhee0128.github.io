/*
 * GROOVPLAY — 무대.
 *
 * 데이터는 tools/build-all.mjs 가 index.html 안에 박아 넣는다. 여기서 가져오는 것은 없다.
 *
 * 로비에는 플레이어가 쓰는 것만 둔다 — 표지, 이름, 한 줄, 상태, 플레이 버튼, 그리고
 * "지금 무엇을 하고 있는지" 한 줄. 마일스톤과 문서와 테스트 수는 개발 현황 시트로 간다.
 * 상시 정보가 로비를 막지 않는다는 것이 이 화면의 규칙이고, 그래서 시트는 스스로 열리지 않는다.
 */

const DATA = window.GROOVPLAY;
const GAMES = DATA?.games ?? [];

const STATUS_KO = { playable: "플레이 가능", wip: "개발 중", paused: "중단", idea: "구상" };
const MARK = { done: "●", active: "◐", todo: "○" };
/** 이 안에 마지막 커밋이 있으면 "새것"으로 본다. */
const FRESH_DAYS = 7;

const stage = document.getElementById("stage");
const picker = document.getElementById("picker");
const topnews = document.getElementById("topnews");

const el = (tag, cls, text) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.textContent = text;
  return n;
};

const ago = (iso) => {
  if (!iso) return null;
  const days = Math.floor((Date.now() - new Date(iso)) / 86400000);
  if (days <= 0) return "오늘";
  if (days === 1) return "어제";
  if (days < 30) return `${days}일 전`;
  const months = Math.floor(days / 30);
  return months < 12 ? `${months}달 전` : `${Math.floor(days / 365)}년 전`;
};

const isFresh = (game) => {
  const t = game.commit?.date ? Date.parse(game.commit.date) : 0;
  return t > 0 && Date.now() - t < FRESH_DAYS * 86400000;
};

/** 손으로 적은 마일스톤 중 지금 하고 있는 것. 로비가 말하는 유일한 개발 정보다. */
const nowDoing = (game) => game.milestones?.find((m) => m.state === "active" || m.state === "wip")?.name ?? null;

/**
 * 표지를 깐다. 표지가 없는 게임은 게임 색으로 칠하고, 그림인 척하지 않는다.
 * 빌드가 keyart를 찾았으면 그 경로를 매니페스트에 넣어 준다.
 */
function paint(node, game) {
  if (game.keyart) {
    node.style.backgroundImage = `url('${game.keyart}')`;
    node.classList.remove("blank");
  } else {
    node.style.backgroundImage = "";
    node.classList.add("blank");
  }
}

/** 플레이할 수 있는 빌드들. 최신이 먼저, 그다음 얼려 둔 체크포인트. */
function buildsOf(game) {
  const out = [];
  if (game.build?.ok) out.push({ label: "latest", text: "최신 빌드" });
  for (const cp of game.checkpoints ?? []) {
    const when = cp.date ? new Date(cp.date).toLocaleDateString("ko-KR") : null;
    out.push({ label: cp.label, text: [cp.label, when, cp.note].filter(Boolean).join(" · ") });
  }
  return out;
}

// ── 개발 현황 시트 ───────────────────────────────────────────

let sheet = null;

function sheetEls() {
  if (sheet) return sheet;
  const scrim = el("div", "sheet-scrim");
  const box = el("aside", "sheet");
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-modal", "true");
  box.append(el("div", "sheet-grab"));
  const head = el("div", "sheet-head");
  const title = el("h2");
  const close = el("button", "close", "×");
  close.setAttribute("aria-label", "닫기");
  head.append(title, close);
  const body = el("div", "sheet-body");
  box.append(head, body);
  document.body.append(scrim, box);

  const shut = () => {
    scrim.classList.remove("open");
    box.classList.remove("open");
  };
  scrim.addEventListener("click", shut);
  close.addEventListener("click", shut);
  document.addEventListener("keydown", (e) => e.key === "Escape" && shut());

  sheet = { scrim, box, title, body };
  return sheet;
}

function openStatus(game) {
  const { scrim, box, title, body } = sheetEls();
  box.style.setProperty("--accent", game.accent);
  title.textContent = `${game.title} — 개발 현황`;
  body.replaceChildren();

  if (game.build && !game.build.ok) {
    const fail = el("div", "fail");
    fail.append(el("b", null, `빌드 실패 — ${game.build.error}`));
    fail.append(el("pre", null, game.build.log ?? ""));
    body.append(fail);
  }

  const facts = el("div", "facts");
  const test = game.checks?.test;
  if (test?.tests) facts.append(el("span", test.ok ? "ok" : "bad", `테스트 ${test.tests.passed}/${test.tests.total}`));
  else if (test) facts.append(el("span", test.ok ? "ok" : "bad", `테스트 ${test.ok ? "통과" : "실패"}`));
  const tc = game.checks?.typecheck;
  if (tc) facts.append(el("span", tc.ok ? "ok" : "bad", `타입 ${tc.ok ? "통과" : "실패"}`));
  if (!game.checks) facts.append(el("span", null, "검사 안 함"));
  if (game.commit) facts.append(el("span", null, `${game.commit.hash} · ${ago(game.commit.date)}`));
  if (game.engine) facts.append(el("span", null, game.engine));
  if (facts.childElementCount) body.append(facts);

  if (game.progress) {
    const p = game.progress;
    const label = el("div", "bar-label");
    label.append(el("span", null, p.label));
    const count = el("span");
    count.append(el("b", null, String(p.done)));
    count.append(document.createTextNode(` / ${p.total}${p.partial ? ` · ${p.partial} 부분` : ""}`));
    label.append(count);
    const bar = el("div", "bar");
    for (const key of ["done", "partial"]) {
      const seg = el("span", key);
      seg.style.width = `${(p[key] / p.total) * 100}%`;
      bar.append(seg);
    }
    body.append(label, bar);
  }

  if (game.milestones?.length) {
    body.append(el("h3", null, "마일스톤"));
    const ul = el("ul", "stones");
    for (const m of game.milestones) {
      const state = m.state === "wip" ? "active" : (m.state ?? "todo");
      const li = el("li", state);
      li.append(el("span", "mk", MARK[state] ?? MARK.todo));
      const wrap = el("span", null, m.name);
      if (m.note) wrap.append(el("span", "note", m.note));
      li.append(wrap);
      ul.append(li);
    }
    body.append(ul);
  }

  if (game.docs?.length) {
    body.append(el("h3", null, `문서 ${game.docs.length}`));
    const docs = el("div", "docs");
    for (const doc of game.docs) {
      // 문서는 저장소에서 읽는다 — 포털은 소스가 아니라 빌드를 싣는다.
      const a = el("a", null, doc.label);
      a.href = `https://github.com/junhee0128/groovplay/blob/main/games/${game.id}/${doc.path}`;
      a.target = "_blank";
      a.rel = "noopener";
      docs.append(a);
    }
    body.append(docs);
  }

  scrim.classList.add("open");
  box.classList.add("open");
}

function newsButton(game) {
  const b = el("button", `news${isFresh(game) ? " dot" : ""}`);
  b.innerHTML =
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h10"/></svg>';
  b.setAttribute("aria-label", `${game.title} 개발 현황`);
  b.addEventListener("click", () => openStatus(game));
  return b;
}

// ── 무대 ─────────────────────────────────────────────────────

function slideFor(game) {
  const slide = el("div", "slide");
  slide.style.setProperty("--accent", game.accent);

  const art = el("div", "art");
  paint(art, game);
  slide.append(art, el("div", "scrim"));

  const info = el("div", "info");

  const kicker = el("div", "kicker");
  kicker.append(el("span", `chip ${game.status}`, STATUS_KO[game.status] ?? game.status));
  if (game.codename) kicker.append(el("span", "code", game.codename));
  info.append(kicker);

  info.append(el("h1", null, game.title));
  if (game.tagline) info.append(el("p", null, game.tagline));

  const doing = nowDoing(game);
  if (doing) {
    const d = el("div", "doing");
    d.append(el("b", null, "지금 "));
    d.append(document.createTextNode(doing));
    info.append(d);
  }

  // 빌드가 깨진 게임은 로비에서도 그렇다고 말한다. 반쯤 만든 게임이 이 사이트의 존재 이유이고,
  // 실패를 숨기면 플레이 버튼이 거짓말을 하게 된다.
  if (game.build && !game.build.ok) {
    const fail = el("div", "fail");
    fail.append(el("b", null, `빌드 실패 — ${game.build.error}`));
    fail.append(el("pre", null, game.build.log ?? ""));
    info.append(fail);
  }

  const row = el("div", "row");
  const builds = buildsOf(game);

  if (builds.length === 0) {
    row.append(el("span", "play off", "플레이 불가"));
  } else {
    const play = el("a", "play", "플레이");
    play.href = `./play/${game.id}/${builds[0].label}/`;
    row.append(play);

    // 얼려 둔 체크포인트가 있을 때만 고를 것이 생긴다.
    if (builds.length > 1) {
      const select = el("select", "builds");
      select.setAttribute("aria-label", `${game.title} 빌드 고르기`);
      for (const b of builds) {
        const opt = el("option", null, b.text);
        opt.value = b.label;
        select.append(opt);
      }
      select.addEventListener("change", () => {
        play.href = `./play/${game.id}/${select.value}/`;
      });
      row.append(select);
    }
  }

  row.append(newsButton(game));
  info.append(row);

  slide.append(info);
  return slide;
}

const slides = GAMES.map((game) => {
  const s = slideFor(game);
  stage.append(s);
  return s;
});

const thumbs = GAMES.map((game, i) => {
  const t = el("button", "thumb");
  t.style.setProperty("--accent", game.accent);
  paint(t, game);
  if (isFresh(game)) t.append(el("span", "fresh"));
  t.setAttribute("aria-label", game.title);
  t.addEventListener("click", () => show(i));
  picker.append(t);
  return t;
});

let current = 0;

function show(i) {
  if (GAMES.length === 0) return;
  current = (i + GAMES.length) % GAMES.length;
  const game = GAMES[current];
  slides.forEach((s, k) => s.classList.toggle("on", k === current));
  thumbs.forEach((t, k) => t.classList.toggle("on", k === current));
  document.documentElement.style.setProperty("--accent", game.accent);
  topnews.replaceChildren(newsButton(game));
  // 고른 것이 줄 밖에 있으면 보이는 자리로 끌어온다.
  thumbs[current]?.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
}

// 옆으로 밀어 넘기기. 세로 스크롤이 아니라 가로 이동만 게임 전환으로 친다.
let start = null;
stage.addEventListener("touchstart", (e) => {
  start = { x: e.touches[0].clientX, y: e.touches[0].clientY };
}, { passive: true });
stage.addEventListener("touchend", (e) => {
  if (!start) return;
  const dx = e.changedTouches[0].clientX - start.x;
  const dy = e.changedTouches[0].clientY - start.y;
  if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy)) show(current + (dx < 0 ? 1 : -1));
  start = null;
}, { passive: true });

addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" || e.key === "ArrowDown") show(current + 1);
  if (e.key === "ArrowLeft" || e.key === "ArrowUp") show(current - 1);
});

if (GAMES.length === 0) {
  const empty = el("div", "info");
  empty.append(el("h1", null, "게임이 없다"));
  empty.append(el("p", null, "games/ 아래에 game.json 을 둔 디렉터리를 만들고 npm run build 를 돌린다."));
  stage.append(empty);
} else {
  show(0);
}
