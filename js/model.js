import { API_BREEDS, RES_PER_PAGE, API_KEY, API_IMGS } from "./config.js";

export const state = {
  breeds: {},
  images: {
    url: [],
    id: [],
    resultsPerPage: RES_PER_PAGE,
    page: 1,
  },
};

export const loadBreeds = async function () {
  try {
    const res = await fetch(API_BREEDS);
    const data = await res.json();

    state.breeds = data.map(function (breed) {
      return {
        id: breed.id,
        name: breed.name,
      };
    });
  } catch (err) {
    throw err;
  }
};

export const loadImages = async function (id) {
  try {
    state.images.id = id;

    const resImgs = await fetch(`${API_IMGS}${id}&api_key=${API_KEY}`);
    const imgData = await resImgs.json();

    state.images = imgData.map((img) => {
      return {
        url: img.url,
        id: img.breeds[0].id,
        name: img.breeds[0].name,
      };
    });
  } catch (err) {
    throw err;
  }
};

export const getImgResultsPage = function (page = state.images.page) {
  state.images.page = page;

  const start = (page - 1) * RES_PER_PAGE;
  const end = page * RES_PER_PAGE;

  return state.images.slice(start, end);
};
