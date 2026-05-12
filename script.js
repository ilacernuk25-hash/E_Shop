// ================= ТОВАРЫ (ПОЛНЫЙ СПИСОК) =================

const products = [

{ id: 1, name: "iPhone 11 64GB black", price: 12990, akb: 80, img: "images/iphone11black.jpg" },

{ id: 2, name: "iPhone 11 128GB green", price: 15990, akb: 87, img: "images/iphone11green.jpg" },

{ id: 3, name: "iPhone 12 Pro Max 256GB gold", price: 28990, akb: 84, img: "images/iphone12promaxgold.jpg" },

{ id: 4, name: "iPhone 12 Pro Max 512GB blue", price: 30990, akb: 88, img: "images/iphone12promaxblue.jpg" },

{ id: 5, name: "iPhone 13 Pro Max 128GB gray", price: 39990, akb: 100, img: "images/iphone13promaxgray.jpg" },

{ id: 6, name: "iPhone 15 Pro 128GB white", price: 48990, akb: 100, img: "images/iphone15prowhite.jpg" },

{ id: 7, name: "Apple Watch 7 black 45mm", price: 12990, akb: 80, img: "images/applewatch7black.jpg" },

{ id: 8, name: "iPhone 16 128GB black", price: 45990, akb: 94, img: "images/iphone16black.jpg" },

{ id: 9, name: "iPhone 13 128GB black", price: 21990, akb: 100, img: "images/iphone13black.jpg" },

{ id: 10, name: "iPhone 17 Pro Max 256GB orange", price: 79990, akb: 100, img: "images/iphone17promaxorange.jpg" },

{ id: 11, name: "iPhone 14 Pro Max 128GB gray", price: 37990, akb: 87, img: "images/iphone14promaxgray.jpg" },

{ id: 12, name: "iPhone 12 Pro 128GB gray", price: 20990, akb: 87, img: "images/iphone12progray.jpg" },

{ id: 13, name: "iPhone 13 128GB midnight", price: 25990, akb: 100, img: "images/iphone13midnight.jpg" },

{ id: 14, name: "iPhone 13 128GB white", price: 27490, akb: 100, img: "images/iphone13white.jpg" },

{ id: 15, name: "iPhone 15 Pro 256GB gray", price: 51990, akb: 100, img: "images/iphone15progray.jpg" },

{ id: 16, name: "iPhone 15 128GB black", price: 44990, akb: 100, img: "images/iphone15black.jpg" },

{ id: 17, name: "iPhone 13 Pro Max 128GB blue", price: 37990, akb: 100, img: "images/iphone13promaxblue.jpg" },

{ id: 18, name: "iPhone 16 128GB black (100%)", price: 51990, akb: 100, img: "images/iphone16black.jpg" },

{ id: 19, name: "iPhone 16 128GB blue", price: 51990, akb: 100, img: "images/iphone16blue.jpg" },

{ id: 20, name: "iPhone 12 Pro 128GB blue", price: 23990, akb: 85, img: "images/iphone12problue.jpg" },

{ id: 21, name: "iPhone 12 Pro 128GB gold", price: 23990, akb: 84, img: "images/iphone12progold.jpg" },

{ id: 22, name: "iPhone 14 Pro 1TB gray", price: 49990, akb: 100, img: "images/iphone14progray.jpg" },

{ id: 23, name: "iPhone 15 256GB green", price: 43990, akb: 100, img: "images/iphone15green.jpg" },

{ id: 24, name: "iPhone 15 Plus 128GB black", price: 42990, akb: 87, img: "images/iphone15plusblack.jpg" },

{ id: 25, name: "iPhone 15 Pro 1TB gray", price: 68990, akb: 89, img: "images/iphone15progray.jpg" },

{ id: 26, name: "iPhone 17 256GB lavender", price: 66990, akb: 100, img: "images/iphone17lavender.jpg" },

{ id: 27, name: "iPhone 16 Pro Max 256GB gold", price: 69990, akb: 93, img: "images/iphone16promaxgold.jpg" },

{ id: 28, name: "Samsung Galaxy Z Fold 6 256GB black", price: 69990, akb: null, img: "images/samsungfold6.jpg" },

{ id: 29, name: "iPhone 16 Pro 256GB gray", price: 64990, akb: 91, img: "images/iphone16progray.jpg" },

{ id: 30, name: "iPhone 14 128GB white", price: 27990, akb: 80, img: "images/iphone14white.jpg" },

{ id: 31, name: "iPhone 13 128GB white (alt)", price: 26490, akb: 85, img: "images/iphone13white.jpg" },

{ id: 32, name: "iPhone 13 mini 256GB blue", price: 20990, akb: 84, img: "images/iphone13miniblue.jpg" },

{ id: 33, name: "iPhone 14 Pro Max 128GB", price: 43990, akb: 85, img: "images/iphone14promaxgray.jpg" },

{ id: 34, name: "Apple Watch 11 46mm", price: 33990, akb: 100, img: "images/applewatch11.jpg" },

{ id: 35, name: "iPhone 17 Pro Max 256GB orange (higher)", price: 110990, akb: 100, img: "images/iphone17promaxorange.jpg" },

{ id: 36, name: "iPhone 14 Pro 512GB gray", price: 49990, akb: 87, img: "images/iphone14progray.jpg" },

{ id: 37, name: "Apple Watch 11 46mm (alt)", price: 29990, akb: 100, img: "images/applewatch11.jpg" },

{ id: 38, name: "iPhone 12 Pro 256GB gray (alt)", price: 27490, akb: 85, img: "images/iphone12progray.jpg" },

{ id: 39, name: "Apple Watch Ultra 2 orange", price: 38990, akb: 98, img: "images/applewatchultra2orange.jpg" },

{ id: 40, name: "iPhone 14 128GB lavender", price: 28990, akb: 82, img: "images/iphone14lavender.jpg" },

{ id: 41, name: "iPhone 14 256GB blue", price: 32490, akb: 80, img: "images/iphone14blue.jpg" },

{ id: 42, name: "iPhone 15 128GB pink", price: 40990, akb: 87, img: "images/iphone15pink.jpg" },

{ id: 43, name: "iPhone 13 256GB black", price: 34990, akb: 89, img: "images/iphone13black.jpg" },

{ id: 44, name: "iPhone 13 Pro Max 128GB blue (alt)", price: 39990, akb: 90, img: "images/iphone13promaxblue.jpg" },

{ id: 45, name: "iPhone 13 256GB red", price: 32990, akb: 86, img: "images/iphone13red.jpg" },

{ id: 46, name: "iPhone 15 Pro Max 256GB gray", price: 68490, akb: 87, img: "images/iphone15promaxgray.jpg" },

{ id: 47, name: "iPhone 14 Pro 128GB deep purple", price: 49990, akb: 100, img: "images/iphone14prodeeppurple.jpg" },

{ id: 48, name: "Google Pixel 8 Pro 128GB blue", price: 36490, akb: null, img: "images/googlepixel8problue.jpg" },

{ id: 49, name: "Google Pixel 8 Pro 128GB black", price: 36990, akb: null, img: "images/googlepixel8problack.jpg" },

{ id: 50, name: "iPhone 13 Pro Max 128GB white", price: 42490, akb: 91, img: "images/iphone13promaxwhite.jpg" }

];

let cart = [];

function renderCatalog() {

const container = document.getElementById("productsContainer");

if (!container) return;

container.innerHTML = products.map(p => `

<div class="product-card">

<img src="${p.img}" alt="${p.name}" onerror="this.src='https://placehold.co/300x200?text=Фото+товара'">

<h3>${p.name}</h3>

<div class="price">${p.price.toLocaleString()} ₽</div>

<div class="akb">${p.akb ? `АКБ: ${p.akb}%` : ""}</div>

<button onclick="addToCart(${p.id})">В корзину</button>

</div>

`).join("");

}

function addToCart(id) {

const product = products.find(p => p.id === id);

cart.push(product);

document.getElementById("cartCount").innerText = cart.length;

alert(`${product.name} добавлен в корзину`);

}

function showCart() {

const cartItemsDiv = document.getElementById("cartItems");

const cartTotalDiv = document.getElementById("cartTotal");

if (cart.length === 0) {

cartItemsDiv.innerText = "Корзина пуста";

cartTotalDiv.innerText = "";

} else {

cartItemsDiv.innerHTML = cart.map(item => `<div>${item.name} — ${item.price.toLocaleString()} ₽</div>`).join("");

const total = cart.reduce((sum, i) => sum + i.price, 0);

cartTotalDiv.innerHTML = `<strong>Итого: ${total.toLocaleString()} ₽</strong>`;

}

document.getElementById("cartModal").style.display = "flex";

}

// ================= ОТПРАВКА НА EMAIL (через FormSubmit) =================

document.getElementById("checkoutBtn").onclick = () => {

if (cart.length === 0) {

alert("Корзина пуста");

return;

}

document.getElementById("cartModal").style.display = "none";

document.getElementById("orderModal").style.display = "flex";

};

document.getElementById("orderForm").addEventListener("submit", async (e) => {

e.preventDefault();

const name = document.getElementById("userName").value.trim();

const phone = document.getElementById("userPhone").value.trim();

const address = document.getElementById("userAddress").value.trim();

if (!name || !phone || !address) {

alert("Заполните все поля");

return;

}

const total = cart.reduce((sum, i) => sum + i.price, 0);

const items = cart.map(i => `${i.name} — ${i.price.toLocaleString()} ₽`).join("\n");

const formData = new FormData();

formData.append("name", name);

formData.append("phone", phone);

formData.append("address", address);

formData.append("items", items);

formData.append("total", total);

formData.append("_subject", "Новый заказ с Eshop");

await fetch("https://formsubmit.co/ajax/ilacernuk25@gmail.com", { // ⚠️ ЗАМЕНИТЕ НА СВОЙ EMAIL

method: "POST",

body: formData

});

alert("Спасибо! Заказ принят. Мы свяжемся с вами.");

cart = [];

document.getElementById("cartCount").innerText = "0";

document.getElementById("orderModal").style.display = "none";

document.getElementById("orderForm").reset();

});

// Обработчики модальных окон

document.getElementById("cartIcon").onclick = showCart;

document.querySelector(".close").onclick = () => document.getElementById("cartModal").style.display = "none";

document.querySelector(".close-order").onclick = () => document.getElementById("orderModal").style.display = "none";

renderCatalog();