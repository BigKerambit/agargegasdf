let cart = JSON.parse(localStorage.getItem('cart')) || [];

const cartDiv = document.getElementById('cart');

if (cart.length === 0) {
    cartDiv.innerText = "Пока корзина пуста.";
} else {
    cart.forEach(item => {
        cartDiv.innerHTML += `<p>Название: ${item.name}, Цена: ${item.price}</p>`;
    });
}
