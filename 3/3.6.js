var alunos = [
	{nome: 'João', idade: 18},
	{nome: 'Maria', idade: 20},
	{nome: 'Pedro', idade: 24}
];

var todosAlunosDeMaior = true;

for (var i = 0; i < alunos.length; i++) {
	if (alunos[i].idade < 18) {
		todosAlunosDeMaior = false;
		break;
	}
}

console.log(todosAlunosDeMaior); // true

var alunos = [
	{nome: 'João', idade: 18},
	{nome: 'Maria', idade: 20},
	{nome: 'Pedro', idade: 24}
];

var todosAlunosDeMaior = alunos.every(function(aluno) {
	return aluno.idade > 18;
});

console.log(todosAlunosDeMaior); // false
