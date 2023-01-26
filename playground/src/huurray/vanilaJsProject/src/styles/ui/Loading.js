export default class loading {
  constructor() {
    this.$loadingOverlay = document.createElement("div");
    this.$loadingOverlay.className = "loading-container";
    document.querySelector("body").appendChild(this.$loadingOverlay);
    this.render();
  }

  close() {
    const $loadingOverlay = document.querySelector(".loading-container");
    $loadingOverlay.remove();
  }

  render() {
    this.$loadingOverlay.innerHTML = `
      <div class="loading">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>`;
  }
}
