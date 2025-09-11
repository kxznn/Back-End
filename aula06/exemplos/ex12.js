// cria um objeto

let carro = {
    nome:'Jeep',
    cor: 'Preto',
    ano: 2023,
    velocidade: function() {
        return this.nome + ' 150km/h'
    }
}

console.log(carro)
console.log(carro.velocidade())

// cria um classe
class carro1 {
    nome = 'Jeep';
    ano = 2024;
    cor = 'Vermelho'
}

// instancio o objeto Jeep a partir da classe carro
Jeep = new carro1 () // cria um objeto chamado Jeep
console.log(Jeep)