function montarQuerySelect() {
	const tabela = arguments[0];
	const qtdArgs = arguments.length;
	let cols = '';
	if (qtdArgs > 1) {
		for (let index = 1; index < qtdArgs; index++) {
			cols += `${arguments[index]}, `;
		}
		cols = cols.substring(0, cols.length - 2);
	} else {
		cols = '*';
	}

	return `SELECT ${cols} from ${tabela}`;
}

const query1 = montarQuerySelect('tabela');
const query2 = montarQuerySelect('tabela', 'col1');
const query3 = montarQuerySelect('tabela', 'col1', 'col2');
// query1 > SELECT * FROM tabela
// query2 > SELECT col1 FROM tabela
// query3 > SELECT col1, col2 FROM tabela
