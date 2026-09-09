import { im } from "../shared/frame.js";

const rough = `<svg class="defs" width="0" height="0"><filter id="rough">
  <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="7" result="n"/>
  <feDisplacementMap in="SourceGraphic" in2="n" scale="3.2" xChannelSelector="R" yChannelSelector="G"/>
</filter></svg>`;

const tabs = (on) => `<nav class="index">
  ${["홈", "캐릭터", "편의점", "뽑기", "목표", "도움말"].map((t, i) => `<a class="tab t${i}${i === on ? " on" : ""}">${t}</a>`).join("")}
</nav>`;

const photo = `<figure class="polaroid">
  <span class="tape tl"></span><span class="tape tr"></span>
  <div class="ph">${im("idle/doyoung", "hero")}${im("friend/mong1", "dog")}${im("pet/sparrow", "bird")}</div>
  <figcaption>도영 · 몽이 · 짹이 · 소방관</figcaption>
</figure>`;

const lobbyLand = () => `<div class="scr land lobby">${rough}
  <div class="desk"></div>
  <div class="page">
    <div class="left">${photo}</div>
    <div class="right">
      <p class="date">12월 31일 · 겨울방학</p>
      <h1>사명 18<br>새해 첫 해</h1>
      <p class="note">새해 첫 해가 뜨기 전에 언덕 정상.<br>상상 없이, 형과 둘이서!</p>
      <ul class="list">
        <li><i class="box done"></i>Perfect 5회 연속 <b>0/5</b></li>
        <li><i class="box"></i>폭주 2회 <b>0/2</b></li>
      </ul>
      <div class="acts"><button class="crayon">시작!</button>
        <a class="pen">사명 지도</a><a class="pen">자유 달리기</a></div>
    </div>
  </div>
  <div class="clip"><b>4,010</b> 구슬 · <b>300</b> 별</div>
  ${tabs(0)}
</div>`;

const runLand = () => `<div class="scr land run">${rough}
  ${im("bg/apart", "art")}
  <div class="field">
    ${[1, 2, 3, 4, 5, 1].map((n, i) => im(`pick/jelly${n}`, `jelly j${i}`)).join("")}
    ${im("enemy/bag", "ob")}${im("hero/run1", "cast hero")}${im("friend/mong1", "cast dog")}${im("pet/sparrow", "cast bird")}
  </div>
  <div class="asphalt"></div>
  <div class="hud">
    <div class="score">2,635<em>×1.7</em><u></u></div>
    <div class="track"><i style="--p:42%"></i><b class="plane"></b><u class="flag"></u></div>
    <button class="pause"><span class="tape"></span></button>
    <div class="gauge"><span>상상</span><div class="tube"><i style="--p:62%"></i></div></div>
    <div class="tally">왕구슬 0/3 · 구슬 12</div>
    <button class="crc l"></button><button class="crc r"></button>
    <div class="sticky"><b>몽이 × 소방관</b><span>물어온다</span><div class="tube s"><i style="--p:70%"></i></div></div>
    <div class="petnote">${im("pet/sparrow", "pi")}<span>짹이</span></div>
  </div>
</div>`;

const ITEMS = [["pet/cat", "야옹이", "200"], ["pet/frog", "개굴이", "260"], ["item/magnet", "자석", "80"], ["item/shield", "망토", "150"]];

const shopLand = () => `<div class="scr land shop">${rough}
  <div class="cork"></div>
  <div class="board">
    ${ITEMS.map(([p, n, c], i) => `<figure class="polaroid sm r${i}">
      <span class="tape tl"></span>
      <div class="ph">${im(p, "art")}</div>
      <figcaption>${n}<b>${c}</b></figcaption>
    </figure>`).join("")}
  </div>
  <div class="detail">
    <figure class="polaroid big"><span class="tape tl"></span><span class="tape tr"></span>
      <div class="ph">${im("pet/sparrow", "art")}</div><figcaption>짹이 · Lv.2</figcaption></figure>
    <div class="torn">
      <p>14초마다 앞으로 날아가<br>간식 한 줄을 물어온다.</p>
      <div class="tube"><i style="--p:60%"></i></div><span class="hint">다음 레벨까지 3</span>
      <button class="crayon">120에 강화</button>
    </div>
  </div>
  <div class="clip"><b>4,010</b> 구슬 · <b>300</b> 별</div>
  ${tabs(2)}
</div>`;

const lobbyPort = () => `<div class="scr port lobby">${rough}
  <div class="desk"></div>
  <div class="page port">
    <div class="rings">${[...Array(9)].map(() => "<i></i>").join("")}</div>
    <p class="date">12월 31일 · 겨울방학</p>
    ${photo}
    <h1>사명 18 — 새해 첫 해</h1>
    <p class="note">새해 첫 해가 뜨기 전에 언덕 정상. 상상 없이, 형과 둘이서!</p>
    <ul class="list">
      <li><i class="box done"></i>Perfect 5회 연속 <b>0/5</b></li>
      <li><i class="box"></i>폭주 2회 <b>0/2</b></li>
    </ul>
    <div class="acts"><button class="crayon">시작!</button>
      <a class="pen">사명 지도</a><a class="pen">자유 달리기</a></div>
  </div>
  <div class="clip"><b>4,010</b> · <b>300</b></div>
  ${tabs(0)}
</div>`;

export const SCREENS = [
  ["가로 로비 — 펼친 공책", 844, 390, lobbyLand],
  ["플레이 HUD — 연필과 붙임쪽지", 844, 390, runLand],
  ["편의점 — 사진을 붙인 게시판", 844, 390, shopLand],
  ["세로 로비 — 스프링 노트", 390, 844, lobbyPort],
];
