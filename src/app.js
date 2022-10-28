import { ContextMenu } from './menu'
import './styles.css'
import { ClicksModule } from './modules/clicks.module'

const menu = new ContextMenu('#menu')

// Добавление модулей в будущее контекстное меню
menu.add(new ClicksModule('clicks', `Считать клики`, 3))

// Формирование html для контекстного меню
menu.render()
