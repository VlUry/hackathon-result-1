import { Module } from "../core/module";

export class CustomMessageModule extends Module {
  constructor(type, text, messageText) {
    super(type, text)
    this.messageText = messageText

    this.time = 5000
  }

  createMessage() {
    const customMessage = document.createElement('div')
    customMessage.className = 'custom-message';
    customMessage.textContent = this.messageText;

    document.body.append(customMessage);

    setTimeout(function () {
      customMessage.remove();
    }, this.time);
  }

  trigger() {
    return this.promise(
      this.createMessage.bind(this),
      this.time
    )
  }
}