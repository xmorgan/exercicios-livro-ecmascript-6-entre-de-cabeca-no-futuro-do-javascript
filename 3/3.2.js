var nomes = ['maria','josé','joão'];

for (var i = 0; i < nomes.length; i++) {
	console.log(nomes[i]);
}
// maria, josé, joão

var nomes = ['maria','josé','joão'];

nomes.forEach(function(nome) {
	console.log(nome);
});
// maria, josé, joão

var nomes = ['maria','josé','joão'];

function imprimeNome(nome) {
	console.log(nome);
}

nomes.forEach(imprimeNome);

var canais = ['Globo','Sbt','Record'];

canais.forEach(function(canal) {
	canais.push("RedeTV"); // este item será ignorado
	console.log(canal);
});

console.log(canais);
// ['Globo', 'Sbt', 'Record', 'RedeTV', 'RedeTV', 'RedeTV']
