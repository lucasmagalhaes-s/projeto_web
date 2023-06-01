var cartItems = [];

function addToCart(product, price) {
    cartItems.push({ product: product, price: price });
    updateCart();
}

function updateCart() {
    var cartElement = document.getElementById("cart");
    cartElement.innerHTML = "<h2>Carrinho</h2>";
    if (cartItems.length === 0) {
        cartElement.innerHTML += "<p>O carrinho está vazio.</p>";
    } else {
        var cartList = document.createElement("ul");
        var total = 0;
        cartItems.forEach(function(item) {
            var listItem = document.createElement("li");
            listItem.innerText = item.product + " - R$ " + item.price.toFixed(2);
            cartList.appendChild(listItem);
            total += item.price;
        });
        cartElement.appendChild(cartList);
        cartElement.innerHTML += "<p><strong>Total: R$ " + total.toFixed(2) + "</strong></p>";
    }
}

function checkout() {
    if (cartItems.length === 0) {
        alert("Seu carrinho está vazio. Adicione itens antes de finalizar a compra.");
    } else {
        // Aqui você pode adicionar a lógica para finalizar a compra, como redirecionar para uma página de checkout ou exibir um formulário de pagamento.
        alert("Compra finalizada! Obrigado por comprar conosco!");
        cartItems = []; // Limpar o carrinho após finalizar a compra
        updateCart(); // Atualizar o carrinho após limpar
    }
}
