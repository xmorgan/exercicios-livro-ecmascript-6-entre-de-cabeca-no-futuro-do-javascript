var set = new Set();
set.add(2);
set.add(1);
set.add(2);

for (const valor of set) {
	console.log(valor); // 2, 1
}

var set = new Set([2,1,2]);
for (const valor of set) {
	console.log(valor); // 2, 1
}

var musicas = new Set();
musicas.add('musica1');

for (var musica of musicas) {
	console.log(musica); // musica1
}

var musicas = new Set(['musica1', 'musica2']);
musicas.delete('musica1');

for (var musica of musicas) {
	console.log(musica); // musica2
}

var musicas = new Set(['musica1', 'musica2', 'musica3']);
musicas.clear();

for (var musica of musicas) {
	console.log(musicas); // nada
}

var musicas = new Set(['musica1']);
if (musicas.has('musica1')) {
	console.log('já está na lista!');
}
// já está na lista

var musicas = new Set(['musica1', 'musica2', 'musica3']);
var qtdMusicas = musicas.size;
console.log('Há ' + qtdMusicas + ' músicas na lista');
// Há 3 músicas na lista
