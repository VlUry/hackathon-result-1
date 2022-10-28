import {Module} from '../core/module'

export class ClicksModule extends Module {
  constructor(time) {
    super('clicks', `Считать клики (за ${time} секунды)`)

    this.body = document.querySelector('body')
    this.counting = false
    this.time = +time
  }

  #createClicksBlock() {
    const clicksBlock = document.createElement('div')
    clicksBlock.className = 'clicksCounter-container'
    clicksBlock.style.position = 'absolute'
    clicksBlock.style.top = '1rem'
    clicksBlock.style.right = '1rem'
    clicksBlock.style.textAlign = 'end'
    this.#createTimer(clicksBlock)
    this.#createClicks(clicksBlock)

    this.body.append(clicksBlock)
  }

  #createTimer(container) {
    const timer = document.createElement('h1')
    timer.className = 'clicksCounter-timer'
    timer.innerHTML = `0:0${this.time}`
    container.append(timer)
  }

  #createClicks(container) {
    const clicks = document.createElement('h3')
    clicks.className = 'clicksCounter-clicks'
    clicks.innerHTML = 'Кликов: 0'
    container.append(clicks)
  }

  #counter() {
    this.#createClicksBlock()
    const timer = document.querySelector('.clicksCounter-timer')
    const clicks = document.querySelector('.clicksCounter-clicks')

    document.addEventListener('click', () => {
      if (!this.counting) {
        
        this.counting = true
        let count = 0

        document.addEventListener('click', () => count++)

        for (let i = this.time; i >= 0; i--) {
          SetTimeout(() => timer.innerHTML = `0:0${i}`, 1000 * i)
        }

        setTimeout(() => {
          console.log(count)
          clicks.innerHTML = `Кликов: ${count}`
          this.counting = false
        }, 3000)
      }
    })
  }

  render() {
    // test
    this.#counter()
  }
}