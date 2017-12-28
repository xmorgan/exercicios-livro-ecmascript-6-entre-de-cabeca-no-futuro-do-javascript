var chapeuSeletor = {
	fazerSelecaoDaCasa: function(bruxo) {
		console.log("aluno: " + bruxo + " | casa: Grifinória");
	}
}

var bruxos = ['Harry Potter','Hermione Granger','Rony Weasley'];

for (var bruxo of bruxos) {
	chapeuSeletor.fazerSelecaoDaCasa(bruxo);
}
