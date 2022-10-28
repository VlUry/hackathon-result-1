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
    container.append(timer)
  }

  #createClicks(container) {
    const clicks = document.createElement('h1')
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
        let timeNum = this.time

        document.addEventListener('click', () => count++)

        for (let i = 0; i <= this.time; i++) {
          setTimeout(() => {
            timer.innerHTML = `0:0${timeNum}`
            timeNum-- 
          }, 1000 * i)
        }

        setTimeout(() => {
          console.log(count)
          clicks.innerHTML = `Кликов: ${count}`
          this.counting = false
        }, 3000)
      }
    })
  }

  trigger() {
    this.#counter()
  }
}