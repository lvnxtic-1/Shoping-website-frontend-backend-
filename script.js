const products = [
  {
    name: "Gaming Mouse",
    price: "₹799",
    img: "https://via.placeholder.com/200x150?text=Gaming+Mouse"
  },
  {
    name: "Gaming Keyboard",
    price: "₹1499",
    img: "https://via.placeholder.com/200x150?text=Gaming+Keyboard"
  },
  {
    name: "Headphones",
    price: "₹1999",
    img: "https://via.placeholder.com/200x150?text=Headphones"
  },
  {
    name: "Gamepad",
    price: "₹999",
    img: "https://via.placeholder.com/200x150?text=Gamepad"
  }
];

const container = document.getElementById("product-list");

products.forEach(p => {
  const card = document.createElement("div");
  card.className = "product";
  card.innerHTML = `
    <img src="${p.img}" alt="${p.name}" />
    <h3>${p.name}</h3>
    <p>${p.price}</p>
    <button>Add to Cart</button>
  `;
  container.appendChild(card);
});
