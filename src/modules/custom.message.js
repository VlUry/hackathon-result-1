import { Module } from "../core/module";

export class CustomMessage extends Module {
	constructor(type, text) {
		super(type, text)
		this.type = 'Создать случайное сообщение';
		this.text = 'Добро пожаловать!';
	}

	trigger() {
		const customMessage = document.createElement('div')
		customMessage.className = 'message-custom';
		customMessage.textContent = this.text;

		document.body.append(customMessage);

		setTimeout(function () {
			customMessage.remove();
		}, 5000);

	}
}

