class Automovel {
    constructor() {
        this.cor = null;
        this.modelo = null;
        this.tipoCombustivel = null;
        this.quantRodas = null;
        this.ligado = false
    }
    ligar() {
        this.ligado = true;
        console.log(`O ${this.constructor.name} ${this.modelo} está ligado.`);
    }

    desligar() {
        this.ligado = false;
        console.log(`O ${this.constructor.name} ${this.modelo} está desligado.`);
    }
    abrirVidro() {
        console.log(`O vidro do carro ${this.modelo} foi aberto.`);
    }

    descerVidro() {
        console.log(`O vidro do carro ${this.modelo} foi descido.`);
    }
}

class Carro extends Automovel {
    constructor() {
        super();
        this.quantRodas = 4;
    }


}

class Moto extends Automovel {
    constructor() {
        super();
        this.quantRodas = 2;
    }
}

class Caminhao extends Automovel {
    constructor() {
        super();
        this.quantRodas = 8;
    }
}


// Exemplo de Carro
Carro1 = new Carro();
Carro1.cor = 'Branco';
Carro1.modelo = 'BMW';
Carro1.tipoCombustivel = 'Hibrido';

console.log(`Cor do carro: ${Carro1.cor}`);
console.log(`Modelo do carro: ${Carro1.modelo}`);
console.log(`Tipo de Combustível: ${Carro1.tipoCombustivel}`);
console.log(`Quantidade de Rodas: ${Carro1.quantRodas}`);
Carro1.ligar();
Carro1.abrirVidro();
console.log(' ------------------------------------------------------------------------------------- ');
// Exemplo de Moto
Moto1 = new Moto();
Moto1.cor = 'Preto';
Moto1.modelo = 'Kawasaki';
Moto1.tipoCombustivel = 'Gasolina';

console.log(`Cor da moto: ${Moto1.cor}`);
console.log(`Modelo do carro: ${Moto1.modelo}`);
console.log(`Tipo de Combustível: ${Moto1.tipoCombustivel}`);
console.log(`Quantidade de Rodas: ${Moto1.quantRodas}`);
Moto1.ligar();
Moto1.desligar();
console.log(' ------------------------------------------------------------------------------------- ');

// Exemplo de Caminhão
Caminhao1 = new Caminhao();
Caminhao1.cor = 'Prata';
Caminhao1.modelo = 'Scania';
Caminhao1.tipoCombustivel = 'Diesel';

console.log(`Cor do caminhão: ${Caminhao1.cor}`);
console.log(`Modelo do Caminhão: ${Caminhao1.modelo}`);
console.log(`Tipo de Combustível: ${Caminhao1.tipoCombustivel}`);
console.log(`Quantidade de Rodas: ${Caminhao1.quantRodas}`);
Caminhao1.ligar();
Caminhao1.descerVidro();
console.log(' ------------------------------------------------------------------------------------- ');





