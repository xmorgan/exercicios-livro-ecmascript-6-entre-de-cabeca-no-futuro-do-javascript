class Usuario {

	constructor(login, senha) {
		this.login = login;
		this.senha = senha;
	}

}

const usuario = new Usuario('SuperJS', '123');
console.log(usuario.login); // SuperJS
console.log(usuario.senha); // 123

const proxy = new Proxy(usuario, {
	get(alvo, propriedade) {
		console.log(`${propriedade} foi solicitada!`);
		return alvo[propriedade];
	}
});

console.log(proxy.login);
// login foi solicitado!
// SuperJS

console.log(proxy.senha);
// senha foi solicitada!
// 123
