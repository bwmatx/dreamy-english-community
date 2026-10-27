/* ==========================================================================
   reveal.js: animasi masuk elemen + warna latar mengikuti section.
   1) .reveal muncul saat kelihatan; anak container [data-stagger] dapat
      jeda berjenjang.
   2) Latar body bertransisi mengikuti section terlihat (data-bg="#hex").
   ========================================================================== */
(() => {
  "use strict";

  const doc = document;
  const body = doc.body;
  const reduceMotion =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Tetapkan --d per grup (elemen anak dari container dengan data-stagger) */
  doc.querySelectorAll("[data-stagger]").forEach((group) => {
    [...group.children].forEach((child, i) => {
      child.classList.add("reveal");
      child.style.setProperty("--d", String(i));
    });
  });

  const revealTargets = [...doc.querySelectorAll(".reveal:not(.is-in)")];

  if (reduceMotion) {
    revealTargets.forEach((el) => el.classList.add("is-in"));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("is-in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -6% 0px" }
    );
    revealTargets.forEach((el) => io.observe(el));
  }

  /* ----------
     Latar section: warna body bertransisi mengikuti section terlihat.
     Dipilih section dengan irisan terbesar.
     ---------- */
  const bgSections = [...doc.querySelectorAll("[data-bg]")];
  const setBg = (hex) => body.style.setProperty("--page-bg", hex);
  if (bgSections.length && !reduceMotion) {
    setBg(bgSections[0].dataset.bg || "");
    const ioBg = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((en) => en.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setBg(visible.target.dataset.bg);
      },
      { threshold: [0.25, 0.5, 0.75] }
    );
    bgSections.forEach((s) => ioBg.observe(s));
  }
})();
