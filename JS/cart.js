// var cartList = document.getElementById("cart-list");
// var totalPrice = 0;

// cartProducts.forEach(function(product) {
//     var cartProductDiv = document.createElement("div");
//     cartProductDiv.classList.add("cart-product");
//     cartProductDiv.innerHTML = `
//         <img src="${product.image}" alt="${product.name}">
//         <div class="cart-product-info">
//             <h3>${product.name}</h3>
//             <p>Quantity: ${product.amount}</p>
//             <p>Price: $${product.price}</p>
//             <p>Total: $${product.price * product.amount}</p>
//             <button class="remove-btn">Remove</button>
//         </div>
//     `;
//     cartList.appendChild(cartProductDiv);
//     totalPrice += product.price * product.amount;
// });


// document.getElementById("total-price").textContent = `Total Price: $${totalPrice}`;



// hämta produkterna från LocalStorage
var cart = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cart);
// hämta elementet för att visa produkterna
var cartList = document.getElementById("cart-list");

// loopa igenom produkterna och skapa HTML-kod för varje produkt
var html = "";
for (var i = 0; i < cart.length; i++) {
    // var product = cart[i];
    // console.log(product.price);
    html += `
        <div class="cart-product">
            <img src="${cart[i].product.image}" alt="product image">
            <div class="product-info">
                <h3>Product Name</h3>
                <p>Product ID: ${cart[i].product.id}</p>
                <p>Amount: ${cart[i].product.amount}</p>
                <p>Price: $${cart[i].product.price}</p>
                <p>Total Price: $${cart[i].product.totalProductPrice}</p>
                <button class="remove-from-cart" data-product-id="${cart[i].product.id}">Remove</button>
            </div>
        </div>
    `;
}

// lägg till HTML-koden till elementet
cartList.innerHTML = html;


// hämta alla knappar med klassen "remove-from-cart"
var removeButtons = document.querySelectorAll(".remove-from-cart");

// loopa igenom alla knappar och lägg till en click-eventlistener
for (var i = 0; i < removeButtons.length; i++) {
    var button = removeButtons[i];
    button.addEventListener("click", function(event) {
        
        // ta bort produkten från kundvagnen listan i HTML
        var product = event.target.closest(".cart-product");
        product.remove();

        // uppdatera kundvagnen räknaren
        var cartCount = document.getElementById("cart-count");
        cartCount.textContent = cart.length;
    });
}

var title = document.getElementById("title");
title.addEventListener("click", function() {
    window.location.href = "./index.html"
});