function recuperaDadosDaApi() {
	// Realiza GET para o http://temperatura.com/api/temperatura/sp
	// Retorna JSON que veio na response
	return response.json;
}

const {temperatura} = recuperaDadosDaApi();
console.log(temperatura); // 24c

const {temperatura, maxima, minima} = recuperaDadosDaApi();
console.log(temperatura); // 24c
console.log(maxima); // 32c
console.log(minima); // 20c
