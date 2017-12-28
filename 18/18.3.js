const objeto = {
	valor: 10,
	[Symbol("simbolo")]: "Oi, sou um simbolo"
};

console.log(objeto.valor); // 10
console.log(objeto.simbolo); // undefined

const primos = [2,3,5];
const iterador = primos[Śymbol.iterator]();

console.log(iterador.next()); // { value: 2, done: false }
console.log(iterador.next()); // { value: 3, done: false }
console.log(iterador.next()); // { value: 5, done: false }

console.log(iterador.next()); // { value: undefined, done: true }

const equipe = {
	quantidade: 3,
	maturidade: 'alta',
	senior: 'Luís',
	pleno: 'Márcia',
	junior: 'Christian',
	[Symbol.iterator]: function* () {
		yield this.senior;
		yield this.pleno;
		yield this.junior;
	}
}

for (let integrante of equipe) {
	console.log(integrante);
}
// Luís, Márcia, Christian
