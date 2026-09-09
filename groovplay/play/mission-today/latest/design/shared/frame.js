/* 시안 페이지의 배관. 화면을 문서 폭에 맞춰 줄이고, 눌러서 1:1로 펼 수 있게 한다.
   마크업은 만들지 않는다 — 각 시안의 screens.js가 자기 마크업을 통째로 소유한다. */
export const IMG = document.documentElement.dataset.img || "../../img";
export const src = (p, s = 2) => `${IMG}/${p}@${s}x.webp`;
export const im = (p, cls = "", style = "") => `<img class="${cls}" style="${style}" src="${src(p)}" alt="">`;

export function mount(root, screens) {
  root.innerHTML = screens
    .map(([cap, w, h, fn]) => `<figure class="frame" style="--w:${w};--h:${h}">
      <figcaption>${cap}<span><button class="zoombtn">1:1로 보기</button>${w}×${h}</span></figcaption>
      <div class="vp"><div class="fit">${fn()}</div></div></figure>`)
    .join("");
  const fit = () => {
    for (const f of root.querySelectorAll(".frame")) {
      const w = +f.style.getPropertyValue("--w");
      const vp = f.querySelector(".vp");
      const k = f.classList.contains("zoom") ? 1 : Math.min(1, vp.clientWidth / w);
      const inner = f.querySelector(".fit");
      inner.style.transform = `scale(${k})`;
      inner.style.width = w * k + "px";
      vp.style.height = +f.style.getPropertyValue("--h") * k + "px";
    }
  };
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
