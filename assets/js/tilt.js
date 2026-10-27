/* ==========================================================================
   tilt.js: tepet halus pada kartu ketika kursor bergerak.
   Hanya aktif untuk pointer presisi (tetikus) dan tanpa reduce-motion.
   ========================================================================== */
(() => {
  "use strict";

  const doc = document;
  const finePointer =
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const reduceMotion =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!finePointer || reduceMotion) return;

  doc.querySelectorAll(".card, .quote, .program").forEach((el) => {
    el.classList.add("tilt");
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--rx", `${(-py * 5).toFixed(2)}deg`);
      el.style.setProperty("--ry", `${(px * 6).toFixed(2)}deg`);
      el.style.transform =
        "perspective(700px) rotateX(var(--rx)) rotateY(var(--ry))";
    });
    el.addEventListener("pointerleave", () => {
      el.style.transform = "";
    });
  });
})();
