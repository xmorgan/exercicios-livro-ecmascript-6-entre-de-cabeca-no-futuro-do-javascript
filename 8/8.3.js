var mensagem = 'olá';
{
	var mensagem = 'adeus';
}
console.log(mensagem);

var mensagem = 'olá';
function mensagem() {
	var mensagem = 'adeus';
}
console.log(mensagem); // olá

const arrayVar = [];
for (var i = 1; i < 5; i++) {
	arrayVar.push(function() {
		console.log(i);
	});
}

const arrayLet = [];
for (let i = 1; i < 5; i++) {
	arrayLet.push(function() {
		console.log(i);
	});
}

arrayVar.forEach(function(funcao) {
	funcao(); // 5 5 5 5 5
});

arrayLet.forEach(function(funcao) {
	funcao(); // 1 2 3 4 5
});

const arrayVar = [];
for (var i = 0; i < 5; i++) {
	arrayVar.push(function() {
		console.log(i);
	});
}

i = 10; // atribuindo um novo valor

arrayVar.forEach(function(funcao) {
	funcao(); // 10 10 10 10 10
});

imprimirNome('Tabata');
function imprimirNome(nome) {
	console.log(nome);
}
// Tabata

let valor = 0;

if (true) {
	// novo escopo, o TDZ do 'valor' começa

	// Ao tentar acessar a variável, tomamos ReferenceError,
	// pois neste momento ela é uma variável
	// que não foi inicializada
	console.log(valor); // ReferenceError

	let valor; // TDZ termina e 'valor' é definida com 'undefined'
	console.log(valor); // undefined

	valor = 1;
	console.log(valor); // 1
}

console.log(valor); // 0
