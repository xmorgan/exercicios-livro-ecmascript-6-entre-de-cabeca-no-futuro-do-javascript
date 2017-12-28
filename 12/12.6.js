function parametroObrigatorio(parametro) {
	throw new Error(`O parâmetro "${parametro}" é obrigatório!`);
}

function inserirNaTela(objeto = parametroObrigatorio('objeto')) {
	// lógica de implementação do método
}

inserirNaTela();
// Error: O parâmetro "objeto" é obrigatório!
