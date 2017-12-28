class Sonix extends Carro {
	
	constructor(modelo, chassi, qtdPortas) {
		super(modelo, chassi, qtdPortas);
	}

	abrirTetoSolar() {
		console.log('abrindo teto solar');
	}

}

const sonix = new Sonix();
sonix.abrirTetoSolar(); // abrindo teto solar
sonix.andar(); // vrum vrum

const sonix = new Sonix('Sonix', '9120219', 4);
sonix.abrirTetoSolar();
sonix.andar(); // vrum vrum
console.log(sonix.modelo); // Sonix
