const menuItems = [
    {name: "Strawberry Milk", price: 4, category: "Drinks", img: "https://via.placeholder.com/150"},
    {name: "Cute Fries", price: 5, category: "Sides", img: "https://via.placeholder.com/150"},
    {name: "Mama's Curry", price: 12, category: "Main", img: "https://via.placeholder.com/150"},
    {name: "Mini Pancakes", price: 7, category: "Dessert", img: "https://via.placeholder.com/150"}
  ];
  
  let cart = [];
  
  function login() {
    alert("Pretend Google login works!");
    window.location.href = "menu.html";
  }
  
  function renderMenu() {
    const menuDiv = document.getElementById("menu");
    if (!menuDiv) return;
  
    menuItems.forEach((item, index) => {
      const card = document.createElement("div");
      card.className = "card";
  
      card.innerHTML = `
        <img src="${item.img}" />
        <h3>${item.name}</h3>
        <p>${item.category}</p>
        <p>$${item.price}</p>
        <button onclick="addToCart(${index})">Add 💖</button>
      `;
  
      menuDiv.appendChild(card);
    });
  }
  
  function addToCart(index) {
    cart.push(menuItems[index]);
    alert("Added to cart!");
  }
  
  function goToCheckout() {
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "checkout.html";
  }
  
  function renderCart() {
    const cartDiv = document.getElementById("cart");
    const totalDiv = document.getElementById("total");
    if (!cartDiv) return;
  
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    let total = 0;
  
    storedCart.forEach(item => {
      const p = document.createElement("p");
      p.textContent = `${item.name} - $${item.price}`;
      cartDiv.appendChild(p);
      total += item.price;
    });
  
    totalDiv.textContent = `Total: $${total}`;
  }
  
  function placeOrder() {
    alert("Order placed! Mama is proud! 💖");
    localStorage.clear();
    window.location.href = "index.html";
  }
  
  renderMenu();
  renderCart();
  
  