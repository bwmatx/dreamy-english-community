/* ==========================================================================
   faq.js: akordion FAQ. Grid-template-rows 0fr -> 1fr (diurus CSS).
   Hanya satu item yang terbuka pada satu waktu.
   ========================================================================== */
(() => {
  "use strict";

  const doc = document;
  const faqItems = [...doc.querySelectorAll(".faq-item")];

  faqItems.forEach((item) => {
    const q = item.querySelector(".faq-q");
    if (!q) return;
    q.addEventListener("click", () => {
      if (item.classList.contains("open")) {
        item.classList.remove("open");
        q.setAttribute("aria-expanded", "false");
        return;
      }
      faqItems.forEach((i) => {
        i.classList.remove("open");
        i.querySelector(".faq-q")?.setAttribute("aria-expanded", "false");
      });
      item.classList.add("open");
      q.setAttribute("aria-expanded", "true");
    });
  });
})();
