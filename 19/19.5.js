promise
	.then((data) => console.log(`resultado positivo: ${data}`))
	.then((data) => console.log(`resultado positivo 2: ${data}`))
	.catch((data) => console.log(`resultado negativo: ${data}`));

promise
	.then((data) => {
		console.log(`resultado positivo: ${data}`);
		return data;
	})
	.then((data) => console.log(`resultado positivo 2: ${data}`))
	.catch((data) => console.log(`resultado negativo: ${data}`));
