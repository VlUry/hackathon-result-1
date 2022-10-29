import { Module } from "../core/module";

export class PaintingModule extends Module {
  constructor(type, text) {
    super(type, text);
    this.body = document.querySelector("body");
    this.open = false;
  }

  // Добавляет функционал кнопки закрытия
  #renderCloseButton(container) {
    const closePainting = document.querySelector("#close");
    closePainting.addEventListener("click", () => {
      container.remove();
      this.open = false;
    });
  }

  // Добавляет функционал кнопки подтверждения
  #renderApplyButton(container) {
    const applyPainting = document.querySelector("#apply");
    applyPainting.addEventListener("click", () => {
      const canvas = document.querySelector("canvas");
      const bgImage = new Image();
      bgImage.src = canvas.toDataURL();
      bgImage.style.width = "100%";
      bgImage.style.height = "100%";
      document.body.append(bgImage);
      container.remove();
      this.open = false;
    });
  }

  // Добавляет функционал кнопки очистки
  #renderClearingButton() {
    const clearPainting = document.querySelector("#clear");
    clearPainting.addEventListener("click", () => {
      const canvas = document.querySelector("canvas");
      let ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, 955, 537);
    });
  }

  #renderCanvas() {
    const canvas = document.querySelector("canvas");
    canvas.width = 955;
    canvas.height = 537;
    canvas.addEventListener("mousedown", () => {
      canvas.addEventListener("mousemove", paint);
      canvas.addEventListener("mouseup", () => {
        canvas.removeEventListener("mousemove", paint);
      });
    });
  }

  #createPaintingBlock() {
    if (!this.open) {
      this.open = true;
      const paintingContainer = document.createElement("div");
      paintingContainer.className = "painting-container";
      paintingContainer.innerHTML = `
        <div class='painting-block'>
        <canvas></canvas>
        

          <div class='painting-block-up'>
            <div class='painting-el'>
              <div class='circle' id='close'>
                <div class='close'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div class='painting-el'>
              <div class='circle' id='apply'>
                <div class='apply'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div class='painting-el'>
              <div class='circle' id='clear'>
                <div class='clear'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M290.7 57.4L57.4 290.7c-25 25-25 65.5 0 90.5l80 80c12 12 28.3 18.7 45.3 18.7H288h9.4H512c17.7 0 32-14.3 32-32s-14.3-32-32-32H387.9L518.6 285.3c25-25 25-65.5 0-90.5L381.3 57.4c-25-25-65.5-25-90.5 0zM297.4 416H288l-105.4 0-80-80L227.3 211.3 364.7 348.7 297.4 416z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div class='painting-el'>
            <div class='circle'>
            <input type='color' id='colors' class='colors-input'>
            <label for='colors' class='colors'></label>
          </div>
          </div>
          <div class='painting-el'>
          <div class='circle'>
          <input type='color' id='colors-border' class='colors-input-border'>
          <label for='colors-border' class='colors-border'></label>
        </div>
        </div>
            </div>
          </div>
        </div>
      `;
      this.body.append(paintingContainer);

      this.#renderCloseButton(paintingContainer);
      this.#renderApplyButton(paintingContainer);
      this.#renderClearingButton();
      this.#renderCanvas();
    }
  }

  trigger() {
    this.#createPaintingBlock();
  }
}

function paint(e) {
  const canvas = document.querySelector("canvas");
  const colorInput = document.querySelector("#colors");
  const colorInputBorder = document.querySelector("#colors-border");
  let ctx = canvas.getContext("2d");
  let { offsetX: x, offsetY: y } = e;
  ctx.strokeStyle = colorInputBorder.value; //цвет границы
  ctx.fillStyle = colorInput.value;
  console.log(colorInputBorder.value, colorInput.value);
  ctx.beginPath();
  ctx.roundRect(x - 7, y - 7, 7, 7, 3.5);
  ctx.stroke();
  ctx.fill();
}
