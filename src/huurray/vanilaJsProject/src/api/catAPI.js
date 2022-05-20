import { requestAPI } from "./index.js";

async function getCatsAPI(keyword) {
  try {
    const data = await requestAPI(`/api/cats/search?q=${keyword}`);
    return data;
  } catch (error) {
    throw error;
  }
}

async function getCatAPI(id) {
  try {
    const data = await requestAPI(`/api/cats/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
}

async function getRandomCat50API() {
  try {
    const data = await requestAPI("/api/cats/random50");
    return data;
  } catch (error) {
    throw error;
  }
}

export { getCatsAPI, getCatAPI, getRandomCat50API };
