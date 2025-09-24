readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let cliente;

class Cliente {
    constructor(nome, profissao, saldo) {
        this.nome = nome;
        this.profissao = profissao;
        this.saldo = saldo;
        this.historico = [];
    }

    pix(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            this.historico.push(`Pix enviado: R$${valor.toFixed(2)}`);
            console.log(`Pix de R$${valor.toFixed(2)} realizado com sucesso.`);
        } else {
            console.log(`Saldo insuficiente para Pix.`);
        }
    }

    emprestimo(valor) {
        if (valor > 0) {
            this.saldo += valor;
            this.historico.push(`Empréstimo recebido: R$${valor.toFixed(2)}`);
            console.log(`Empréstimo de R$${valor.toFixed(2)} adicionado ao saldo.`);
        } else {
            console.log(`Valor inválido para empréstimo.`);
        }
    }

    saque(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            this.historico.push(`Saque realizado: R$${valor.toFixed(2)}`);
            console.log(`Saque de R$${valor.toFixed(2)} realizado.`);
        } else {
            console.log(`Saldo insuficiente para saque.`);
        }
    }

    extrato() {
        console.log("\nExtrato de sua conta:");
        this.historico.forEach(item => console.log("- " + item));
        console.log(`Saldo atual: R$${this.saldo.toFixed(2)}\n`);
    }
}

function iniciar() {
    rl.question("Digite seu nome: ", nome => {
        rl.question("Digite sua profissão: ", profissao => {
            rl.question("Digite seu saldo inicial: R$", saldo => {
                cliente = new Cliente(nome, profissao, parseFloat(saldo));
                console.log(`\nBem-vindo, ${cliente.nome} (${cliente.profissao})!`);
                menu();
            });
        });
    });
}
function menu() {
    console.log(`
--- MENU ---
1. Fazer Pix
2. Fazer Empréstimo
3. Fazer Saque
4. Ver Extrato
5. Sair
`);
    rl.question('Escolha uma das opções: ', opcao => {
        switch (opcao) {
            case "1":
                rl.question('Valor do Pix: R$', valor => {
                    cliente.pix(parseFloat(valor));
                    menu();
                });
                break;
            case "2":
                rl.question('Valor do empréstimo: R$', valor => {
                    cliente.emprestimo(parseFloat(valor));
                    menu();
                });
                break;
            case "3":
                rl.question('Valor do saque: R$', valor => {
                    cliente.saque(parseFloat(valor));
                    menu();
                });
                break;
            case "4":
                cliente.extrato();
                menu();
                break;
            case "5":
                console.log('Saindo do programa...');
                rl.close();
                break;
            default:
                console.log('Opção inválida. Tente novamente!');
                menu();
                break;
        }
    });
}
iniciar();
