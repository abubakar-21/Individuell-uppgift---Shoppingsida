var productList = document.getElementById("product-list");
var cartIcon = document.getElementById("cart-icon");
var cartCount = document.createElement("span");
// var cartCount = document.querySelector(".cart-count");
var cartProducts = [];

var products = [
    {
        name: "T-Shirt",
        price: 20,
        image: "https://www.xxl.se/filespin/981dedaf7cf94f04b6755b91e856f629?resize=722,722&quality=90&bgcolor=efefef",
        category: "Clothing",
        description: "A comfortable and stylish t-shirt."
    },
    {
        name: "Sneakers",
        price: 80,
        image: "https://img01.ztat.net/article/spp-media-p1/1cd422f893f44b7a857c38a587b0ccb4/b30fe60c77484664be9b537cabff3561.jpg?imwidth=1800&filter=packshot",
        category: "Shoes",
        description: "A pair of high-quality sneakers."
    },
    {
        name: "Phone Case",
        price: 15,
        image: "https://techhuset.se/images/normal/techhuset-magsafe-skal-iphone-14-pro-transparent.jpg",
        category: "Accessories",
        description: "A durable and protective phone case."
    },
    {
        name: "Laptop",
        price: 1000,
        image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9520/media-gallery/black/laptop-xps-9520-t-black-gallery-4.psd?fmt=pjpg&pscan=auto&scl=1&wid=3491&hei=2077&qlt=100,1&resMode=sharp2&size=3491,2077&chrss=full&imwidth=5000",
        category: "Electronics",
        description: "A high-performance laptop computer."
    }
];




products.forEach(function(product) {
    product.id = Math.floor(Math.random() * 100000);
    var productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
        <img src="${product.image}">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>Price: $${product.price}</p>
        <div class="quantity-container">
            <button class="minus-btn">-</button>
            <input type="number" value="1" min="0" class="quantity-input">
            <button class="plus-btn">+</button>
            <button class="submit-btn">Add to cart</button>
        </div>
    `;
    
    productList.appendChild(productDiv);

    var submitBtn = productDiv.querySelector(".submit-btn");
    submitBtn.addEventListener("click", function(event) {
        var amount = input.value;
        if(amount <= 0) {
            return;
        }
        cartCount.textContent++;
        cartCount.style.display = "block";
        var totalProductPrice = product.price * amount;
        var cartProduct = {...product, amount: amount, totalProductPrice: totalProductPrice};
        cartProducts.push(cartProduct);
        console.log(cartProducts);

        // hämta produkt från knappen
        // var product1 = event.target.parentNode;
        // var productId = cartProducts.getAttribute("data-product-id");
        // hämta tidigare sparade data från LocalStorage
        var cart = JSON.parse(localStorage.getItem("cart")) || [];

        var isExist = false;
        for(var i=0;i<cart.length;i++){
            if(cart[i].id === cartProduct){
                cart[i].amount++;
                isExist = true;
                break;
            }
        }
        if(!isExist){
            cart.push({product: cartProduct});
        }
        // lägg till produkten i arrayen
        // cart.push(cartProduct);
        // spara arrayen till LocalStorage
        localStorage.setItem("cart", JSON.stringify(cart));


    });

    // hämta knappar och input-element
    var minusBtn = productDiv.querySelector(".minus-btn");
    var plusBtn = productDiv.querySelector(".plus-btn");
    var input = productDiv.querySelector(".quantity-input");

    // lägg till lyssnare på knapparna
    minusBtn.addEventListener("click", function() {
        if (input.value > 0) {
            input.value--;
        }
    });
    plusBtn.addEventListener("click", function() {
        input.value++;
    });


});

cartIcon.addEventListener("click", function() {
    window.location.href = "./cart.html"
});

cartCount.classList.add("cart-count");
cartCount.textContent = "0";
cartIcon.appendChild(cartCount);

cartCount.style.display = "none";


cartCount.style.display = "block";
cartCount.textContent = "0"; 
