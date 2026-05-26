document.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-copy]");
  if (!button) return;

  const text = button.getAttribute("data-copy");
  if (!text) return;

  await navigator.clipboard.writeText(text);
  const old = button.textContent;
  button.textContent = "Copied";
  window.setTimeout(() => {
    button.textContent = old;
  }, 1200);
});
