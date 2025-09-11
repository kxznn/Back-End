// exemplo de objeto em java script 
// criando objeto pessoa

let pessoa = {
nome: 'Kauã', 
idade: 18,
Profissão: 'Estudante Tecnologo',
saudacao: function(){
    console.log(`Olá ! Seja bem vindo ${this.nome}`)
}
}

console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.idade)
pessoa.saudacao()