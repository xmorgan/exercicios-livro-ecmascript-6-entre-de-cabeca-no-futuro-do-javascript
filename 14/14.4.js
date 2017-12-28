function contaQuantidadeVogaisNaoAcentuadas(...palavras) {
	let qtdVogais = 0;
	for (let palavra of palavras) {
		let palavraLowerCase = palavra.toLowerCase();
		const letras = [...palavraLowerCase];
		for (let letra of letras) {
			if ('aeiou'.indexOf(letra) !== -1) {
				qtdVogais++;
			}
		}
	}
	return qtdVogais;
}

contaQuantidadeVogaisNaoAcentuadas('es6'); // 1
contaQuantidadeVogaisNaoAcentuadas('java','javascript','delphi'); // 7
contaQuantidadeVogaisNaoAcentuadas('NãO ConSideRa AcentUADoS'); // 10
