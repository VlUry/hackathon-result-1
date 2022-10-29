import { Module } from "../core/module";

export class CustomMessage extends Module {
	constructor(type, text) {
		super(type, text)
		this.type = 'Создать случайное сообщение';
		this.text = 'Добро пожаловать!';
	}

	trigger() {
		//Логика того, что будет происходить при клике

		const messagCustom = document.createElement('li')
		messagCustom.className = 'menu-item';
		messagCustom.textContent = this.text;

		document.body.append(messagCustom);


		setTimeout(function () {
			document.querySelector('menu-item').remove();
		}, 5000);

	}
}

