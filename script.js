// obtém os elementos do DOM
// const content0to2 = document.getElementById("content-0-2");
// const leftButton0to2 = document.getElementById("left-button-0-2");
// const rightButton0to2 = document.getElementById("right-button-0-2");

const content3to5 = document.getElementById("content-3-5");
const leftButton3to5 = document.getElementById("left-button-3-5");
const rightButton3to5 = document.getElementById("right-button-3-5");

const content6to8 = document.getElementById("content-6-8");
const leftButton6to8 = document.getElementById("left-button-6-8");
const rightButton6to8 = document.getElementById("right-button-6-8");

const content9to10 = document.getElementById("content-9-10");
const leftButton9to10 = document.getElementById("left-button-9-10");
const rightButton9to10 = document.getElementById("right-button-9-10");

const content11to14 = document.getElementById("content-11-14");
const leftButton11to14 = document.getElementById("left-button-11-14");
const rightButton11to14 = document.getElementById("right-button-11-14");



// // adiciona um evento de escuta de clique para o botão esquerdo da faixa 0-2 anos
// leftButton0to2.addEventListener("click", function() {
//   // move o conteúdo para a esquerda
//   content0to2.scrollLeft -= 250; //altere a quantidade de pixels a serem movidos conforme necessário
// });

// // adiciona um evento de escuta de clique para o botão direito da faixa 0-2 anos
// rightButton0to2.addEventListener("click", function() {
//   // move o conteúdo para a direita
//   content0to2.scrollLeft += 250; //altere a quantidade de pixels a serem movidos conforme necessário
// });

// adiciona um evento de escuta de clique para o botão esquerdo da faixa 3-5 anos
leftButton3to5.addEventListener("click", function() {
  // move o conteúdo para a esquerda
  content3to5.scrollLeft -= 350; //altere a quantidade de pixels a serem movidos conforme necessário
});

// adiciona um evento de escuta de clique para o botão direito da faixa 3-5 anos
rightButton3to5.addEventListener("click", function() {
  // move o conteúdo para a direita
  content3to5.scrollLeft += 350; //altere a quantidade de pixels a serem movidos conforme necessário
});

// 6-8
leftButton6to8.addEventListener("click", function() {
  // move o conteúdo para a esquerda
  content6to8.scrollLeft -= 350; //altere a quantidade de pixels a serem movidos conforme necessário
});

// adiciona um evento de escuta de clique para o botão direito da faixa 6-8 anos
rightButton6to8.addEventListener("click", function() {
  // move o conteúdo para a direita
  content6to8.scrollLeft += 350; //altere a quantidade de pixels a serem movidos conforme necessário
});

// 9-10
leftButton9to10.addEventListener("click", function() {
  // move o conteúdo para a esquerda
  content9to10.scrollLeft -= 350; //altere a quantidade de pixels a serem movidos conforme necessário
});

// adiciona um evento de escuta de clique para o botão direito da faixa 6-8 anos
rightButton9to10.addEventListener("click", function() {
  // move o conteúdo para a direita
  content9to10.scrollLeft += 350; //altere a quantidade de pixels a serem movidos conforme necessário
});

// 11-14
leftButton11to14.addEventListener("click", function() {
  // move o conteúdo para a esquerda
  content11to14.scrollLeft -= 350; //altere a quantidade de pixels a serem movidos conforme necessário
});

// adiciona um evento de escuta de clique para o botão direito da faixa 6-8 anos
rightButton11to14.addEventListener("click", function() {
  // move o conteúdo para a direita
  content11to14.scrollLeft += 350; //altere a quantidade de pixels a serem movidos conforme necessário
});