import './styles.css'
import { ContextMenu } from './menu'
import { ClicksModule } from './modules/clicks.module'
import { BackgroundModule } from './modules/background.module'  

const menu = new ContextMenu('#menu')

// Добавление модулей в будущее контекстное меню
menu.add(
  new BackgroundModule('bg-color', 'Поменять цвет фона'),
  new ClicksModule('clicks', 'Считать клики', 3)
  )

// Формирование html для контекстного меню
menu.render()
