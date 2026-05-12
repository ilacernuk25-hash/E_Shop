// ================= СПИСОК ТОВАРОВ (56 позиций) =================
const products = [
    { id: 1, name: "iPhone 11 64GB black", price: 10990, akb: 80, img: "images/iphone11black.jpg" },
    { id: 2, name: "iPhone 11 128GB green", price: 12990, akb: 87, img: "images/iphone11green.jpg" },
    { id: 3, name: "iPhone 12 Pro Max 256GB gold", price: 26990, akb: 84, img: "images/iphone12promaxgold.jpg" },
    { id: 4, name: "iPhone 12 Pro Max 512GB blue", price: 29990, akb: 88, img: "images/iphone12promaxblue.jpg" },
    { id: 5, name: "iPhone 13 Pro Max 128GB gray", price: 38990, akb: 100, img: "images/iphone13progray.jpg" },
    { id: 6, name: "iPhone 15 Pro 128GB white", price: 47990, akb: 100, img: "images/iphone15prowhite.jpg" },
    { id: 7, name: "Apple Watch 7 black 45mm", price: 11990, akb: 80, img: "images/applewatch7black.jpg" },
    { id: 8, name: "iPhone 16 128GB black", price: 45990, akb: 94, img: "images/iphone16black.jpg" },
    { id: 9, name: "iPhone 13 128GB black", price: 21990, akb: 100, img: "images/iphone13black.jpg" },
    { id: 10, name: "iPhone 17 Pro Max 256GB orange", price: 74990, akb: 100, img: "images/iphone17promaxorange.jpg" },
    { id: 11, name: "iPhone 14 Pro Max 128GB gray", price: 40990, akb: 87, img: "images/iphone14promaxgray.jpg" },
    { id: 12, name: "iPhone 12 Pro 128GB gray", price: 20990, akb: 87, img: "images/iphone12progray.jpg" },
    { id: 13, name: "iPhone 13 128GB midnight", price: 24990, akb: 100, img: "images/iphone13midnight.jpg" },
    { id: 14, name: "iPhone 13 128GB white", price: 26490, akb: 100, img: "images/iphone13white.jpg" },
    { id: 15, name: "iPhone 15 Pro 256GB gray", price: 49990, akb: 100, img: "images/iphone15progray.jpg" },
    { id: 16, name: "iPhone 15 128GB black", price: 42990, akb: 100, img: "images/iphone15black.jpg" },
    { id: 17, name: "iPhone 13 Pro Max 128GB blue", price: 36990, akb: 100, img: "images/iphone13promaxblue.jpg" },
    { id: 18, name: "iPhone 16 128GB black", price: 49990, akb: 100, img: "images/iphone16black.jpg" },
    { id: 19, name: "iPhone 16 128GB blue", price: 51990, akb: 100, img: "images/iphone16blue.jpg" },
    { id: 20, name: "iPhone 12 Pro 128GB blue", price: 22990, akb: 85, img: "images/iphone12problue.jpg" },
    { id: 21, name: "iPhone 12 Pro 128GB gold", price: 22990, akb: 84, img: "images/iphone12progold.jpg" },
    { id: 22, name: "iPhone 14 Pro 1TB gray", price: 49990, akb: 100, img: "images/iphone14progray.jpg" },
    { id: 23, name: "iPhone 15 256GB green", price: 42990, akb: 86, img: "images/iphone15green.jpg" },
    { id: 24, name: "iPhone 15 128GB black (alt)", price: 40990, akb: 100, img: "images/iphone15black.jpg" },
    { id: 25, name: "iPhone 15 Pro 1TB gray", price: 66990, akb: 89, img: "images/iphone15progray.jpg" },
    { id: 26, name: "iPhone 17 256GB lavender", price: 64990, akb: 100, img: "images/iphone17lavender.jpg" },
    { id: 27, name: "iPhone 15 Plus 128GB black", price: 41990, akb: 87, img: "images/iphone15plusblack.jpg" },
    { id: 28, name: "iPhone 16 Pro Max 256GB gold", price: 67990, akb: 93, img: "images/iphone16promaxgold.jpg" },
    { id: 29, name: "Samsung Galaxy Z Fold 6 256GB black", price: 68990, akb: null, img: "images/samsungfold6.jpg" },
    { id: 30, name: "iPhone 12 Pro 256GB gray", price: 26490, akb: 100, img: "images/iphone12progray.jpg" },
    { id: 31, name: "iPhone 16 Pro 256GB gray", price: 62990, akb: 91, img: "images/iphone16progray.jpg" },
    { id: 32, name: "iPhone 14 128GB white", price: 26990, akb: 80, img: "images/iphone14white.jpg" },
    { id: 33, name: "iPhone 13 128GB white (alt)", price: 25490, akb: 85, img: "images/iphone13white.jpg" },
    { id: 34, name: "iPhone 13 mini 256GB blue", price: 19990, akb: 84, img: "images/iphone13miniblue.jpg" },
    { id: 35, name: "iPhone 14 Pro Max 128GB (no color)", price: 42990, akb: 85, img: "images/iphone14promaxgray.jpg" },
    { id: 37, name: "iPhone 17 Pro Max 256GB orange (higher price)", price: 104990, akb: 100, img: "images/iphone17promaxorange.jpg" },
    { id: 38, name: "Apple Watch 10 46mm", price: 21990, akb: 100, img: "images/applewatch10.jpg" },
    { id: 39, name: "iPhone 14 Pro 512GB gray", price: 47990, akb: 87, img: "images/iphone14progray.jpg" },
    { id: 40, name: "Apple Watch 11 46mm (alt)", price: 28990, akb: 100, img: "images/applewatch11.jpg" },
    { id: 41, name: "iPhone 12 Pro 256GB gray (alt)", price: 25490, akb: 85, img: "images/iphone12progray.jpg" },
    { id: 42, name: "Apple Watch Ultra 2 orange", price: 37990, akb: 98, img: "images/applewatchultra2orange.jpg" },
    { id: 43, name: "iPhone 14 128GB lavender", price: 27990, akb: 82, img: "images/iphone14lavender.jpg" },
    { id: 44, name: "iPhone 14 256GB blue", price: 31490, akb: 80, img: "images/iphone14blue.jpg" },
    { id: 45, name: "iPhone 15 128GB pink", price: 38990, akb: 87, img: "images/iphone15pink.jpg" },
    { id: 46, name: "iPhone 13 256GB black", price: 32990, akb: 89, img: "images/iphone13black.jpg" },
    { id: 47, name: "iPhone 13 Pro Max 128GB blue (alt)", price: 39990, akb: 90, img: "images/iphone13promaxblue.jpg" },
    { id: 48, name: "iPhone 13 256GB red", price: 30990, akb: 86, img: "images/iphone13red.jpg" },
    { id: 49, name: "iPhone 15 Pro Max 256GB gray", price: 66600, akb: 87, img: "images/iphone15promaxgray.jpg" },
    { id: 50, name: "iPhone 14 Pro 128GB deep purple", price: 47990, akb: 100, img: "images/iphone14prodeeppurple.jpg" },
    { id: 51, name: "Google Pixel 8 Pro 128GB blue", price: 34490, akb: null, img: "images/googlepixel8problue.jpg" },
    { id: 52, name: "Google Pixel 8 Pro 128GB black", price: 34990, akb: null, img: "images/googlepixel8problack.jpg" },
    { id: 53, name: "iPhone 13 Pro Max 128GB white", price: 40490, akb: 91, img: "images/iphone13promaxwhite.jpg" },
    { id: 54, name: "iPhone 14 Pro 128GB gray (alt)", price: 46990, akb: 87, img: "images/iphone14progray.jpg" },
    { id: 55, name: "iPhone 14 128GB black (alt)", price: 30490, akb: 84, img: "images/iphone14black.jpg" },
    { id: 56, name: "iPhone 15 Pro Max 256GB gray (alt)", price: 66990, akb: 86, img: "images/iphone15promaxgray.jpg" }
];


// ================= ОСТАЛЬНАЯ ЛОГИКА =================
let cart = [];
let currentModel = "all";


function renderCatalog() {
    const container = document.getElementById("productsContainer");
    if (!container) return;
    const filtered = products.filter(p => 
        currentModel === "all" || p.name.includes(currentModel)
    );
    container.innerHTML = filtered.map(p => `
        <div class="product-card">
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <div class="price">${p.price ? p.price.toLocaleString() + ' ₽' : 'Цена по запросу'}</div>
            ${p.akb ? `<div class="akb">АКБ: ${p.akb}%</div>` : ''}
            <button onclick="addToCart(${p.id})">В корзину</button>
        </div>
    `).join("");
}


function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    cart.push(product);
    updateCartCounter();
    alert(`${product.name} добавлен в корзину`);
}


function updateCartCounter() {
    const cartCountSpan = document.getElementById("cartCount");
    if (cartCountSpan) cartCountSpan.innerText = cart.length;
}


function getCartTotal() {
    return cart.reduce((sum, item) => sum + (item.price || 0), 0);
}


function filterProducts() {
    renderCatalog();
}


document.querySelectorAll(".model-item").forEach(el => {
    el.addEventListener("click", () => {
        document.querySelectorAll(".model-item").forEach(i => i.classList.remove("active"));
        el.classList.add("active");
        currentModel = el.getAttribute("data-model");
        filterProducts();
    });
});


// ================= ОТПРАВКА В VK =================
const VK_TOKEN = "ваш_токен_группы";
const VK_GROUP_ID = "ваш_id_группы";


async function sendOrderToVK(orderText) {
    const url = `https://api.vk.com/method/messages.send`;
    const params = new URLSearchParams({
        v: '5.131',
        access_token: VK_TOKEN,
        peer_id: VK_GROUP_ID,
        message: orderText,
        random_id: Date.now()
    });
    try {
        const response = await fetch(`${url}?${params}`);
        const data = await response.json();
        console.log("Ответ VK:", data);
        if (data.error) console.error("Ошибка VK:", data.error);
    } catch (e) {
        console.error("Не удалось отправить заказ в VK", e);
    }
}


// ================= МОДАЛКИ И КОРЗИНА =================
const cartIcon = document.getElementById("cartIcon");
const modal = document.getElementById("modal");
const closeModal = document.querySelector(".close");
const orderForm = document.getElementById("orderForm");
const paymentModal = document.getElementById("paymentModal");
const closePayment = document.querySelector(".close-payment");
const closePaymentBtn = document.getElementById("closePaymentBtn");


if (cartIcon) {
    cartIcon.addEventListener("click", () => {
        const summaryDiv = document.getElementById("orderSummary");
        if (cart.length === 0) {
            summaryDiv.innerText = "Корзина пуста";
        } else {
            summaryDiv.innerHTML = cart.map(item => `<div>${item.name} — ${(item.price || 0).toLocaleString()} ₽</div>`).join("");
            summaryDiv.innerHTML += `<hr><strong>Итого: ${getCartTotal().toLocaleString()} ₽</strong>`;
        }
        modal.style.display = "flex";
    });
}


if (closeModal) {
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });
}


if (orderForm) {
    orderForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const name = document.getElementById("userName").value.trim();
        const phone = document.getElementById("userPhone").value.trim();
        const address = document.getElementById("userAddress").value.trim();
        if (!name || !phone || !address) {
            alert("Заполните имя, телефон и адрес доставки");
            return;
        }
        if (cart.length === 0) {
            alert("Корзина пуста");
            return;
        }
        const total = getCartTotal();
        const itemsText = cart.map(item => `${item.name} — ${(item.price || 0).toLocaleString()} ₽`).join("\n");
        const orderMessage = `🛒 НОВЫЙ ЗАКАЗ\n\nИмя: ${name}\nТелефон: ${phone}\nАдрес: ${address}\n\nТовары:\n${itemsText}\n\nИТОГО: ${total.toLocaleString()} ₽`;


        await sendOrderToVK(orderMessage);


        modal.style.display = "none";
        paymentModal.style.display = "flex";
        cart = [];
        updateCartCounter();
        orderForm.reset();
    });
}


if (closePayment) {
    closePayment.addEventListener("click", () => {
        paymentModal.style.display = "none";
    });
}
if (closePaymentBtn) {
    closePaymentBtn.addEventListener("click", () => {
        paymentModal.style.display = "none";
    });
}


window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
    if (e.target === paymentModal) paymentModal.style.display = "none";
});


renderCatalog();
updateCartCounter();
