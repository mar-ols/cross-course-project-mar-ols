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
                                     <a href="product_specific.html?id=${jacket.id}&title=${jacket.name}" class="jacketImage">
                                     <img src="${jacket.images[0].src}" alt="${jacket.images[0].alt}"></a>
                                     <p class="jacketText">${jacket.name} </p>
                                     <p class="jacketText"><span class="jacketSale">${jacket.prices.price} kr</span> <span class="discount">${jacket.discountedPrice}</span></p>
                                     <a href="product_specific.html?id=${jacket.id}&title=${jacket.name}" class="cta-button">Click to view</a>
                                   </div>`;
      } else {
        productWrapper.innerHTML += `
                                   <div class="jacket">
                                     <a href="product_specific.html?id=${jacket.id}&title=${jacket.name}" class="jacketImage">
                                     <img src="${jacket.images[0].src}" alt="${jacket.images[0].alt}"></a>
                                     <p class="jacketText">${jacket.name}</p>
                                     <p class="jacketText">${jacket.prices.price} kr</p>
                                     <a href="product_specific.html?id=${jacket.id}&title=${jacket.name}" class="cta-button">Click to view</a>
                                   </div>`;
      }
    });
  } catch (e) {
    console.error(e);
    error();
  }
}

displayJackets();
