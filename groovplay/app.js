// Renders the shelf from the data tools/build-all.mjs inlined into the page.
// Everything here is a fact the build measured or the game's own manifest said;
// nothing is inferred, so a card never claims more than the game has.

const data = window.GROOVPLAY;
const shelf = document.getElementById("shelf");

const STATUS_KO = { playable: "플레이 가능", wip: "개발 중", paused: "중단", idea: "구상" };
const MARK = { done: "●", active: "◐", todo: "○" };

const el = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
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

if (!data) {
  shelf.append(el("p", "lede", "빌드 데이터가 없습니다 — npm run build 를 먼저 실행하세요."));
} else {
  document.getElementById("built").textContent = `빌드 ${new Date(data.builtAt).toLocaleString("ko-KR")}`;
  for (const game of data.games) shelf.append(card(game));
}

function card(game) {
  const node = el("article", "card");
  node.style.setProperty("--accent", game.accent);

  const head = el("div", "card-head");
  head.append(el("h2", null, game.title));
  if (game.codename) head.append(el("span", "codename", game.codename));
  head.append(el("span", `pill ${game.status}`, STATUS_KO[game.status] ?? game.status));
  node.append(head);

  if (game.tagline) node.append(el("p", "tagline", game.tagline));
  if (game.engine) node.append(el("div", "engine", game.engine));
  if (game.progress) node.append(progressBar(game.progress));
  if (game.milestones?.length) node.append(milestones(game.milestones));
  node.append(facts(game));
  if (game.build && !game.build.ok) node.append(failure(game.build));
  node.append(actions(game));
  if (game.docs?.length) node.append(docs(game));
  return node;
}

function progressBar(p) {
  const wrap = el("div");
  const label = el("div", "bar-label");
  label.append(el("span", null, p.label));
  const count = el("span");
  count.innerHTML = `<b>${p.done}</b> / ${p.total} 완료${p.partial ? ` · ${p.partial} 부분` : ""}`;
  label.append(count);
  const bar = el("div", "bar");
  for (const key of ["done", "partial"]) {
    const seg = el("span", key);
    seg.style.width = `${(p[key] / p.total) * 100}%`;
    bar.append(seg);
  }
  wrap.append(label, bar);
  return wrap;
}

function milestones(list) {
  const ul = el("ul", "stones");
  for (const m of list) {
    const state = m.state ?? "todo";
    const li = el("li", state);
    li.append(el("span", "mark", MARK[state] ?? MARK.todo));
    const body = el("span", null, m.name);
    if (m.note) {
      body.append(document.createElement("br"));
      body.append(el("span", "note", m.note));
    }
    li.append(body);
    ul.append(li);
  }
  return ul;
}

/** Only what this build actually measured — a check that did not run says so. */
function facts(game) {
  const row = el("div", "facts");
  const tests = game.checks?.test;
  if (tests?.tests) {
    row.append(el("span", tests.ok ? "ok" : "bad", `테스트 ${tests.tests.passed}/${tests.tests.total}`));
  } else if (tests) {
    row.append(el("span", tests.ok ? "ok" : "bad", `테스트 ${tests.ok ? "통과" : "실패"}`));
  }
  const tc = game.checks?.typecheck;
  if (tc) row.append(el("span", tc.ok ? "ok" : "bad", `타입 ${tc.ok ? "통과" : "실패"}`));
  if (!game.checks) row.append(el("span", null, "검사 안 함"));
  if (game.commit) row.append(el("span", null, `${game.commit.hash} · ${ago(game.commit.date)}`));
  return row;
}

function failure(build) {
  const box = el("div", "fail");
  box.append(el("p", null, `빌드 실패 — ${build.error}`));
  box.append(el("pre", null, build.log ?? ""));
  return box;
}

function actions(game) {
  const row = el("div", "actions");
  const builds = [];
  if (game.build?.ok) builds.push({ label: "latest", text: "최신 빌드" });
  for (const cp of game.checkpoints ?? []) {
    const when = cp.date ? new Date(cp.date).toLocaleDateString("ko-KR") : null;
    builds.push({ label: cp.label, text: `${cp.label}${when ? ` · ${when}` : ""}${cp.note ? ` — ${cp.note}` : ""}` });
  }

  if (builds.length === 0) {
    row.append(el("span", "play off", "플레이 불가"));
    return row;
  }

  const link = el("a", "play", "PLAY");
  link.href = `./play/${game.id}/${builds[0].label}/`;
  link.target = "_blank";
  link.rel = "noopener";
  row.append(link);

  if (builds.length > 1) {
    const select = el("select");
    for (const b of builds) {
      const option = el("option", null, b.text);
      option.value = b.label;
      select.append(option);
    }
    select.addEventListener("change", () => {
      link.href = `./play/${game.id}/${select.value}/`;
    });
    row.append(select);
  }
  return row;
}

function docs(game) {
  const row = el("div", "docs");
  for (const doc of game.docs) {
    const a = el("a", null, doc.label);
    // Docs are read in the repo, not served — the portal ships builds, not source.
    a.href = `https://github.com/junhee0128/groovplay/blob/main/games/${game.id}/${doc.path}`;
    a.target = "_blank";
    a.rel = "noopener";
    row.append(a);
  }
  return row;
}
