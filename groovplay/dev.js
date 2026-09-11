/*
 * 개발 뷰. 전부 보인다 — 미도입·미적합·적합, 검사 결과, 빌드 로그, 체크포인트, 문서.
 * 목록 하나가 스크롤 컨테이너이고 그 밖은 스크롤하지 않는다.
 */

const DATA = window.GROOVPLAY;
const gp = window.groovplay;
const GAMES = DATA?.games ?? [];
const STATUS_KO = { playable: "플레이 가능", wip: "개발 중", paused: "중단", idea: "구상" };
const MARK = { done: "●", active: "◐", todo: "○" };
const el = (tag, cls, text) => { const n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; };
const ago = (iso) => { if (!iso) return null; const d = Math.floor((Date.now() - new Date(iso)) / 86400000); return d <= 0 ? "오늘" : d === 1 ? "어제" : d < 30 ? `${d}일 전` : `${Math.floor(d / 30)}달 전`; };

const list = document.getElementById("list");
const passed = GAMES.filter((g) => g.conformance?.passed).length;
const declared = GAMES.filter((g) => g.platform).length;
document.getElementById("sub").textContent = `${GAMES.length}개 · 플랫폼 도입 ${declared} · 적합 ${passed}${DATA?.lobbyRule ? " · 로비 규칙 켜짐" : ""} · 빌드 ${new Date(DATA?.builtAt ?? 0).toLocaleString("ko-KR")}`;

for (const game of GAMES) {
  const card = el("article", "card"); card.style.setProperty("--accent", game.accent);
  const head = el("div", "card-head");
  head.append(el("h2", null, game.title));
  const chips = el("div", "chips");
  chips.append(el("span", `chip ${game.status}`, STATUS_KO[game.status] ?? game.status));
  if (!game.platform) chips.append(el("span", "chip notyet", "플랫폼 미도입"));
  else if (game.conformance?.passed === null) chips.append(el("span", "chip notyet", `v${game.platform} 검사 안 함`));
  else if (game.conformance?.passed) chips.append(el("span", "chip conform", `플랫폼 v${game.platform} 적합`));
  else chips.append(el("span", "chip nonconform", `v${game.platform} 미적합 · ${game.conformance?.count ?? "?"}건`));
  head.append(chips); card.append(head);

  const facts = el("div", "facts");
  const t = game.checks?.test;
  if (t?.tests) facts.append(el("span", t.ok ? "ok" : "bad", `테스트 ${t.tests.passed}/${t.tests.total}`));
  const tc = game.checks?.typecheck; if (tc) facts.append(el("span", tc.ok ? "ok" : "bad", `타입 ${tc.ok ? "통과" : "실패"}`));
  if (game.build) facts.append(el("span", game.build.ok ? "ok" : "bad", game.build.ok ? `빌드 ${(game.build.ms / 1000).toFixed(0)}s` : `빌드 실패`));
  if (game.commit) facts.append(el("span", null, `${game.commit.hash} · ${ago(game.commit.date)} · ${game.commit.subject}`));
  if (game.engine) facts.append(el("span", null, game.engine));
  card.append(facts);

  if (game.build && !game.build.ok) { const f = el("div", "fail"); f.append(el("b", null, `빌드 실패 — ${game.build.error}`), el("pre", null, game.build.log ?? "")); card.append(f); }

  if (game.conformance && !game.conformance.passed && game.conformance.findings?.length) {
    card.append(el("h3", null, `적합 위반 ${game.conformance.count}`));
    const byRule = new Map();
    for (const f of game.conformance.findings) { const k = `${f.check}/${f.rule}`; if (!byRule.has(k)) byRule.set(k, []); byRule.get(k).push(f); }
    const ul = el("ul", "findings");
    for (const [k, fs] of byRule) {
      const li = el("li"); li.append(el("code", null, `${k} ×${fs.length}`));
      const first = fs[0]; li.append(el("span", null, `${[first.cell, first.screen].filter(Boolean).join(" · ")} ${first.message}`.trim()));
      ul.append(li);
    }
    card.append(ul);
  }

  if (game.milestones?.length) {
    card.append(el("h3", null, "마일스톤")); const ul = el("ul", "stones");
    for (const m of game.milestones) { const st = m.state === "wip" ? "active" : (m.state ?? "todo"); const li = el("li", st); li.append(el("span", "mk", MARK[st] ?? MARK.todo)); const w = el("span", null, m.name); if (m.note) w.append(el("span", "note", m.note)); li.append(w); ul.append(li); }
    card.append(ul);
  }

  const row = el("div", "row");
  if (game.build?.ok) { const a = el("a", "play", "플레이"); a.href = `./play/${game.id}/latest/`; row.append(a); }
  for (const cp of game.checkpoints ?? []) { const a = el("a", "play", cp.label); a.href = `./play/${game.id}/${cp.label}/`; a.style.setProperty("--accent", "var(--gp-color-panel2)"); a.style.color = "var(--gp-color-ink)"; row.append(a); }
  card.append(row);

  if (game.docs?.length) {
    card.append(el("h3", null, `문서 ${game.docs.length}`)); const docs = el("div", "docs");
    for (const doc of game.docs) { const a = el("a", null, doc.label); a.href = `https://github.com/junhee0128/groovplay/blob/main/games/${game.id}/${doc.path}`; a.target = "_blank"; a.rel = "noopener"; docs.append(a); }
    card.append(docs);
  }
  list.append(card);
}

document.getElementById("gear").addEventListener("click", () => gp.screens.goto("settings"));
gp.screens.register("title", () => {});
gp.on("settingsClosed", () => gp.screens.goto("title"));
document.documentElement.style.setProperty("--accent", gp.tokens.color.accentFallback);
