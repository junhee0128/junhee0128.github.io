import { im } from "../shared/frame.js";

const purse = `<div class="purse"><span>4,010</span><s></s><span>300</span></div>`;
const meta = `<div class="meta">사명 17<i>/</i>18<s></s>★ 34<s></s>지령 2</div>`;

const lobbyBlock = `
  <p class="ep">에피소드 3 · 겨울방학</p>
  <h1 class="title">새해 첫 해</h1>
  <p class="sub">새해 첫 해가 뜨기 전에 언덕 정상.<br>상상 없이, 형과 둘이서.</p>
  <div class="acts">
    <button class="go">사명 시작</button>
    <a class="link">사명 지도</a><i class="dot">·</i><a class="link">자유 달리기</a>
  </div>`;

const lobbyLand = () => `<div class="scr land lobby">
  ${im("open/lobby", "art")}
  <div class="veil"></div>
  ${im("idle/doyoung", "cast hero")}
  ${im("friend/mong1", "cast dog")}
  ${im("pet/sparrow", "cast bird")}
  <button class="menu"><span></span><span></span><span></span></button>
  <div class="mark">오늘의 사명</div>
  ${purse}
  <div class="block">${lobbyBlock}</div>
  ${meta}
</div>`;

const runLand = () => `<div class="scr land run">
  ${im("bg/apart", "art")}
  <div class="field">
    ${[1, 2, 3, 4, 5, 1].map((n, i) => im(`pick/jelly${n}`, `jelly j${i}`)).join("")}
    ${im("enemy/bag", "ob")}
    ${im("hero/run1", "cast hero")}
    ${im("friend/mong1", "cast dog")}
    ${im("pet/sparrow", "cast bird")}
  </div>
  <div class="asphalt"></div>
  <div class="hud">
    <div class="edge"><b class="boss"></b><i style="--p:42%"></i><u></u></div>
    <div class="score">2,635<em>×1.7</em></div>
    <button class="pause"><span></span><span></span></button>
    <div class="right"><span class="thin"><i style="--p:62%"></i></span><b>상상</b></div>
    <div class="tally">왕구슬 0/3<s></s>구슬 12</div>
    <div class="zone l"></div><div class="zone r"></div>
    <p class="caption">몽이 × 소방관 — 물어온다<em><i style="--p:70%"></i></em></p>
  </div>
</div>`;

const shopLand = () => `<div class="scr land shop">
  ${im("bg/market", "art")}
  <div class="veil"></div>
  <button class="back"></button>
  <div class="mark">편의점</div>
  ${purse}
  <div class="reel">
    <button class="arw l"></button>
    ${im("pet/sparrow", "big")}
    <div class="info">
      <p class="ep">펫 · 01 / 06 · 보유 중 Lv.2</p>
      <h1 class="title">짹이</h1>
      <p class="sub">14초마다 앞으로 날아가 간식 한 줄을 물어온다.<br>레벨이 오르면 더 멀리 간다.</p>
      <div class="acts"><button class="go">120에 강화</button><a class="link">다음 레벨까지 3</a></div>
    </div>
    <button class="arw r"></button>
  </div>
  <div class="dots"><i class="on"></i><i></i><i></i><i></i><i></i><i></i></div>
</div>`;

const lobbyPort = () => `<div class="scr port lobby">
  ${im("open/lobby", "art")}
  <div class="veil"></div>
  ${im("idle/doyoung", "cast hero")}
  ${im("friend/mong1", "cast dog")}
  ${im("pet/sparrow", "cast bird")}
  <button class="menu"><span></span><span></span><span></span></button>
  <div class="mark">오늘의 사명</div>
  ${purse}
  <div class="block">${lobbyBlock}</div>
  ${meta}
</div>`;

export const SCREENS = [
  ["가로 로비", 844, 390, lobbyLand],
  ["플레이 HUD", 844, 390, runLand],
  ["편의점 — 한 번에 하나", 844, 390, shopLand],
  ["세로 로비", 390, 844, lobbyPort],
];
