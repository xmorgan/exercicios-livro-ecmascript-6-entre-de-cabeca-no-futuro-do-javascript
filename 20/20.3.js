const validador = {
	set(alvo, propriedade, valor) {
		if (propriedade === 'idade') {
			if (!Number.isInteger(valor)) {
				throw new TypeError('A idade não é um número!');
			}
		}
		alvo[propriedade] = valor;
	}
}

const usuario = new Proxy({}, validador);
usuario.idade = 10;
console.log(usuario.idade); // 10

const usuario = new Proxy({}, validador);
usuario.idade = 'dez'; // TypeError: A idade não é um número!
usuario.idade = {}; // TypeError: A idade não é um número!
usuario.idade = true; // TypeError: A idade não é um número!
