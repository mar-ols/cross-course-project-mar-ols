function save(key, value) {
  const jsonValue = JSON.stringify(value);
  localStorage.setItem(key, jsonValue);
}

function load(key) {
  const jsonValue = localStorage.getItem(key);
  return JSON.parse(jsonValue);
}

function renderCart() {
  let getCart = localStorage.getItem("cart");
  let parseCart = JSON.parse(getCart);

  for (let item of parseCart) {
    const getCartContainer = document.querySelector(".cartContainer");
    getCartContainer.innerHTML += `
                                 <div class="jacketId" data-id="${item.id}">  
                                   <div class="item_info">
                                     <p>$${item.discount}</p>
                                     <div class="counterContainer">
                                       <div class="decrement">
                                         <button class="dec" id="${item.id}">-</button>
                                       </div>
                                       <div class="quantity">
                                         <input class="quant" type="text" value="${item.qty}">
                                       </div>
                                       <div class="increment">
                                         <button class="inc" id="${item.id}">+</button>
                                      </div>
                                     </div>
                                     <p class="totalSingleJacket"></p>
                                     <p><i class="fa-solid fa-trash fa-lg" id="${item.id}"></i></p>
                                   </div>
                                   <div class="sb_jacket">
                                     <img src="${item.image}" alt="S${item.title}" class="product_specific_img">
                                     <div>
                                       <p><a href="product_specific.html?id=${item.id}">${item.title}</a></p>
                                     </div>
                                   </div>
                                 </div>`;
  }
}

const cart = load("cart");

function calculateTotal() {
  return cart.reduce((total, currentItem) => {
    let parsedNumber = parseFloat(currentItem.discount).toFixed(2);
    return total + currentItem.discount * currentItem.qty;
  }, 0);
}

function calculateTotalPlusShipping() {
  return cart.reduce((total, currentItem) => {
    let parsedNumber = parseFloat(currentItem.discount).toFixed(2);
    return total + 10 + parsedNumber * currentItem.qty;
  }, 0);
}

function calculateTotalSingleJacket() {
  for (let i = 0; i < cart.length; i++) {
    const getSumSingleJacketContainer =
      document.querySelectorAll(".totalSingleJacket");

    for (let i = 0; i < getSumSingleJacketContainer.length; i++) {
      let a = parseFloat(cart[i].discount).toFixed(2);
      let b = cart[i].qty;
      let calculate = a * b;
      getSumSingleJacketContainer[i].innerHTML = calculate;
    }
  }
}

const getSumContainer = document.querySelector(".sumContainer");
getSumContainer.innerHTML = `$${parseFloat(calculateTotal()).toFixed(2)}`;

const getSumPlusShippingContainer = document.querySelector(".plusShipping");
getSumPlusShippingContainer.innerHTML = `$${parseFloat(
  calculateTotalPlusShipping().toFixed(2)
)}`;
renderCart();

function remove() {
  const getTrashIcons = document.querySelectorAll(".fa-trash");
  for (let icon of getTrashIcons) {
    icon.addEventListener("click", () => {
      const getIdContainer = document.querySelectorAll(".jacketId[data-id]");

      for (let container of getIdContainer) {
        if (icon.id === container.dataset.id) {
          container.remove();
        }
      }

      let jacket = cart.findIndex((jacket) => icon.id === jacket.id);

      cart.splice(jacket, 1);

      save("cart", cart);
    });
  }
}

calculateTotalSingleJacket();

remove();
