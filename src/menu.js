import { Menu } from './core/menu'

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector)

    // Массив с модулями
    this.modules = []

    // Слушатель клика правой кнопкой мыши на экран
    document.body.addEventListener('contextmenu', this.onContextMenu.bind(this))
  }

  render() {
    const doModulesExist = this.modules.length > 0

    if (doModulesExist) {
      // Формирование html для модулей
      this.modules.forEach(module => {
        const menuItem = module.el
        this.el.insertAdjacentElement('beforeend', menuItem)
      })
    }

    // Слушатель клика левой кнопкой мыши на контекстное меню
    this.el.addEventListener('click',
      this.onModulesClick.bind(this))
  }

  open() {
    this.el.classList.add('open')
  }

  close() {
    this.el.classList.remove('open')
  }

  add(...module) {
    this.modules.push(...module)
  }

  onContextMenu(event) {
    event.preventDefault()

    this.open()

    // Высота и ширина контекстного меню
    const { height: menuHeight, width: menuWidth } = this.el.getBoundingClientRect()

    // Высота и ширина экрана
    const { innerHeight, innerWidth } = event.view

    // Координаты, по которым был совершен клик
    const { clientX, clientY } = event

    // Вычисление координат для расположения контекстного меню относительно экрана
    let styleLeft = clientX
    let styleTop = clientY

    if (innerHeight - clientY < menuHeight) {
      styleTop -= menuHeight
    }

    if (innerWidth - clientX < menuWidth) {
      styleLeft -= menuWidth
    }

    this.el.style.left = styleLeft + 'px'
    this.el.style.top = styleTop + 'px'
  }

  onModulesClick(event) {
    const { target } = event

    const isMenuItem = target.classList.contains('menu-item')
    const isAvailable = !target.classList.contains('unavailable')

    if (isMenuItem && isAvailable) {
      const { type } = event.target.dataset

      // Поиск нужного модуля по атрибуту data-type
      // Вызов у модуля метода с логикой его действия
      const module = this.modules
        .find(module => module.type === type)

      // Снятие доступа с модуля и возвращение доступа после завершения действия
      module.toggleAvailability()
      module.trigger()
        .finally(() => module.toggleAvailability())

      this.close()
    }
  }
}