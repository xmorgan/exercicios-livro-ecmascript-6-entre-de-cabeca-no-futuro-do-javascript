var pesoDasMalas = [12,32,21,29];

var temMalaAcimaDoPeso = false;

for (var i = 0; i < pesoDasMalas.length; i++) {
	if (pesoDasMalas[i] > 30) {
		temMalaAcimaDoPeso = true;
	}
}

console.log(temMalaAcimaDoPeso); // true

var pesoDasMalas = [12,32,21,29];

var temMalaAcimaDoPeso = pesoDasMalas.some(function(pesoDaMala) {
	return pesoDaMala > 30;
});

console.log(temMalaAcimaDoPeso); // true
