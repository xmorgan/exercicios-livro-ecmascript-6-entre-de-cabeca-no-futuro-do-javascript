console.log(window); // Window {...}

function imprimeMeuContextoDeExecucao() {
	console.log(this);
}

imprimeMeuContextoDeExecucao();
// Window {...}

var objeto = {
	meuContexto: function() {
		console.log(this);
	}
};

objeto.meuContexto(); // { meuContexto: [Function: meuContexto] }

const equipe = {
	nome: 'Guerreiros Z',
	membros: ['Goku', 'Kuririn', 'Vegeta'],
	membrosDaEquipe: function() {
		const that = this;
		this.membros.forEach(function(membro) {
			console.log(`${membro} é da equipe ${that.nome}`);
		});
	}
}

const equipe = {
	nome: 'Guerreiros Z',
	membros: ['Goku', 'Kuririn', 'Vegeta'],
	membrosDaEquipe: function() {
		this.membros.forEach(membro => {
			console.log(`${membro} é da equipe ${this.nome}`);
		})
	}
}

function mostrarPropriedadeDoContexto(nomePropriedade) {
	console.log(this[nomePropriedade]);
}

var mockLocation = {
	location: 'fake-location'
}

var funcao = mostrarPropriedadeDoContexto.bind(mockLocation);

const equipe = {
	nome: 'Guerreiros Z',
	membros: ['Goku', 'Kuririn', 'Vegeta'],
	membrosDaEquipe: function() {
		this.membros.forEach(function(membro) {
			console.log(`${membro} é da equipe ${this.nome}`);
		}.bind(this));
	}
}
