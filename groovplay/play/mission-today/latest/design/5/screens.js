import { im } from "../shared/frame.js";

const purse = `<div class="purse">
  <span class="cap m"><i></i>4,010<b>+</b></span>
  <span class="cap s"><i></i>300<b>+</b></span>
  <button class="round gear"></button>
</div>`;

const ribbon = (t) => `<div class="ribbon"><span>${t}</span></div>`;

const dock = (on) => `<nav class="dock">
  ${["홈", "캐릭터", "편의점", "뽑기", "목표"].map((t, i) =>
    `<button class="dk${i === on ? " on" : ""}"><span class="bl b${i}"></span><em>${t}</em>${i === 3 ? '<u class="dot"></u>' : ""}</button>`).join("")}
</nav>`;

const lobbyLand = () => `<div class="scr land lobby">
  ${im("open/lobby", "art")}<div class="sky"></div>
  <div class="blob b1"></div><div class="blob b2"></div>
  <aside class="ribbonrail">
    ${["홈", "캐릭터", "편의점", "뽑기", "목표"].map((t, i) =>
      `<button class="round nav${i === 0 ? " on" : ""}"><span class="bl b${i}"></span><em>${t}</em>${i === 3 ? '<u class="dot"></u>' : ""}</button>`).join("")}
  </aside>
  ${purse}
  <div class="stage">
    <div class="plate"></div>
    ${im("idle/doyoung", "hero")}${im("friend/mong1", "dog")}${im("pet/sparrow", "bird")}
    <div class="nametag">도영 <s>·</s> 몽이 <s>·</s> 짹이</div>
  </div>
  <section class="panel">
    ${ribbon("다음 사명")}
    <div class="pin">
      ${im("cover/ep3", "cov")}
      <div class="ptx">
        <h1>새해 첫 해</h1>
        <p>새해 첫 해가 뜨기 전에 언덕 정상.<br>상상 없이, 형과 둘이서.</p>
        <div class="badges"><i class="st on"></i><i class="st on"></i><i class="st"></i><span>에피소드 3</span></div>
      </div>
    </div>
    <button class="pop big">사명 시작</button>
    <div class="two"><button class="pop soft">사명 지도</button><button class="pop soft">자유 달리기</button></div>
  </section>
</div>`;

const runLand = () => `<div class="scr land run">
  ${im("bg/apart", "art")}
  <div class="field">
    ${[1, 2, 3, 4, 5, 1].map((n, i) => im(`pick/jelly${n}`, `jelly j${i}`)).join("")}
    ${im("enemy/bag", "ob")}${im("hero/run1", "cast hero")}${im("friend/mong1", "cast dog")}${im("pet/sparrow", "cast bird")}
  </div>
  <div class="asphalt"></div>
  <div class="hud">
    <div class="score">2,635<em>×1.7</em></div>
    <div class="track"><i style="--p:42%"></i><b class="boss"></b>${im("face/doyoung", "mk")}<u class="flag"></u></div>
    <div class="gaugewrap"><div class="gaugec"><i style="--p:62%"></i></div><span>상상</span></div>
    <button class="round pause"><span></span><span></span></button>
    <div class="tally"><span class="cap tiny"><i class="k"></i>0/3</span><span class="cap tiny"><i class="m"></i>12</span></div>
    <button class="round ctl l"></button><button class="round ctl r"></button>
    <div class="petring"><svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="20"/><circle class="p" cx="24" cy="24" r="20"/></svg>${im("pet/sparrow", "pi")}</div>
    <div class="miniribbon"><b>몽이 × 소방관</b><div class="mini"><i style="--p:70%"></i></div><span>물어온다</span></div>
  </div>
</div>`;

const SHELF = [["pet/sparrow", "짹이", "간식을 물어온다", "보유 중", 1],
  ["pet/cat", "야옹이", "앞을 치워 준다", "200", 0],
  ["pet/frog", "개굴이", "한 번 더 뛴다", "260", 0]];

const shopLand = () => `<div class="scr land shop">
  ${im("bg/market", "art")}<div class="sky"></div>
  <button class="round back"></button>
  ${purse}
  <div class="tabsrow">${["펫", "친구", "작전복", "아이템"].map((t, i) => `<button class="pop tab${i === 0 ? " on" : ""}">${t}</button>`).join("")}</div>
  <div class="shelf">
    ${SHELF.map(([p, n, d, c, on]) => `<article class="prod${on ? " on" : ""}">
      ${ribbon(n)}
      <div class="pa">${im(p, "art")}</div>
      <p>${d}</p>
      <button class="pop ${on ? "soft" : "buy"}">${c === "보유 중" ? "보유 중" : `<i class="m"></i>${c}`}</button>
    </article>`).join("")}
  </div>
  <section class="panel side">
    ${ribbon("짹이 Lv.2")}
    ${im("pet/sparrow", "hero2")}
    <p class="pd">14초마다 앞으로 날아가 간식 한 줄을 물어온다.</p>
    <div class="lv"><div class="mini"><i style="--p:60%"></i></div><span>다음 레벨까지 3</span></div>
    <button class="pop big">120에 강화</button>
  </section>
</div>`;

const lobbyPort = () => `<div class="scr port lobby">
  ${im("open/lobby", "art")}<div class="sky"></div>
  <div class="blob b1"></div>
  ${purse}
  <div class="stage">
    <div class="plate"></div>
    ${im("idle/doyoung", "hero")}${im("friend/mong1", "dog")}${im("pet/sparrow", "bird")}
    <div class="nametag">도영 <s>·</s> 몽이 <s>·</s> 짹이</div>
  </div>
  <section class="panel">
    ${ribbon("다음 사명")}
    <div class="pin">${im("cover/ep3", "cov")}
      <div class="ptx"><h1>새해 첫 해</h1><p>새해 첫 해가 뜨기 전에 언덕 정상.</p>
      <div class="badges"><i class="st on"></i><i class="st on"></i><i class="st"></i><span>에피소드 3</span></div></div></div>
    <button class="pop big">사명 시작</button>
    <div class="two"><button class="pop soft">사명 지도</button><button class="pop soft">자유 달리기</button></div>
  </section>
  ${dock(0)}
</div>`;

export const SCREENS = [
  ["가로 로비 — 무대와 리본 판", 844, 390, lobbyLand],
  ["플레이 HUD — 두툼한 계기", 844, 390, runLand],
  ["편의점 — 진열대", 844, 390, shopLand],
  ["세로 로비 — 하단 독", 390, 844, lobbyPort],
];
