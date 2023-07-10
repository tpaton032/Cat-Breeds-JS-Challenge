import View from "./view.js";

class PaginationView extends View {
  _parentEl = document.querySelector(".pagination");

  _addHandlerClick(handler) {
    this._parentEl.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn--inline");

      if (!btn) return;

      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;

    const numPages = Math.ceil(this._data.length / 5);

    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return `
        <button data-goto="${
          curPage + 1
        }" class="btn--inline pagination__btn--next">
          <span>Page ${curPage + 1}</span>
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </button>
        
      `;
    }
    // Last page
    if (curPage === numPages && numPages > 1) {
      return `
        <button data-goto="${
          curPage - 1
        }" class="btn--inline pagination__btn--prev">
          <ion-icon name="arrow-back-outline"></ion-icon>
          <span>Page ${curPage - 1}</span>
        </button>
      `;
    }
    // Other page
    if (curPage < numPages) {
      return `
        <button data-goto="${
          curPage - 1
        }" class="btn--inline pagination__btn--prev">
          <ion-icon name="arrow-back-outline"></ion-icon>
          <span>Page ${curPage - 1}</span>
        </button>
        <button data-goto="${
          curPage + 1
        }" class="btn--inline pagination__btn--next">
          <span>Page ${curPage + 1}</span>
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </button>
      `;
    }
    // Page 1, and there are NO other pages
    return "";
  }
}

export default new PaginationView();
