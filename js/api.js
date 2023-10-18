import { loader } from "./loader.js";

// Full Rainy Days API for products.js

// const rainyDaysAPI = "https://api.noroff.dev/api/v1/rainy-days/";

const ownAPI = "https://www.mbo-cms-ca.com/wp-json/wc/store/products";

export async function fetchJackets() {
  loader();
  const response = await fetch(ownAPI);

  const result = await response.json();

  if (response.ok) {
    return result;
  }

  throw new Error("Failed to get jackets!");
}

// Single Rainy Days API for productSpecific.js

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

export const title = params.get("title");

const specificJacketUrl = ownAPI + "/" + id;

export async function fetchJacket() {
  loader();
  const response = await fetch(specificJacketUrl);

  const jacketDetails = await response.json();

  return jacketDetails;
}
