import { im } from "../shared/frame.js";
const ic = (n, cls = "ic") => `<img class="${cls}" src="../art/c/${n}.webp" alt="">`;
const NAV = [["home", "홈"], ["char", "캐릭터"], ["shop", "편의점"], ["gacha", "뽑기"], ["goal", "목표"]];

const strip = (on, dir = "v") => `<nav class="strip ${dir}">
  ${NAV.map(([k, l], i) => `<button class="cell${i === on ? " on" : ""}" data-tap>
    ${ic(k)}<em>${l}</em>${k === "gacha" ? '<u class="dot"></u>' : ""}</button>`).join("")}
</nav>`;

const caption = `<div class="cap">
  <span>${ic("marble", "ic xs")}4,010</span><span>${ic("sticker", "ic xs")}300</span>
  <span class="dim">사명 17/18</span><button class="gear" data-tap></button>
</div>`;

const heroPanel = () => `<section class="pan hero">
  ${caption}
  <div class="tone"></div>
  ${im("idle/doyoung", "hero")}${im("friend/mong1", "dog")}${im("pet/sparrow", "bird")}
  <div class="sfx">도영!</div>
  <div class="name">도영 · 몽이 · 짹이 · 소방관</div>
</section>`;

const balloon = `<section class="pan balloon">
  <span class="eye">에피소드 3 · 겨울방학</span>
  <h1>사명 18 — 새해 첫 해</h1>
  <p>새해 첫 해가 뜨기 전에 언덕 정상. 상상 없이, 형과 둘이서!</p>
  <div class="stars">${ic("badge", "st on")}${ic("badge", "st on")}${ic("badge", "st")}</div>
</section>`;

const quest = `<section class="pan quest">
  <h4>오늘의 추가 지령</h4>
  <div class="qr"><span>Perfect 5회 연속</span><i class="bar"><u style="--p:0%"></u></i><b>0/5</b></div>
  <div class="qr"><span>폭주 2회</span><i class="bar"><u style="--p:0%"></u></i><b>0/2</b></div>
</section>`;

const lobbyLand = () => `<div class="scr land lobby">
  <div class="page"></div>
  ${strip(0)}
  ${heroPanel()}
  <div class="col">
    ${balloon}
    <button class="pan act" data-tap="main">사명 시작</button>
    <div class="two"><button class="pan sub" data-tap>사명 지도</button><button class="pan sub" data-tap>자유 달리기</button></div>
    ${quest}
  </div>
</div>`;

const runLand = () => `<div class="scr land run">
  ${im("bg/apart", "bg")}
  <div class="field">${[1, 2, 3, 4, 5, 1].map((n, i) => im(`pick/jelly${n}`, `jelly j${i}`)).join("")}
    ${im("enemy/bag", "ob")}${im("hero/run1", "runner")}${im("friend/mong1", "dog")}${im("pet/sparrow", "bird")}</div>
  <div class="road"></div>
  <div class="hud">
    <div class="box score"><b>2,635</b><em>×1.7</em></div>
    <div class="rail2"><i style="--p:42%"></i><s class="boss"></s><u class="fin"></u></div>
    <div class="box gau">${ic("badge", "ic xs")}<i class="bar wide"><u style="--p:62%"></u></i></div>
    <button class="box pause" data-tap><span></span><span></span></button>
    <div class="box tally">${ic("king", "ic xs")}<b>0/3</b>${ic("marble", "ic xs")}<b>12</b></div>
    <button class="key l" data-tap></button><button class="key r" data-tap></button>
    <div class="petbox"><svg viewBox="0 0 56 56"><circle cx="28" cy="28" r="22"/><circle class="p" cx="28" cy="28" r="22"/></svg>${im("pet/sparrow", "pi")}</div>
    <div class="box build"><b>몽이 × 소방관</b><i class="bar"><u style="--p:70%"></u></i><em>물어온다!</em></div>
  </div>
</div>`;

const SHOP = [["pet/cat", "야옹이", "앞을 한 번 치워 준다", "200", 0], ["pet/frog", "개굴이", "한 번 더 뛰어오른다", "260", 0],
  ["friend/mong1", "몽이", "10초마다 물어온다", "보유", 1], ["item/magnet", "자석", "간식을 끌어온다", "80", 0]];

const shopLand = () => `<div class="scr land shop">
  <div class="page"></div>
  ${strip(2)}
  <div class="mid">
    <div class="kinds">${["펫", "친구", "작전복", "아이템"].map((t, i) => `<button class="kind${i === 0 ? " on" : ""}" data-tap>${t}</button>`).join("")}</div>
    <div class="shelf">${SHOP.map(([p, n, d, c, own]) => `<article class="pan prod${own ? " own" : ""}" data-tap>
      <div class="pa">${im(p, "art")}</div><b>${n}</b><span>${d}</span>
      <span class="cost${own ? " got" : ""}">${own ? "보유 중" : ic("marble", "ic xs") + c}</span></article>`).join("")}</div>
  </div>
  <div class="col">
    <section class="pan balloon">${im("pet/sparrow", "big")}
      <h1>짹이 <em>Lv.2</em></h1>
      <p>14초마다 앞으로 날아가 간식 한 줄을 물어온다!</p>
      <i class="bar wide"><u style="--p:60%"></u></i><span class="eye">다음 레벨까지 3</span></section>
    <button class="pan act" data-tap="main">120에 강화</button>
    <button class="pan sub wide" data-tap>닫기</button>
  </div>
</div>`;

const lobbyPort = () => `<div class="scr port lobby">
  <div class="page"></div>
  ${heroPanel()}
  ${balloon}
  <button class="pan act" data-tap="main">사명 시작</button>
  <div class="two"><button class="pan sub" data-tap>사명 지도</button><button class="pan sub" data-tap>자유 달리기</button></div>
  ${quest}
  ${strip(0, "h")}
</div>`;

export const SCREENS = [
  ["가로 로비 — 만화 컷", 844, 390, lobbyLand],
  ["플레이 HUD — 효과음 상자", 844, 390, runLand],
  ["편의점 — 컷 진열", 844, 390, shopLand],
  ["세로 로비", 390, 844, lobbyPort],
];
