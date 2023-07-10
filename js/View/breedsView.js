import View from "./view.js";

class BreedsView extends View {
  _parentEl = document.querySelector(".breeds");
  _errorMessage = "Something went wrong...";

  _generateMarkup() {
    // Render Breeds
    return `
    ${this._data
      .map((cat) => {
        return `
          
          <a href="#" id="${cat.id}" class="btn">${cat.name}</a>
          
      `;
      })
      .join("")}`;
  }
}

export default new BreedsView();
