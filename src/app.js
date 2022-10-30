import "./styles.css";
import { ContextMenu } from "./menu";
import { BackgroundModule } from "./modules/background.module";
import { ClicksModule } from "./modules/clicks.module";
import { RandomFigureModule } from "./modules/random-figure.module";
import { CustomMessageModule } from "./modules/custom.message";
import { RainingCatsModule } from "./modules/raining-cats.module";
import { PaintingModule } from "./modules/painting.module";

const menu = new ContextMenu("#menu");

// Добавление модулей в будущее контекстное меню
menu.add(
  new BackgroundModule("bg-color", "Поменять цвет фона"),
  new ClicksModule("clicks", "Считать клики"),
  new RandomFigureModule("create-random", "Создать случайную фигуру"),
  new CustomMessageModule(
    "custom-message",
    "Создать сообщение",
    "Всем привет!"
  ),
  new RainingCatsModule("raining-cats", "Создать дождь из котов", 15),
  new PaintingModule('painting', 'Создать рисунок')
);

// Формирование html для контекстного меню
menu.render();
