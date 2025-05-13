
const products = [
  { id: 1, name: "T-Shirt", price: 20, image: "https://media.istockphoto.com/id/1256509393/photo/shocking-pink-tshirt-template-ready-for-your-own-graphics-t-shirt-isolated-on-white.jpg?b=1&s=612x612&w=0&k=20&c=Y_ZAa94O8feFkOW0JYvIzAtguxFplgcGJ4i2OurjbX4=" },
  { id: 2, name: "Headphones", price: 50, image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 3, name: "Backpack", price: 35, image: "https://images.pexels.com/photos/1294731/pexels-photo-1294731.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 4, name: "Sneakers", price: 60, image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600" }
];

let cart = [];

const productList = document.getElementById("product-list");
const cartCount = document.getElementById("cart-count");
const totalDisplay = document.getElementById("total");
const cartItems = document.getElementById("cart-items");
const cartPopup = document.getElementById("cart-popup");

// Show product cards
products.forEach(product => {
  const div = document.createElement("div");
  div.className = "product-card";
  div.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <h3>${product.name}</h3>
    <p>RS ${product.price}</p>
    <button onclick="addToCart(${product.id})">Add to Cart</button>
  `;
  productList.appendChild(div);
});

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  updateCart();
}

function updateCart() {
  cartCount.textContent = cart.length;
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  totalDisplay.textContent = total.toFixed(2);

  cartItems.innerHTML = "";
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.name} - RS ${item.price} <button onclick="removeItem(${index})">Remove</button>`;
    cartItems.appendChild(li);
  });
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

function showCartPopup() {
  setTimeout(() => {
    cartPopup.classList.remove("hidden");
  }, 1000);
}

function closeCartPopup() {
  cartPopup.classList.add("hidden");
}

