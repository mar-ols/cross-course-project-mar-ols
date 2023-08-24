export const rainyDaysAPI = "https://api.noroff.dev/api/v1/rainy-days/";

export async function fetchJackets() {
  const response = await fetch(rainyDaysAPI);

  const result = await response.json();

  return result;
}

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

export const specificJacketUrl = rainyDaysAPI + id;
