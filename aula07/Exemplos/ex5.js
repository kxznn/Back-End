// exemplo de herança  

class Animal {
    constructor(){
        this.nome = null;
        this.idade = null;
    }
    fazerSom(){
        console.log(`${this.nome} faz um som`);
    }
}

class Cachorro extends Animal {
    constructor(){
        super();
        this.raca = null;

    }
    fazerSom(){
        console.log(`${this.nome} um ${this.raca} late`);
    }
    exibirInfo(){
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Raça: ${this.raca}`);
    }
}


class Gato extends Animal{
    constructor(nome){
        super(nome);

    }

    fazerSom(){
        console.log(`${this.nome} mia Miau !`)
    }

}

class Tigre extends Animal{
    constructor(){
        super();
        this.cor=null;

    }
    fazerSom(){
        console.log(`Tigre ${this.nome} Aaar !`);
    }
    //  exibe info
    exibeinfo(){
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Cor: ${this.cor}`)
    }
}

// Instancia o Cachorro
Perigo = new Cachorro();
Perigo.nome = 'Perigo';
Perigo.idade = 1;
Perigo.raca = 'Pinscher';
Perigo.fazerSom();
Perigo.exibirInfo();

// Instancia o Gato
Tralha = new Gato();
Tralha.nome="Tralha";
Tralha.idade=3;
Tralha.fazerSom()

// Instancia o Tigre
Ney = new Tigre();
Ney.nome='Ney';
Ney.idade=26;
Ney.cor='Preto';
Ney.exibeinfo();
