console.log(1); // 1
console.log({}); // {}
console.log(1,2,3); // 1,2,3

var argumentos = [1,2,3];
console.log(argumentos[0], argumentos[1], argumentos[2]);
// 1,2,3

var argumentos = [1,2,3];
console.log.apply(console, argumentos);
// 1,2,3

const argumentos = [1,2,3];
console.log(...argumentos); // 1,2,3
