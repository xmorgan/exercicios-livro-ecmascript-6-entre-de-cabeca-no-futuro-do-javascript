const horas = new Date().getHours();
const mensagem = `Bom dia, são ${horas} horas`;
console.log(mensagem); // ex: Bom dia, são 12 horas

const mensagem = defineMensagem`Bom dia, são ${horas} horas`;

function defineMensagem(strings, ...values) {
	console.log(strings);
	console.log(values);
}

const mensagem = defineMensagem`${""}${horas} horas`;

function defineMensagem(strings, ...values) {
	const hora = values[1];
	if (hora >= 6 && hora <= 12) {
		values[0] = "Bom dia";
	} else if (hora > 12 && hora <= 18) {
		values[0] = "Boa tarde";
	} else {
		values[0] = "Boa noite";
	}

	values[0] = `${values[0]}, são `;
	return `${values[0]}${strings[0]}${hora}${strings[2]}`;
}

const mensagem = defineMensagem(`Bom dia, são ${horas} horas`);

function defineMensagem(['', 'horas'], horas) {
	// corpo da função
}
