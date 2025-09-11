// exemplo utilizando o slice para fatiar o array

nomes = ['Daniel', 'Bruna', 'Kauã', 'Giovana'];
console.log(nomes);

nomes.splice(1,1, 'Viviane'); // o splice adiciona o elemento na posição 1,1 e adiciona um novo elemento na mesma posição
console.log(nomes);

const nomes2 = nomes.slice(1,3);
console.log(nomes2);

const tamanho = nomes.length;
console.log(tamanho); 
console.log('')
// forEach itera os elementos da lista 
console.log("Print forEach")
nomes.forEach(function(nomes,index) {
    console.log(index, nomes)
});

// for
console.log('')
console.log("Print com for");
for(i=0; i<nomes.length;i++) {
    console.log(`${i} ${nomes}`)
};
