// exemplo fruta 

class Fruta {
    constructor() {
        this.saber = 'Doce';
        this.nome = 'Laranja';
        this.cor = 'Laranja';
        this.peso = 400;
        this.diasdesdecolheita = 5;
        this.isMadura = null; // o atributo pode ser opcional, inicializando como null
    }

    madura(diasParaMadura) {
        if (diasParaMadura >= this.diasdesdecolheita) {
            console.log(`A ${this.nome} está madura`);
        } else {
            console.log(`A ${this.nome} não está madura`);
        }

    }
}

// instanciando o objeto
Laranja = new Fruta();
Laranja.madura(10);