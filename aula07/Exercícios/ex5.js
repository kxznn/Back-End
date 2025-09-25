class Maquinas {
    constructor() {
        this.nome = '';
        this.eixos = '';
        this.rpm = '';
        this.consumoenergia = '';
        this.ligada = false;
    }

    ligar() {
        if (!this.ligada) {
            this.ligada = true;
            console.log(`${this.nome} está ligada.`);
        } else {
            console.log(`${this.nome} já está ligada.`);
        }
    }

    desligar() {
        if (!this.ligada) {
            this.ligada = false;
            console.log(`${this.nome} desligada.`);
        } else {
            console.log(`${this.nome} já está desligada.`)
        }
    }

    ajustarVeloc(nvrpm) {
        if (this.ligada) {
            console.log(`Velocidade da ${this.nome} ajustada de ${this.rpm} RPM para ${nvrpm} RPM.`);
            this.rpm = nvrpm;
        } else {
            console.log(`Não é possível ajustar a velocidade. ${this.nome} está desligada.`);
        }
    }
}

class Furadeira extends Maquinas {
    constructor() {
        super();
        this.eixos = 0;
    }
}

const furadeira1 = new Furadeira();
furadeira1.nome = 'Furadeira Bosch';
furadeira1.rpm = 1200;
furadeira1.consumoenergia = 500;

furadeira1.ligar();
// furadeira1.ajustarVeloc(1500);
furadeira1.desligar();
