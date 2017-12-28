class Carro {
	constructor(modelo, chassi, qtdPortas) {
		this.modelo = modelo;
		this.chassi = chassi;
		this.qtdPortas = qtdPortas;
	}

	andar() {
		console.log('vrum vrum');
	}
}

const basico = new Carro('Básico','123123',2);

console.log(basico.modelo); // Básico
console.log(basico.chassi); // 123123
console.log(basico.qtdPortas); // 2
basico.andar(); // vrum vrum
