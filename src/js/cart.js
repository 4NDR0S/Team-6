import { getLocalStorage } from "./utils.mjs";
// export { cartItems };
 
// const carrito = window.document.querySelector(".cart");
// const pruebita = window.document.querySelector(".product-list");
 
function renderCartContents() {
  const cartItems = getLocalStorage("so-cart") || [];
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
 
 
  //mi contador------
  // const cartItems = [];
  // cartItems.push(getLocalStorage("so-cart"));
 
  // const htmlItems = cartItems.map((item) => cartItemTemplate(item));
 
  // document.querySelector(".product-list").innerHTML = htmlItems.join("");
 
  // let contador = 0;
  // for (let i = 0; i < cartItems.length; i++) {
  //   contador++;
  // }
 
  // // const carrito = document.querySelector(".cart");
  // let numero = window.document.createElement("p");
  // numero.textContent = `${contador} item added`;
  // carrito.appendChild(numero);
 
}
 
function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;
 
  return newItem;
}
 
renderCartContents();
 
