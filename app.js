'use strict'
const GI = {
	createElement (tag, atributes) {
		let element = document.createElement(tag)
        element.textContent = atributes

        let input = document.createElement('input')
        input.type = 'checkbox'
        element.appendChild(input)

		return element
	}
};


const to_do = [
    'Alimentar al perro',
    'Estudiar para prueba escrita',
    'Pagar taxes',
    'Pasear a perro',
    'Comprar entradas para el cine',
];

let ul = document.getElementsByTagName('ul')[0];

for (let i = 0; i < to_do.length; i++) {
    let elem = GI.createElement('li', to_do[i])
    ul.appendChild(elem)
}