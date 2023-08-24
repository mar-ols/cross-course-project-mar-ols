const rainyDaysAPI = "https://api.noroff.dev/api/v1/rainy-days";

export const getJackets = async () => {
  const response = await fetch(rainyDaysAPI);

  const result = await response.json();

  return result;
};
