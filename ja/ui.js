// js/ui.js — umumiy komponentlar: tema, sevimlilar, modal, forma tekshiruvi
const KALIT_TEMA = "xiva-tema";
const KALIT_SEVIMLI = "xiva-sevimlilar";

function oqi(kalit, boshlangich) {
  try {
    const q = localStorage.getItem(kalit);
    return q ? JSON.parse(q) : boshlangich;
  } catch (xato) {
    return boshlangich;
  }
}
function saqla(kalit, qiymat) {
  localStorage.setItem(kalit, JSON.stringify(qiymat));
}
function narxMatni(n) {
  return n === 0 ? "Bepul" : n.toLocaleString("ru-RU") + " so'm";
}

/* ---- Tungi rejim ---- */
const temaTugma = document.querySelector("#tema-tugma");
function temaniQoy(nom) {
  document.documentElement.dataset.tema = nom;
  temaTugma.textContent = nom === "tun" ? "Kunduzgi rejim" : "Tungi rejim";
}
temaniQoy(oqi(KALIT_TEMA, "kun"));
temaTugma.addEventListener("click", () => {
  const yangi = document.documentElement.dataset.tema === "tun" ? "kun" : "tun";
  temaniQoy(yangi);
  saqla(KALIT_TEMA, yangi);
});

/* ---- Sevimlilar ---- */
let sevimlilar = oqi(KALIT_SEVIMLI, []);
function sevimliSoniniYangila() {
  document.querySelector("#sevimli-soni").textContent = sevimlilar.length;
}
function sevimlimi(id) {
  return sevimlilar.includes(id);
}
function sevimliniAlmashtir(id) {
  sevimlilar = sevimlimi(id) ? sevimlilar.filter(x => x !== id) : [...sevimlilar, id];
  saqla(KALIT_SEVIMLI, sevimlilar);
  sevimliSoniniYangila();
}
sevimliSoniniYangila();

/* ---- Modal oyna ---- */
const fon = document.createElement("div");
fon.className = "modal-fon";
fon.hidden = true;
const oyna = document.createElement("div");
oyna.className = "modal";
oyna.setAttribute("role", "dialog");
oyna.setAttribute("aria-modal", "true");
fon.append(oyna);
document.body.append(fon);

function modalOch(m) {
  const yopTugma = document.createElement("button");
  yopTugma.type = "button";
  yopTugma.className = "modal-yop";
  yopTugma.setAttribute("aria-label", "Yopish");
  yopTugma.textContent = "×";

  const h2 = document.createElement("h2");
  h2.textContent = m.nomi;
  const tavsif = document.createElement("p");
  tavsif.textContent = m.tavsif;
  const malumot = document.createElement("p");
  malumot.textContent = `Turkum: ${m.kategoriya} · Narx: ${narxMatni(m.narx)} · ${m.mavjud ? "Mavjud" : "Hozir mavjud emas"}`;
  const teglar = document.createElement("ul");
  teglar.className = "teglar";
  m.teglar.forEach(t => {
    const li = document.createElement("li");
    li.textContent = t;
    teglar.append(li);
  });

  oyna.replaceChildren(yopTugma, h2, tavsif, malumot, teglar);
  fon.hidden = false;
  yopTugma.focus();
}
function modalYop() {
  fon.hidden = true;
}
fon.addEventListener("click", e => {
  if (e.target === fon || e.target.closest(".modal-yop")) modalYop();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && !fon.hidden) modalYop();
});

/* ---- Forma tekshiruvi (aloqa.html) ---- */
const forma = document.querySelector("#aloqa-forma");
if (forma) {
  const qoidalar = {
    ism: v => (v.length < 2 ? "Ismni kiriting (kamida 2 harf)." : ""),
    email: v => {
      if (v === "") return "Emailni kiriting.";
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : "Email noto'g'ri. Masalan: ism@mail.uz";
    },
    telefon: v => {
      if (v === "") return "Telefon raqamini kiriting.";
      return /^\+998\d{9}$/.test(v) ? "" : "Format: +998901234567";
    },
    xabar: v => (v.length < 10 ? "Xabar kamida 10 belgidan iborat bo'lsin." : "")
  };
  forma.addEventListener("submit", e => {
    e.preventDefault();
    let hammasiTogri = true;
    Object.keys(qoidalar).forEach(nom => {
      const qiymat = forma.elements[nom].value.trim();
      const matn = qoidalar[nom](qiymat);
      forma.querySelector(`[data-xato="${nom}"]`).textContent = matn;
      if (matn) hammasiTogri = false;
    });
    const muvaffaqiyat = document.querySelector("#muvaffaqiyat");
    muvaffaqiyat.hidden = !hammasiTogri;
    if (hammasiTogri) forma.reset();
  });
}
