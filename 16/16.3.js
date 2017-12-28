const carro = new Carro('Sonix');
console.log(carro.modelo);

function Carro(modelo) {
	this.modelo = modelo;
}

const carro = new Carro('sonix'); // ReferenceError
class Carro {

	constructor(modelo) {
		this.modelo = modelo;
	}

}
