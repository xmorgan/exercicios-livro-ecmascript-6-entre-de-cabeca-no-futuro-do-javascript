function logarTodosArgumentos() {
	for (let i = 0; i < arguments.length; i++) {
		console.log(arguments[i]);
	}
}

logarTodosArgumentos(1, 2, 3); // 1, 2, 3

function somar() {
	let soma = 0;
	const qtd = arguments.length;
	for (let i = 0; i < qtd; i++) {
		soma += arguments[i];
	}
	return soma;
}

console.log(somar(1, 2)); // 3
console.log(somar(1, 2, 3)); // 6
console.log(somar(1, 2, 3, 4)); // 10
