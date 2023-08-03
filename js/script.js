// Configurações do carrossel
var carousel = document.querySelector('.carousel');
var images = carousel.getElementsByTagName('img');
var currentImageIndex = 0;
var interval = 3000; // Intervalo de 3 segundos entre as imagens

// Função para exibir a próxima imagem
function showNextImage() {
    // Oculta a imagem atual
    images[currentImageIndex].style.display = 'none';
    // Atualiza o índice da próxima imagem
    currentImageIndex = (currentImageIndex + 1) % images.length;
    // Exibe a próxima imagem
    images[currentImageIndex].style.display = 'block';
}

// Inicia o carrossel
setInterval(showNextImage, interval);
function adicionarAoCarrinho(item, botao) {
    var carrinho = document.getElementById("carrinho");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(item));
    carrinho.appendChild(li);
    botao.disabled = true;
  }
  


  function adicionarAoCarrinho(item, botao) {
    var carrinho = document.getElementById("carrinho");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(item));
    carrinho.appendChild(li);
    botao.disabled = true;
  }
  
function limparCarrinho() {
    var carrinho = document.getElementById("carrinho");
    carrinho.innerHTML = "";
    
    var botoes = document.getElementsByTagName("button");
    for (var i = 0; i < botoes.length; i++) {
      botoes[i].disabled = false;
    }
  }

  function selecionarFormaPagamento() {
    var formaPagamento = document.getElementById("forma-pagamento");
    var opcaoSelecionada = formaPagamento.value;
    var mensagemPagamento = document.getElementById("mensagem-pagamento");
    var confirmarPagamento = document.getElementById("confirmar-pagamento");
    
    switch (opcaoSelecionada) {
      case "dinheiro":
        mensagemPagamento.textContent = "Pagamento em dinheiro selecionado.";
        confirmarPagamento.disabled = false;
        break;
      case "cartao":
        mensagemPagamento.textContent = "Pagamento com cartão selecionado.";
        confirmarPagamento.disabled = false;
        break;
      case "pix":
        mensagemPagamento.textContent = "Pagamento com Pix selecionado.";
        confirmarPagamento.disabled = false;
        break;
      default:
        mensagemPagamento.textContent = "";
        confirmarPagamento.disabled = true;
        break;
    }
  }

  function selecionarFormaPagamento() {
    var formaPagamento = document.getElementById("forma-pagamento");
    var opcaoSelecionada = formaPagamento.value;
    var mensagemPagamento = document.getElementById("mensagem-pagamento");
    var confirmarPagamento = document.getElementById("confirmar-pagamento");
    
    switch (opcaoSelecionada) {
      case "dinheiro":
        mensagemPagamento.textContent = "Pagamento em dinheiro selecionado.";
        confirmarPagamento.disabled = false;
        break;
      case "cartao":
        mensagemPagamento.textContent = "Pagamento com cartão selecionado.";
        confirmarPagamento.disabled = false;
        break;
      case "pix":
        mensagemPagamento.textContent = "Pagamento com Pix selecionado.";
        confirmarPagamento.disabled = false;
        break;
      default:
        mensagemPagamento.textContent = "";
        confirmarPagamento.disabled = true;
        break;
    }
}

function confirmarPagamento() {
  var formaPagamento = document.getElementById("forma-pagamento");
  var opcaoSelecionada = formaPagamento.value;
  var mensagemPagamento = document.getElementById("mensagem-pagamento");

  switch (opcaoSelecionada) {
    case "dinheiro":
      mensagemPagamento.textContent = "Pagamento em dinheiro confirmado.";
      break;
    case "cartao":
      mensagemPagamento.textContent = "Pagamento com cartão confirmado.";
      break;
    case "pix":
      mensagemPagamento.textContent = "Pagamento com Pix confirmado.";
      break;
    default:
      break;
  }
}
  // criando a função do botão adionar no carrinho e botao remover do carrinho
  // adicionado botao para forma de pagamento 
  // selecionar a forma de pagamento vai habilitar o botão
  

  