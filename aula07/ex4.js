// exemplo de herança

class Usuario{
    constructor(){
        this.nome=null;
        this.idade=null;
    }
    exibeinfo(){
        console.log(`Nome ${this.nome},idade ${this.idade}`);
    }
}

// cria classe filha 

class cliente extends Usuario{
    constructor(){
        super(); // super faz a classe filha herdar os atributos e métodos da classe pai
        this.cargo = null; // cria atributo carga para a classe cliente
    }
    exibeinfoCargo(){
        console.log(`Nome ${this.nome},idade ${this.idade},cargo ${this.cargo}`); 
    }
}

Kaua = new cliente();
Kaua.nome = 'Kauã';
Kaua.idade = 18;
Kaua.cargo = 'Jovem Aprendiz';
Kaua.exibeinfoCargo();

Perigo = new cliente();
Perigo.nome = 'Alves';
Perigo.idade = 19;
Perigo.cargo = 'Estagiário';
Perigo.exibeinfoCargo();