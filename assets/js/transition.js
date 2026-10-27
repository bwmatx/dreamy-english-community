/* ==========================================================================
   transition.js: transisi antar halaman (tirai dua lapis).
   Tautan internal ditangkap, tirai menutup layar, lalu pindah halaman.
   Tautan anchor (#) dan eksternal tidak ikut ditangkap.
   ========================================================================== */
(() => {
  "use strict";

  /* Tandai bahwa JS aktif (CSS memakai kelas .js untuk menyembunyikan tirai) */
  document.documentElement.classList.add("js");

  const doc = document;
  const curtain = doc.querySelector(".page-curtain");
  const reduceMotion =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  /* Mode navigasi mobile (< 810px): logo khusus pembuka menu sheet */
  const isMobileNav = window.matchMedia("(max-width: 809.98px)");

  if (curtain && reduceMotion) {
    curtain.setAttribute("hidden", "");
  }

  function pageGo(href) {
    if (reduceMotion || !curtain) {
      window.location.href = href;
      return;
    }
    curtain.removeAttribute("hidden");
    curtain.classList.add("page-curtain__cover");
    /* tunggu animasi penutupan tirai (0.42s + jeda lapis b) */
    window.setTimeout(() => { window.location.href = href; }, 520);
  }

  doc.querySelectorAll("a[data-page]").forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (
        !href ||
        href.startsWith("#") ||
        a.target === "_blank" ||
        (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)
      ) return;
      /* Di ponsel, logo khusus membuka menu sheet (bukan navigasi) */
      if (a.classList.contains("nav__brand") && isMobileNav.matches) return;
      e.preventDefault();
      pageGo(href);
    });
  });

  /* Ketika pengguna kembali via tombol back (bfcache), tirai dibuang
     agar konten langsung terlihat */
  window.addEventListener("pageshow", (e) => {
    if (curtain && e.persisted) {
      curtain.setAttribute("hidden", "");
      curtain.classList.remove("page-curtain__cover");
    }
  });
})();
