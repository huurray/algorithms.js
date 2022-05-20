// api
import { getRandomCat50API } from "../api/catAPI.js";
// styles
import Loading from "../styles/ui/Loading.js";

export default class CatList {
  $target = null;
  cats = [];

  constructor({ $target, handleGetRandomCats, handleGetRandomCatsMore }) {
    const $listContainer = document.createElement("div");
    // bind
    this.$target = $target;
    this.$listContainer = $listContainer;

    $target.appendChild($listContainer);

    handleGetRandomCats();

    // 무한 스크롤 예시
    window.addEventListener("scroll", async function () {
      var scrollHeight = document.documentElement.scrollHeight;
      var scrollTop = document.documentElement.scrollTop;
      var clientHeight = document.documentElement.clientHeight;

      if (scrollTop + clientHeight > scrollHeight - 5) {
        handleGetRandomCatsMore();
      }
    });
  }

  setState(newCats) {
    this.cats = newCats;
    this.render();
  }

  render() {
    console.log(11, this.cats);

    if (this.cats.length === 0) {
      this.$listContainer.innerHTML = `
            <h1>검색 결과가 없습니다.</h1>
          `;
    } else {
      this.$listContainer.innerHTML = this.cats
        .map(
          (cat, index) => `
                <article class="cat-card">
                    <img src=${cat.url} alt=${cat.name} />
                    <h2>${cat.name}</h2>
                </article>
            `
        )
        .join("");
    }
  }
}
