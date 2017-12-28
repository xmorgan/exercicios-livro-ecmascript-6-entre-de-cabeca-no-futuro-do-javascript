const Classe = class {
	// ...
}

const instancia = new Classe();

const Classe = class Nome {
	
	getClassName() {
		return Nome.name;
	}

};

const instancia = new Classe();

console.log(instancia.getClassName()); // Nome
console.log(Nome.name); // ReferenceError: Nome is not defined
