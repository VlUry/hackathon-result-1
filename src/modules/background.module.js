import {Module} from '../core/module'
import {random} from '../utils'

export class BackgroundModule extends Module {
  constructor() {
    super('bg-color', 'Поменять цвет фона')
    this.body = document.querySelector('body')
  }

  #changeColor() {
    const arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    let color = '#'

    for (let i = 0; i < 6; i++) {
      color += (arr[random(0, arr.length - 1)])
    }

    this.body.style.backgroundColor = color
  }

  trigger() {
    this.#changeColor()
  }
}