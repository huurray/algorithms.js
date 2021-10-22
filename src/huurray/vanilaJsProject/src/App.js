// components
import CatList from "./components/CatList.js";
// api
import { getRandomCat50API } from "./api/catAPI.js";
// styles
import Loading from "./styles/ui/Loading.js";

export default class App {
  $target = null;
  catList = null;
  cats = [];
  isMoreLoading = false;

  constructor($target) {
    this.$target = $target;

    this.catList = new CatList({
      $target,
      handleGetRandomCats: async () => {
        const $loading = new Loading();
        try {
          const newCats = await getRandomCat50API();
          this.setState(newCats.data);
        } catch (error) {
          console.log(error);
        } finally {
          $loading.close();
        }
      },
      handleGetRandomCatsMore: async () => {
        if (this.isMoreLoading) return;
        this.isMoreLoading = true;
        try {
          const newCats = await getRandomCat50API();
          this.setState([...this.cats, ...newCats.data]);
        } catch (error) {
          console.log(error);
        } finally {
          setTimeout(() => {
            this.isMoreLoading = false;
          }, 2000);
        }
      },
    });
  }

  setState(newCats) {
    this.cats = newCats;
    this.catList.setState(newCats);
  }
}
