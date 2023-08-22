const rainyDaysAPI = "https://api.noroff.dev/api/v1/rainy-days";
const productWrapper = document.querySelector(".product_wrapper");

const getJackets = async () => {
  const response = await fetch(rainyDaysAPI);

  const result = await response.json();

  return result;
};

const displayJackets = async () => {
  try {
    const jackets = await getJackets();

    for (let i = 0; i < jackets.length; i++) {
      const jacket = jackets[i];
      const discountedJackets = jackets[i].onSale;
      const salePrice = jackets[i].discountedPrice;

      const jacketDiv = document.createElement("div");
      jacketDiv.classList.add("jacket");

      const jacketImage = document.createElement("img");
      jacketImage.classList.add("jacketImage");
      jacketImage.src = jacket.image;
      jacketImage.alt = jacket.description;

      const jacketText = document.createElement("p");
      jacketText.classList.add("jacketText");
      jacketText.innerHTML = `${jacket.title} ${jacket.price}`;

      const button = document.createElement("a");
      button.href = "#";
      button.classList.add("cta-button");
      button.textContent = "Add to bag";

      productWrapper.appendChild(jacketDiv);
      jacketDiv.appendChild(jacketImage);
      jacketDiv.appendChild(jacketText);
      jacketDiv.appendChild(button);

      if (discountedJackets === true) {
        jacketText.innerHTML = `${jacket.title} <span class="jacketSale">${jacket.price}</span> ${salePrice}`;
      }
    }
  } catch {
    productWrapper.innerHTML = `<div class="error">
                                <p><img src="../images/assets/icons/wizard.png">
                                You shall not pass!
                                <img src="../images/assets/icons/wizard.png"></p>
                                <p>Just kidding. Something went wrong, the wizards will look into it, post haste!</p>
                                </div>`;
  }
};

displayJackets();
