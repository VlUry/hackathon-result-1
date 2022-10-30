import { Module } from "../core/module";

export class CustomMessageModule extends Module {
  constructor(type, text, messageText) {
    super(type, text)
    this.messageText = messageText
  }

  trigger() {
    const customMessage = document.createElement('div')
    customMessage.className = 'custom-message';
    customMessage.textContent = this.messageText;

    document.body.append(customMessage);

    setTimeout(function () {
      customMessage.remove();
    }, 5000);

  }
}