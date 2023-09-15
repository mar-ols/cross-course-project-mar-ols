import { loader } from "./loader.js";

// Full Rainy Days API for products.js

const rainyDaysAPI =
  "https://noroffcors.onrender.com/https://api.noroff.dev/api/v1/rainy-days/";

export async function fetchJackets() {
  loader();
  const response = await fetch(rainyDaysAPI);

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

const specificJacketUrl = rainyDaysAPI + id;

export async function fetchJacket() {
  loader();
  const response = await fetch(specificJacketUrl);

  const jacketDetails = await response.json();

  return jacketDetails;
}
