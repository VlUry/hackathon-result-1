import { random } from "../utils";
import { Module } from "../core/module";

export class RandomFigureModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  #randomFigureCheck() {
    const randomFigure = document.querySelector("#random-figure");
    if (randomFigure) {
      randomFigure.animate([{ opacity: "1" }, { opacity: "0" }], {
        duration: 800,
      });
      setTimeout(() => randomFigure.remove(), 750);
    }
  }
  #createRandomFigure() {
    const randomFigure = document.createElement("div");
    randomFigure.style.position = "absolute";
    const { innerWidth: windWidth, innerHeight: windHeight } = window;
    const randomFigureWidth = random(30, windWidth);
    const randomFigureHeight = random(30, windHeight);
    randomFigure.style.width = `${randomFigureWidth}px`;
    randomFigure.style.height = `${randomFigureHeight}px`;

    randomFigure.style.backgroundColor = "#FA8072";
    randomFigure.style.clipPath = makeClipPath();
    randomFigure.id = "random-figure";
    const randomFigureLeftMax = windWidth - randomFigureWidth - 10;
    const randomFigureTopMax = windHeight - randomFigureHeight - 10;
    randomFigure.style.left = `${random(10, randomFigureLeftMax)}px`;
    randomFigure.style.top = `${random(10, randomFigureTopMax)}px`;

    document.body.append(randomFigure);
    randomFigure.animate([{ opacity: "0" }, { opacity: "1" }], {
      duration: 800,
    });

    document.addEventListener(
      "auxclick",
      () => {
        this.#randomFigureCheck();
      },
      { once: true }
    );
  }
  trigger() {
    this.#createRandomFigure();
  }
}

function makeClipPath() {
  let clipPathStr = "polygon(";

  const points = random(3, 10);
  for (let i = 0; i <= points; i++) {
    if (i < points) {
      clipPathStr += `${random(0, 100)}%`;
      clipPathStr += ` ${random(0, 100)}%,`;
    } else {
      clipPathStr += `${random(0, 100)}%`;
      clipPathStr += ` ${random(0, 100)}%`;
    }
  }
  clipPathStr += ")";
  return clipPathStr;
}
