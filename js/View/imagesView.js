import View from "./view.js";

class ImagesView extends View {
  _parentEl = document.querySelector(".img-container");
  _errorMessage =
    "We could not find images for that breed. Please try a another one!";

  _generateMarkup() {
    return `${this._data.map((img) => {
      return `
        <div class="results">
          <img src="${img.url}" alt="${img.name}">
          <a href=""></a>
        </div>
      `;
    })}`;
  }
}

export default new ImagesView();
