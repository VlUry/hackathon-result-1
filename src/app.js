import "./styles.css"
import { ContextMenu } from "./menu"
import { BackgroundModule } from './modules/background.module'
import { ClicksModule } from './modules/clicks.module'
import { RandomFigureModule } from "./modules/random-figure.module"

const menu = new ContextMenu("#menu")

// Добавление модулей в будущее контекстное меню
menu.add(
  new BackgroundModule('bg-color', 'Поменять цвет фона'),
  new ClicksModule('clicks', 'Считать клики', 3),
  new RandomFigureModule("create-random", "Создать случайную фигуру")
)

// Формирование html для контекстного меню
menu.render()
