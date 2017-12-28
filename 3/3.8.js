var numeros = [1,2,3,4,5];

var soma = 0;

for (var i = 0; i < numeros.length; i++) {
	soma += numeros[i];
}

console.log(soma); // 15

var numeros = [1,2,3,4,5];

var soma = 0;

soma = numeros.reduce(function(soma, numero) {
	return soma + numero;
}, 0);

console.log(soma); // 15

var alunos = [
	{nome: 'João', idade: 10},
	{nome: 'José', idade: 20},
	{nome: 'Marcos', idade: 30}
];

var nomes = alunos.reduce(function(arrayNomes, aluno) {
	arrayNomes.push(aluno.nome);
	return arrayNomes;
}, []);

console.log(nomes); // ['João', 'José', 'Marcos']
