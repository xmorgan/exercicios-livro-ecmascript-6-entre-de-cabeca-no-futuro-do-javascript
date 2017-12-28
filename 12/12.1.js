function imprimeNomeCompleto(nome, sobrenome, nomeDoMeio = "") {
	console.log(`${nome} ${nomeDoMeio} ${sobrenome}`);
}

imprimeNomeCompleto('João', 'da Silva', 'Aparecido');
// João Aparecido da Silva
imprimeNomeCompleto('João', 'da Silva'); // João da Silva

imprimeNomeCompleto('João', '', ''); // João

function imprimeNomeCompleto(nome, sobrenome, nomeDoMeio) {
	let sobrenomeTratado = sobrenome || '';
	let nomeDoMeioTratado = nomeDoMeio || '';

	console.log(`${nome} ${nomeDoMeioTratado} ${sobrenomeTratado}`);
}

imprimeNomeCompleto('João'); // João

function imprimeNomeCompleto(nome) {
	console.log(nome);
}

function imprimeNomeCompleto(nome, sobrenome) {
	console.log(`${nome} ${sobrenome}`);
}

imprimeNomeCompleto('João'); // Seu nome é: João
imprimeNomeCompleto('João', 'Silva'); // Seu nome é: João Silva
