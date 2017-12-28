function minhaMaeMandouEuEscolherEsseDaqui(qualEuEscolhi) {
	console.log(qualEuEscolhi);
}

minhaMaeMandouEuEscolherEsseDaqui('terceiro'); // terceiro
minhaMaeMandouEuEscolherEsseDaqui(); // undefined

function imprimeNomeCompleto(nome, sobrenome, nomeDoMeio) {
	console.log(`${nome} ${nomeDoMeio} ${sobrenome}`);
}

imprimeNomeCompleto('Jorge', 'Reis'); // Jorge Reis undefined
imprimeNomeCompleto('Isabela', 'Joana Luiza', 'Jesus');
// Isabela Joana Luiza Jesus

function imprimeNomeCompleto(nome, sobrenome, nomeDoMeio) {
	if (nomeDoMeio === undefined) {
		console.log(`${nome} ${sobrenome}`);
	} else {
		console.log(`${nome} ${nomeDoMeio} ${sobrenome}`);
	}
}

imprimeNomeCompleto('Romulo', 'Scampini'); // Romulo Scampini
imprimeNomeCompleto('Leticia', 'Aparecida', 'de Souza');
// Leticia Aparecida de Souza
