// 시안 공용 골격. 다섯 시안이 같은 화면·같은 마크업을 쓰고, 보이는 것만 theme.css가 정한다.
// 그래서 비교가 색과 재질의 비교가 된다 — 배치는 이미 FRONTEND_PLAN §3.2대로 고쳐진 상태다.
const IMG = document.documentElement.dataset.img || "../../img";
const S = 2; // @2x

const img = (p, cls = "") => `<img class="${cls}" src="${IMG}/${p}@${S}x.webp" alt="">`;

const rail = (on) => `
<nav class="rail">
  ${[["home","홈"],["char","캐릭터"],["shop","편의점"],["gacha","뽑기"],["goal","목표"],["help","도움말"]]
    .map(([k,l],i)=>`<button class="rail-i${i===on?" on":""}" data-k="${k}"><span class="ic ic-${k}"></span><b>${l}</b>${k==="gacha"?'<em class="dot"></em>':""}</button>`).join("")}
</nav>`;

const chips = `
<span class="chip marble"><i></i>4,010</span>
<span class="chip sticker"><i></i>300</span>
<button class="icobtn gear"><span class="ic ic-gear"></span></button>`;

const missionCard = `
<article class="card mission">
  ${img("cover/ep3","cover")}
  <div class="mtext">
    <span class="eyebrow">에피소드 3 · 겨울방학</span>
    <h3>사명 18 — 새해 첫 해</h3>
    <p>새해 첫 해가 뜨기 전에 언덕 정상. 상상 없이, 형과 둘이서.</p>
    <span class="stars"><i class="on"></i><i class="on"></i><i></i></span>
  </div>
</article>`;

const questCard = `
<article class="card quest">
  <h4>오늘의 추가 지령</h4>
  <ul>
    <li><span>Perfect 5회 연속</span><b>0/5</b></li>
    <li><span>폭주 2회</span><b>0/2</b></li>
  </ul>
</article>`;

const stage = `
<section class="stage">
  <div class="nameplate"><b>도영</b><span>몽이 · 짹이 · 소방관</span></div>
  <div class="cast">
    ${img("pet/sparrow","actor bird")}
    ${img("idle/doyoung","actor hero")}
    ${img("friend/mong1","actor dog")}
  </div>
  <div class="podium"></div>
</section>`;

function lobbyLand() {
  return `<div class="scr land lobby">
  ${img("open/lobby","bg")}<div class="scrim"></div>
  ${rail(0)}
  <header class="topline">
    <div class="stat">사명 <b>17/18</b> · ★ <b>34/54</b></div>
    <div class="chips">${chips}</div>
  </header>
  <div class="body">
    ${stage}
    <aside class="side">
      ${missionCard}
      <button class="btn primary big"><span class="ic ic-play"></span>사명 시작</button>
      <div class="row2"><button class="btn">사명 지도</button><button class="btn">∞ 자유 달리기</button></div>
      ${questCard}
    </aside>
  </div>
</div>`;
}

function runLand() {
  const jellies = [1,2,3,4,5,1].map((n,i)=>`<img class="jelly j${i}" src="${IMG}/pick/jelly${n}@${S}x.webp" alt="">`).join("");
  return `<div class="scr land run">
  ${img("bg/apart","bg")}
  <div class="field">
    ${jellies}
    ${img("enemy/bag","obstacle")}
    ${img("hero/run1","actor hero")}
    ${img("friend/mong1","actor dog")}
    ${img("pet/sparrow","actor bird")}
  </div>
  <div class="road"></div>
  <div class="hud">
    <div class="tl"><div class="score">2,635</div><div class="chain">×1.7 <em>7 연속!</em></div></div>
    <div class="tc"><div class="progress"><i style="--p:42%"></i><b class="boss"></b><s class="me"></s><u class="flag"></u></div></div>
    <div class="tr">
      <div class="gauge"><i style="--p:62%"></i></div>
      <div class="glabel">상상</div>
      <div class="counters"><span><i class="ic ic-king"></i>0/3</span><span><i class="ic ic-marble"></i>12</span></div>
    </div>
    <button class="pause"><span class="ic ic-pause"></span></button>
    <div class="band">
      <div class="ctl duck"><span class="ic ic-down"></span><em>숙이기 · 공중에선 회전</em></div>
      <div class="petring"><svg viewBox="0 0 44 44"><circle class="t" cx="22" cy="22" r="19"/><circle class="p" cx="22" cy="22" r="19"/></svg>${img("pet/sparrow","pi")}<em>짹이</em></div>
      <div class="build"><b>몽이 <s>×</s> 소방관</b><div class="mini"><i style="--p:70%"></i></div><em>물어온다</em></div>
      <div class="ctl jump"><span class="ic ic-up"></span><em>뛰기 · 한 번 더 = 2단</em></div>
    </div>
  </div>
</div>`;
}

const SHOP = [
  ["pet/sparrow","짹이","날아가 간식을 물어온다","120",1],
  ["pet/cat","야옹이","앞을 한 번 치워 준다","200",0],
  ["pet/frog","개굴이","한 번 더 뛰어오른다","260",0],
  ["friend/mong1","몽이","10초마다 간식을 물어온다","300",1],
  ["item/magnet","자석","주변 간식을 끌어온다","80",0],
  ["item/shield","망토","한 번 막아 준다","150",0],
];

function shopLand() {
  return `<div class="scr land shop">
  ${img("bg/market","bg")}<div class="scrim"></div>
  ${rail(2)}
  <header class="topline">
    <div class="stat"><button class="icobtn back"><span class="ic ic-back"></span></button> 편의점</div>
    <div class="chips">${chips}</div>
  </header>
  <div class="body">
    <div class="tabs">${["펫","친구","작전복","아이템"].map((t,i)=>`<button class="tab${i===0?" on":""}">${t}</button>`).join("")}</div>
    <div class="grid">
      ${SHOP.map(([p,n,d,c,owned])=>`<article class="card item${owned?" owned":""}">
        ${img(p,"art")}
        <div class="itext"><b>${n}</b><span>${d}</span></div>
        <div class="price${owned?" got":""}"><i></i>${owned?"보유 중":c}</div>
      </article>`).join("")}
    </div>
  </div>
  <div class="sheet">
    <div class="handle"></div>
    ${img("pet/sparrow","sart")}
    <div class="stext">
      <b>짹이 <em>Lv.2</em></b>
      <p>14초마다 앞으로 날아가 간식 한 줄을 물어온다. 레벨이 오르면 더 멀리 간다.</p>
      <div class="lvbar"><i style="--p:60%"></i><span>다음 레벨까지 3</span></div>
    </div>
    <div class="sbtns"><button class="btn">닫기</button><button class="btn primary"><i class="ic ic-marble"></i>120 강화</button></div>
  </div>
</div>`;
}

function lobbyPort() {
  return `<div class="scr port lobby">
  ${img("open/lobby","bg")}<div class="scrim"></div>
  <header class="topline">
    <div class="stat">사명 <b>17/18</b></div>
    <div class="chips">${chips}</div>
  </header>
  ${stage}
  <div class="side">
    ${missionCard}
    <button class="btn primary big"><span class="ic ic-play"></span>사명 시작</button>
    <div class="row2"><button class="btn">사명 지도</button><button class="btn">∞ 자유 달리기</button></div>
    ${questCard}
  </div>
  <nav class="nav">
    ${[["home","홈"],["char","캐릭터"],["shop","편의점"],["gacha","뽑기"],["goal","목표"],["help","도움말"]]
      .map(([k,l],i)=>`<button class="nav-i${i===0?" on":""}"><span class="ic ic-${k}"></span><b>${l}</b>${k==="gacha"?'<em class="dot"></em>':""}</button>`).join("")}
  </nav>
</div>`;
}

const SCREENS = [
  ["가로 로비", 844, 390, lobbyLand],
  ["플레이 HUD — 겹침을 고친 배치", 844, 390, runLand],
  ["편의점 + 상세 시트", 844, 390, shopLand],
  ["세로 로비", 390, 844, lobbyPort],
];

export function render(root) {
  root.innerHTML = SCREENS.map(([cap, w, h, fn]) => `
    <figure class="frame" style="--w:${w};--h:${h}">
      <figcaption>${cap}<span><button class="zoombtn">1:1로 보기</button> ${w}×${h}</span></figcaption>
      <div class="vp"><div class="fit">${fn()}</div></div>
    </figure>`).join("");
  const fit = () => {
    for (const f of root.querySelectorAll(".frame")) {
      const w = +f.style.getPropertyValue("--w");
      const vp = f.querySelector(".vp");
      const k = f.classList.contains("zoom") ? 1 : Math.min(1, vp.clientWidth / w);
      const inner = f.querySelector(".fit");
      inner.style.transform = `scale(${k})`;
      inner.style.width = w * k + "px";
      vp.style.height = (+f.style.getPropertyValue("--h")) * k + "px";
    }
  };
  // 폰에서 가로 화면은 절반 크기로 줄어든다. 눌러서 1:1로 펴 보고 옆으로 밀 수 있게 한다
  root.addEventListener("click", (e) => {
    const b = e.target.closest(".zoombtn");
    if (!b) return;
    const f = b.closest(".frame");
    f.classList.toggle("zoom");
    b.textContent = f.classList.contains("zoom") ? "화면에 맞추기" : "1:1로 보기";
    fit();
  });
  new ResizeObserver(fit).observe(root);
  addEventListener("resize", fit);
  fit();
}
