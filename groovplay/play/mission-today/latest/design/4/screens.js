import { im } from "../shared/frame.js";

const seg = (n, on, boss = []) => [...Array(n)].map((_, i) =>
  `<i class="${i < on ? "on" : ""}${boss.includes(i) ? " bs" : ""}"></i>`).join("");

const rail = (on) => `<nav class="rail">
  ${["HOME", "UNIT", "SHOP", "GACHA", "GOAL", "HELP"].map((t, i) =>
    `<button class="ri${i === on ? " on" : ""}"><span class="gl g${i}"></span><em>${t}</em></button>`).join("")}
</nav>`;

const sysbar = `<div class="sys">
  <b class="wm">MISSION<span>TODAY</span></b>
  <span class="sep"></span><span class="ln">SESSION <b>17</b>/18</span>
  <span class="ln">STAR <b>34</b>/54</span>
  <div class="rd"><span>MARBLE</span><b>4,010</b><span>STICKER</span><b>300</b></div>
  <button class="sq cfg"></button>
</div>`;

const viewport = `<div class="port-view">
  <span class="br tl"></span><span class="br tr"></span><span class="br bl"></span><span class="br br2"></span>
  <div class="vv">${im("idle/doyoung", "hero")}${im("friend/mong1", "dog")}${im("pet/sparrow", "bird")}<div class="scan"></div></div>
  <div class="strip"><b>UNIT</b> 도영 <s></s> <b>PET</b> 짹이 <s></s> <b>MATE</b> 몽이 <s></s> <b>SUIT</b> 소방관</div>
</div>`;

const lobbyLand = () => `<div class="scr land lobby">
  ${sysbar}${rail(0)}
  <div class="stagearea">${viewport}</div>
  <aside class="col">
    <section class="pnl">
      <h3>MISSION 18<em>EP.3 겨울방학</em></h3>
      <p class="ttl">새해 첫 해</p>
      <p class="dsc">새해 첫 해가 뜨기 전에 언덕 정상. 상상 없이, 형과 둘이서.</p>
      <div class="mrow"><span>DIFFICULTY</span><div class="segs">${seg(10, 6)}</div></div>
      <div class="mrow"><span>CLEAR</span><div class="leds"><i class="on"></i><i class="on"></i><i></i></div></div>
    </section>
    <section class="pnl">
      <div class="mrow"><span>PERFECT ×5</span><div class="segs sm">${seg(10, 0)}</div><b>0/5</b></div>
      <div class="mrow"><span>BURST ×2</span><div class="segs sm">${seg(10, 0)}</div><b>0/2</b></div>
    </section>
    <button class="start"><span class="br tl"></span><span class="br br2"></span>START</button>
    <div class="subrow"><button class="sub">MISSION MAP</button><button class="sub">ENDLESS</button></div>
  </aside>
</div>`;

const runLand = () => `<div class="scr land run">
  ${im("bg/apart", "art")}
  <div class="field">
    ${[1, 2, 3, 4, 5, 1].map((n, i) => im(`pick/jelly${n}`, `jelly j${i}`)).join("")}
    ${im("enemy/bag", "ob")}${im("hero/run1", "cast hero")}${im("friend/mong1", "cast dog")}${im("pet/sparrow", "cast bird")}
  </div>
  <div class="asphalt"></div>
  <div class="hud">
    <div class="hb score"><span class="br tl"></span><em>SCORE</em><b>2,635</b><u>×1.7</u></div>
    <div class="hb prog"><em>COURSE</em><div class="segs">${seg(16, 7, [11, 12, 13])}</div><u class="fin"></u></div>
    <div class="hb gau"><em>IMAGINE</em><div class="segs vio">${seg(8, 5)}</div></div>
    <button class="sq pause"><span></span><span></span></button>
    <div class="hb tal"><em>KING</em><b>0/3</b><s></s><em>MARBLE</em><b>12</b></div>
    <button class="pad l"><span class="br tl"></span><span class="br br2"></span></button>
    <button class="pad r"><span class="br tl"></span><span class="br br2"></span></button>
    <div class="hb petm">${im("pet/sparrow", "pi")}<div class="segs vert">${seg(5, 4)}</div></div>
    <div class="hb bld"><em>LOADOUT</em><b>몽이 × 소방관</b><div class="segs sm">${seg(10, 7)}</div><u>FETCH</u></div>
  </div>
</div>`;

const ROWS = [["pet/sparrow", "짹이", "PET", "14초마다 간식 한 줄", "OWNED", 1],
  ["pet/cat", "야옹이", "PET", "앞을 한 번 치워 준다", "200", 0],
  ["pet/frog", "개굴이", "PET", "한 번 더 뛰어오른다", "260", 0],
  ["friend/mong1", "몽이", "MATE", "10초마다 물어온다", "OWNED", 0],
  ["item/magnet", "자석", "ITEM", "간식을 끌어온다", "80", 0],
  ["item/shield", "망토", "ITEM", "한 번 막아 준다", "150", 0]];

const shopLand = () => `<div class="scr land shop">
  ${sysbar}${rail(2)}
  <div class="term">
    <div class="tcol">
      <p class="lb">CATEGORY</p>
      ${["PET", "MATE", "SUIT", "ITEM"].map((c, i) => `<button class="cat${i === 0 ? " on" : ""}">${c}</button>`).join("")}
    </div>
    <div class="tbl">
      <div class="thead"><span>ITEM</span><span>TYPE</span><span>EFFECT</span><span>COST</span></div>
      ${ROWS.map(([p, n, t, d, c, on]) => `<div class="tr${on ? " on" : ""}">
        ${on ? '<span class="br tl"></span><span class="br br2"></span>' : ""}
        <span class="c1">${im(p, "th")}${n}</span><span class="c2">${t}</span>
        <span class="c3">${d}</span><span class="c4 ${c === "OWNED" ? "own" : ""}">${c}</span></div>`).join("")}
    </div>
    <div class="tact">
      <div class="mrow"><span>LEVEL</span><div class="segs sm">${seg(10, 6)}</div><b>Lv.2</b></div>
      <button class="start sm">UPGRADE · 120</button>
    </div>
  </div>
</div>`;

const lobbyPort = () => `<div class="scr port lobby">
  ${sysbar}
  <div class="stagearea">${viewport}</div>
  <aside class="col">
    <section class="pnl">
      <h3>MISSION 18<em>EP.3</em></h3><p class="ttl">새해 첫 해</p>
      <p class="dsc">새해 첫 해가 뜨기 전에 언덕 정상. 상상 없이, 형과 둘이서.</p>
      <div class="mrow"><span>DIFFICULTY</span><div class="segs">${seg(10, 6)}</div></div>
    </section>
    <button class="start"><span class="br tl"></span><span class="br br2"></span>START</button>
    <div class="subrow"><button class="sub">MISSION MAP</button><button class="sub">ENDLESS</button></div>
  </aside>
  <nav class="rail bot">
    ${["HOME", "UNIT", "SHOP", "GACHA", "GOAL", "HELP"].map((t, i) =>
      `<button class="ri${i === 0 ? " on" : ""}"><span class="gl g${i}"></span><em>${t}</em></button>`).join("")}
  </nav>
</div>`;

export const SCREENS = [
  ["가로 로비 — 베젤 뷰포트와 계기 패널", 844, 390, lobbyLand],
  ["플레이 HUD — 칸으로 나뉜 계기", 844, 390, runLand],
  ["편의점 — 단말 목록", 844, 390, shopLand],
  ["세로 로비", 390, 844, lobbyPort],
];
