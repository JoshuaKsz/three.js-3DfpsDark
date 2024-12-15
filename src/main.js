import * as THREE from "three";

import PlaneMesh from "./plane_mesh.js";
import LightGeo from "./light_geo.js";
// import KeyboardInput from "./KeyboardInput.js";

import Game from "./game.js"

const fps3dDark = new Game(window.innerWidth, window.innerHeight);

function main() {

    const clock = new THREE.Clock();
    function loop() {

        const deltaTime = clock.getDelta();
        fps3dDark.ProcessInput(deltaTime);
        requestAnimationFrame(loop);
    }
    loop();
    return 0;
}
main();

document.body.addEventListener("keydown", (event) => on_key_down(event));
document.body.addEventListener("keyup", (event) => on_key_up(event));
function on_key_down(event) {
    const keyCode = event.keyCode;
    
    if (keyCode >= 0 && keyCode < fps3dDark.Keys.length) {
        fps3dDark.Keys[keyCode] = true;
    }
    console.log("Key down: " + fps3dDark.Keys[keyCode] + keyCode);
}

function on_key_up(event) {
    const keyCode = event.keyCode;

    if (keyCode >= 0 && keyCode < fps3dDark.Keys.length) {
        fps3dDark.Keys[keyCode] = false;
    }
    console.log("Key up: " + fps3dDark.Keys[keyCode] + keyCode);
}

