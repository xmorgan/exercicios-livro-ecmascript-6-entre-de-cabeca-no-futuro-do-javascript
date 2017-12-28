var boasVindas = function(nome) {
	return "Seja bem-vindo, " + nome;
}

boasVindas("Luiz"); // Seja bem-vindo, Luiz

var boasVindas = (nome) => {
	return "Sejam bem-vindo, " + nome;
}

boasVindas("Luiz"); // Seja bem-vindo, Luiz

var boasVindas = nome => {
	return "Seja bem-vindo, " + nome;
}

boasVindas("Luiz"); // Seja bem-vindo, Luiz

var boasVindas = nome => "Seja bem-vindo, " + nome;

boasVindas("Luiz"); // Seja bem-vindo, Luiz

const boasVindas = nome => `Seja bem-vindo, ${nome}`;

boasVindas("Luiz"); // Seja bem-vindo, Luiz
