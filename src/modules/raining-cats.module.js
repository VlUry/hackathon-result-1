import { Module } from '../core/module'
import { random } from "../utils"

import CAT from '../img/cat.png'
import CAT_JS from '../img/cat-js.png'

export class RainingCatsModule extends Module {
  // Индекс CAT_JS внутри массива с картинками котов
  static #CAT_JS_LIST_INDEX = 0

  #numberOfCats
  #catsContainer
  #minDuration
  #maxDuration
  #isActing
  #isCatJS
  #imagesList

  constructor(type, text, numberOfCats) {
    super(type, `${text} (${numberOfCats} штук)`)

    this.#numberOfCats = numberOfCats

    this.#catsContainer = document.createElement('div')
    this.#catsContainer.className = 'cats-container'

    // Время анимации
    this.#minDuration = 1000
    this.#maxDuration = 3000

    // Отслеживание состояния
    this.#isActing = false
    this.#isCatJS = false

    // Массив с картинками котов
    this.#imagesList = this.#createImagesList(this.#numberOfCats)
  }

  #createImagesList(num) {
    const imagesList = new Array(num).fill(CAT)
    imagesList[RainingCatsModule.#CAT_JS_LIST_INDEX] = CAT_JS
    return imagesList
  }

  #createCat(cat) {
    cat = document.createElement('img')
    cat.className = 'cat'

    this.#catsContainer.append(cat)

    const minCatImgIndex = this.#isCatJS ? 1 : 0
    const catImgIndex = random(minCatImgIndex, this.#numberOfCats - 1)

    // Проверка на CAT_JS
    if (!this.#isCatJS && catImgIndex === RainingCatsModule.#CAT_JS_LIST_INDEX) {
      this.#isCatJS = true
    }

    cat.src = this.#imagesList[catImgIndex]

    // Расположение картинки на экране
    const { innerWidth: windWidth, innerHeight: windHeight } = window

    const catWidth = cat.getBoundingClientRect().width
    const catHeight = cat.getBoundingClientRect().height

    const catLeftMax = windWidth - catWidth - 10

    cat.style.left = `${random(10, catLeftMax)}px`
    const distance = random(-10, -catHeight - 200)
    cat.style.top = `${distance}px`;

    // Анимация дождя из котов
    const randomDuration = random(this.#minDuration, this.#maxDuration)
    cat.animate(
      { transform: `translateY(${windHeight + -distance}px)` },
      { duration: randomDuration }
    )

    setTimeout(() => {
      cat.remove()
    }, randomDuration - 10)

    return cat
  }

  #removeCats() {
    this.#catsContainer.remove()
    this.#isCatJS = false
    this.#isActing = false
  }

  #catsRain() {
    if (!this.#isActing) {
      this.#isActing = true

      document.body.append(this.#catsContainer)

      for (let i = 0; i < this.#numberOfCats; i++) {
        this.#createCat()
      }

      setTimeout(() => {
        this.#removeCats()
      }, this.#maxDuration)
    }
  }

  trigger() {
    return this.promise(
      this.#catsRain.bind(this),
      this.#maxDuration
    )
  }
}