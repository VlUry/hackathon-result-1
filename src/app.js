import { ContextMenu } from './menu'
import './styles.css'
import { BackgroundModule } from './modules/background.module'  

const menu = new ContextMenu('#menu')

// Добавление модулей в будущее контекстное меню
menu.add(new BackgroundModule('bg-color', 'Поменять цвет фона'))

// Формирование html для контекстного меню
menu.render()
