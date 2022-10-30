export class Module {
  constructor(type, text) {
    if (!type) {
      throw new Error('Please specify "type" param');
    }
    if (!text) {
      throw new Error('Please specify "text" param');
    }
    this.type = type;
    this.text = text;

    this.el = this.toHTML();
  }

  trigger() {
    throw new Error(
      `Trigger method should be implemented in module "${this.type}"`
    );
  }

  toggleAvailability() {
    if (this.el.classList.contains("unavailable")) {
      this.el.classList.remove("unavailable");
    } else {
      this.el.classList.add("unavailable");
    }
  }

  promise(cb, time) {
    return new Promise((resolve) => {
      cb();
      setTimeout(() => {
        resolve();
      }, time);
    });
  }

  toHTML() {
    const li = document.createElement("li");
    li.className = "menu-item";
    li.dataset.type = this.type;
    li.textContent = this.text;

    return li;
  }
}
