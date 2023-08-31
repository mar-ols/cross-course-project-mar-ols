import { loader } from "./loader.js";
import { error } from "./error.js";

// Full Rainy Days API for products.js

const rainyDaysAPI = "https://api.noroff.dev/api/v1/rainy-days/";

export async function fetchJackets() {
  loader();
  try {
    const response = await fetch(rainyDaysAPI);

    const result = await response.json();

    return result;
  } catch {
    error();
  }
}

// Single Rainy Days API for productSpecific.js

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

export const title = params.get("title");

const specificJacketUrl = rainyDaysAPI + id;

export async function fetchJacket() {
  loader();
  try {
    const response = await fetch(specificJacketUrl);

    const jacketDetails = await response.json();

    return jacketDetails;
  } catch {
    error();
  }
}
