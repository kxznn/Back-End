// exemplo classe com construtor

class pessoa {
    constructor(nome, idade){
        this.nome=nome;
        this.idade=idade;
    }
saudacao(){
    return  `Olá ! Meu nome é ${this.nome}`
}
}

let pessoa1 = new pessoa("Rocky", 3);
let pessoa2 = new pessoa("Karina", 46);

console.log(pessoa1.nome)
console.log(pessoa1.saudacao())
