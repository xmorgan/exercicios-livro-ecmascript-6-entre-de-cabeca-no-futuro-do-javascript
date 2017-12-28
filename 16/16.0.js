function Carro(modelo, chassi, qtdPortas) {
	this.modelo = modelo;
	this.chassi = chassi;
	this.qtdPortas = qtdPortas;
}

const prototipo = new Carro('prototipo', '1290381209', 2);
console.log(prototipo.modelo); // prototipo
console.log(prototipo.chassi); // 1290381209
console.log(prototipo.qtdPortas); // 2

function Carro(modelo) {
	this.modelo = modelo;
}

Carro.prototype.andar = function() {
	console.log("vrum vrum");
}

const prototipo = new Carro('prototipo', '1290381209', 2);
prototipo.andar(); // vrum vrum

const sonix = new Carro('Sonix', '9120219', 4);
console.log(sonix.modelo); // Sonix
sonix.andar(); // vrum vrum

function Sonix(modelo, chassi, qtdPortas) {
	Carro.call(this, modelo, chassi, qtdPortas);
}

Sonix.prototype = Object.create(Carro.prototype);
Sonix.prototype.constructor = Sonix;

const sonix = new Sonix('Sonix', '9120219', 4);
console.log(sonix.modelo); // Sonix
sonix.andar(); // vrum vrum

Sonix.prototype.abrirTetoSolar = function() {
	console.log('abrindo teto solar');
}

const sonix = new Sonix('Sonix', '9120219', 4);
sonix.abrirTetoSolar(); // abrindo teto solar
