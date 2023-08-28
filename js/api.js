import { showLoader } from "./loader.js";

// Full Rainy Days API for products.js

export const rainyDaysAPI = "https://api.noroff.dev/api/v1/rainy-days/";

export async function fetchJackets() {
  showLoader();
  const response = await fetch(rainyDaysAPI);

  const result = await response.json();

  return result;
}

// Single Rainy Days API for productSpecific.js

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

export const specificJacketUrl = rainyDaysAPI + id;

export async function fetchJacket() {
  const response = await fetch(specificJacketUrl);

  const jacketDetails = await response.json();

  return jacketDetails;
}
