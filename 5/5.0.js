for (variavel of iteravel) {
	// corpo
}

var numeros = [1,2,3,4,5];

for (var numero of numeros) {
	console.log(numero);
}

var perfilDoFacebook = {
	nome: 'Carlos',
	idade: 22
	// ... outras propriedades
}

for (var dado of perfilDoFacebook) {
	console.log(dado);
}
// TypeError: perfilDoFacebook[Symbol.iterator] is not a function
