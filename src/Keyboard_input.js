export default class KeyboardInput {
  constructor() {
    this.keys = {};
    document.body.addEventListener("keydown", (event) => this.on_key_down(event));
    document.body.addEventListener("keyup", (event) => this.on_key_up(event));
  }
  on_key_down(event) {
    this.keys[event.key] = true;
  }
  on_key_up(event) {
    this.keys[event.key] = false;
  }
}