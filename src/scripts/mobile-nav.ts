export function initMobileNav(): void {
  const toggle = document.querySelector<HTMLButtonElement>("[data-nav-toggle]");
  const menu = document.querySelector<HTMLElement>("[data-nav-menu]");
  const backdrop = document.querySelector<HTMLElement>("[data-nav-backdrop]");

  if (!toggle || !menu) return;
  if (toggle.dataset.bound === "true") return;
  toggle.dataset.bound = "true";

  const links = Array.from(menu.querySelectorAll<HTMLAnchorElement>("a[href]"));
  let lastFocused: HTMLElement | null = null;

  const isOpen = () => toggle.getAttribute("aria-expanded") === "true";

  const setOpen = (open: boolean) => {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menu.classList.toggle("is-open", open);
    backdrop?.classList.toggle("is-open", open);
    document.body.classList.toggle("nav-open", open);

    if (open) {
      lastFocused = document.activeElement as HTMLElement | null;
      links[0]?.focus();
    } else {
      lastFocused?.focus();
      lastFocused = null;
    }
  };

  const close = () => setOpen(false);

  toggle.addEventListener("click", () => setOpen(!isOpen()));
  backdrop?.addEventListener("click", close);

  links.forEach((link) => link.addEventListener("click", close));

  menu.addEventListener("keydown", (event) => {
    if (!isOpen()) return;

    if (event.key === "Escape") {
      event.preventDefault();
      close();
      return;
    }

    if (event.key !== "Tab" || links.length === 0) return;

    const first = links[0];
    const last = links[links.length - 1];
    const active = document.activeElement;

    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isOpen()) close();
  });
}

initMobileNav();
document.addEventListener("astro:page-load", initMobileNav);
