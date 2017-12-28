function* percorrerLinha477() {
	console.log('Passei pela rua 1');
	yield 'Fim da linha';
}

function *percorrerLinha477() {
	console.log('Passei pela rua 1');
	yield 'Fim da linha';
}

percorrerLinha477();

const linha = percorrerLinha477(); // {}
const parada = linha.next(); // Passei pela rua 1
console.log(parada); // { value: 'Fim da linha', done: false }

linha.next();
console.log(parada); // { value: undefined, done: true }

function* percorrerLinha477() {
	console.log('Passei pela rua 1');
	yield 'Parada 1';
	console.log('Passei pela rua 2');
	yield 'Parada 2';
	console.log('Passei pela rua 3');
	yield 'Parada 3';
	console.log('Passei pela rua 4');
	yield 'Fim da linha';
}

const linha = percorrerLinha477();
let next = linha.next();
console.log(next);
next = linha.next();
console.log(next);
next = linha.next();
console.log(next);
next = linha.next();
console.log(next);
next = linha.next();
console.log(next);
