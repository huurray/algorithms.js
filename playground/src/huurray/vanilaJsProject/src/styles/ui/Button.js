export default class Button {
  $target = null;

  constructor($target) {
    this.$target = $target;
    this.render();
  }

  handlePress() {
    console.log("press");
  }

  render() {
    const $button = document.createElement("button");
    $button.className = "button";
    $button.innerHTML = "버튼";

    $button.addEventListener("click", () => {
      this.handlePress();
    });

    this.$target.appendChild($button);
  }
}
