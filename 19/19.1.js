funcaoAssincrona(arg1, callback) {
	// faz request e afins
	// e no final da execução executamos o callback
	callback();
}

function callback() {
	// operação que quero fazer depois que tiver a resposta da request
}

obj.funcaoAssincrona(function(response) {
	response.funcaoAssincrona(function(response2) {
		response2.funcaoAssincrona(function(response3) {
			response3.funcaoAssincrona(function(response4) {
				return response4;
			});
		});
	});
});
