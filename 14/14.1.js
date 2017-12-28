const listaMae = ['leite','ovos','papel'];
const listaNamorada = ['arroz','feijão','suco'];

const listaCompras = listaMae.concat(listaNamorada);
console.log(listaCompras); // ['leite', 'ovos', ..., 'suco']
console.log(listaCompras.length); // 6

const listaCompras = listaMae.concat(listaNamorada, listaEscritorio);

const listaCompras = [...listaMae, ...listaNamorada, ...listaEscritorio];

const listaCompras = [listaMae, listaNamorada, listaEscritorio];

// com spread
console.log(listaCompras);
[
	'leite','ovos','papel',
	'arroz','feijão','suco',
	'adesivos','canetas','fita adesiva'
]

// sem o spread
console.log(listaCompras);
[
	['leite','ovos','papel'],
	['arroz','feijão','suco'],
	['adesivos','canetas','fita adesiva']
]
