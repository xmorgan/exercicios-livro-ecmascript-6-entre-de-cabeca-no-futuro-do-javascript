var bruxos = ['Harry Potter','Hermione Granger','Rony Weasley'];

// obtém o iterador
var iteradorBruxos = bruxos[Symbol.iterator]();

iteradorBruxos.next(); // {value: Harry Potter, done: false}
iteradorBruxos.next(); // {value: Hermione Granger, done: false}
iteradorBruxos.next(); // {value: Rony Weasley: done: false}

iteradorBruxos.next(); // {value: undefined, done: true}
