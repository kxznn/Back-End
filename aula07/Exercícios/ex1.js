// EXERCÍCIO 1 - CLASS CARRO

class Carro{
    constructor(){
        this.marca = null;
        this.modelo = null;
        this.ano = null;
        this.motorligado = false;
    }

    exibir_info(){
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`Motor Ligado: ${this.motorligado}`);
    }

    ligar_motor(){
        this.motorligado = true;
    }

    desligar_motor(){
        this.motorligado = false;
    }

    statusMotor() {
        if (this.motorligado) {
            return "O motor está ligado.";
        } else {
            return "O motor está desligado.";
        }
    }
};

Carro1 = new Carro();
Carro1.marca = 'Toyota';
Carro1.modelo = 'Corolla';
Carro1.ano = 2020;
Carro1.exibir_info();

Carro1.ligar_motor();
console.log(Carro1.statusMotor());

Carro1.desligar_motor();
console.log(Carro1.statusMotor()); 
