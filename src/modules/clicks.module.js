import { Module } from '../core/module'

export class ClicksModule extends Module {
  constructor(type, text, time) {
    super(type, text + ` (за ${time} секунд)`)

    this.body = document.querySelector('body')
    this.counting = false
    this.time = +time
  }

  // Метод для создания таймера
  #createTimer() {
    const timer = document.createElement('h1')
    timer.className = 'clicks-counter__timer'
    timer.style.position = 'absolute'
    timer.style.top = '1rem'
    timer.style.right = '1rem'
    return timer
  }

  // Метод для создания счетчика кликов
  #createClicksCounter(clicksCount) {
    const clicks = document.createElement('div')
    clicks.className = 'clicks-counter__clicks'
    clicks.innerHTML = `<h1>Кликов: ${clicksCount}</h1>`
    clicks.innerHTML += '<h4>Клик, чтобы удалить</h4>'
    clicks.style.position = 'absolute'
    clicks.style.top = '1rem'
    clicks.style.right = '1rem'
    clicks.style.cursor = 'pointer'
    this.body.append(clicks)

    // Чтобы убрать счетчик, когда не нужен. Можно подоформить, пока идей нет
    clicks.addEventListener('click', () => {
      clicks.remove()
    })
  }

  #counter() {
    // Первая проверка, чтобы нельзя было вызвать дважды
    if (!this.counting) {

      // Если предыдущий счетчик не убран, убирает
      const clicksCounter = document.querySelector('.clicks-counter__clicks')
      if (clicksCounter) {
        clicksCounter.remove()
      }

      const timer = this.#createTimer()
      this.body.append(timer)

      this.counting = true
      let count = 0
      let timeNum = this.time

      // Счетчик кликов
      document.addEventListener('click', () => count++)
      document.addEventListener('dblclick', () => count++)

      // Отсчет таймера
      for (let i = 0; i <= this.time; i++) {
        setTimeout(() => {
          timer.innerHTML = `0:0${timeNum}`
          timeNum--
        }, 1000 * i)
      }

      // Происходящее, по истечении таймера
      setTimeout(() => {
        timer.remove()
        this.#createClicksCounter(count - 1) // -1 потому, что нажатие на старт таймера идет в счет
        this.counting = false
        document.removeEventListener('click', () => count++)
        document.removeEventListener('dblclick', () => count++)
      }, 1000 * timeNum)
    }
  }

  trigger() {
    return this.promise(
      this.#counter.bind(this),
      1000 * this.time
    )
  }
}