import { fetchJacket, title } from "./api.js";

async function createJacketHtml() {
  const jacketDetails = await fetchJacket();

  const jacketWrapper = document.querySelector(".product_specific");
  const titleContainer = document.querySelector("#title");
  const getLoaderDiv = document.querySelector(".loader");
  getLoaderDiv.classList.remove("loader");

  let createSizeOptions = `<option value="0">Select size</option>`;

  for (let i = 0; i < jacketDetails.sizes.length; i++) {
    titleContainer.textContent = jacketWrapper.innerHTML = title;

    createSizeOptions +=
      `<option value=` +
      jacketDetails.sizes[i] +
      `">` +
      jacketDetails.sizes[i] +
      `</option>`;

    jacketWrapper.innerHTML = `
                                <div>
                                  <a href="products.html" class="cta-button">Back</a>
                                </div>
                                <div class="jacketImage jacket_specific_image">
                                  <img src="${jacketDetails.image}" alt="${jacketDetails.description}">
                                  <i class="fa-regular fa-heart fa-xl"></i>
                                </div>
                                <div class="jacketCard">
                                  <div>
                                    <h3>${jacketDetails.title} <span class="sales">$${jacketDetails.price}</span>
                                    <span class="hideDiscount discount">$${jacketDetails.discountedPrice}</span></h3>
                                  </div>
                                  <div class="jacket_details">
                                    <p class="jacket_description"> ${jacketDetails.description}</p>
                                    <p>Colour: ${jacketDetails.baseColor}</p>
                                    <select id="size" name="size">
                                      ${createSizeOptions}
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

createJacketHtml();
