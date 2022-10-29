
import { ContextMenu } from "./menu";
import "./styles.css";
import { RandomFigureModule } from "./modules/random-figure.module";
import { BackgroundModule } from './modules/background.module'  

const menu = new ContextMenu("#menu");

menu.add(new RandomFigureModule("create-random", "создать фигуру"));
// Добавление модулей в будущее контекстное меню
menu.add(new BackgroundModule('bg-color', 'Поменять цвет фона'))

// Формирование html для контекстного меню

menu.render()
