class Produtos {
    constructor() {
        this.nome = '';
        this.qnt = '';
        this.preco = '';
        this.comunicacao = '';
        this.energiaeletrica = '';
        this.ligado = false;
    }

    ligar() {
        if (!this.ligado) {
            this.ligado = true;
            console.log(`${this.nome} ligada.`);
        } else {
            console.log(`${this.nome} já está ligada.`);
        }
    }


    desligar() {
        if (this.ligado) {
            this.ligado = false;
            console.log(`${this.nome} desligada.`);
        } else {
            console.log(`${this.nome} já está desligada.`);
        }
    }

    ajustarTemp(setpoint) {
        if (this.ligado) {
            console.log(`${this.nome} ajustada para ${setpoint}°C.`);
        } else {
            console.log(`Não é possível ajustar temperatura. ${this.nome} está desligada.`);
        }
    }
}

class Fritadeira extends Produtos {
    constructor() {
        super();
    }
}


class Televisao extends Produtos {
    constructor() {
        super();
    }
}

class ArCondicionado extends Produtos {
    constructor() {
        super();
    }
}


const tv = new Televisao ();
tv.nome = 'Televisão Samsung 4K oled';
tv.qnt = 1;
tv.preco = 1200;
tv.comunicacao = 'Wi-fi';
tv.energiaeletrica = 120;
tv.ligar();
tv.ajustarTemp(20);
tv.desligar();

console.log('---------------------------------------------------------')
const fritadeira1 = new Fritadeira();
fritadeira1.nome = 'Fritadeira polishop';
fritadeira1.qnt = 2;
fritadeira1.preco = 300;
fritadeira1.comunicacao = 'Bluetooth'
fritadeira1.energiaeletrica = 100;
fritadeira1.ligar();
fritadeira1.ajustarTemp(200);
fritadeira1.desligar();

console.log('---------------------------------------------------------')
const ar_cond = new ArCondicionado();
ar_cond.nome = 'Ar-Condicionado Samsung';
ar_cond.qnt = 1;
ar_cond.preco = 2800;
ar_cond.comunicacao = 'Wi-fi';
ar_cond.energiaeletrica = 1200;
ar_cond.ligar();
ar_cond.ajustarTemp(19);
ar_cond.desligar();

console.log('---------------------------------------------------------')