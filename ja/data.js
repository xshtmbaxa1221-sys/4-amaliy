// js/data.js — Xiva diqqatga sazovor joylari (narxlar taxminiy, o'zingiz yangilang)
const joylar = [
  { id: 1, nomi: "Kalta Minor", kategoriya: "minora", narx: 30000, mavjud: true, rasm: "rasmlar/1.jpg", teglar: ["fayans", "tugallanmagan"], tavsif: "Firuza rangli sirli g'ishtlar bilan qoplangan, hech qachon tugallanmagan minora." },
  { id: 2, nomi: "Islom Xo'ja minorasi", kategoriya: "minora", narx: 40000, mavjud: true, rasm: "rasmlar/2.jpg", teglar: ["manzara", "eng baland"], tavsif: "Xivadagi eng baland minora. Tepasidan butun Ichan-Qala ko'rinadi." },
  { id: 3, nomi: "Juma masjidi", kategoriya: "masjid", narx: 25000, mavjud: true, rasm: "rasmlar/3.jpg", teglar: ["yog'och ustunlar", "tarixiy"], tavsif: "Yuzdan ortiq o'yma yog'och ustunlari bilan mashhur masjid." },
  { id: 4, nomi: "Tosh Hovli saroyi", kategoriya: "saroy", narx: 50000, mavjud: true, rasm: "rasmlar/4.jpg", teglar: ["xonlar", "naqsh"], tavsif: "Xivadagi xonlarning rasmiy qarorgohi, bezakli ayvonlari bilan mashhur." },
  { id: 5, nomi: "Ko'hna Ark", kategoriya: "saroy", narx: 45000, mavjud: true, rasm: "rasmlar/5.jpg", teglar: ["qal'a", "ma'muriy"], tavsif: "Xonlarning eski qarorgohi va ma'muriy markazi." },
  { id: 6, nomi: "Pahlavon Mahmud maqbarasi", kategoriya: "maqbara", narx: 20000, mavjud: true, rasm: "rasmlar/6.jpg", teglar: ["ziyoratgoh", "gumbaz"], tavsif: "Shoir va pahlavon Pahlavon Mahmud xotirasiga qurilgan ziyoratgoh." },
  { id: 7, nomi: "Muhammad Aminxon madrasasi", kategoriya: "madrasa", narx: 35000, mavjud: false, rasm: "rasmlar/7.jpg", teglar: ["mehmonxona", "hujralar"], tavsif: "Kalta Minor yonidagi katta madrasa, hozir mehmonxona sifatida ishlaydi." },
  { id: 8, nomi: "Nurullaboy saroyi", kategoriya: "saroy", narx: 40000, mavjud: true, rasm: "rasmlar/8.jpg", teglar: ["XIX asr", "Yevropa uslubi"], tavsif: "Sharq va Yevropa uslublari aralashgan saroy majmuasi." },
  { id: 9, nomi: "Dishan-Qala bozori", kategoriya: "bozor", narx: 0, mavjud: true, rasm: "rasmlar/9.jpg", teglar: ["hunarmandchilik", "esdalik"], tavsif: "Ichan-Qala tashqarisidagi hunarmandlar va kulollar bozori." },
  { id: 10, nomi: "Sayyid Alouddin maqbarasi", kategoriya: "maqbara", narx: 15000, mavjud: true, rasm: "rasmlar/10.jpg", teglar: ["XIV asr", "tinch"], tavsif: "Xivadagi eng qadimiy maqbaralardan biri." },
  { id: 11, nomi: "Ichan-Qala kechki sayr", kategoriya: "sayr", narx: 120000, mavjud: true, rasm: "rasmlar/11.jpg", teglar: ["gid", "kechqurun"], tavsif: "Gid hamrohligida, chiroqlar yoqilgach, 2 soatlik piyoda sayr." },
  { id: 12, nomi: "Xorazm oshxonasi mahorat darsi", kategoriya: "sayr", narx: 180000, mavjud: false, rasm: "rasmlar/12.jpg", teglar: ["ovqat", "tajriba"], tavsif: "Shivit oshi va tandir somsa tayyorlashni o'rganing." }
];
