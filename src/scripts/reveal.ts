export function initReveal(): void {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
    if (reducedMotion) {
      el.classList.add("is-revealed");
      return;
    }

    if (el.dataset.revealObserved === "true") return;
    el.dataset.revealObserved = "true";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" },
    );

    observer.observe(el);
  });
}

initReveal();
document.addEventListener("astro:page-load", initReveal);
