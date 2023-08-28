const loaderHtml = `<div class="loader"></div>`;

export function loader() {
  const loaderContainer = document.createElement("div");
  loaderContainer.innerHTML = loaderHtml;

  const main = document.querySelector("main");
  main.appendChild(loaderContainer);
}
