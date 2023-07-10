export default class View {
  _data;

  _clear() {
    this._parentEl.innerHTML = "";
  }

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  renderError(message = this._errorMessage) {
    const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div> 
  `;
    this._clear();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }
}
