const Pessoa = {
	sobrenome: 'Alberto'
}

const {sobrenome:apelido} = Pessoa;

console.log(sobrenome); // undefined
console.log(apelido); // Alberto
