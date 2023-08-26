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
      <div class="back_btn">
        <a href="products.html" class="cta-button">Back</a>
      </div>
      <div class="jacketImage jacket_specific_image">
        <img src="${jacketDetails.image}" alt="${jacketDetails.description}" class="product_img_scott">
        <i class="fa-regular fa-heart fa-xl"></i>
      </div>
      <div class="jacketCard">
        <div class="jacket_title">
          <h3>${jacketDetails.title} <span class="sales">$${jacketDetails.price}</span>
          <span class="hideDiscount discount">$${jacketDetails.discountedPrice}</span></h3>
        </div>
        <div class="jacket_details">
          <p class="jacket_description"> ${jacketDetails.description}</p>
          <p>Colour: ${jacketDetails.baseColor}</p>
          <select id="size" name="size">
            ${createOptions}
          </select>
        </div>
        <div class="add_bag">
          <a href="../shopping_bag.html" class="cta-button add_bag">Add to bag</a>
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
