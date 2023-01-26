export default class DarkModeButton {
  $target = null;

  constructor($target) {
    this.$target = $target;
    this.mode = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    const body = document.querySelector("body");
    body.className = this.mode;
    this.render();
  }

  toggleMode() {
    const body = document.querySelector("body");
    const nextMode = this.mode === "dark" ? "light" : "dark";
    this.mode = nextMode;
    body.className = nextMode;
  }

  render() {
    const $darkModeButton = document.createElement("button");
    $darkModeButton.className = "dark-mode-button";
    $darkModeButton.innerHTML = "다크모드 토글";

    $darkModeButton.addEventListener("click", () => {
      this.toggleMode();
    });

    this.$target.appendChild($darkModeButton);
  }
}
