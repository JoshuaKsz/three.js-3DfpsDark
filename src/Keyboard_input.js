export default class KeyboardInput {
  constructor() {
    this.Keys = new Array(1024).fill(false);
    this.justPressedKey = new Array(1024).fill(false);
    document.body.addEventListener("keydown", (event) => this.on_key_down(event));
    document.body.addEventListener("keyup", (event) => this.on_key_up(event));
  }
  on_key_down(event) {
    this.Keys[event.keyCode] = true;
    this.justPressedKey[event.keyCode] = true;
  }
  on_key_up(event) {
    this.Keys[event.keyCode] = false;
  }
}