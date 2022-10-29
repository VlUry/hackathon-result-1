import { ContextMenu } from "./menu";
import "./styles.css";
import { RandomFigureModule } from "./modules/random-figure.module";

const menu = new ContextMenu("#menu");

menu.add(new RandomFigureModule("create-random", "создать фигуру"));
// Добавление модулей в будущее контекстное меню
// menu.add()

// Формирование html для контекстного меню
menu.render();
