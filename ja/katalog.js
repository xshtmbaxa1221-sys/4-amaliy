// js/katalog.js — chiqarish, qidiruv, filtr, saralash, statistika
const konteyner = document.querySelector("#konteyner");
const soni = document.querySelector("#soni");
const boshXabar = document.querySelector("#bosh-xabar");
const qidiruv = document.querySelector("#qidiruv");
const kategoriya = document.querySelector("#kategoriya");
const saralash = document.querySelector("#saralash");

/* A qism: statistika (reduce, find, map) */
function statistikaniChiqar() {
  const jami = joylar.length;
  const ortacha = joylar.reduce((s, m) => s + m.narx, 0) / jami;
  const maxNarx = joylar.reduce((a, m) => Math.max(a, m.narx), 0);
  const engQimmat = joylar.find(m => m.narx === maxNarx);
  const qatorlar = [
    ["Jami joylar", jami],
    ["O'rtacha narx", narxMatni(Math.round(ortacha))],
    ["Eng qimmat", engQimmat.nomi]
  ];
  const blok = document.querySelector("#statistika");
  qatorlar.map(([nom, qiymat]) => {
    const d = document.createElement("div");
    const b = document.createElement("strong");
    b.textContent = qiymat;
    const s = document.createElement("span");
    s.textContent = nom;
    d.append(b, s);
    return d;
  }).forEach(d => blok.append(d));
}

/* Turkumlar ro'yxatini massivdan olamiz */
[...new Set(joylar.map(m => m.kategoriya))].forEach(k => {
  const o = document.createElement("option");
  o.value = k;
  o.textContent = k;
  kategoriya.append(o);
});

/* B qism: kartani yaratish */
function kartaYarat(m) {
  const karta = document.createElement("article");
  karta.className = "karta";
  karta.dataset.id = m.id;

  const rasm = document.createElement("img");
  rasm.src = m.rasm;
  rasm.alt = m.nomi;
  rasm.loading = "lazy";

  const h3 = document.createElement("h3");
  h3.textContent = m.nomi;
  const kat = document.createElement("p");
  kat.className = "kat";
  kat.textContent = m.kategoriya + (m.mavjud ? "" : " · hozir mavjud emas");
  const narx = document.createElement("p");
  narx.className = "narx";
  narx.textContent = narxMatni(m.narx);

  const batafsil = document.createElement("button");
  batafsil.type = "button";
  batafsil.dataset.amal = "batafsil";
  batafsil.textContent = "Batafsil";
  const sev = document.createElement("button");
  sev.type = "button";
  sev.dataset.amal = "sevimli";
  sevimliTugmaMatni(sev, m.id);

  const tugmalar = document.createElement("div");
  tugmalar.className = "tugmalar";
  tugmalar.append(batafsil, sev);
  karta.append(rasm, h3, kat, narx, tugmalar);
  return karta;
}
function sevimliTugmaMatni(tugma, id) {
  const tanlangan = sevimlimi(id);
  tugma.textContent = tanlangan ? "Sevimlidan olib tashlash" : "Sevimliga qo'shish";
  tugma.setAttribute("aria-pressed", tanlangan);
}

function chiqar(royxat) {
  konteyner.replaceChildren(...royxat.map(kartaYarat));
  soni.textContent = royxat.length;
  boshXabar.hidden = royxat.length > 0;
}

/* Qidiruv + filtr + saralash birgalikda */
function yangila() {
  const so = qidiruv.value.trim().toLowerCase();
  let natija = joylar.filter(m =>
    m.nomi.toLowerCase().includes(so) &&
    (kategoriya.value === "hammasi" || m.kategoriya === kategoriya.value)
  );
  if (saralash.value === "narx-osish") natija.sort((a, b) => a.narx - b.narx);
  else if (saralash.value === "narx-kamayish") natija.sort((a, b) => b.narx - a.narx);
  else if (saralash.value === "nom") natija.sort((a, b) => a.nomi.localeCompare(b.nomi, "uz"));
  chiqar(natija);
}
qidiruv.addEventListener("input", yangila);
kategoriya.addEventListener("change", yangila);
saralash.addEventListener("change", yangila);

/* C qism: event delegation — bitta tinglovchi ota konteynerda */
konteyner.addEventListener("click", e => {
  const tugma = e.target.closest("button[data-amal]");
  if (!tugma) return;
  const id = Number(tugma.closest(".karta").dataset.id);
  if (tugma.dataset.amal === "batafsil") {
    modalOch(joylar.find(m => m.id === id));
  } else {
    sevimliniAlmashtir(id);
    sevimliTugmaMatni(tugma, id);
  }
});
/* Rasm topilmasa, o'rniga rangli belgi (error hodisasi ko'tarilmaydi, shuning uchun capture) */
konteyner.addEventListener("error", e => {
  if (e.target.tagName !== "IMG") return;
  const joy = document.createElement("div");
  joy.className = "rasm-yoq";
  joy.textContent = e.target.alt.charAt(0);
  e.target.replaceWith(joy);
}, true);

statistikaniChiqar();
yangila();
