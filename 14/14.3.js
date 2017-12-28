function soma(a, b) {
	console.log(a + b);
}

soma(1, 2); // 3

function soma(a, b) {
	console.log(a + b);
}

var numeros = [1, 2];
soma(...numeros); // 3

function contaQuantidadeVogaisNaoAcentuadas(palavra) {
	let qtdVogais = 0;
	const palavrasLowerCase = palavra.toLowerCase();
	const letras = [...palavrasLowerCase];
	for (let letra of letras) {
		if ('aeiou'.indexOf(letra) !== -1) {
			qtdVogais++;
		}
	}
	return qtdVogais;
}

contaQuantidadeVogaisNaoAcentuadas('ecmascript'); // 3
contaQuantidadeVogaisNaoAcentuadas('javascript'); // 3
contaQuantidadeVogaisNaoAcentuadas('SWIFT'); // 1
contaQuantidadeVogaisNaoAcentuadas('jAvA'); // 2
