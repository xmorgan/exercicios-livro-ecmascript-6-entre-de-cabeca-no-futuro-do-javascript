const nomeMetodo = 'invocar';
const objeto = {
	[nomeMetodo]() {
		console.log('executou método');
	}
}

objeto[nomeMetodo](); // executou método

const nomeFuncao = 'mostrar';
const propriedade = 'Nome';

const objeto = {
	Nome: 'Objeto',
	[`${nomeFuncao}${propriedade}`]() {
		console.log(this[propriedade]);
	}
}

objeto.mostrarNome(); // Objeto

const apelido = 'apelido';
const pessoa = {
	nome: 'José',
	[apelido]: 'Zézinho'
}

pessoa[apelido]; // Zézinho
