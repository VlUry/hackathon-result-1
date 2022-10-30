export default function renderTip() {
  if (!sessionStorage.getItem("tipChecked")) {
    sessionStorage.setItem("tipChecked", "false");
  }
  if (sessionStorage.getItem("tipChecked") === "false") {
    const tip = document.createElement("h1");
    tip.style.textAlign = "center";
    tip.style.transform = "translate(-50%, -50%)";
    tip.style.position = "absolute";
    tip.style.left = "50%";
    tip.style.top = "50%";
    tip.animate([{ opacity: "0" }, { opacity: "1" }], {
      duration: 500,
    });
    tip.textContent = "Нажмите ПКМ для открытия контекстного меню";
    document.body.append(tip);
    document.body.addEventListener(
      "auxclick",
      () => {
        tip.animate([{ opacity: "1" }, { opacity: "0" }], {
          duration: 500,
        });
        setTimeout(() => {
          tip.remove();
        }, 500);
        sessionStorage.setItem("tipChecked", "true");
      },
      { once: true }
    );
  }
}
