const productsContainer = document.getElementById("products-container");

const cartBtn = document.getElementById("cart-btn");
const closeCartBtn = document.getElementById("close-cart");
const cartDrawer = document.getElementById("cart-drawer");
const cartOverlay = document.getElementById("cart-overlay");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");
const checkoutBtn = document.getElementById("checkout-btn");

let cart = JSON.parse(localStorage.getItem("myCart")) || [];

function saveCart() {
    localStorage.setItem("myCart", JSON.stringify(cart));
}

function getCartQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    return item ? item.quantity : 0;
}

function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    saveCart();
    updateCart();
}

function decreaseFromCart(productId) {
    const item = cart.find(item => item.id === productId);

    if (!item) return;

    item.quantity--;

    if (item.quantity <= 0) {
        cart = cart.filter(cartItem => cartItem.id !== productId);
    }

    saveCart();
    updateCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCart();
}

function updateCart() {
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    cartCount.innerText = totalQuantity;
    cartTotal.innerText = "$" + totalPrice.toFixed(2);

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
    } else {
        cartItems.innerHTML = "";

        cart.forEach(item => {
            const cartItem = document.createElement("div");
            cartItem.className = "cart-item";

            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <div class="cart-item-info">
                    <h3>${item.title}</h3>
                    <p>$${item.price.toFixed(2)} × ${item.quantity}</p>

                    <div class="cart-quantity">
                        <button class="cart-minus">−</button>
                        <span>${item.quantity}</span>
                        <button class="cart-plus">+</button>
                    </div>
                </div>

                <button class="remove-btn" title="Remove item">&times;</button>
            `;

            cartItem.querySelector(".cart-minus").addEventListener("click", () => {
                decreaseFromCart(item.id);
                renderProductQuantities();
            });

            cartItem.querySelector(".cart-plus").addEventListener("click", () => {
                addToCart(item);
                renderProductQuantities();
            });

            cartItem.querySelector(".remove-btn").addEventListener("click", () => {
                removeFromCart(item.id);
                renderProductQuantities();
            });

            cartItems.appendChild(cartItem);
        });
    }

    renderProductQuantities();
}

function renderProductQuantities() {
    document.querySelectorAll(".product-card").forEach(card => {
        const productId = Number(card.dataset.id);
        const quantity = getCartQuantity(productId);
        const addButton = card.querySelector(".add-btn");

        addButton.innerText = quantity > 0 ? `Added: ${quantity}` : "ADD";
        addButton.classList.toggle("added", quantity > 0);
    });
}

function openCart() {
    cartDrawer.classList.add("open");
    cartOverlay.classList.add("show");
    document.body.classList.add("no-scroll");
}

function closeCart() {
    cartDrawer.classList.remove("open");
    cartOverlay.classList.remove("show");
    document.body.classList.remove("no-scroll");
}

cartBtn.addEventListener("click", openCart);
closeCartBtn.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("Order placed successfully! 🎉");
    cart = [];
    saveCart();
    updateCart();
    closeCart();
});

fetch("https://fakestoreapi.com/products")
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
        return response.json();
    })
    .then(products => {
        productsContainer.innerHTML = "";

        products.forEach(product => {
            const div = document.createElement("div");
            div.className = "product-card";
            div.dataset.id = product.id;

            const img = document.createElement("img");
            img.src = product.image;
            img.alt = product.title;

            const title = document.createElement("h2");
            title.innerText = product.title;

            const price = document.createElement("h3");
            price.innerText = "$" + product.price.toFixed(2);

            const controls = document.createElement("div");
            controls.className = "product-controls";

            const incrementBtn = document.createElement("button");
            incrementBtn.innerText = "+";
            incrementBtn.className = "quantity-btn";

            const decrementBtn = document.createElement("button");
            decrementBtn.innerText = "−";
            decrementBtn.className = "quantity-btn";

            const addItemBtn = document.createElement("button");
            addItemBtn.innerText = "ADD";
            addItemBtn.className = "add-btn";

            incrementBtn.addEventListener("click", () => {
                addToCart(product);
            });

            decrementBtn.addEventListener("click", () => {
                decreaseFromCart(product.id);
            });

            addItemBtn.addEventListener("click", () => {
                addToCart(product);
            });

            controls.appendChild(incrementBtn);
            controls.appendChild(decrementBtn);
            controls.appendChild(addItemBtn);

            div.appendChild(img);
            div.appendChild(title);
            div.appendChild(price);
            div.appendChild(controls);

            productsContainer.appendChild(div);
        });

        updateCart();
    })
    .catch(error => {
        console.error("Error:", error);
        productsContainer.innerHTML =
            '<p class="error-message">Unable to load products. Please refresh the page.</p>';
    });

updateCart();
