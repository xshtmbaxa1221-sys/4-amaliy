# Xiva sayohat — 4-amaliy ish

**Mavzu:** Xivadagi diqqatga sazovor joylar katalogi.

## Imkoniyatlar
- 12 ta obyektdan iborat massiv (js/data.js)
- Statistika: jami, o'rtacha narx, eng qimmat joy
- Kartalar JS orqali yaratiladi; qidiruv, turkum filtri, saralash birgalikda ishlaydi
- Modal oyna (×, fon, Escape), event delegation
- Aloqa formasi tekshiruvi
- Tungi rejim va sevimlilar (localStorage)

## Massiv metodlari qayerda
- `map`: js/katalog.js — turkumlar ro'yxati, statistika kartochkalari, kartalar
- `filter`: js/katalog.js `yangila()`, js/ui.js `sevimliniAlmashtir()`
- `reduce`: js/katalog.js `statistikaniChiqar()`
- `sort`: js/katalog.js `yangila()`
- `find`: js/katalog.js — eng qimmat joy va modal uchun element
