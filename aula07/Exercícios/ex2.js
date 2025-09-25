    class Pessoa {
    constructor (){
        this.nome = null;
        this.idade = null;
        this.profissao = null;
        this.salario = null;
    }

    exibirTrabalho (nomeEmpresa, tempoDeTrabalho){
        console.log(`Nome da Empresa: ${nomeEmpresa}`);
        console.log(`Tempo de Trabalho: ${tempoDeTrabalho} anos`)
    }
}

Pessoa1 = new Pessoa();
Pessoa1.nome =  'Maria';
Pessoa1.idade = 32;
Pessoa1.profissao = 'Analista de Dados';
Pessoa1.salario = 'R$ 12.000';

console.log(`Nome: ${Pessoa1.nome}`);
console.log(`Idade: ${Pessoa1.idade}`);
console.log(`Profissão: ${Pessoa1.profissao}`);
console.log(`Salário: R$${Pessoa1.salario}`);