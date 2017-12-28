var weakMap = new WeakMap();
var elemento1 = window;
var elemento2 = document.querySelector('body');

weakMap.set(elemento1, 'sou o elemento1');
weakMap.set(elemento2, 'sou o elemento2');

console.log(weakMap.get(elemento1));
console.log(weakMap.get(elemento2));
// sou o elemento1
// sou o elemento2

elemento2.parentNode.removeChild(elemento2);
elemento2 = null; // removendo referência local
console.log(weakMap.get(elemento2)); // undefined

var weakMap = new WeakMap();
function funcao() {};
var objeto = {};

// TypeError: Invalid value used as weak map key
weakMap.set('string', 'isso é uma string');
weakMap.set(funcao, 'isso é uma função');
weakMap.set(objeto, 'isso é um objeto');

function Pessoa(nome) {
	this._nome = nome;
}

Pessoa.prototype.getNome = function() {
	return this._nome;
}

var roberto = new Pessoa('Roberto');
console.log(roberto.getNome()); // Roberto
console.log(roberto._nome); // Roberto

var Pessoa = (function() {
	var dadosPrivados = new WeakMap();

	function Pessoa(nome) {
		dadosPrivados.set(this, { nome: nome });
	}

	Pessoa.prototype.getNome = function() {
		return dadosPrivados.get(this).nome;
	}

	return Pessoa;
}());

var rafael = new Pessoa('Rafael');
console.log(rafael.getNome()); // Rafael
console.log(rafael.nome); // undefined
