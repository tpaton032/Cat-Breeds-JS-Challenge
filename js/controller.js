"use strict";

import * as model from "./model.js";
import breedsView from "./View/breedsView.js";
import { RES_PER_PAGE } from "./config.js";
import imagesView from "./View/imagesView.js";
import paginationView from "./View/paginationView.js";

const breedContainer = document.querySelector(".breeds");
const imgContainer = document.querySelector(".img-container");

const controlBreeds = async function () {
  try {
    // Loading Breeds Data
    await model.loadBreeds();

    // Rendering Breeds
    breedsView.render(model.state.breeds);
  } catch (err) {
    breedsView.renderError();
  }
};

const controlImages = async function () {
  try {
    breedContainer.addEventListener("click", async function (e) {
      e.preventDefault();
      if (e.target && e.target.matches("a.btn")) {
        const id = e.target.id;

        if (!id) return;

        // Loading Images
        await model.loadImages(id);

        //Rendering Images
        imagesView.render(model.getImgResultsPage(1));

        // Render Initial Pagination Buttons
        paginationView.render(model.state.images);
      }
    });
  } catch (err) {
    imagesView.renderError();
  }
};

const controlPagination = function (goToPage) {
  // Render NEW results
  imagesView.render(model.getImgResultsPage(goToPage));

  // Render NEW pagination buttons
  paginationView.render(model.state.images);
};

const init = function () {
  controlBreeds();
  controlImages();
  paginationView._addHandlerClick(controlPagination);
};
init();
