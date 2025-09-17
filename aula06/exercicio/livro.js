// EXERCÍCIO 05

// const Livro = {
//     // estrutura do livro
//     titulo: '',
//     autor: '',
//     anoPublicacao: '',
//     genero: ''
// };

// EXERCÍCIO 06
// const meuLivroFav = {
//     titulo: "Harry Potter e o Prisioneiro de Azkaban",
//     autor: "J.K. Rowling",
//     anoPublicacao: 1999,
//     genero: "fantasia"
// };

// const anoAtual = new Date().getFullYear();
// meuLivroFav.idadePublicacao = anoAtual - meuLivroFav.anoPublicacao;

// const mostrarDetalhes = `
// Detalhes do livro:
// -------------------

// Título: ${meuLivroFav.titulo}
// Autor: ${meuLivroFav.autor}
// Ano de Publicação: ${meuLivroFav.anoPublicacao}
// Gênero: ${meuLivroFav.genero}
// Publicado há: ${meuLivroFav.idadePublicacao} anos
// `;
// console.log(mostrarDetalhes);


// EXERCÍCIO 07 / 08 / 09 / 10
const meuLivro = {
  titulo: "Harry Potter e o Prisioneiro de Azkaban",
  autor: "J.K. Rowling",
  anoPublicacao: 1999,
  genero: "fantasia",
  idadePublicacao: new Date().getFullYear() - 1999,
  avaliacao: 9,
};

console.log('Livro original sem modificar "avaliação":', meuLivro);
console.log(' ')
delete meuLivro.avaliacao;

console.log('Livro com apos excluir a avaliação:', meuLivro);

// const novaAvaliacao = 10;
// if (meuLivro.avaliacao === null) {
//   meuLivro.avaliacao = novaAvaliacao;
//   console.log("Avaliação adicionada com sucesso!");
// } else {
//   console.log("O livro já possui uma avaliação.");
// }
// console.log("\nNovo estado do objeto livro:");
// console.log(meuLivro);
// console.log('');
// meuLivro.genero = 'Aventura';
// console.log('Nova lista após trocar o Gênero:', meuLivro);