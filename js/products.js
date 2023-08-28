import { fetchJackets } from "./api.js";

async function displayJackets() {
  const jackets = await fetchJackets();
  const productWrapper = document.querySelector(".product_wrapper");

  jackets.forEach((jacket) => {
    if (jacket.onSale) {
      productWrapper.innerHTML += `
                                   <div class="jacket">
                                     <a href="product_specific.html?id=${jacket.id}" class="jacketImage">
                                     <img src="${jacket.image}"></a>
                                     <p class="jacketText">${jacket.title} <span class="jacketSale">$${jacket.price}</span> <span class="discount">$${jacket.discountedPrice}</span></p>
                                     <a href="product_specific.html?id=${jacket.id}" class="cta-button">Click to view</a>
                                   </div>`;
    } else {
      productWrapper.innerHTML += `
                                   <div class="jacket">
                                     <a href="product_specific.html?id=${jacket.id}" class="jacketImage">
                                     <img src="${jacket.image}"></a>
                                     <p class="jacketText">${jacket.title} $${jacket.price}</p>
                                     <a href="product_specific.html?id=${jacket.id}" class="cta-button">Click to view</a>
                                   </div>`;
    }
  });

  for (let i = 0; i < jackets.length; i++) {}
}

displayJackets();
