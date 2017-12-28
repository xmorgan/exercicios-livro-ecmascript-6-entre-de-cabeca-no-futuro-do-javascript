const v = 'valor 1';
function funcao(x = v) {
	const v = 'valor 2';
	console.log(x);
}

funcao(); // qual valor será mostrado?
