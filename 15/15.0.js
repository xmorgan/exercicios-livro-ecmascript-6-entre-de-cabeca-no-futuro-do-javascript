const Usuario = {
	nome: 'Elliot',
	sobrenome: 'Alderson',
	senha: 'mrrobot',
	email: 'elliot.alderson@gmail.com',
	profissao: 'Engenheiro de Cibersegurança',
	github: 'https://github.com/ElliotAlderson'
}

const email = Usuario.email;
validarEmail(email);
// ...

const {email} = Usuario;
console.log(email); // elliot.alderson@gmail.com

const {senha, confirmacaoSenha} = Usuario;
console.log(senha); // mrrobot
console.log(confirmacaoSenha); // mrrobot

const {numeroDoCartao} = Usuario;
console.log(numeroDoCartao); // undefined
