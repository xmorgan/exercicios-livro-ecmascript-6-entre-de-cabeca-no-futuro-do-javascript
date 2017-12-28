var alunos = [
	{nome: 'João'},
	{nome: 'José'},
	{nome: 'Maria'}
];

var aluno;

for (var i = 0; i < alunos.length; i++) {
	if (alunos[i].nome == 'José') {
		aluno = alunos[i];
		break; // evite percorrer o resto da lista
	}
}

console.log(aluno); // {'nome': 'José'}

var alunos = [
	{nome: 'João'},
	{nome: 'José'},
	{nome: 'Maria'}
];

var aluno = alunos.find(function(aluno) {
	return aluno.nome === 'José';
});

console.log(aluno); // {'nome': 'José'}
