let promise = new Promise((resolve, reject) => {
	// corpo da promise
});

promise.then();
promise.catch();

let promise = new Promise((resolve, reject) => {
	let resultado = true;
	if (resultado) {
		resolve("deu tudo certo!");
	} else {
		reject("deu tudo errado!");
	}
});

promise.then((data) => console.log(`resultado positivo: ${data}`));
promise.catch((data) => console.log(`resultado negativo: ${data}`));
