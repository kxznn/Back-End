// EXERCÍCIO 01

let Games = ['Fortnite', 'Hollow Knight', 'Minecraft', 'GTA V', 'Call of Duty'];
console.log(Games);

Games[0] = 'Roblox';
console.log('Array alterado:', Games);

console.log("-------------------------------------------------------------------------------------");
console.log(' ');
// EXERCÍCIO 02

let meuArray = [];
meuArray.push(10, 20, 30);
console.log(meuArray);
meuArray[0] = meuArray[0] * 2;
console.log('Array após alteração:', meuArray)

console.log("-------------------------------------------------------------------------------------");
console.log(' ');
// EXERCÍCIO 03

let list = [];
list.push(3, 9, 19);
console.log('Array Resultante:', list);

console.log("-------------------------------------------------------------------------------------");
console.log(' ');
// EXERCÍCIO 04 

let Vet_list = [];
console.log('Lista de Chegada dos Animais');

// ordem de chegada
Vet_list.push('Cachorro salsisha');
Vet_list.push('Cachorro Pitbull');
Vet_list.push('Coelho Branco');

// exibindo lista atualizada após chegada
console.log('Fila atualizada:', Vet_list)

// removendo um animal por vez 
let primeiroDaFila = Vet_list.shift();
let segundoAnimal = Vet_list.shift();
let terceiroAnimal = Vet_list.shift();

// Exibindo resultado final

console.log('Fila final:', Vet_list)

console.log("-------------------------------------------------------------------------------------");
console.log(' ');