var chapeuSeletor = {
	fazerSelecaoDaCasa: function(bruxo) {
		console.log("aluno: " + bruxo + " | casa: Grifinória");
	}
}

var bruxos = ['Harry Potter','Hermione Granger','Rony Weasley'];

var iterador = bruxos[Symbol.iterator]();
var done = false;
var proximo = iterador.next();

do {
	var bruxo = proximo.value;
	chapeuSeletor.fazerSelecaoDaCasa(bruxo);
	proximo = iterador.next();
} while(!proximo.done);
