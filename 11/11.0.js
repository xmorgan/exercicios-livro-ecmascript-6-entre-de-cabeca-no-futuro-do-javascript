function Livro(titulo) {
	this.titulo = titulo;
}

var livro = new Livro('Entendendo ES6');
console.log(livro.titulo); // Entendendo ES6

var livro = {
	titulo: 'Anjos e Demônios'
}

console.log(livro.titulo); // Anjos e Demônios

var outroLivro = livro;
livro.titulo = 'O Código da Vinci';

console.log(outroLivro.titulo); // O Código da Vinci
console.log(livro.titulo); // O Código da Vinci

var livro = {
	titulo: 'Anjos e Demônios'
}

livro.autor = 'Dan Brown';
livro['mostrarLivro'] = function() {
	console.log(this.titulo + ', ' + this.autor);
}

livro.mostrarLivro(); // Anjos e Dêmonios, Dan Brown
