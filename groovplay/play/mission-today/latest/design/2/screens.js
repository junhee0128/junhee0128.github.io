import { im } from "../shared/frame.js";

const lobbyLand = () => `<div class="scr land lobby">
  <div class="grid">
    <section class="t cast">
      <header><h2>도영</h2><p>몽이 · 짹이 · 소방관</p></header>
      <div class="stage">${im("idle/doyoung", "hero")}${im("friend/mong1", "dog")}${im("pet/sparrow", "bird")}</div>
      <footer><span class="tag">캐릭터 바꾸기</span></footer>
    </section>

    <section class="t mission">
      <p class="k">다음 사명</p>
      <div class="row">
        ${im("cover/ep3", "cover")}
        <div>
          <h1>사명 18 <em>새해 첫 해</em></h1>
          <p class="d">새해 첫 해가 뜨기 전에 언덕 정상. 상상 없이, 형과 둘이서.</p>
          <p class="stars"><i class="on"></i><i class="on"></i><i></i> <span>에피소드 3 · 겨울방학</span></p>
        </div>
      </div>
      <div class="acts"><button class="go">사명 시작</button><button class="ghost">사명 지도</button><button class="ghost">자유 달리기</button></div>
    </section>

    <section class="t purse">
      <p class="k">보유</p>
      <p class="n"><i class="m"></i>4,010</p>
      <p class="n"><i class="s"></i>300</p>
      <span class="cog"></span>
    </section>

    <section class="t goal">
      <p class="k">목표</p>
      <p class="n">34<em>/54</em></p>
      <div class="bar"><i style="--p:63%"></i></div>
    </section>

    <section class="t nav shopt"><span class="ic"></span><p>편의점</p></section>
    <section class="t nav gachat"><span class="ic"></span><p>뽑기</p><em class="dot"></em></section>

    <section class="t quest">
      <p class="k">오늘의 추가 지령</p>
      <div class="q"><span>Perfect 5회 연속</span><div class="bar"><i style="--p:0%"></i></div><b>0/5</b></div>
      <div class="q"><span>폭주 2회</span><div class="bar"><i style="--p:0%"></i></div><b>0/2</b></div>
    </section>
  </div>
</div>`;

const runLand = () => `<div class="scr land run">
  ${im("bg/apart", "art")}
  <div class="field">
    ${[1, 2, 3, 4, 5, 1].map((n, i) => im(`pick/jelly${n}`, `jelly j${i}`)).join("")}
    ${im("enemy/bag", "ob")}${im("hero/run1", "cast hero")}${im("friend/mong1", "cast dog")}${im("pet/sparrow", "cast bird")}
  </div>
  <div class="asphalt"></div>
  <div class="hud">
    <div class="cap score"><b>2,635</b><span>×1.7</span><s></s><span class="c">왕구슬 0/3</span><span class="c">구슬 12</span></div>
    <div class="cap prog">${[...Array(14)].map((_, i) => `<i class="${i < 6 ? "on" : i > 8 && i < 12 ? "boss" : ""}"></i>`).join("")}<u></u></div>
    <div class="cap gaugec"><span>상상</span><div class="bar"><i style="--p:62%"></i></div></div>
    <button class="cap pause"><span></span><span></span></button>
    <div class="pad l"></div><div class="pad r"></div>
    <div class="cap pet"><svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="17"/><circle class="p" cx="20" cy="20" r="17"/></svg>${im("pet/sparrow", "pi")}</div>
    <div class="cap build"><b>몽이 × 소방관</b><div class="bar"><i style="--p:70%"></i></div><span>물어온다</span></div>
  </div>
</div>`;

const SHOP = [["pet/cat", "야옹이", "앞을 한 번 치워 준다", "200"], ["pet/frog", "개굴이", "한 번 더 뛰어오른다", "260"],
  ["friend/mong1", "몽이", "10초마다 물어온다", "보유"], ["item/magnet", "자석", "간식을 끌어온다", "80"],
  ["item/shield", "망토", "한 번 막아 준다", "150"], ["pet/hamster", "햄햄", "구슬을 굴려 온다", "320"]];

const shopLand = () => `<div class="scr land shop">
  <div class="grid shopgrid">
    <section class="t head">
      <button class="back"></button><h1>편의점</h1>
      <div class="tabs"><b class="on">펫</b><b>친구</b><b>작전복</b><b>아이템</b></div>
      <div class="purseline"><i class="m"></i>4,010<i class="s"></i>300</div>
    </section>
    <section class="t feature">
      ${im("pet/sparrow", "big")}
      <div class="fx">
        <p class="k">선택됨 · 보유 중 Lv.2</p>
        <h1>짹이</h1>
        <p class="d">14초마다 앞으로 날아가 간식 한 줄을 물어온다. 레벨이 오르면 더 멀리 간다.</p>
        <div class="bar wide"><i style="--p:60%"></i></div><p class="hint">다음 레벨까지 3</p>
        <button class="go">120에 강화</button>
      </div>
    </section>
    ${SHOP.map(([p, n, d, c]) => `<section class="t item"><div class="ia">${im(p, "art")}</div>
      <div class="it"><b>${n}</b><span>${d}</span></div>
      <span class="price ${c === "보유" ? "got" : ""}">${c === "보유" ? "보유 중" : c}</span></section>`).join("")}
  </div>
</div>`;

const lobbyPort = () => `<div class="scr port lobby">
  <div class="grid pgrid">
    <section class="t purse">
      <p class="k">보유</p><p class="n"><i class="m"></i>4,010</p><p class="n"><i class="s"></i>300</p><span class="cog"></span>
    </section>
    <section class="t goal"><p class="k">목표</p><p class="n">34<em>/54</em></p><div class="bar"><i style="--p:63%"></i></div></section>
    <section class="t cast">
      <header><h2>도영</h2><p>몽이 · 짹이 · 소방관</p></header>
      <div class="stage">${im("idle/doyoung", "hero")}${im("friend/mong1", "dog")}${im("pet/sparrow", "bird")}</div>
      <footer><span class="tag">캐릭터 바꾸기</span></footer>
    </section>
    <section class="t mission">
      <p class="k">다음 사명</p>
      <div class="row">${im("cover/ep3", "cover")}<div>
        <h1>사명 18 <em>새해 첫 해</em></h1>
        <p class="d">새해 첫 해가 뜨기 전에 언덕 정상.</p>
        <p class="stars"><i class="on"></i><i class="on"></i><i></i> <span>에피소드 3</span></p></div></div>
      <div class="acts"><button class="go">사명 시작</button><button class="ghost">사명 지도</button><button class="ghost">자유 달리기</button></div>
    </section>
    <section class="t nav shopt"><span class="ic"></span><p>편의점</p></section>
    <section class="t nav gachat"><span class="ic"></span><p>뽑기</p><em class="dot"></em></section>
    <section class="t quest">
      <p class="k">오늘의 추가 지령</p>
      <div class="q"><span>Perfect 5회 연속</span><div class="bar"><i style="--p:0%"></i></div><b>0/5</b></div>
      <div class="q"><span>폭주 2회</span><div class="bar"><i style="--p:0%"></i></div><b>0/2</b></div>
    </section>
  </div>
</div>`;

export const SCREENS = [
  ["가로 로비 — 6×3 타일", 844, 390, lobbyLand],
  ["플레이 HUD — 계기 캡슐", 844, 390, runLand],
  ["편의점 — 타일 목록 + 인라인 상세", 844, 390, shopLand],
  ["세로 로비 — 4열 타일", 390, 844, lobbyPort],
];
