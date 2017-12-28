function somar(...valores) {
	let soma = 0;
	const qtd = valores.length;
	for (let i = 0; i < qtd; i++) {
		soma += valores[i];
	}

	return soma;
}

console.log(somar(1, 2)); // 3
console.log(somar(1, 2, 3)); // 6
console.log(somar(1, 2, 3, 4)); // 10

function somar(...valores) {
	return valores.reduce((soma, valor) => {
		return soma + valor;
	}, 0);
}

console.log(somar(1, 2)); // 3
console.log(somar(1, 2, 3)); // 6
console.log(somar(1, 2, 3, 4)); // 10
