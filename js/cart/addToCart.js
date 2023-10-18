// import { fetchJacket } from "../api.js";

// function saveCart(key, value) {
//   const jsonValue = JSON.stringify(value);
//   localStorage.setItem(key, jsonValue);
// }

// function loadCart(key) {
//   const jsonValue = localStorage.getItem(key);
//   return JSON.parse(jsonValue);
// }

// function onAddToCart(event) {
//   const button = event.target;
//   const jacketId = button.dataset.id;
//   const jacketPrice = button.dataset.price;
//   const jacketTitle = button.dataset.title;
//   const jacketSale = button.dataset.onsale;
//   const jacketImage = button.dataset.image;
//   const jacketDiscount = button.dataset.discount;

//   let item = {
//     id: jacketId,
//     title: jacketTitle,
//     price: jacketPrice,
//     discount: jacketDiscount,
//     onSale: jacketSale,
//     image: jacketImage,
//     qty: 1,
//   };

//   let cart = loadCart("cart") || [];

//   const itemInCart = cart.find((item) => item.id === jacketId);

//   if (itemInCart) {
//     itemInCart.qty++;
//   } else {
//     cart.push(item);
//   }

//   saveCart("cart", cart);

//   const popUp = document.querySelector(".popup");
//   const closeBtn = document.querySelector(".close");

//   popUp.style.display = "block";
//   popUp.addEventListener("click", () => {
//     popUp.style.display = "none";
//   });
// }

// async function addToCart() {
//   const jacket = await fetchJacket();

//   const getAddToCartBtn = document.querySelector(
//     "button[data-id][data-price][data-discount][data-title][data-onsale][data-image]"
//   );
//   getAddToCartBtn.addEventListener("click", onAddToCart);
// }

// addToCart();
