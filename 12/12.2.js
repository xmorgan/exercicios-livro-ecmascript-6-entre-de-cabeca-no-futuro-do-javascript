function multiplicaPor(valor, multiplicador = 2) {
	return valor * multiplicador;
}

const valor = multiplicaPor(2, 2);
console.log(valor); // 4

function multiplicaPor(valor, multiplicador = 2) {
	return valor * multiplicador;
}

const valor = multiplicaPor(2, undefined);
console.log(valor); // 4

function print(valor = '') {
	console.log(valor);
}

print(); // ''
print(null); // null
