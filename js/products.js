import { fetchJackets } from "./api.js";
import { error } from "./error.js";

const productWrapper = document.querySelector(".product_wrapper");
productWrapper.innerHTML = `<div class="loader"></div>`;

async function displayJackets() {
  try {
    const jackets = await fetchJackets();
    const loaderDiv = document.querySelector(".loader");
    loaderDiv.classList.remove("loader");

    for (let i = 0; i < jackets.length; i++) {
      const jacket = jackets[i];
      const discountedJackets = jackets[i].onSale;
      const salePrice = jackets[i].discountedPrice;

      const jacketDiv = document.createElement("div");
      jacketDiv.classList.add("jacket");

      const jacketImageLink = document.createElement("a");
      jacketImageLink.classList.add("jacketImage");
      jacketImageLink.href = `product_specific.html?id=${jacket.id}`;
      jacketImageLink.innerHTML = `<img src="${jacket.image}">`;

      const jacketText = document.createElement("p");
      jacketText.classList.add("jacketText");
      jacketText.innerHTML = `${jacket.title} $${jacket.price}`;

      const viewButton = document.createElement("a");
      viewButton.href = `product_specific.html?id=${jacket.id}`;
      viewButton.classList.add("cta-button");
      viewButton.textContent = "Click to view";

      productWrapper.appendChild(jacketDiv);
      jacketDiv.appendChild(jacketImageLink);
      jacketDiv.appendChild(jacketText);
      jacketDiv.appendChild(viewButton);

      if (discountedJackets) {
        jacketText.innerHTML = `${jacket.title} <span class="jacketSale">${jacket.price}</span> <span class="discount">${salePrice}</span>`;
      }
    }
  } catch {
    productWrapper.innerHTML = error;
  }
}

setTimeout(displayJackets, 1000);
