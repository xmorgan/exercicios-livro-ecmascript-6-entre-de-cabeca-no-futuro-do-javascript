var map = new Map();
function funcao() {};
var objeto = {};

map.set("string", "sou uma string");
map.set(objeto, "sou um objeto");
map.set(funcao, "sou uma função");

console.log(map.get("string")); // sou uma string
console.log(map.get(objeto)); // sou um objeto
console.log(map.get(funcao)); // sou uma função

console.log("tamanho: " + map.size); // tamanho: 3

console.log(map.has("string")); // true
console.log(map.has("abc")); // false

map.delete("string");
console.log(map.has("string")); //false

map.clear();
console.log("tamanho: " + map.size); // tamanho: 0

var mapa = new Map();
mapa.set("um", 1);
mapa.set("dois", 2);
mapa.set("tres", 3);

for (var chave of mapa.keys()) {
	console.log(chave); // um dois tres
}

for (var valor of mapa.values()) {
	console.log(valor); // 1 2 3
}

for (var entrada of mapa.entries()) {
	console.log(entrada);
}
// ['um', 1]
// ['dois', 2]
// ['tres', 3]
