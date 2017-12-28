function facaAlgoComMeuNome(nome, callback = z => {
	console.log(z);
}) {
	callback(nome);
}

facaAlgoComMeuNome('Muriel'); // Muriel
