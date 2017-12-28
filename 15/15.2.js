const suco = {
	sabor: 'uva',
	quantidade: '500ml'
}

function descreveSuco({sabor, quantidade}) {
	return `Este suco é de sabor ${sabor} e possui ${quantidade}`;
}

descreveSuco(suco); // Este suco é de sabor uva e possui 500ml

const suco = {
	sabor: 'uva',
	quantidade: '500ml'
}

const doce = {
	tipo: 'açucar'
}

function descreveSuco({sabor, quantidade}, {tipo}) {
	return `Este suco é de sabor ${sabor} e possui ${quantidade} adocicado com ${tipo}`;
}

descreveSuco(suco, doce);
// 'Este suco é de sabor uva e possui 500ml adocicado com açucar'
