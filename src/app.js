import { ContextMenu } from "./menu";
import "./styles.css";
import { RandomFigureModule } from "./modules/random-figure.module";
import { PaintingModule } from "./modules/painting.module";

const menu = new ContextMenu("#menu");

menu.add(new RandomFigureModule("create-random", "создать фигуру"));
// Добавление модулей в будущее контекстное меню
menu.add(new PaintingModule("painting-block", "Нарисовать фон"));

// Формирование html для контекстного меню
menu.render();
