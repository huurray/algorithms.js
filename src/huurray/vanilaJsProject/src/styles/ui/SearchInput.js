import {
  getSearchHistory,
  setSearchHistory,
} from "../../utils/localStorage.js";

export default class SearchInput {
  text = null;
  onClick = null;

  constructor({ $target, onClick, onRandomClick }) {
    const $searchContainer = document.createElement("header");
    const $randomButton = document.createElement("button");
    const $searchInput = document.createElement("input");
    const $searchHistoryContainer = document.createElement("div");

    // 바인딩
    this.$searchInput = $searchInput;
    this.onClick = onClick;
    this.$searchHistoryContainer = $searchHistoryContainer;

    this.$searchInput.placeholder = "고양이를 검색해보세요.|";

    $searchInput.className = "SearchInput";
    $randomButton.innerText = "랜덤 검색";
    $searchContainer.appendChild($randomButton);
    $searchContainer.appendChild($searchInput);
    $searchContainer.appendChild($searchHistoryContainer);
    $target.appendChild($searchContainer);

    this.$searchInput.focus();
    this.render();

    $searchInput.addEventListener("keyup", (e) => {
      this.text = e.key;
      if (e.keyCode === 13) {
        onClick(e.target.value);
        setSearchHistory(e.target.value);
        this.render();
      }
    });

    $searchInput.addEventListener("click", (e) => {
      if (this.text) {
        $searchInput.value = "";
      }
    });

    $randomButton.addEventListener("click", (e) => {
      onRandomClick();
    });
  }
  render() {
    const keywords = getSearchHistory();
    this.$searchHistoryContainer.innerHTML = keywords
      .map(
        (keyword) => `
          <button class="search-history-button">${keyword}</button>
        `
      )
      .join("");

    this.$searchHistoryContainer
      .querySelectorAll(".search-history-button")
      .forEach(($keyword, index) => {
        $keyword.addEventListener("click", () => {
          this.onClick(keywords[index]);
        });
      });
  }
}
