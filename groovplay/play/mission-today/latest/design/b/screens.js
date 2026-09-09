import { im } from "../shared/frame.js";
const ic = (n, cls = "ic") => `<img class="${cls}" src="../art/b/${n}.webp" alt="">`;
const NAV = [["home", "홈"], ["char", "캐릭터"], ["shop", "편의점"], ["gacha", "뽑기"], ["goal", "목표"]];

const tabs = (on) => `<nav class="tabrow">
  ${NAV.map(([k, l], i) => `<button class="tb${i === on ? " on" : ""}" data-tap>
    ${ic(k)}<em>${l}</em>${k === "gacha" ? '<u class="dot"></u>' : ""}</button>`).join("")}
</nav>`;

const purse = `<div class="purse">
  <span class="chip" data-tap>${ic("marble", "ic xs")}4,010</span>
  <span class="chip" data-tap>${ic("sticker", "ic xs")}300</span>
  <button class="chip gear" data-tap></button>
</div>`;

const stage = () => `<section class="stage">
  <span class="tape t1"></span>
  <div class="ground"></div>
  ${im("idle/doyoung", "hero")}${im("friend/mong1", "dog")}${im("pet/sparrow", "bird")}
  <div class="label"><b>도영</b><span>몽이 · 짹이 · 소방관</span></div>
</section>`;

const mission = `<article class="fold mission">
  <span class="tape t2"></span>
  <div class="mrow">${im("cover/ep3", "cov")}
    <div><span class="eye">에피소드 3 · 겨울방학</span><h1>사명 18 — 새해 첫 해</h1>
      <p>새해 첫 해가 뜨기 전에 언덕 정상. 상상 없이, 형과 둘이서.</p></div></div>
  <div class="stars">${ic("badge", "st on")}${ic("badge", "st on")}${ic("badge", "st")}</div>
</article>`;

const quest = `<article class="fold quest">
  <h4>오늘의 추가 지령</h4>
  <div class="qr"><span>Perfect 5회 연속</span><i class="bar"><u style="--p:0%"></u></i><b>0/5</b></div>
  <div class="qr"><span>폭주 2회</span><i class="bar"><u style="--p:0%"></u></i><b>0/2</b></div>
</article>`;

const lobbyLand = () => `<div class="scr land lobby">
  <div class="board"></div>
  ${tabs(0)}${purse}
  ${stage()}
  <aside class="side">${mission}
    <button class="btn go" data-tap="main">사명 시작</button>
    <div class="two"><button class="btn" data-tap>사명 지도</button><button class="btn" data-tap>자유 달리기</button></div>
    ${quest}</aside>
</div>`;

const runLand = () => `<div class="scr land run">
  ${im("bg/apart", "bg")}
  <div class="field">${[1, 2, 3, 4, 5, 1].map((n, i) => im(`pick/jelly${n}`, `jelly j${i}`)).join("")}
    ${im("enemy/bag", "ob")}${im("hero/run1", "runner")}${im("friend/mong1", "dog")}${im("pet/sparrow", "bird")}</div>
  <div class="road"></div>
  <div class="hud">
    <div class="note score"><b>2,635</b><em>×1.7</em></div>
    <div class="strip"><i style="--p:42%"></i><s class="boss"></s><u class="pin"></u></div>
    <div class="gau">${ic("badge", "ic xs")}<i class="bar wide"><u style="--p:62%"></u></i></div>
    <button class="chip pause" data-tap><span></span><span></span></button>
    <div class="tally"><span class="chip sm">${ic("king", "ic xs")}0/3</span><span class="chip sm">${ic("marble", "ic xs")}12</span></div>
    <button class="felt l" data-tap></button><button class="felt r" data-tap></button>
    <div class="petnote"><svg viewBox="0 0 56 56"><circle cx="28" cy="28" r="23"/><circle class="p" cx="28" cy="28" r="23"/></svg>${im("pet/sparrow", "pi")}</div>
    <div class="note build"><b>몽이 × 소방관</b><i class="bar"><u style="--p:70%"></u></i><em>물어온다</em></div>
  </div>
</div>`;

const SHOP = [["pet/cat", "야옹이", "앞을 한 번 치워 준다", "200", 0], ["pet/frog", "개굴이", "한 번 더 뛰어오른다", "260", 0],
  ["friend/mong1", "몽이", "10초마다 물어온다", "보유", 1], ["item/magnet", "자석", "간식을 끌어온다", "80", 0]];

const shopLand = () => `<div class="scr land shop">
  <div class="board"></div>
  ${tabs(2)}${purse}
  <div class="mid">
    <div class="kinds">${["펫", "친구", "작전복", "아이템"].map((t, i) => `<button class="kind${i === 0 ? " on" : ""}" data-tap>${t}</button>`).join("")}</div>
    <div class="shelf">${SHOP.map(([p, n, d, c, own]) => `<article class="fold prod${own ? " own" : ""}" data-tap>
      <span class="tape t3"></span><div class="pa">${im(p, "art")}</div>
      <b>${n}</b><span>${d}</span><span class="cost${own ? " got" : ""}">${own ? "보유 중" : ic("marble", "ic xs") + c}</span>
    </article>`).join("")}</div>
  </div>
  <aside class="side">
    <article class="fold big"><span class="tape t2"></span>${im("pet/sparrow", "hero2")}
      <h1>짹이 <em>Lv.2</em></h1>
      <p>14초마다 앞으로 날아가 간식 한 줄을 물어온다. 레벨이 오르면 더 멀리 간다.</p>
      <i class="bar wide"><u style="--p:60%"></u></i><span class="eye">다음 레벨까지 3</span></article>
    <button class="btn go" data-tap="main">${ic("marble", "ic xs")}120에 강화</button>
    <button class="btn" data-tap>닫기</button>
  </aside>
</div>`;

const lobbyPort = () => `<div class="scr port lobby">
  <div class="board"></div>
  ${tabs(0)}${purse}
  ${stage()}
  <div class="side">${mission}
    <button class="btn go" data-tap="main">사명 시작</button>
    <div class="two"><button class="btn" data-tap>사명 지도</button><button class="btn" data-tap>자유 달리기</button></div>
    ${quest}</div>
</div>`;

export const SCREENS = [
  ["가로 로비 — 위 탭 · 종이 판", 844, 390, lobbyLand],
  ["플레이 HUD — 붙임쪽지 계기", 844, 390, runLand],
  ["편의점 — 붙여 놓은 진열", 844, 390, shopLand],
  ["세로 로비", 390, 844, lobbyPort],
];
