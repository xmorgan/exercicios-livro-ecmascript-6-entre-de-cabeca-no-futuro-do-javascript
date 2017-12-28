var musica1 = {
	titulo: 'O amor não tem rollback',
	autor: 'SQL'
}

var musicas = new WeakSet([musica1]);
console.log(musicas);
// WeakSet {Object {titulo: 'O amor não tem rollback', autor: 'SQL'}}

musica1 = null;

console.log(musicas); // {}
