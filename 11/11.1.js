var nome = 'Maria';
var sobrenome = 'Madalena';

var pessoa = {
	nome: nome,
	sobrenome: sobrenome
}

const nome = 'Maria';
const sobrenome = 'Madalena';
const pessoa = {nome, sobrenome};

console.log(pessoa.nome); // Maria
console.log(pessoa.sobrenome); // Madalena

const nome = 'Maria';
const sobrenome = 'Madalena';

const pessoa = {
	nome, 
	sobrenome, 
	seApresentar() {
		console.log(`Olá! Sou a ${this.nome} ${this.sobrenome}`);
	}
};

pessoa.seApresentar(); // Olá! Sou a Maria Madalena!
