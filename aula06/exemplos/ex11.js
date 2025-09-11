// cria um objeto vazio e adiciona atributos

carro = []

carro.modelo = 'BMW'
carro.ano = '2026'
carro.combustivel = 'Hibrído'
carro.portas = 5
carro.acelerar = function() {
    return 'O carro está acelerando' 
}

console.log(carro)
console.log(carro.acelerar())