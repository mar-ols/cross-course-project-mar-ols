const errorHtml = `<div class="error">
                        <p><img src="../images/assets/icons/wizard.png" alt="Icon of a wizard." class="wizard">
                        You shall not pass!
                        <img src="../images/assets/icons/wizard.png" alt="Icon of a wizard." class="wizard"></p>
                        <p>Just kidding. Something's gone wrong on our end, the wizards will look into it,  posthaste!</p>
                     </div>`;

export function error() {
  const errorContainer = document.createElement("div");
  errorContainer.innerHTML = errorHtml;

  const main = document.querySelector("main");
  main.appendChild(errorContainer);
}
