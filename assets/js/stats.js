/* ==========================================================================
   stats.js: penghitung angka statistik + tahun berjalan di footer.
   Angka beranimasi easeOutCubic saat elemen mulai terlihat.
   ========================================================================== */
(() => {
  "use strict";

  const doc = document;
  const reduceMotion =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ----------
     Penghitung angka: data-count="250" data-suffix="+"
     ---------- */
  const counters = [...doc.querySelectorAll("[data-count]")];

  const runCounter = (el) => {
    const target = parseInt(el.dataset.count, 10) || 0;
    const prefix = el.dataset.prefix || "";
    const numEl = el.querySelector(".num") || el;
    const DUR = 1200;
    const t0 = performance.now();
    const ease = (t) => 1 - Math.pow(1 - t, 3); /* easeOutCubic */
    const frame = (now) => {
      const p = Math.min(1, (now - t0) / DUR);
      /* Suffix tidak ikut di-append di sini: ia sudah punya span sendiri
         (.suffix) di markup, supaya tidak muncul dobel saat animasi jalan */
      numEl.textContent = prefix + Math.round(target * ease(p));
      if (p < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  };

  if (counters.length && !reduceMotion) {
    const ioC = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            runCounter(en.target);
            ioC.unobserve(en.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach((c) => ioC.observe(c));
  }

  /* ----------
     Tahun berjalan di footer
     ---------- */
  const yearEl = doc.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
