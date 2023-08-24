import { specificJacketUrl } from "./api.js";
import { error } from "./error.js";

const jacketWrapper = document.querySelector(".product_specific");
jacketWrapper.innerHTML = `<div class="loader"></div>`;

async function fetchJacket() {
  try {
    const response = await fetch(specificJacketUrl);
    const jacketDetails = await response.json();

    createJacketHtml(jacketDetails);
  } catch {
    jacketWrapper.innerHTML = error;
  }
}

function createJacketHtml(jacketDetails) {
  let createOptions = `<option value="0">Select size</option>`;

  for (let i = 0; i < jacketDetails.sizes.length; i++) {
    createOptions +=
      `<option value=` +
      jacketDetails.sizes[i] +
      `">` +
      jacketDetails.sizes[i] +
      `</option>`;

    jacketWrapper.innerHTML = `
      <div class="product_specific">
        <div class="jacket_specific">
          <div>
            <a href="products.html" class="cta-button">Back</a>
          </div>
          <img
            src="${jacketDetails.image}"
            alt="${jacketDetails.description}"
            class="product_img_scott">
          <div class="fav_icon">
            <i class="fa-regular fa-heart fa-xl"></i>
          </div>
        </div>
        <div class="scott-details">
          <div class="scott_text">
            <h3>${jacketDetails.title}</h3>
            <p><span class="sales">$${jacketDetails.price}</span>
            <span class="hideDiscount">$${jacketDetails.discountedPrice}</span></p>
          </div>
          <div class="scott_list">${jacketDetails.description}</div>
          <div class="scott_size">
            <select id="size" name="size">
              ${createOptions}
            </select>
          </div>
          <div class="add_bag">
            <a href="../shopping_bag.html" class="cta-button">Add to bag</a>
          </div>
        </div>
      </div>`;

    if (!jacketDetails.onSale) {
      const hideDiscount = document.querySelector(".hideDiscount");
      hideDiscount.style.display = "none";
    }

    if (jacketDetails.onSale) {
      const getSaleSpan = document.querySelector(".sales");
      getSaleSpan.classList.add("jacketSale");
    }
  }
}
fetchJacket();
