import * as THREE from "three"

var GameState ;
(function (GameState) {
    GameState[GameState["GAME_ACTIVE"] = 0] = "GAME_ACTIVE";
    GameState[GameState["GAME_MENU"] = 1] = "GAME_MENU";
    GameState[GameState["GAME_WIN"] = 2] = "GAME_WIN";
})(GameState  || (GameState  = {}));

export default class Game {
    constructor (width, height) {
        this.State = GameState.GAME_ACTIVE;
        this.Keys = new Array(1024).fill(false);
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
        if (this.Keys[65]) {
            console.log("RUN");
        }
    }

    Update(dt) {

    }


    Render() {

    }
};