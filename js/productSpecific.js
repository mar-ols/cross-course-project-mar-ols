import { fetchJacket, title } from "./api.js";
import { error } from "./error.js";

async function createJacketHtml() {
  try {
    const jacketDetails = await fetchJacket();

    const jacketWrapper = document.querySelector(".product_specific");
    const titleContainer = document.querySelector("#title");
    const getLoaderDiv = document.querySelector(".loader");
    getLoaderDiv.classList.remove("loader");

    // let createSizeOptions = `<option value="0">Select size</option>`;

    // for (let i = 0; i < jacketDetails.sizes.length; i++) {
    //   titleContainer.textContent = jacketWrapper.innerHTML = title;

    // createSizeOptions +=
    //   `<option value=` +
    //   jacketDetails.sizes[i] +
    //   `">` +
    //   jacketDetails.sizes[i] +
    //   `</option>`;

    jacketWrapper.innerHTML = `
                                <div>
                                  <a href="products.html" class="cta-button">Back</a>
                                </div>
                                <div class="jacketImage jacket_specific_image">
                                  <div class="jacket-specific_image-container">
                                  <img src="${jacketDetails.images[0].src}" alt="${jacketDetails.images[0].alt}">
                                  </div>
                                  <i class="fa-regular fa-heart fa-xl"></i>
                                </div>
                                <div class="jacketCard">
                                  <div>
                                    <h3>${jacketDetails.name} 
                                    <p><span class="sales">$${jacketDetails.prices.price}</span></p>
                                    <span class="hideDiscount discount">$${jacketDetails.discountedPrice}</span></h3>
                                  </div>
                                  <div class="jacket_details">
                                    <p class="jacket_description"> ${jacketDetails.description}</p>
                                    <p>Colour: ${jacketDetails.attributes[0].terms[0].name}</p>
                                  </div>
                                  <div>
                                    <button class="cta-button add_bag" data-id="${jacketDetails.id}" data-price="${jacketDetails.prices.price}" data-discount="${jacketDetails.prices.sale_price}" data-title="${jacketDetails.name}" data-onsale="${jacketDetails.on_sale}" data-image="${jacketDetails.images[0].src}">Add to bag</button>
                                  </div>
                                  <div class="popup">
                                    <div class="popup_text">
                                      <span class="close">&times;</span>
                                      <p>Excellent choice!</p>
                                      <p>Your item has been added to the cart!</p>
                                    </div>
                                  </div>
                                </div>`;

    if (!jacketDetails.on_sale) {
      const hideDiscount = document.querySelector(".hideDiscount");
      hideDiscount.style.display = "none";
    }

    // if (jacketDetails.onSale) {
    //   const getSaleSpan = document.querySelector(".sales");
    //   getSaleSpan.classList.add("jacketSale");
    // }
    // }
  } catch (e) {
    console.error(e);
    error();
  }
}

createJacketHtml();
