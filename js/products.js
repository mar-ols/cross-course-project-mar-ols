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
      const sale = jacket.onSale;
      const jacketImg = jacket.image;
      const jacketTitle = jacket.title;
      const jacketPrice = jacket.price;
      const jacketDiscount = jacket.discountedPrice;

      productWrapper.innerHTML += `<div class="jacket">
                                     <a href="../product_specific.html?id=${jacket.id}"><img src="${jacketImg}" class="jacketImage"></a>
                                     <p class="jacketText">${jacketTitle} <span class="sales">${jacketPrice}</span> <span class="hideDiscount">${jacketDiscount}</span></p>
                                     <a href="#" class="cta-button">Add to bag</a>
                                   </div>`;

      if (!sale) {
        const hideDiscount = document.querySelectorAll(".hideDiscount");
        hideDiscount[i].style.display = "none";
      }

      if (sale) {
        const getSaleSpan = document.querySelectorAll(".sales");
        getSaleSpan[i].classList.add("jacketSale");
      }
    }
  } catch {
    productWrapper.innerHTML = error;
  }
}

setTimeout(displayJackets, 1000);
