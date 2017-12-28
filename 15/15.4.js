const cores = ['azul','cinza','branco','preto'];

console.log(cores[0]); // azul
console.log(cores[3]); // preto

const [cor1,,,cor2] = ['azul','cinza','branco','preto'];

console.log(cor1); // azul
console.log(cor2); // preto

const [cor1,,,cor2,cor3] = ['azul','cinza','branco','preto'];

console.log(cor1); // azul
console.log(cor2); // preto
console.log(cor3); // undefined

const contatos = [
	{
		nome: 'Alex Júnior',
		numero: '1234-5678'
	},
	{
		nome: 'Carolina Moya',
		numero: '1234-6789'
	},
	{
		nome: 'Fernando Jorge',
		numero: '1234-5567'
	}
];

const [,Carol] = contatos;

function mostraNumero({numero}) {
	console.log(numero);
}

mostraNumero(Carol); // 1234-6789

function mostraNumeroDaCarol([,{numero}]) {
	console.log(numero);
}

mostraNumeroDaCarol(contatos); // 1234-6789
