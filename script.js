(() => {
  const timeEl = document.querySelector('[data-testid="test-user-time"]');
  if (!timeEl) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let flashTimer = 0;

  const render = () => {
    const now = Date.now();
    timeEl.textContent = String(now);
    timeEl.setAttribute("datetime", new Date(now).toISOString());

    if (reducedMotion.matches) return;
    timeEl.classList.add("is-ticking");
    clearTimeout(flashTimer);
    flashTimer = window.setTimeout(() => {
      timeEl.classList.remove("is-ticking");
    }, 140);
  };

  render();
  setInterval(render, 1000);
})();
