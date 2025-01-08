import * as THREE from "three"

var GameState ;
(function (GameState) {
    GameState[GameState["GAME_ACTIVE"] = 0] = "GAME_ACTIVE";
    GameState[GameState["GAME_MENU"] = 1] = "GAME_MENU";
    GameState[GameState["GAME_WIN"] = 2] = "GAME_WIN";
})(GameState  || (GameState  = {}));

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        console.log('Text copied to clipboard');
    }).catch(function(err) {
        console.error('Failed to copy text: ', err);
    });
}

export default class Game {
<<<<<<< Updated upstream
    constructor (width, height) {
        this.State = GameState.GAME_ACTIVE;
        this.Keys = new Array(1024).fill(false);
=======
    constructor (scene, camera, renderer, world, width = window.innerWidth, height = window.innerHeight, player) {
        this.State = GameState.GAME_DEBUG;
        // this.State = GameState.GAME_ACTIVE;
        this.keyboard_input = new KeyboardInput();  
>>>>>>> Stashed changes
        this.Width = width;
        this.Height = height;
    }

    init() {

    }

    ProcessInput(dt) {
        if (this.State == GameState.GAME_MENU) {

        }
        if (this.State == GameState.GAME_WIN) {

        }
        if (this.State == GameState.GAME_ACTIVE) {
        }
<<<<<<< Updated upstream
        if (this.Keys[65]) {
            console.log("RUN");
=======
        else if (this.State == GameState.GAME_DEBUG) {
            // m
            if (this.keyboard_input.Keys[77]) {
                let pos = this.map.collisionMap[this.map.collisionMap.length-1].boxBody.position; 
                console.log(pos)
                
                let text = `${pos.x}, ${pos.y}, ${pos.z}`; 
                copyToClipboard(JSON.stringify(text).replace('"','').replace('"',''));
            }
            // w
            if (this.keyboard_input.Keys[87]) {
                this.controls.moveForward(velocity);
            }
            // a
            if (this.keyboard_input.Keys[65]) {
                this.controls.moveRight(-velocity);
                
            }
            // s
            if (this.keyboard_input.Keys[83]) {
                this.controls.moveForward(-velocity);
                
            }
            // d
            if (this.keyboard_input.Keys[68]) {
                this.controls.moveRight(velocity);
            }
            // space
            if (this.keyboard_input.Keys[32]) {
                this.cam.position.y += velocity;
                // boxS.boxBody.angularVelocity.set(0, 0, 0);
                // this.cam.position.y += velocity;
            }
            // shift
            if (this.keyboard_input.Keys[16]) {
                this.cam.position.y -= velocity;
            }
            // esc
            if (this.keyboard_input.Keys[27]) {
                console.log("cam", this.cam.position);
                console.log(document.pointerLockElement);
            }
            // b
            if (this.keyboard_input.Keys[66]) {
                console.log(this.map.collisionMap[this.map.collisionMap.length-1].boxBody.position);
                this.map.collisionMap[this.map.collisionMap.length-1].boxBody.position.z += 0.05;
            }
            // c
            if (this.keyboard_input.Keys[67]) {
                console.log(this.map.collisionMap[this.map.collisionMap.length-1].boxBody.position);
                this.map.collisionMap[this.map.collisionMap.length-1].boxBody.position.z -= 0.05;
            }

            // o
            if (this.keyboard_input.Keys[79]) {
                console.log(this.map.collisionMap[this.map.collisionMap.length-1].boxBody.position);
                this.map.collisionMap[this.map.collisionMap.length-1].boxBody.position.x -= 0.05;
            }
            // p
            if (this.keyboard_input.Keys[80]) {
                console.log(this.map.collisionMap[this.map.collisionMap.length-1].boxBody.position);
                this.map.collisionMap[this.map.collisionMap.length-1].boxBody.position.x += 0.05;
            }
            // k
            if (this.keyboard_input.Keys[75]) {
                console.log(this.map.collisionMap[this.map.collisionMap.length-1].boxBody.position);
                this.map.collisionMap[this.map.collisionMap.length-1].boxBody.position.y -= 0.05;
            }
            // l
            if (this.keyboard_input.Keys[76]) {
                console.log(this.map.collisionMap[this.map.collisionMap.length-1].boxBody.position);
                this.map.collisionMap[this.map.collisionMap.length-1].boxBody.position.y += 0.05;
            }
>>>>>>> Stashed changes
        }
    }

    Update(dt) {

    }


    Render() {

    }
};