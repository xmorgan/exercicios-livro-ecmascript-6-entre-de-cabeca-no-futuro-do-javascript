var nome = 'Diego';
console.log('Bem-vindo, ' + nome); // Bem-vindo, Diego

const nome = 'Diego';
console.log(`Bem-vindo, ${nome}`);

const n1 = 1, n2 = 2;
console.log(`${n1} + ${n2} = ${n1 + n2}`);
// 1 + 2 = 3

console.log("exibindo\numa\npalavra\npor\nlinha");

console.log(`
exibindo
uma
palavra
por
linha`);

const div =
`<div>
	<p><b>Nome:</b> ${nome}</p>
	<p><b>Idade:</b> ${idade}</p>
	<p><b>Endereço:</b> ${endereco}</p>
 </div>`;
// ... append do conteúdo no modal

var div = '<div>';
div += '<p><b>Nome:</b> ' + nome + '</p>';
div += '<p><b>Idade:</b> ' + idade + '<p/>';;
div += '<p><b>Endereço:</b> ' + endereco + '<p/>';
div += '</div>';
// ... append do conteúdo no modal
