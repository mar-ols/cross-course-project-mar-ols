import { fetchJackets } from "./api.js";
import { error } from "./error.js";

async function displayJackets() {
  try {
    const jackets = await fetchJackets();
    const productWrapper = document.querySelector(".product_wrapper");
    const getLoaderDiv = document.querySelector(".loader");
    getLoaderDiv.classList.remove("loader");

    jackets.forEach((jacket) => {
      if (jacket.onSale) {
        productWrapper.innerHTML += `
                                   <div class="jacket">
                                     <a href="product_specific.html?id=${jacket.id}&title=${jacket.title}" class="jacketImage">
                                     <img src="${jacket.image}"></a>
                                     <p class="jacketText">${jacket.title} <span class="jacketSale">$${jacket.price}</span> <span class="discount">$${jacket.discountedPrice}</span></p>
                                     <a href="product_specific.html?id=${jacket.id}&title=${jacket.title}" class="cta-button">Click to view</a>
                                   </div>`;
      } else {
        productWrapper.innerHTML += `
                                   <div class="jacket">
                                     <a href="product_specific.html?id=${jacket.id}&title=${jacket.title}" class="jacketImage">
                                     <img src="${jacket.image}"></a>
                                     <p class="jacketText">${jacket.title} $${jacket.price}</p>
                                     <a href="product_specific.html?id=${jacket.id}&title=${jacket.title}" class="cta-button">Click to view</a>
                                   </div>`;
      }
    });
  } catch {
    error();
  }
}

displayJackets();
