function somaTudoEMultiplicaPor(multiplicador, ...valores) {
	return valores.reduce((soma, valor) => {
		return soma + (valor * multiplicador);
	}, 0);
}

console.log(somaTudoEMultiplicaPor(2, 1, 2)); // 6
console.log(somaTudoEMultiplicaPor(2, 6, 7)); // 26

function montarQuerySelect(tabela, ...cols) {
	let colsQuery = '';
	if (cols.length > 0) {
		colsQuery = cols.reduce((colsQuery, coluna) => {
			return colsQuery += `${coluna}, `;
		}, '');
		colsQuery = colsQuery.substring(0, colsQuery.length - 2);
	} else {
		colsQuery = '*';
	}

	return `SELECT ${colsQuery} FROM ${tabela}`;
}

const query1 = montarQuerySelect('tabela');
const query2 = montarQuerySelect('tabela', 'col1');
const query3 = montarQuerySelect('tabela', 'col1', 'col2');
// query1 > SELECT * FROM tabela
// query2 > SELECT col1 FROM tabela
// query3 > SELECT col1, col2 FROM tabela
