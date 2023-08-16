const rainyDaysAPI = "https://api.noroff.dev/api/v1/rainy-days";

const getJacketText = document.querySelectorAll(".jacketText");

async function getJackets() {
  const response = await fetch(rainyDaysAPI);

  const result = await response.json();

  for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
  }

  for (let i = 0; i < getJacketText.length; i++) {
    let jacketsOnSale = result[i].onSale;

    getJacketText[i].innerHTML = ` ${result[i].title} $${result[i].price}`;

    if (jacketsOnSale === true) {
      result[i].price = getJacketText[
        i
      ].innerHTML = `${result[i].title} <span class="jacketSale">${result[i].price} </span> $${result[i].discountedPrice}`;
    }
  }
}

getJackets();
