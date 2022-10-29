import { random } from "../utils";
import { Module } from "../core/module";

export class RandomFigureModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    const randomFigureCheck = document.querySelector("#random-figure");
    if (randomFigureCheck) {
      randomFigureCheck.remove();
    }
    const randomFigure = document.createElement("div");
    randomFigure.style.position = "absolute";
    const randomFigureWidth = random(1, window.innerWidth);
    const randomFigureHeight = random(1, window.innerHeight);
    randomFigure.style.width = `${randomFigureWidth}px`;
    randomFigure.style.height = `${randomFigureHeight}px`;
    randomFigure.style.borderRadius = "15px";
    randomFigure.style.backgroundColor = "red";
    randomFigure.id = "random-figure";
    const randomFigureLeftMax = window.innerWidth - randomFigureWidth - 10;
    const randomFigureTopMax = window.innerHeight - randomFigureHeight - 10;
    console.log(randomFigureLeftMax, randomFigureTopMax);
    randomFigure.style.left = `${random(10, randomFigureLeftMax)}px`;
    randomFigure.style.top = `${random(10, randomFigureTopMax)}px`;
    console.log(randomFigure);
    this.body.append(randomFigure);
  }
}
