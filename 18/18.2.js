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

while(!next.done) {
	console.log(next);
	next = linha.next();
}

console.log(next); // exibe o último

const linha = percorrerLinha477();

for (let parada of linha) {
	console.log(parada);
}
