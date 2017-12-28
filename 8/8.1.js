const dataNascimento = '21/07/1992';
dataNascimento = '25/08/1996'; // tentando atribuir novo valor
// TypeError: Assignment to constant variable.

const pessoa = {nome: 'joão'};
pessoa.idade = 12;
console.log(pessoa); // {"nome": "joão", "idade": 12}

const novaPessoa = {nome: 'maria'};
pessoa = novaPessoa;
// TypeError: Assignment to constant variable.
