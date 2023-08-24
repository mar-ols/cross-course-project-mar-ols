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
      const jacketImg = jacket.image;
      const jacketTitle = jacket.title;
      const jacketPrice = jacket.price;
      const jacketDiscount = jacket.discountedPrice;

      if (jacket.onSale) {
        productWrapper.innerHTML += `<div class="jacket">
                                      <a href="../product_specific.html?id=${jacket.id}"><img src="${jacketImg}" class="jacketImage"></a>
                                      <p class="jacketText">${jacketTitle} <span class="jacketSale">${jacketPrice}</span> ${jacketDiscount}</p>
                                      <a href="#" class="cta-button">Add to bag</a>
                                    </div>`;
      } else {
        productWrapper.innerHTML += `<div class="jacket">
                                      <a href="../product_specific.html?id=${jacket.id}"><img src="${jacketImg}" class="jacketImage"></a>
                                      <p class="jacketText">${jacketTitle} ${jacketPrice}</p>
                                      <a href="#" class="cta-button">Add to bag</a>
                                     </div>`;
      }
    }
  } catch {
    productWrapper.innerHTML = error;
  }
}

setTimeout(displayJackets, 1000);
