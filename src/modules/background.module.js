import { Module } from '../core/module'
import { getRandomColor } from '../utils'

export class BackgroundModule extends Module {
  constructor(type, text) {
    super(type, text)
    this.body = document.querySelector('body')
  }

  #changeColor() {
    const color = getRandomColor()

    this.body.style.backgroundColor = color

    this.body.dataset.bgColor = document.body.style.backgroundColor;
  }

  trigger() {
    return this.promise(
      this.#changeColor.bind(this),
      0
    )
  }
}