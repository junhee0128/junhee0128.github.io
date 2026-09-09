import { im } from "../shared/frame.js";

const ic = (d, n, cls = "ic") => `<img class="${cls}" src="../art/${d}/${n}.webp" alt="">`;
const NAV = [["home", "홈"], ["char", "캐릭터"], ["shop", "편의점"], ["gacha", "뽑기"], ["goal", "목표"]];

const topbar = (title) => `<header class="top">
  ${title ? `<button class="plate back" data-tap>${ic("a", "help", "ic sm")}</button><h2>${title}</h2>`
          : `<div class="prog"><b>사명 17</b><span>/18</span><i class="sep"></i>${ic("a", "sticker", "ic xs")}<b>34</b><span>/54</span></div>`}
  <div class="purse">
    <span class="coin" data-tap>${ic("a", "marble", "ic xs")}4,010<b>+</b></span>
    <span class="coin" data-tap>${ic("a", "sticker", "ic xs")}300<b>+</b></span>
    <button class="plate gear" data-tap></button>
  </div>
</header>`;

const rail = (on) => `<nav class="rail">
  ${NAV.map(([k, l], i) => `<button class="ri${i === on ? " on" : ""}" data-tap>
    <span class="slot">${ic("a", k)}</span><em>${l}</em>${k === "gacha" ? '<u class="dot"></u>' : ""}</button>`).join("")}
</nav>`;

const stage = () => `<section class="stage">
  <div class="rug"></div>
  <div class="birdshade"></div>
  ${im("idle/doyoung", "hero")}${im("friend/mong1", "dog")}${im("pet/sparrow", "bird")}
  <div class="tagplate"><b>도영</b><span>몽이 · 짹이 · 소방관</span></div>
</section>`;

const missionCard = `<article class="card mission">
  ${im("cover/ep3", "cov")}
  <div class="mt">
    <span class="eyebrow">에피소드 3 · 겨울방학</span>
    <h1>사명 18 <em>새해 첫 해</em></h1>
    <p>새해 첫 해가 뜨기 전에 언덕 정상. 상상 없이, 형과 둘이서.</p>
  </div>
  <div class="stars">${ic("a", "badge", "st on")}${ic("a", "badge", "st on")}${ic("a", "badge", "st")}</div>
</article>`;

const quest = `<article class="card quest">
  <h4>오늘의 지령</h4>
  <div class="qr"><span>Perfect</span><div class="bar"><i style="--p:0%"></i></div><b>0/5</b></div>
  <div class="qr"><span>폭주</span><div class="bar"><i style="--p:0%"></i></div><b>0/2</b></div>
</article>`;

const lobbyLand = () => `<div class="scr land lobby">
  ${im("open/lobby", "bg")}<div class="veil"></div>
  ${rail(0)}
  ${topbar()}
  ${stage()}
  <aside class="panel">
    ${missionCard}
    <button class="btn go" data-tap="main">사명 시작</button>
    <div class="two"><button class="btn sub" data-tap>사명 지도</button><button class="btn sub" data-tap>자유 달리기</button></div>
    ${quest}
  </aside>
</div>`;

const runLand = () => `<div class="scr land run">
  ${im("bg/apart", "bg")}
  <div class="field">
    ${[1, 2, 3, 4, 5, 1].map((n, i) => im(`pick/jelly${n}`, `jelly j${i}`)).join("")}
    ${im("enemy/bag", "ob")}${im("hero/run1", "runner")}${im("friend/mong1", "dog")}${im("pet/sparrow", "bird")}
  </div>
  <div class="road"></div>
  <div class="hud">
    <div class="scoreplate"><b>2,635</b><em>×1.7</em></div>
    <div class="course"><i style="--p:42%"></i><s class="boss"></s>${im("face/doyoung", "mk")}<u class="fin"></u></div>
    <div class="imag">${ic("a", "badge", "ic xs")}<div class="tube"><i style="--p:62%"></i></div></div>
    <button class="plate pause" data-tap><span></span><span></span></button>
    <div class="tally"><span class="coin sm">${ic("a", "king", "ic xs")}0/3</span><span class="coin sm">${ic("a", "marble", "ic xs")}12</span></div>
    <button class="ctl l" data-tap></button><button class="ctl r" data-tap></button>
    <div class="petring"><svg viewBox="0 0 56 56"><circle cx="28" cy="28" r="23"/><circle class="p" cx="28" cy="28" r="23"/></svg>${im("pet/sparrow", "pi")}</div>
    <div class="ribbon"><img src="../art/a/ribbon.webp" alt=""><span><b>몽이 × 소방관</b><i class="mini"><u style="--p:70%"></u></i>물어온다</span></div>
  </div>
</div>`;

const SHOP = [["pet/cat", "야옹이", "앞을 한 번 치워 준다", "200", 0], ["pet/frog", "개굴이", "한 번 더 뛰어오른다", "260", 0],
  ["friend/mong1", "몽이", "10초마다 물어온다", "보유 중", 1], ["item/magnet", "자석", "간식을 끌어온다", "80", 0]];

const shopLand = () => `<div class="scr land shop">
  ${im("bg/market", "bg")}<div class="veil"></div>
  ${rail(2)}
  ${topbar("편의점")}
  <div class="mid">
    <div class="tabs">${["펫", "친구", "작전복", "아이템"].map((t, i) => `<button class="tab${i === 0 ? " on" : ""}" data-tap>${t}</button>`).join("")}</div>
    <div class="shelf">
      ${SHOP.map(([p, n, d, c, own]) => `<article class="card prod${own ? " own" : ""}" data-tap>
        <div class="pa">${im(p, "art")}</div>
        <b>${n}</b><span>${d}</span>
        <span class="price${own ? " got" : ""}">${own ? "보유 중" : ic("a", "marble", "ic xs") + c}</span>
      </article>`).join("")}
    </div>
  </div>
  <aside class="panel detail">
    <div class="dhead">${im("pet/sparrow", "big")}<div><h1>짹이</h1><span class="eyebrow">펫 · Lv.2 · 보유 중</span></div></div>
    <p class="dd">14초마다 앞으로 날아가 간식 한 줄을 물어온다. 레벨이 오르면 더 멀리 간다.</p>
    <div class="lv"><div class="bar"><i style="--p:60%"></i></div><span>다음 레벨까지 3</span></div>
    <button class="btn go" data-tap="main">${ic("a", "marble", "ic xs")}120에 강화</button>
    <button class="btn sub" data-tap>닫기</button>
  </aside>
</div>`;

const lobbyPort = () => `<div class="scr port lobby">
  ${im("open/lobby", "bg")}<div class="veil"></div>
  ${topbar()}
  ${stage()}
  <div class="panel">
    ${missionCard}
    <button class="btn go" data-tap="main">사명 시작</button>
    <div class="two"><button class="btn sub" data-tap>사명 지도</button><button class="btn sub" data-tap>자유 달리기</button></div>
    ${quest}
  </div>
  <nav class="dock">
    ${NAV.map(([k, l], i) => `<button class="dk${i === 0 ? " on" : ""}" data-tap>
      <span class="slot">${ic("a", k)}</span><em>${l}</em>${k === "gacha" ? '<u class="dot"></u>' : ""}</button>`).join("")}
  </nav>
</div>`;

export const SCREENS = [
  ["가로 로비", 844, 390, lobbyLand],
  ["플레이 HUD", 844, 390, runLand],
  ["편의점", 844, 390, shopLand],
  ["세로 로비", 390, 844, lobbyPort],
];
